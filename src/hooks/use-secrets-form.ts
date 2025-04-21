
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
        
        try {
          // Simplified approach with minimal headers
          const response = await fetch(`${supabase.functions.url}/set-secret`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${supabase.auth.session()?.access_token || ''}`
            },
            body: JSON.stringify({ name, value }),
          });
          
          const responseData = await response.json();
          console.log('Response from set-secret function:', responseData);
          
          // Check for application-level errors in the response data
          if (!responseData || responseData.success === false) {
            console.error('Error response from function:', responseData);
            throw new Error(`Failed to update secret ${name}: ${responseData?.error || 'Unknown error'}`);
          }
        } catch (secretError) {
          console.error(`Error setting secret ${name}:`, secretError);
          throw new Error(`Failed to update secret ${name}: ${secretError instanceof Error ? secretError.message : 'Unknown error'}`);
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
