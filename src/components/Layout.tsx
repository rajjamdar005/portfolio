import { ReactNode } from "react";
import Navigation from "./Navigation";
import grassBackground from "@/assets/grass-background.png";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Clean Minecraft World Background */}
      <div className="fixed inset-0 z-0">
        {/* Sky to grass gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-200 via-blue-100 to-green-200" />
        
        {/* Subtle block texture overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(90deg, transparent 50%, rgba(0,0,0,0.02) 50%),
              linear-gradient(0deg, transparent 50%, rgba(0,0,0,0.02) 50%)
            `,
            backgroundSize: "32px 32px",
            imageRendering: "pixelated"
          }}
        />
        
        {/* Minimal floating blocks for ambiance */}
        <div className="absolute inset-0 overflow-hidden">
          {[
            { color: 'green-300', size: 24, x: 10, y: 20 },
            { color: 'amber-400', size: 20, x: 85, y: 30 },
            { color: 'emerald-400', size: 28, x: 70, y: 60 },
            { color: 'blue-300', size: 16, x: 20, y: 70 },
            { color: 'yellow-400', size: 20, x: 90, y: 80 }
          ].map((block, i) => (
            <div
              key={`block-${i}`}
              className={`absolute bg-${block.color} opacity-20 minecraft-block`}
              style={{
                width: `${block.size}px`,
                height: `${block.size}px`,
                left: `${block.x}%`,
                top: `${block.y}%`,
                animation: `minecraft-gentle-float ${8 + i * 2}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>
        
        {/* Subtle sparkle effects */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={`sparkle-${i}`}
              className="absolute w-1 h-1 bg-yellow-400 opacity-30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `minecraft-sparkle ${4 + Math.random() * 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Bottom ground texture */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-300 to-transparent opacity-30" />
      </div>
      
      {/* Main content */}
      <main className="relative z-10 pt-16">
        {children}
      </main>
    </div>
  );
};

export default Layout;