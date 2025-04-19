
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';

export interface SecretField {
  key: string;
  label: string;
  type: 'text' | 'password' | 'number';
  placeholder?: string;
  required?: boolean;
  validation?: (value: string) => string | null;
}

export interface SecretsFormData {
  [key: string]: string;
}

export const useSecretsForm = (
  fields: SecretField[], 
  onSubmit: (data: SecretsFormData) => Promise<void>
) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (data: SecretsFormData) => {
    setIsSubmitting(true);
    try {
      await onSubmit(data);
      toast({
        title: 'Secrets Updated',
        description: 'Your secrets have been successfully saved.'
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to save secrets',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return { handleSubmit, isSubmitting };
};
