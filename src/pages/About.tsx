import { GraduationCap, Code, Cpu, Heart } from "lucide-react";
import avatarPixel from "@/assets/avatar-pixel.png";

const About = () => {
  const skills = {
    languages: ["C++", "Python", "JavaScript", "TypeScript"],
    frameworks: ["React", "Next.js", "Tailwind", "Supabase"],
    hardware: ["Arduino", "ESP32", "Sensors", "RFID", "IoT Protocols"],
    tools: ["Git", "Figma", "Vercel", "Framer Motion"]
  };

  const timeline = [
    {
      year: "2022",
      title: "Started Programming Journey",
      description: "Began learning C++ and discovered my passion for problem-solving through code."
    },
    {
      year: "2023",
      title: "Entered University",
      description: "Started Software & IoT Engineering at Sanjay Ghodawat University."
    },
    {
      year: "2024",
      title: "First Major Project",
      description: "Built SwapCircle - a hyper-local platform for sharing usable items."
    },
    {
      year: "2025",
      title: "Portfolio Creation",
      description: "Crafted this Minecraft-themed portfolio to showcase my journey!"
    }
  ];

  return (
    <div className="min-h-screen bg-sky py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="font-pixel text-3xl md:text-4xl mb-4">📖 About Me</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The story of a builder who codes, creates, and dreams in pixels
          </p>
        </section>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side - Character Card */}
          <div className="space-y-8">
            <div className="minecraft-block p-8 text-center">
              <img 
                src={avatarPixel} 
                alt="Siddhiraj's Avatar" 
                className="w-32 h-32 mx-auto mb-4 hover-glow"
                style={{ imageRendering: "pixelated" }}
              />
              <h2 className="font-pixel text-xl mb-2">Siddhiraj Jamdar</h2>
              <div className="bg-minecraft-gold text-card px-4 py-2 font-pixel text-sm border border-border inline-block">
                Software & IoT Engineer
              </div>
            </div>

            {/* Education */}
            <div className="minecraft-block p-6">
              <h3 className="font-pixel text-lg mb-4 flex items-center">
                <GraduationCap className="mr-2" size={20} />
                🎓 Education
              </h3>
              <div className="space-y-2">
                <p className="font-medium">Sanjay Ghodawat University</p>
                <p className="text-sm text-muted-foreground">3rd Year - Software & IoT Engineering</p>
                <p className="text-sm">Building the bridge between software and hardware</p>
              </div>
            </div>

            {/* Philosophy */}
            <div className="minecraft-block p-6">
              <h3 className="font-pixel text-lg mb-4 flex items-center">
                <Heart className="mr-2" size={20} />
                🧠 Philosophy
              </h3>
              <blockquote className="text-sm italic border-l-4 border-minecraft-gold pl-4">
                "I don't just build apps—I craft full-stack experiences with real-world impact. 
                From mobile UIs to embedded systems, I see the full product vision."
              </blockquote>
            </div>
          </div>

          {/* Right Side - Skills & Timeline */}
          <div className="space-y-8">
            {/* Skills Inventory */}
            <div className="minecraft-block p-6">
              <h3 className="font-pixel text-lg mb-6 flex items-center">
                <Code className="mr-2" size={20} />
                ⚙️ Skills Inventory
              </h3>
              
              <div className="space-y-6">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h4 className="font-pixel text-sm mb-3 capitalize text-minecraft-gold">
                      {category.replace(/([A-Z])/g, ' $1')}:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <span 
                          key={skill}
                          className="bg-card border border-border px-3 py-1 text-xs hover-glow"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="minecraft-block p-6">
              <h3 className="font-pixel text-lg mb-6 flex items-center">
                <Cpu className="mr-2" size={20} />
                🕐 Journey Timeline
              </h3>
              
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="bg-minecraft-gold text-card px-2 py-1 font-pixel text-xs border border-border flex-shrink-0">
                      {item.year}
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <section className="minecraft-block p-8 text-center">
          <h3 className="font-pixel text-xl mb-6">🎮 Fun Facts</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-2xl mb-2">🎯</div>
              <p className="text-sm">I debug hardware with the same patience I debug code</p>
            </div>
            <div>
              <div className="text-2xl mb-2">🌱</div>
              <p className="text-sm">Always learning new technologies and frameworks</p>
            </div>
            <div>
              <div className="text-2xl mb-2">🔧</div>
              <p className="text-sm">I believe every problem has an elegant solution</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;