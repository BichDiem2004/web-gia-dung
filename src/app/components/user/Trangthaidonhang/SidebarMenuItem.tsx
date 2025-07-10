import * as React from "react";

interface SidebarMenuItemProps {
  icon: string;
  label: string;
  href?: string;
}

export const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({ icon, label, href = "#" }) => {
  return (
    <a
      href={href}
      className="flex gap-2 items-center pl-2 text-base text-center text-black rounded-lg min-h-12"
    >
      <img
        src={icon}
        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        alt={`${label} icon`}
      />
      <span className="self-stretch my-auto">{label}</span>
    </a>
  );
};
