import { motion } from "framer-motion";
import { Cpu, Heart, ShieldAlert, Cloud, Activity } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function Projects() {
  const specs = [
    { name: "Controller", value: "ESP32 (Wi-Fi & BLE)" },
    { name: "Heart Rate & SpO2", value: "MAX30102 Sensor" },
    { name: "Screen", value: "0.96\" I2C OLED (SSD1306)" },
    { name: "Power", value: "Li-Po battery with Switch Control" },
    { name: "Casing", value: "Custom 3D Printed Casing" },
  ];

  const features = [
    {
      icon: Activity,
      title: "Real-time Telemetry",
      description: "Accurate BPM (Heart Rate) and SpO2 (Blood Oxygen) readings processed directly on-chip."
    },
    {
      icon: ShieldAlert,
      title: "Physical SOS Button",
      description: "Dedicated tactile button inputs that trigger instant emergency warning signals."
    },
    {
      icon: Cloud,
      title: "Firebase Cloud Sync",
      description: "Real-time sync of patient health data to cloud dashboard for remote doctor/caregiver access."
    },
    {
      icon: Cpu,
      title: "Compact Embedded Logic",
      description: "Highly optimized low-power firmware written in C++ for maximum battery endurance."
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50 relative border-t border-b border-slate-200">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-3 px-3 py-1 rounded-full text-xs">
            Our Work
          </Badge>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold font-display mb-6 text-slate-900"
          >
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Project Showcase
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-lg text-slate-600 font-light"
          >
            Explore our custom hardware fabrication, sensor integration, and Internet of Things (IoT) applications.
          </motion.p>
        </div>

        {/* Project Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Image Gallery */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-xl"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-slate-100">
                <img
                  src="/sos_watch_1.jpg"
                  alt="SOS Watch Prototype Showcase"
                  className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white text-sm font-medium">SOS Watch prototype resting on documentation sheet</p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-lg"
              >
                <div className="relative overflow-hidden rounded-xl aspect-[3/4] bg-slate-100">
                  <img
                    src="/sos_watch_2.jpg"
                    alt="SOS Watch prototype on user wrist"
                    className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-xs">Wearable wrist testing</p>
                  </div>
                </div>
              </motion.div>

              {/* Technical Spec Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-3xl p-6 flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-bold font-display text-slate-800 text-lg mb-4">Hardware Specifications</h4>
                  <ul className="space-y-3">
                    {specs.map((spec) => (
                      <li key={spec.name} className="text-xs">
                        <span className="font-semibold text-slate-500 block">{spec.name}</span>
                        <span className="text-slate-900 font-medium">{spec.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 pt-4 border-t border-primary/10 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-red-500 fill-red-500 animate-pulse" />
                  <span className="text-xs font-semibold text-slate-700">IoT Healthcare Tech</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* RIGHT: Project Description */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-secondary/15 text-secondary hover:bg-secondary/20 border-secondary/10 mb-3">
                Client: Final Year Student
              </Badge>
              <h3 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6 leading-tight">
                SOS Watch: Smart Wearable Vitals Monitor
              </h3>
              <p className="text-slate-600 leading-relaxed font-light mb-8 text-lg">
                We designed, fabricated, and coded a custom wearable health tracker prototype. 
                Integrating precise sensors and network logic, we provided a complete hardware-to-cloud 
                solution for our client's final year academic thesis, ensuring high reliability, 
                real-time updates, and a compact wearable form factor.
              </p>
            </motion.div>

            {/* Features list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex gap-4"
                >
                  <div className="p-3 bg-white border border-slate-100 text-primary shadow-sm h-fit rounded-xl">
                    <feat.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800 mb-1">{feat.title}</h5>
                    <p className="text-slate-500 text-sm font-light leading-relaxed">{feat.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Showcase Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-md border-l-4 border-l-primary"
            >
              <p className="italic text-slate-600 text-sm mb-4">
                "The team at Social Wrenchers turned my abstract requirements into a fully functional, 
                physically built wearable watch with real-time cloud data. Highly recommended for complex 
                IoT hardware developments!"
              </p>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-xs text-slate-700 bg-gradient-to-r from-primary/10 to-secondary/10">
                  SK
                </div>
                <div>
                  <h6 className="font-bold text-xs text-slate-900">Senthil Kumar</h6>
                  <p className="text-[10px] text-slate-400">Final Year CSE Student</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
