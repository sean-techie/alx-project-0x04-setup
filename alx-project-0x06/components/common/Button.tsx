import { ButtonProps } from "@/interface"; // ✅ Import interface

export default function Button({ action, buttonLabel, buttonBackgroundColor }: ButtonProps) {
  return (
    <button
      onClick={action}
      className={`px-6 py-2 font-semibold text-white rounded ${buttonBackgroundColor}`}
    >
      {buttonLabel}
    </button>
  );
}
