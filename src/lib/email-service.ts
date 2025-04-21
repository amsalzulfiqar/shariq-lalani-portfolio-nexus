
import { toast } from "@/hooks/use-toast";

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (data: EmailData) => {
  try {
    // Generate the mailto link with form data
    const mailtoLink = `mailto:info@shariqlalani.com?subject=${encodeURIComponent(`[Website Contact] ${data.subject}`)}&body=${encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`)}`;
    
    // Open the default email client
    window.location.href = mailtoLink;

    toast({
      title: "Success",
      description: "Email client opened. Please send the email to complete your message.",
    });

    return {
      success: true,
      message: "Email client opened successfully"
    };
  } catch (error) {
    console.error("Error opening email client:", error);
    toast({
      title: "Error",
      description: "Could not open email client. Please try again or send email directly.",
      variant: "destructive",
    });
    
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to open email client"
    };
  }
}
