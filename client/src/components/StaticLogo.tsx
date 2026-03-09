import logoLight from "@assets/Gemini_Generated_Image_v0bu9mv0bu9mv0bu-removebg-preview_1771650463284.png";
import logoDark from "@assets/Gemini_Generated_Image_3x57v83x57v83x57-removebg-preview_1771651049880.png";

interface Props {
  size?: number;
}

export default function StaticLogo({ size = 40 }: Props) {
  return (
    <div
      style={{ width: size, height: size }}
      className="relative flex items-center justify-center"
    >
      {/* Light logo (default) */}
      <img
        src={logoLight}
        alt="Social Wrenchers Logo"
        className="absolute inset-0 w-full h-full object-contain drop-shadow-sm"
      />

      {/* Dark overlay glow effect */}
      <img
        src={logoDark}
        alt="Social Wrenchers Logo Accent"
        className="absolute inset-0 w-full h-full object-contain opacity-0 hover:opacity-100 transition-opacity duration-300"
      />
    </div>
  );
}