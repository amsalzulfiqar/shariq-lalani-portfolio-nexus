
import { toast } from "@/hooks/use-toast";
import { supabase } from '@/lib/supabase';

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (data: EmailData) => {
  try {
    // Check if we're working with the Supabase integration in a deployed environment
    if (supabase && import.meta.env.PROD) {
      // Use Supabase Edge Function directly with authentication
      const response = await supabase.functions.invoke('send-email', {
        body: JSON.stringify({
          to: "info@shariqlalani.com", // Hardcoded recipient
          ...data
        })
      });
      
      if (response.error) {
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
    } else {
      // Fallback to direct fetch for local development or when Supabase client isn't properly configured
      const response = await fetch("https://iomjsslnpznzipgqnhkx.supabase.co/functions/v1/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add authorization header if you have an anon key
          ...(import.meta.env.VITE_SUPABASE_ANON_KEY && {
            "Authorization": `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
          })
        },
        mode: 'cors',
        body: JSON.stringify({
          to: "info@shariqlalani.com", // Hardcoded recipient
          ...data
        }),
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || "Failed to send email");
      }

      toast({
        title: "Success",
        description: result.message || "Your message has been sent successfully!",
      });

      return result;
    }
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
