
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { SecretField, SecretsFormData, useSecretsForm } from '@/hooks/use-secrets-form';

interface SecretsFormProps {
  fields: SecretField[];
  onSubmit: (data: SecretsFormData) => Promise<void>;
  title?: string;
  description?: string;
}

export const SecretsForm: React.FC<SecretsFormProps> = ({
  fields, 
  onSubmit, 
  title = 'Manage Secrets',
  description = 'Configure your application secrets securely.'
}) => {
  // Dynamically generate Zod schema based on fields
  const zodSchema = z.object(
    fields.reduce((acc, field) => {
      acc[field.key] = field.required 
        ? z.string().min(1, { message: `${field.label} is required` })
        : z.string().optional();
      return acc;
    }, {} as { [key: string]: z.ZodString | z.ZodOptional<z.ZodString> })
  );

  const form = useForm<z.infer<typeof zodSchema>>({
    resolver: zodResolver(zodSchema),
    defaultValues: fields.reduce((acc, field) => {
      acc[field.key] = '';
      return acc;
    }, {} as SecretsFormData)
  });

  const { handleSubmit, isSubmitting } = useSecretsForm(fields, onSubmit);

  const onFormSubmit = (data: z.infer<typeof zodSchema>) => {
    handleSubmit(data);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-secondary/10 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <p className="text-muted-foreground mb-6">{description}</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onFormSubmit)} className="space-y-6">
          {fields.map((field) => (
            <FormField
              key={field.key}
              control={form.control}
              name={field.key}
              render={({ field: formField }) => (
                <FormItem>
                  <FormLabel>{field.label}</FormLabel>
                  <FormControl>
                    <Input
                      type={field.type}
                      placeholder={field.placeholder}
                      {...formField}
                    />
                  </FormControl>
                  <FormDescription>{field.placeholder}</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button 
            type="submit" 
            className="w-full" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Saving...' : 'Save Secrets'}
          </Button>
        </form>
      </Form>
    </div>
  );
};
