
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { SmtpConfigDialog } from './SmtpConfigDialog';

export const SmtpConfigButton = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Button 
        onClick={() => setDialogOpen(true)}
        className="flex items-center gap-2"
      >
        <Mail className="h-4 w-4" />
        Configure SMTP
      </Button>
      <SmtpConfigDialog 
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </>
  );
};
