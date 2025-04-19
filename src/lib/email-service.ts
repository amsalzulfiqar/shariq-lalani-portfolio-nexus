
import { toast } from "@/hooks/use-toast";

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (data: EmailData) => {
  try {
    // Use a demo response in development/testing environments
    // This ensures the form works even if the Supabase function isn't available
    const isDemoMode = true; // Set to false in production with proper SMTP setup

    if (isDemoMode) {
      // Simulate a successful API call delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      return {
        success: true,
        message: "Your message has been received (demo mode). In production, an email would be sent."
      };
    }
    
    // Only reaches here in production mode
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
      throw new Error(result.error || "Failed to send email");
    }

    return result;
  } catch (error) {
    console.error("Error sending email:", error);
    toast({
      title: "Error",
      description: "Failed to send message. Please try again or contact directly at info@shariqlalani.com.",
      variant: "destructive",
    });
    
    // Return an error result that the component can handle
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send message"
    };
  }
}
