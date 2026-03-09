import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Smartphone, Cloud, Database, Rocket, Cpu } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Responsive, high-performance web applications built with modern frameworks like React, Node.js and Next.js.",
    color: "text-blue-400",
  },
  {
    icon: Smartphone,
    title: "Mobile Solutions",
    description: "Native and cross-platform mobile apps delivering seamless user experiences on Android and iOS devices.",
    color: "text-purple-400",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Secure and scalable cloud architecture deployment using AWS, Azure and Google Cloud platforms.",
    color: "text-cyan-400",
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Transform raw data into actionable business insights using intelligent dashboards and visualization tools.",
    color: "text-emerald-400",
  },

  /* ----------- NEW IoT CARD ----------- */
  {
    icon: Cpu,
    title: "IoT Solutions",
    description:
      "Design and development of smart IoT systems including sensors, RFID, automation devices, tracking systems, and real-time monitoring dashboards with cloud connectivity.",
    color: "text-pink-400",
    highlight: false,
  },

  {
    icon: Rocket,
    title: "Digital Strategy",
    description: "Technology consulting and product architecture planning to help startups and businesses launch scalable solutions.",
    color: "text-orange-400",
  },
];

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">

      {/* background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-r from-primary/5 via-purple-400/5 to-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold font-display mb-6 text-slate-900"
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Services
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 font-light"
          >
            We build intelligent digital and hardware solutions that help businesses automate, scale, and innovate faster.
          </motion.p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -12, scale: 1.03 }}
              className={`group relative p-8 rounded-3xl transition-all duration-500 overflow-hidden
              
              ${service.highlight
                ? "bg-gradient-to-br from-primary/10 via-white to-secondary/10 border border-primary/30 shadow-2xl shadow-primary/10"
                : "bg-white border border-slate-100 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5"
              }`}
            >

              {/* animated glow overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />

              {/* icon */}
              <div
                className={`p-4 rounded-2xl bg-slate-50 w-fit mb-6 ${service.color}
                group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-sm relative z-10`}
              >
                <service.icon className="w-8 h-8" />
              </div>

              {/* title */}
              <h3 className="text-2xl font-bold mb-3 font-display relative z-10 text-slate-900">
                {service.title}
              </h3>

              {/* description */}
              <p className="text-slate-600 leading-relaxed relative z-10 font-light">
                {service.description}
              </p>

              {/* special highlight badge */}
              {service.highlight && (
                <div className="absolute top-5 right-5 text-xs px-3 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-md">
                  Featured
                </div>
              )}

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}