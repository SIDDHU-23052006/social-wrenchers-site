import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type ReviewInput, type ReviewResponse } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useReviews() {
  return useQuery<ReviewResponse[]>({
    queryKey: ["/api/reviews"],
    queryFn: async () => {
      const res = await fetch("/api/reviews");
      if (!res.ok) {
        throw new Error("Failed to fetch reviews");
      }
      const json = await res.json();
      return api.reviews.list.responses[200].parse(json);
    },
  });
}

export function useCreateReview() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: ReviewInput) => {
      const res = await fetch("/api/reviews", {
        method: api.reviews.create.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        let message = "Failed to submit review";
        try {
          const errorData = await res.json();
          message = errorData.message || message;
        } catch {
          message = "Server returned an invalid response";
        }
        throw new Error(message);
      }

      const json = await res.json();
      return api.reviews.create.responses[201].parse(json);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/reviews"] });
      toast({
        title: "Review Submitted!",
        description: "Thank you for your feedback! Your review has been added to our site.",
      });
    },

    onError: (error: Error) => {
      toast({
        title: "Error submitting review",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
