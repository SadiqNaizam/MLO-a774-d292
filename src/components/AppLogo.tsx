import React from 'react';
import { cn } from '@/lib/utils';

interface AppLogoProps {
  className?: string;
  src?: string; // Optional: if you want to pass the src directly
  alt?: string; // Optional: if you want to pass the alt text directly
  width?: number;
  height?: number;
}

const AppLogo: React.FC<AppLogoProps> = ({
  className,
  src = "/placeholder.svg", // Default to a placeholder, update with your actual logo path
  alt = "Application Logo",
  width = 120, // Default width
  height = 32,  // Default height, adjust as needed for your logo's aspect ratio
}) => {
  console.log("Rendering AppLogo");

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-contain" // Ensures the logo scales nicely within the given dimensions
        onError={(e) => {
          // Fallback if the primary logo fails to load
          (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
          (e.currentTarget as HTMLImageElement).alt = "Placeholder Logo";
        }}
      />
    </div>
  );
};

export default AppLogo;