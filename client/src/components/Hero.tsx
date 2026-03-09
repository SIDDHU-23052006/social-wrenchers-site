import { motion } from "framer-motion";
import { ArrowRight, Zap, Globe, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoLight from "@assets/Gemini_Generated_Image_v0bu9mv0bu9mv0bu-removebg-preview_1771650463284.png";
import logoDark from "@assets/Gemini_Generated_Image_3x57v83x57v83x57-removebg-preview_1771651049880.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">

      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0 -z-10">
        {/* grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.25]" />

        {/* gradient glow */}
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-250px] right-[-200px] w-[700px] h-[700px] bg-secondary/10 rounded-full blur-[140px]" />

        {/* soft fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">

          {/* ================= LOGO ================= */}
          <motion.div
            initial={{ opacity: 0, y: -40, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mb-10"
          >
            {/* glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary blur-3xl opacity-20" />

            <div className="relative w-36 h-36 md:w-52 md:h-52 logo-toss-container">
              <img
                src={logoLight}
                className="absolute inset-0 w-full h-full object-contain logo-face-front drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)]"
              />
              <img
                src={logoDark}
                className="absolute inset-0 w-full h-full object-contain logo-face-back drop-shadow-[0_20px_30px_rgba(0,0,0,0.35)]"
              />
            </div>
          </motion.div>

          {/* ================= TITLE ================= */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="font-display font-extrabold leading-[1.05] tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="text-slate-900 dark:text-white">
              Connecting the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">
              Future
            </span>
            </span>
            
          </motion.h1>

          {/* ================= SUBTITLE ================= */}
          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            We build intelligent digital infrastructure that connects people,
            systems, and services seamlessly — enabling secure, scalable,
            and borderless technology experiences.
          </motion.p>

          {/* ================= BUTTONS ================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-5 flex flex-col sm:flex-row gap-14"
          >
            <Button
              size="lg"
              className="group bg-gradient-to-r from-primary to-secondary text-white text-lg px-10 py-6 rounded-full shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1"
              onClick={() =>
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Solutions
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-6 rounded-full border-muted-foreground/30 hover:bg-muted/40 backdrop-blur-md"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </div>

      {/* ================= FLOATING ICONS ================= */}
      <div className="hidden md:block pointer-events-none">
        <motion.div
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute left-[8%] top-[40%] p-4 bg-card/60 backdrop-blur-xl rounded-2xl border shadow-lg"
        >
          <Zap className="w-7 h-7 text-secondary" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 18, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute right-[9%] top-[30%] p-4 bg-card/60 backdrop-blur-xl rounded-2xl border shadow-lg"
        >
          <Globe className="w-7 h-7 text-primary" />
        </motion.div>

        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute left-[15%] bottom-[18%] p-4 bg-card/60 backdrop-blur-xl rounded-2xl border shadow-lg"
        >
          <Shield className="w-7 h-7 text-purple-400" />
        </motion.div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.2, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </motion.div>

    </section>
  );
}