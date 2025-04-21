
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { SecretsForm } from '@/components/SecretsForm';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { CheckCircle2 } from 'lucide-react';

interface SmtpConfigDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SmtpConfigDialog: React.FC<SmtpConfigDialogProps> = ({
  open,
  onOpenChange,
}) => {
  const [configSuccess, setConfigSuccess] = useState(false);
  
  const smtpFields = [
    {
      key: 'SMTP_HOST',
      label: 'SMTP Host',
      type: 'text' as const,
      placeholder: 'e.g., smtp.gmail.com',
      required: true
    },
    {
      key: 'SMTP_PORT',
      label: 'SMTP Port',
      type: 'number' as const,
      placeholder: '587',
      required: true
    },
    {
      key: 'SMTP_USERNAME',
      label: 'SMTP Username',
      type: 'text' as const,
      placeholder: 'your-email@example.com',
      required: true
    },
    {
      key: 'SMTP_PASSWORD',
      label: 'SMTP Password',
      type: 'password' as const,
      placeholder: 'Your SMTP password or app password',
      required: true
    },
    {
      key: 'EMAIL_FROM',
      label: 'From Email Address',
      type: 'text' as const,
      placeholder: 'your-email@example.com',
      required: true
    }
  ];

  const handleSubmit = async (data: Record<string, string>) => {
    try {
      console.log('Saving SMTP Configuration:', Object.keys(data));
      // The actual saving is handled by the useSecretsForm hook
      setConfigSuccess(true);
    } catch (error) {
      console.error('Error saving SMTP config:', error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Configure SMTP Settings</DialogTitle>
          <DialogDescription>
            Set up email sending capabilities by providing your SMTP server details.
          </DialogDescription>
        </DialogHeader>
        
        {configSuccess ? (
          <Alert className="bg-green-50 text-green-800 border-green-200">
            <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              Email configuration has been saved successfully. Your contact form is now ready to use.
            </AlertDescription>
          </Alert>
        ) : (
          <SecretsForm
            fields={smtpFields}
            onSubmit={handleSubmit}
            title="Email Configuration"
            description="Enter your SMTP server details to enable email functionality."
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
