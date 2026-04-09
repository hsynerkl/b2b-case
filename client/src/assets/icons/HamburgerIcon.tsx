import type { IconProps } from "@/types/icons";

export const HamburgerIcon = ({ size = 20, className }: IconProps) => {
  return (
    <svg width={size} className={className} height={size} viewBox="0 0 15 15">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 3a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1zM1 7.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5"
      />
    </svg>
  );
};
