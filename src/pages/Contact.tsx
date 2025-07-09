import { useState } from "react";
import { Send, Mail, Github, Linkedin, MessageSquare, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent! 📧",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "siddhirajjamdar@email.com",
      href: "mailto:siddhirajjamdar@email.com"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/rajjamdar005",
      href: "https://github.com/rajjamdar005"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/siddhirajjamdar",
      href: "https://linkedin.com/in/siddhirajjamdar"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Maharashtra, India",
      href: null
    }
  ];

  return (
    <div className="min-h-screen bg-sky py-4 md:py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <section className="text-center mb-8 md:mb-12 animate-fade-in">
          <h1 className="font-pixel text-2xl md:text-3xl lg:text-4xl mb-4 hover-glow">💬 Contact Me</h1>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to build something amazing together? Let's connect!
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="minecraft-block p-4 md:p-6 lg:p-8 hover:shadow-glow transition-all duration-300 animate-scale-in">
            <h2 className="font-pixel text-lg md:text-xl mb-4 md:mb-6 flex items-center hover-glow">
              <MessageSquare className="mr-2 md:mr-3 text-minecraft-gold animate-pulse" size={20} />
              📝 Send a Message
            </h2>
            
            {/* Minecraft Command Bar Style */}
            <div className="bg-black text-green-400 p-3 md:p-4 font-mono text-xs md:text-sm mb-4 md:mb-6 border border-border minecraft-block relative overflow-hidden">
              <div className="flex items-center space-x-2">
                <span className="text-minecraft-gold animate-pulse">$</span>
                <span>/msg siddhiraj_jamdar "Let's connect!"</span>
              </div>
              {/* Typing cursor animation */}
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-4 bg-green-400 animate-pulse"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="animate-scale-in" style={{animationDelay: '0.1s'}}>
                <label className="font-pixel text-xs md:text-sm mb-2 block text-minecraft-gold">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 md:p-3 bg-card border-2 border-border text-card-foreground font-pixel text-xs md:text-sm focus:border-minecraft-gold focus:outline-none minecraft-block hover:shadow-glow transition-all duration-200"
                  placeholder="Enter your name"
                />
              </div>

              <div className="animate-scale-in" style={{animationDelay: '0.2s'}}>
                <label className="font-pixel text-xs md:text-sm mb-2 block text-minecraft-gold">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 md:p-3 bg-card border-2 border-border text-card-foreground font-pixel text-xs md:text-sm focus:border-minecraft-gold focus:outline-none minecraft-block hover:shadow-glow transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="animate-scale-in" style={{animationDelay: '0.3s'}}>
                <label className="font-pixel text-xs md:text-sm mb-2 block text-minecraft-gold">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full p-2 md:p-3 bg-card border-2 border-border text-card-foreground font-pixel text-xs md:text-sm focus:border-minecraft-gold focus:outline-none resize-none minecraft-block hover:shadow-glow transition-all duration-200 md:rows-6"
                  placeholder="Tell me about your project ideas, questions, or just say hi!"
                />
              </div>

              <div className="animate-scale-in" style={{animationDelay: '0.4s'}}>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-pixel w-full flex items-center justify-center space-x-2 disabled:opacity-50 hover:animate-pulse transition-all duration-300"
                >
                  <Send size={14} className="md:w-4 md:h-4" />
                  <span className="text-xs md:text-sm">{isLoading ? "Sending..." : "🚀 Send Message"}</span>
                </button>
              </div>
            </form>

            <div className="mt-6 text-center">
              <p className="text-xs text-muted-foreground">
                * I typically respond within 24 hours
              </p>
            </div>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-6 md:space-y-8">
            {/* Contact Information */}
            <div className="minecraft-block p-4 md:p-6 lg:p-8 hover:shadow-glow transition-all duration-300 animate-scale-in" style={{animationDelay: '0.5s'}}>
              <h2 className="font-pixel text-lg md:text-xl mb-4 md:mb-6 flex items-center hover-glow">
                <Phone className="mr-2 md:mr-3 text-minecraft-emerald animate-pulse" size={20} />
                📞 Get In Touch
              </h2>
              
              <div className="space-y-3 md:space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3 md:space-x-4 animate-scale-in" style={{animationDelay: `${0.6 + index * 0.1}s`}}>
                      <div className="inventory-slot bg-minecraft-stone hover:animate-pulse transition-all duration-200 w-12 h-12 md:w-16 md:h-16">
                        <Icon size={16} className="md:w-5 md:h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-pixel text-xs md:text-sm text-minecraft-gold">{info.label}</div>
                        {info.href ? (
                          <a 
                            href={info.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs md:text-sm hover:text-minecraft-gold transition-colors break-all hover-glow"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-xs md:text-sm break-words">{info.value}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Why Contact Me */}
            <div className="minecraft-block p-4 md:p-6 lg:p-8 hover:shadow-glow transition-all duration-300 animate-scale-in" style={{animationDelay: '1s'}}>
              <h3 className="font-pixel text-base md:text-lg mb-3 md:mb-4 hover-glow">🤔 Why Reach Out?</h3>
              <div className="space-y-3 md:space-y-4 text-xs md:text-sm">
                <div className="flex items-start space-x-3 animate-scale-in" style={{animationDelay: '1.1s'}}>
                  <span className="text-minecraft-emerald font-bold text-lg animate-pulse">•</span>
                  <div>
                    <strong>Project Collaboration:</strong> Looking for a developer who bridges software and hardware? Let's talk!
                  </div>
                </div>
                <div className="flex items-start space-x-3 animate-scale-in" style={{animationDelay: '1.2s'}}>
                  <span className="text-minecraft-gold font-bold text-lg animate-pulse">•</span>
                  <div>
                    <strong>Technical Discussion:</strong> Want to discuss IoT, React, or any tech stack I work with?
                  </div>
                </div>
                <div className="flex items-start space-x-3 animate-scale-in" style={{animationDelay: '1.3s'}}>
                  <span className="text-minecraft-diamond font-bold text-lg animate-pulse">•</span>
                  <div>
                    <strong>Mentorship:</strong> Questions about getting started in software or IoT development?
                  </div>
                </div>
                <div className="flex items-start space-x-3 animate-scale-in" style={{animationDelay: '1.4s'}}>
                  <span className="text-minecraft-redstone font-bold text-lg animate-pulse">•</span>
                  <div>
                    <strong>Just to Connect:</strong> Fellow developers and tech enthusiasts are always welcome!
                  </div>
                </div>
              </div>
            </div>

            {/* Fun Pixel Art */}
            <div className="minecraft-block p-4 md:p-6 lg:p-8 text-center hover:shadow-glow transition-all duration-300 animate-scale-in relative overflow-hidden" style={{animationDelay: '1.5s'}}>
              {/* Animated background sparkles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-minecraft-gold opacity-40"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animation: `minecraft-sparkle ${2 + Math.random() * 3}s ease-in-out infinite`,
                      animationDelay: `${Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>
              <div className="text-3xl md:text-4xl mb-3 md:mb-4 animate-bounce">🎮</div>
              <div className="font-pixel text-sm md:text-base mb-2 text-minecraft-gold">Achievement Unlocked!</div>
              <div className="text-xs md:text-sm text-muted-foreground">
                "Reached the Contact Page"<br />
                You're one step closer to collaboration!
              </div>
            </div>
          </div>
        </div>

        {/* Response Time Promise */}
        <section className="mt-8 md:mt-12 animate-scale-in" style={{animationDelay: '1.6s'}}>
          <div className="minecraft-block p-4 md:p-6 text-center bg-gradient-to-r from-minecraft-grass to-minecraft-emerald text-card hover:shadow-glow transition-all duration-300 relative overflow-hidden">
            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-white opacity-30 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `minecraft-float ${4 + Math.random() * 2}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
            <h3 className="font-pixel text-base md:text-lg mb-2 animate-pulse">⚡ Quick Response Promise</h3>
            <p className="text-xs md:text-sm relative z-10">
              I value every message and aim to respond within 24 hours. For urgent projects, 
              feel free to reach out on LinkedIn for faster communication!
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;