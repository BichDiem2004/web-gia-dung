import * as React from "react";

interface StatusStepProps {
  isActive: boolean;
  label: string;
  timestamp?: string;
}

export const StatusStep: React.FC<StatusStepProps> = ({ isActive, label, timestamp }) => {
  return (
    <div className="flex items-start gap-3">
      {/* Dot */}
      <div className={`w-[25px] h-[25px] rounded-xl flex items-center justify-center 
        ${isActive ? "bg-orange-100" : "bg-stone-300 bg-opacity-50"}`}>
        <div className={`w-3 h-3 rounded-full 
          ${isActive ? "bg-amber-500" : "bg-zinc-500"}`} />
      </div>

      {/* Text + Time */}
      <div className="flex gap-2 items-center">
        <span className={`text-sm ${isActive ? "text-orange-500 font-semibold" : "text-zinc-500"}`}>
          {label}
        </span>
        {timestamp && (
            <div className="w-px h-4 bg-orange-400 opacity-70" />
        )}
        {timestamp && (
          <span className="text-xs mt-0.5 text-orange-500">{timestamp}</span>
        )}
      </div>
    </div>
  );
};
