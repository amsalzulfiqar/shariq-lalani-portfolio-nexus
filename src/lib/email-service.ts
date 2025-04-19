
import { toast } from "@/hooks/use-toast";

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (data: EmailData) => {
  try {
    // Add cache busting query parameter and mode: 'cors'
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
    throw error;
  }
}
