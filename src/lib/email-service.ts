
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
    const { data: responseData, error } = await supabase.functions.invoke('send-email', {
      body: {
        to: "info@shariqlalani.com", // Hardcoded recipient
        ...data
      }
    });
    
    if (error) {
      console.error("Supabase function error:", error);
      
      // Check for SMTP configuration error
      if (error.message?.includes('Email service configuration is incomplete')) {
        throw new Error("SMTP configuration missing. Please set up email configuration first.");
      }
      
      throw new Error(error.message || "Failed to send email");
    }

    // Check for application-level errors in the response
    if (responseData && !responseData.success) {
      console.error("Error in function response:", responseData);
      
      if (responseData.error === "smtp_config_missing") {
        throw new Error("SMTP configuration missing. Please set up email configuration first.");
      }
      
      throw new Error(responseData.message || "Failed to send email");
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
