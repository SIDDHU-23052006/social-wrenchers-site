import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Lightbulb, TrendingUp } from "lucide-react";

const stats = [
  { value: "3+", label: "Clients Served" },
  { value: "80%", label: "Satisfaction Rate" },
  { value: "24/7", label: "Support Coverage" },
];

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-24 bg-white/50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-900">
              We Are <span className="text-primary">Social Wrenchers</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              At Social Wrenchers, we believe that technology is the wrench that tightens the bolts of human connection. 
              We are a team of visionary engineers, designers, and strategists dedicated to building the 
              next generation of digital platforms.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              From enterprise-grade social intranets to community-driven mobile apps, 
              we craft solutions that bring people together efficiently, securely, and delightfully.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              {stats.map((stat, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white border border-slate-100 text-center shadow-sm">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 grid grid-cols-2 gap-4 md:gap-8"
          >
            <div className="space-y-4 md:space-y-8 mt-8 md:mt-16">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="glass-card p-6 rounded-2xl transition-all duration-500 hover:neon-border group"
              >
                <Users className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">Community First</h3>
                <p className="text-sm text-muted-foreground font-light">Building platforms that foster genuine interaction.</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="glass-card p-6 rounded-2xl transition-all duration-500 hover:neon-border group"
              >
                <TrendingUp className="w-10 h-10 text-secondary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">Scalable Tech</h3>
                <p className="text-sm text-muted-foreground font-light">Systems designed to grow with your audience.</p>
              </motion.div>
            </div>
            <div className="space-y-4 md:space-y-8">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="glass-card p-6 rounded-2xl transition-all duration-500 hover:neon-border group"
              >
                <Lightbulb className="w-10 h-10 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground font-light">Always pushing the boundaries of what's possible.</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="h-64 rounded-2xl bg-gradient-to-br from-primary/20 via-purple-500/10 to-secondary/20 border border-white/5 relative overflow-hidden group shadow-2xl"
              >
                <div className="absolute inset-0 bg-primary/20 blur-2xl group-hover:bg-primary/40 transition-all duration-700 animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                  <span className="text-2xl font-black font-display text-white drop-shadow-lg">WE BUILD THE FUTURE</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
