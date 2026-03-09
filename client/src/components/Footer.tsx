import { Twitter, Linkedin, Github, Instagram } from "lucide-react";
import StaticLogo from "@/components/StaticLogo";

export function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* BRAND */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6 group">
              <div className="transition-transform duration-500 group-hover:scale-110">
                <StaticLogo size={40} />
              </div>
              <span className="font-display font-bold text-xl text-slate-900">
                Social Wrenchers
              </span>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light">
              Building the digital bridges of tomorrow. We connect people, systems, and ideas through innovative technology.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4">

              {/* X / Twitter */}
              <a
                href="https://x.com/SocialWrenchers"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Social Wrenchers on X"
                className="p-2 bg-slate-50 rounded-full text-slate-400 hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/siddharth-b-7b35042a9/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Social Wrenchers on LinkedIn"
                className="p-2 bg-slate-50 rounded-full text-slate-400 hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/SIDDHU-23052006"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Social Wrenchers GitHub"
                className="p-2 bg-slate-50 rounded-full text-slate-400 hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/socialwrenchersofficial/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Social Wrenchers Instagram"
                className="p-2 bg-slate-50 rounded-full text-slate-400 hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>

            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-slate-500 font-light">
              <li><a href="/#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-slate-500 font-light">
              <li><a href="/#services" className="hover:text-primary transition-colors">Web Development</a></li>
              <li><a href="/#services" className="hover:text-primary transition-colors">Mobile Apps</a></li>
              <li><a href="/#services" className="hover:text-primary transition-colors">Cloud Infrastructure</a></li>
              <li><a href="/#services" className="hover:text-primary transition-colors">Cybersecurity</a></li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Legal</h4>
            <ul className="space-y-3 text-sm text-slate-500 font-light">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="pt-8 border-t border-slate-100 text-center text-sm text-slate-400 font-light">
          <p>© {new Date().getFullYear()} Social Wrenchers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}