import { useMutation } from "@tanstack/react-query";
import { api, type ContactMessageInput, type ContactMessageResponse } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateContactMessage() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: ContactMessageInput) => {

      const res = await fetch("/api/contact", {
        method: api.contact.create.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      /* Handle server errors safely */
      if (!res.ok) {
        let message = "Failed to send message";

        try {
          const errorData = await res.json();
          message = errorData.message || message;
        } catch {
          message = "Server returned an invalid response";
        }

        throw new Error(message);
      }

      const json = await res.json();
      return api.contact.create.responses[201].parse(json);
    },

    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "We've received your inquiry and will get back to you shortly.",
      });
    },

    onError: (error: Error) => {
      toast({
        title: "Error sending message",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}