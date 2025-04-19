
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { SecretsForm } from '@/components/SecretsForm';

interface SmtpConfigDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SmtpConfigDialog: React.FC<SmtpConfigDialogProps> = ({
  open,
  onOpenChange,
}) => {
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
    // You'll need to implement the actual submission to Supabase secrets here
    console.log('SMTP Configuration:', data);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Configure SMTP Settings</DialogTitle>
        </DialogHeader>
        <SecretsForm
          fields={smtpFields}
          onSubmit={handleSubmit}
          title="Email Configuration"
          description="Enter your SMTP server details to enable email functionality."
        />
      </DialogContent>
    </Dialog>
  );
};
