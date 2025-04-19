
import { toast } from "@/hooks/use-toast";

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (data: EmailData) => {
  try {
    // Disable demo mode when properly configured
    const isDemoMode = false;

    if (isDemoMode) {
      await new Promise(resolve => setTimeout(resolve, 800));
      
      return {
        success: true,
        message: "Your message has been received (demo mode)."
      };
    }
    
    const response = await fetch("https://iomjsslnpznzipgqnhkx.supabase.co/functions/v1/send-email?_=" + Date.now(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: 'cors',
      body: JSON.stringify({
        to: "info@shariqlalani.com",
        ...data
      }),
    });

    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.message || "Failed to send email");
    }

    return result;
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

