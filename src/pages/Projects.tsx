import { ExternalLink, Github, Code, Zap, Heart, Bot } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "🧱 SwapCircle",
      description: "A hyper-local platform to share old but usable items",
      longDescription: "Built a full-stack platform that connects neighbors to share items they no longer need. Features real-time chat, location-based search, and user verification systems.",
      tech: ["React", "Supabase", "Clerk Auth", "Mapbox"],
      role: "Full-stack Dev + Product Lead",
      status: "Live",
      icon: "🌍",
      color: "minecraft-emerald",
      github: "https://github.com/siddhirajjamdar/swapcircle",
      live: "https://swapcircle.vercel.app",
      features: ["Real-time messaging", "Location-based search", "User verification", "Item categorization"]
    },
    {
      id: 2,
      title: "🧪 Remedio",
      description: "Curating ancient Indian home remedies in modern UI",
      longDescription: "An AI-powered platform that preserves traditional Indian medicinal knowledge with a modern interface. Features chatbot trained on ancient recipes and remedy database.",
      tech: ["Vite", "LLaMA 2", "TailwindCSS", "Python"],
      role: "Full-stack Developer",
      status: "In Development",
      icon: "🌿",
      color: "minecraft-grass",
      github: "https://github.com/siddhirajjamdar/remedio",
      features: ["AI chatbot", "Remedy database", "Modern UI", "Traditional knowledge"]
    },
    {
      id: 3,
      title: "🔋 IV Monitoring System",
      description: "Monitors IV drip rate using ESP8266",
      longDescription: "IoT-based healthcare solution that monitors IV drip rates in real-time, sends alerts to medical staff, and maintains patient data securely.",
      tech: ["ESP8266", "Supabase", "React", "IoT Sensors"],
      role: "IoT Developer",
      status: "Prototype",
      icon: "💧",
      color: "minecraft-diamond",
      github: "https://github.com/siddhirajjamdar/iv-monitor",
      features: ["Real-time monitoring", "SMS alerts", "Data logging", "Medical dashboard"]
    },
    {
      id: 4,
      title: "🛰️ IoT Drone Controller",
      description: "Custom drone controller using ESP32 + IMU sensor",
      longDescription: "Built a custom flight controller with stability algorithms, failover mechanisms, and telemetry systems using ESP32 microcontroller.",
      tech: ["ESP32", "C++", "IMU Sensors", "RF Communication"],
      role: "Embedded Systems Engineer",
      status: "Testing",
      icon: "🚁",
      color: "minecraft-redstone",
      github: "https://github.com/siddhirajjamdar/drone-controller",
      features: ["Stability control", "Failover systems", "Telemetry", "Remote control"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live": return "minecraft-emerald";
      case "In Development": return "minecraft-gold";
      case "Prototype": return "minecraft-diamond";
      case "Testing": return "minecraft-redstone";
      default: return "minecraft-iron";
    }
  };

  return (
    <div className="min-h-screen bg-sky py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="font-pixel text-3xl md:text-4xl mb-4">🗂️ Project Inventory</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my journey from code to circuits
          </p>
        </section>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => (
            <div key={project.id} className="minecraft-block p-6 hover-glow group">
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`inventory-slot bg-${project.color} text-card`}>
                    <span className="text-lg">{project.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-pixel text-lg">{project.title}</h3>
                    <div className={`bg-${getStatusColor(project.status)} text-card px-2 py-1 text-xs font-pixel border border-border inline-block mt-1`}>
                      {project.status}
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
              <p className="text-sm mb-4">{project.longDescription}</p>

              {/* Tech Stack */}
              <div className="mb-4">
                <h4 className="font-pixel text-xs mb-2 text-minecraft-gold">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-card border border-border px-2 py-1 text-xs hover-glow"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h4 className="font-pixel text-xs mb-2 text-minecraft-gold">Features:</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  {project.features.map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
              </div>

              {/* Role */}
              <div className="mb-4">
                <span className="bg-minecraft-iron text-card px-2 py-1 text-xs font-pixel border border-border">
                  {project.role}
                </span>
              </div>

              {/* Links */}
              <div className="flex space-x-2 pt-4 border-t border-border">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pixel flex items-center space-x-2 text-xs"
                >
                  <Github size={12} />
                  <span>Code</span>
                </a>
                {project.live && (
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pixel flex items-center space-x-2 text-xs"
                  >
                    <ExternalLink size={12} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Showcase */}
        <section className="minecraft-block p-8 text-center">
          <h3 className="font-pixel text-xl mb-6">🛠️ What I Build With</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="minecraft-block p-4">
              <Code className="mx-auto mb-2 text-minecraft-emerald" size={24} />
              <div className="font-pixel text-xs">Frontend</div>
              <div className="text-xs text-muted-foreground">React, Next.js, Tailwind</div>
            </div>
            <div className="minecraft-block p-4">
              <Zap className="mx-auto mb-2 text-minecraft-gold" size={24} />
              <div className="font-pixel text-xs">Backend</div>
              <div className="text-xs text-muted-foreground">Supabase, Node.js, APIs</div>
            </div>
            <div className="minecraft-block p-4">
              <Bot className="mx-auto mb-2 text-minecraft-redstone" size={24} />
              <div className="font-pixel text-xs">IoT/Hardware</div>
              <div className="text-xs text-muted-foreground">Arduino, ESP32, Sensors</div>
            </div>
            <div className="minecraft-block p-4">
              <Heart className="mx-auto mb-2 text-minecraft-diamond" size={24} />
              <div className="font-pixel text-xs">Passion</div>
              <div className="text-xs text-muted-foreground">Building impactful solutions</div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="minecraft-block p-8 bg-gradient-to-r from-minecraft-grass to-minecraft-emerald text-card">
            <h3 className="font-pixel text-xl mb-4">🚀 Ready to Collaborate?</h3>
            <p className="mb-6">Let's build something amazing together!</p>
            <a 
              href="/contact" 
              className="bg-card text-card-foreground btn-pixel"
            >
              💬 Get In Touch
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;