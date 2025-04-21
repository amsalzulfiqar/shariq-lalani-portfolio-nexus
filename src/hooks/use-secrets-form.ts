
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface SecretField {
  key: string;
  label: string;
  type: 'text' | 'password' | 'number';
  placeholder?: string;
  required?: boolean;
}

export type SecretsFormData = Record<string, string>;

export const useSecretsForm = (
  fields: SecretField[],
  onSubmitCallback: (data: SecretsFormData) => Promise<void>
) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (data: SecretsFormData) => {
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      // Update secrets in Supabase
      const secretsToUpdate = Object.entries(data).map(([key, value]) => ({
        name: key,
        value,
      }));
      
      // Update each secret individually
      for (const { name, value } of secretsToUpdate) {
        const { error } = await supabase.functions.setSecret(name, value);
        
        if (error) {
          throw new Error(`Failed to update secret ${name}: ${error.message}`);
        }
      }
      
      // Call the callback if provided
      if (onSubmitCallback) {
        await onSubmitCallback(data);
      }
      
      setSuccess(true);
    } catch (err) {
      console.error('Error updating secrets:', err);
      setError(err instanceof Error ? err.message : 'Failed to update secrets');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    handleSubmit,
    isSubmitting,
    error,
    success,
  };
};
