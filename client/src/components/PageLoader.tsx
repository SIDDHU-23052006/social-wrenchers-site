import darkLogo from "@assets/Gemini_Generated_Image_3x57v83x57v83x57-removebg-preview_1771607185261.png";
import lightLogo from "@assets/Gemini_Generated_Image_v0bu9mv0bu9mv0bu-removebg-preview_1771650463284.png";

export default function PageLoader({ visible }: { visible: boolean }) {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0b0f19]">

      <div className="flex flex-col items-center gap-12">

        {/* ENERGY GLOW */}
        <div className="relative flex items-center justify-center">

          {/* outer glow */}
          <div className="absolute w-60 h-60 rounded-full bg-gradient-to-r from-primary/40 via-purple-500/40 to-secondary/40 blur-3xl opacity-60 animate-pulse"></div>

          {/* spinning energy ring */}
          <div className="absolute w-48 h-48 rounded-full border-2 border-transparent border-t-primary border-r-secondary animate-ring"></div>

          {/* ===== 3D FLIP LOGO ===== */}
          <div className="logo-3d">

            <div className="logo-inner">

              {/* FRONT (LIGHT) */}
              <div className="logo-face logo-front">
                <img src={lightLogo} className="w-28 h-28 object-contain" />
              </div>

              {/* BACK (DARK) */}
              <div className="logo-face logo-back">
                <img src={darkLogo} className="w-28 h-28 object-contain" />
              </div>

            </div>

          </div>
        </div>

        {/* TEXT */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white tracking-wide">
            Social Wrenchers
          </h2>
          <p className="text-white/60 text-sm mt-2">
            Initializing intelligent systems...
          </p>
        </div>

        {/* LOADING DOTS */}
        <div className="flex gap-2">
          <span className="w-3 h-3 bg-primary rounded-full animate-bounce"></span>
          <span className="w-3 h-3 bg-secondary rounded-full animate-bounce delay-150"></span>
          <span className="w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-300"></span>
        </div>

      </div>
    </div>
  );
}