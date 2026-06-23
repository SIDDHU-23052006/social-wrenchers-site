import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertReviewSchema, type InsertReview } from "@shared/schema";
import { useReviews, useCreateReview } from "@/hooks/use-reviews";
import { Star, MessageSquarePlus, User, GraduationCap, Quote, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

export function Reviews() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { data: reviewsList = [], isLoading } = useReviews();
  const mutation = useCreateReview();

  const form = useForm<InsertReview>({
    resolver: zodResolver(insertReviewSchema),
    defaultValues: {
      name: "",
      role: "",
      review: "",
      rating: 5,
    },
  });

  const onSubmit = (data: InsertReview) => {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset({
          name: "",
          role: "",
          review: "",
          rating: 5,
        });
        setDialogOpen(false);
      },
    });
  };

  // Fallback initial seeded reviews in case database has none yet
  const fallbackReviews = [
    {
      id: 0,
      name: "Senthil Kumar",
      role: "Final Year Student",
      review: "The team at Social Wrenchers turned my abstract requirements into a fully functional, physically built wearable watch with real-time cloud data. Highly recommended for complex IoT hardware developments!",
      rating: 5,
      createdAt: new Date().toISOString(),
    }
  ];

  const displayedReviews = reviewsList.length > 0 ? reviewsList : fallbackReviews;

  return (
    <section id="reviews" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-primary/5 via-violet-300/5 to-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-3 px-3 py-1 rounded-full text-xs">
              Testimonials
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-900 leading-tight">
              What Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Clients Say
              </span>
            </h2>
            <p className="text-lg text-slate-600 font-light mt-4">
              Hear directly from students, academics, and clients who built their custom tech solutions with us.
            </p>
          </div>

          {/* Testimonial Dialog Trigger */}
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 rounded-full px-6 py-6 h-fit text-md flex gap-2 items-center group transition">
                <MessageSquarePlus className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Submit a Review
              </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[480px] bg-white rounded-3xl border border-slate-100 shadow-2xl p-8">
              <DialogHeader className="mb-4">
                <DialogTitle className="text-2xl font-bold font-display text-slate-900">Write a Review</DialogTitle>
                <DialogDescription className="text-slate-500 font-light">
                  Share your experience with Social Wrenchers. Your feedback helps us build better products.
                </DialogDescription>
              </DialogHeader>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  {/* Name field */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-medium">Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            className="bg-slate-50 border-slate-200 focus:bg-white text-slate-900 rounded-xl h-11"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Role field */}
                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-medium">Your Role / Title</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g. Final Year Student, CSE"
                            className="bg-slate-50 border-slate-200 focus:bg-white text-slate-900 rounded-xl h-11"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Rating Selector */}
                  <FormField
                    control={form.control}
                    name="rating"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-medium block">Rating</FormLabel>
                        <div className="flex gap-2 items-center mt-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => field.onChange(star)}
                              className="text-2xl transition hover:scale-115 focus:outline-none"
                            >
                              <Star
                                className={`w-8 h-8 ${
                                  star <= field.value
                                    ? "text-amber-400 fill-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.4)]"
                                    : "text-slate-200"
                                }`}
                              />
                            </button>
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Review Textarea */}
                  <FormField
                    control={form.control}
                    name="review"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-medium">Review Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Write your review here... Tell others about the quality of code, hardware engineering, or customer support."
                            className="bg-slate-50 border-slate-200 focus:bg-white text-slate-900 rounded-xl min-h-[120px] resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Submit button */}
                  <Button
                    type="submit"
                    disabled={mutation.isPending}
                    className="w-full bg-gradient-to-r from-primary to-secondary h-12 text-white font-semibold rounded-xl text-md"
                  >
                    {mutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit Review"
                    )}
                  </Button>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Reviews Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((skeleton) => (
              <div key={skeleton} className="h-64 rounded-3xl bg-slate-100 animate-pulse border border-slate-200/40" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {displayedReviews.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative p-8 bg-white border border-slate-100 rounded-3xl shadow-xl shadow-slate-100/50 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500 flex flex-col justify-between"
                >
                  {/* Glowing hover card effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-3xl pointer-events-none" />

                  {/* Content Container */}
                  <div>
                    {/* Star rating */}
                    <div className="flex gap-1 mb-5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < item.rating
                              ? "text-amber-400 fill-amber-400"
                              : "text-slate-200"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Quote mark icon overlay */}
                    <Quote className="w-10 h-10 text-primary/10 absolute top-6 right-6" />

                    {/* Review text */}
                    <p className="text-slate-600 leading-relaxed font-light mb-6 text-[15px] italic">
                      "{item.review}"
                    </p>
                  </div>

                  {/* Author Meta */}
                  <div className="flex items-center gap-3 pt-5 border-t border-slate-50 mt-auto relative z-10">
                    <div className="h-10 w-10 rounded-full flex items-center justify-center font-bold text-sm text-primary bg-primary/15">
                      {item.role.toLowerCase().includes("student") || item.role.toLowerCase().includes("graduate") ? (
                        <GraduationCap className="w-5 h-5" />
                      ) : (
                        <User className="w-5 h-5" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-800">{item.name}</h4>
                      <p className="text-xs text-slate-400 font-light">{item.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

      </div>
    </section>
  );
}
