
import { toast } from "@/hooks/use-toast";
import { supabase } from '@/integrations/supabase/client'; // Use the auto-generated client

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (data: EmailData) => {
  try {
    // Always use the Supabase client from integrations
    const response = await supabase.functions.invoke('send-email', {
      body: JSON.stringify({
        to: "info@shariqlalani.com", // Hardcoded recipient
        ...data
      })
    });
    
    if (response.error) {
      console.error("Supabase function error:", response.error);
      throw new Error(response.error.message || "Failed to send email");
    }

    toast({
      title: "Success",
      description: "Your message has been sent successfully!",
    });

    return { 
      success: true, 
      message: "Your message has been sent successfully!" 
    };
  } catch (error) {
    console.error("Error sending email:", error);
    toast({
      title: "Error",
      description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
      variant: "destructive",
    });
    
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send message"
    };
  }
}
