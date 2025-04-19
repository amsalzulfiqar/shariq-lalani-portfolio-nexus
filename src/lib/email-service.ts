
import { toast } from "@/hooks/use-toast";

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (data: EmailData) => {
  try {
    const response = await fetch("https://iomjsslnpznzipgqnhkx.supabase.co/functions/v1/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: "info@shariqlalani.com",
        ...data
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send email");
    }

    return response.json();
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}
