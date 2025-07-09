import { Link } from "react-router-dom";
import { Download, Compass, MessageSquare, Github, Linkedin, Mail } from "lucide-react";
import avatarPixel from "@/assets/avatar-pixel.png";

const Home = () => {
  const skills = [
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "📘" },
    { name: "Python", icon: "🐍" },
    { name: "Arduino", icon: "🔌" },
    { name: "IoT", icon: "📡" },
    { name: "Supabase", icon: "🗄️" },
  ];

  return (
    <div className="min-h-screen animate-fade-in-up">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side - Text Content */}
          <div className="flex-1 text-center lg:text-left animate-slide-in-left">
            <div className="mb-8">
              <h1 className="text-2xl md:text-4xl lg:text-5xl mb-4 text-foreground font-bold">
                🧑‍💻 Siddhiraj Jamdar
              </h1>
              <h2 className="text-lg md:text-xl lg:text-2xl text-primary mb-6 font-semibold">
                Master Builder of Code & Circuits
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed">
                Software + IoT Engineer | Founder of Engigenius<br />
                Building tech that bridges digital and physical worlds.<br />
                From codebases to electronics manufacturing, I craft complete solutions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Link to="/projects" className="btn-pixel flex items-center justify-center space-x-2">
                <Compass size={16} />
                <span>🧭 Explore Projects</span>
              </Link>
              <a 
                href="/resume.pdf" 
                download 
                className="btn-pixel flex items-center justify-center space-x-2"
              >
                <Download size={16} />
                <span>📜 Download Resume</span>
              </a>
              <Link to="/contact" className="btn-pixel flex items-center justify-center space-x-2">
                <MessageSquare size={16} />
                <span>💬 Contact Me</span>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4">
              <a 
                href="https://github.com/rajjamdar005" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inventory-slot hover-glow"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/siddhirajjamdar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inventory-slot hover-glow"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:siddhirajjamdar@email.com"
                className="inventory-slot hover-glow"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Side - Avatar */}
           <div className="flex-1 flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="minecraft-block p-8 bg-card">
                <img 
                  src={avatarPixel} 
                  alt="Siddhiraj's Minecraft Avatar" 
                  className="w-48 h-48 md:w-64 md:h-64 object-contain hover-glow"
                  style={{ imageRendering: "pixelated" }}
                />
              </div>
              {/* Floating UI elements */}
              <div className="absolute -top-4 -right-4 bg-minecraft-gold text-card px-2 py-1 font-pixel text-xs border border-border animate-minecraft-bounce">
                Level 99 Dev
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Inventory Section */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="font-pixel text-xl text-center mb-8">🎒 Tech Inventory</h3>
        <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
           {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="inventory-slot w-20 h-20 flex-col hover-glow animate-fade-in-up"
              title={skill.name}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="text-lg mb-1">{skill.icon}</div>
              <div className="font-pixel text-xs text-center">{skill.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="minecraft-block p-6 text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="font-pixel text-2xl text-minecraft-gold mb-2">3+</div>
            <div className="text-sm">Years Coding</div>
          </div>
          <div className="minecraft-block p-6 text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="font-pixel text-2xl text-minecraft-emerald mb-2">10+</div>
            <div className="text-sm">Projects Built</div>
          </div>
          <div className="minecraft-block p-6 text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="font-pixel text-2xl text-minecraft-diamond mb-2">5+</div>
            <div className="text-sm">Tech Stacks</div>
          </div>
          <div className="minecraft-block p-6 text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="font-pixel text-2xl text-minecraft-redstone mb-2">∞</div>
            <div className="text-sm">Ideas</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;