import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { useCreateContactMessage } from "@/hooks/use-contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Mail, MapPin, Phone } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export function Contact() {

  const EMAIL = "socialworkersofficial01@gmail.com";
  const PHONE = "+917305432490";
  const MAP_COORDS = "11.948257,79.801536";

  const mutation = useCreateContactMessage();

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  };

  /* ===== CLICK ACTIONS ===== */

  // Open Gmail compose
  const openEmail = () => {
    const subject = encodeURIComponent("Project Inquiry - Social Wrenchers");
    const body = encodeURIComponent("Hello Social Wrenchers Team,%0D%0A%0D%0AI want to discuss a project with you.");
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  // Open Dialer
  const openCall = () => {
    window.location.href = `tel:${PHONE}`;
  };

  // Open Google Maps
  const openMap = () => {
    window.open(`https://www.google.com/maps?q=${MAP_COORDS}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-slate-900">
              Let's Start a <span className="text-primary">Conversation</span>
            </h2>

            <p className="text-xl text-slate-600 mb-12 font-light">
              Have a project in mind? Want to modernize your infrastructure?
              Drop us a line and let's wrench out a solution together.
            </p>

            {/* CONTACT ACTIONS */}
            <div className="space-y-8">

              {/* EMAIL */}
              <div
                onClick={openEmail}
                className="flex items-start gap-4 cursor-pointer group transition"
              >
                <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900">Email Us</h4>
                  <p className="text-slate-600 group-hover:text-primary transition">
                    {EMAIL}
                  </p>
                </div>
              </div>

              {/* CALL */}
              <div
                onClick={openCall}
                className="flex items-start gap-4 cursor-pointer group transition"
              >
                <div className="p-3 bg-secondary/10 rounded-xl text-secondary group-hover:scale-110 transition">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900">Call Us</h4>
                  <p className="text-slate-600 group-hover:text-secondary transition">
                    +91 7305432490
                  </p>
                </div>
              </div>

              {/* LOCATION */}
              <div
                onClick={openMap}
                className="flex items-start gap-4 cursor-pointer group transition"
              >
                <div className="p-3 bg-purple-500/10 rounded-xl text-purple-600 group-hover:scale-110 transition">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900">Visit Us</h4>
                  <p className="text-slate-600 group-hover:text-purple-600 transition">
                    NO.19, TYPE-II Dhanvantri Nagar<br />
                    Gorimedu, Puducherry - 605006
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 rounded-3xl bg-white shadow-2xl border-slate-200"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-700">Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John Doe"
                          className="bg-slate-50 border-slate-200 h-12 text-slate-900"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-700">Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="john@example.com"
                          type="email"
                          className="bg-slate-50 border-slate-200 h-12 text-slate-900"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-700">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your project..."
                          className="bg-slate-50 border-slate-200 min-h-[150px] resize-none text-slate-900"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={mutation.isPending}
                  className="w-full bg-gradient-to-r from-primary to-secondary h-12 text-lg font-semibold text-white"
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>

              </form>
            </Form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}