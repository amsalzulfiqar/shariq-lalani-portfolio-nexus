
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
  onSubmitCallback?: (data: SecretsFormData) => Promise<void>
) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (data: SecretsFormData) => {
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      console.log('Submitting secrets form data...');
      
      // Update secrets in Supabase
      const secretsToUpdate = Object.entries(data).map(([key, value]) => ({
        name: key,
        value,
      }));
      
      // Update each secret individually by invoking the set-secret function
      for (const { name, value } of secretsToUpdate) {
        console.log(`Setting secret: ${name}`);
        
        const { data: responseData, error: functionError } = await supabase.functions.invoke('set-secret', {
          body: { name, value }
        });
        
        console.log('Response from set-secret function:', responseData);
        
        if (functionError) {
          console.error('Error setting secret:', functionError);
          throw new Error(`Failed to update secret ${name}: ${functionError.message}`);
        }
        
        if (responseData && !responseData.success) {
          console.error('Error response from function:', responseData);
          throw new Error(`Failed to update secret ${name}: ${responseData.error || 'Unknown error'}`);
        }
      }
      
      // Call the callback if provided
      if (onSubmitCallback) {
        await onSubmitCallback(data);
      }
      
      console.log('All secrets updated successfully');
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
