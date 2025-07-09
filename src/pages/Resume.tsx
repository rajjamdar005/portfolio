import { Download, Book, Award, Briefcase, Code, Cpu } from "lucide-react";

const Resume = () => {
  const experience = [
    {
      title: "IoT Project Developer",
      company: "University Projects",
      period: "2023 - Present",
      description: "Led development of multiple IoT solutions including IV monitoring systems and drone controllers.",
      achievements: [
        "Built real-time monitoring systems with 99% uptime",
        "Integrated ESP32 with cloud databases",
        "Developed custom PCB designs for sensor integration"
      ]
    },
    {
      title: "Full-Stack Developer",
      company: "Personal Projects",
      period: "2022 - Present", 
      description: "Created web applications focusing on social impact and user experience.",
      achievements: [
        "Launched SwapCircle with 100+ active users",
        "Built responsive UIs with modern frameworks",
        "Implemented real-time features and authentication"
      ]
    }
  ];

  const education = [
    {
      degree: "B.Tech in Software & IoT Engineering",
      institution: "Sanjay Ghodawat University",
      period: "2022 - 2026",
      status: "3rd Year",
      gpa: "8.5/10",
      highlights: [
        "Data Structures & Algorithms",
        "IoT Systems Design", 
        "Software Engineering Principles",
        "Embedded Systems Programming"
      ]
    }
  ];

  const certifications = [
    { name: "React Developer Certification", issuer: "freeCodeCamp", year: "2023" },
    { name: "IoT Fundamentals", issuer: "Cisco", year: "2023" },
    { name: "Arduino Programming", issuer: "Arduino", year: "2022" },
    { name: "Git & GitHub", issuer: "GitHub", year: "2022" }
  ];

  const skills = {
    programming: {
      icon: "💻",
      items: ["C++", "Python", "JavaScript", "TypeScript", "SQL"]
    },
    frontend: {
      icon: "🎨", 
      items: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "Figma"]
    },
    backend: {
      icon: "⚙️",
      items: ["Supabase", "Node.js", "REST APIs", "Database Design"]
    },
    hardware: {
      icon: "🔧",
      items: ["Arduino", "ESP32", "Sensors", "PCB Design", "IoT Protocols"]
    },
    tools: {
      icon: "🛠️",
      items: ["Git", "VS Code", "Vercel", "GitHub", "Postman"]
    }
  };

  return (
    <div className="min-h-screen bg-sky py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <section className="text-center mb-12">
          <div className="minecraft-block p-8 mb-8">
            <Book className="mx-auto mb-4 text-minecraft-gold" size={48} />
            <h1 className="font-pixel text-3xl md:text-4xl mb-4">📒 Resume</h1>
            <p className="text-lg text-muted-foreground mb-6">
              My professional journey through the world of code and circuits
            </p>
            
            {/* Download Resume Button */}
            <a 
              href="/resume.pdf" 
              download
              className="btn-pixel flex items-center justify-center space-x-2 mx-auto max-w-fit"
            >
              <Download size={16} />
              <span>📄 Download PDF Resume</span>
            </a>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="font-pixel text-xl mb-6 flex items-center">
            <Award className="mr-3 text-minecraft-emerald" size={24} />
            🎓 Education
          </h2>
          {education.map((edu, index) => (
            <div key={index} className="minecraft-block p-6 mb-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="font-pixel text-lg text-minecraft-gold">{edu.degree}</h3>
                  <p className="text-foreground font-medium">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">{edu.status} • GPA: {edu.gpa}</p>
                </div>
                <div className="bg-minecraft-iron text-card px-3 py-1 font-pixel text-xs border border-border mt-2 md:mt-0">
                  {edu.period}
                </div>
              </div>
              <div>
                <h4 className="font-pixel text-sm mb-2">Key Coursework:</h4>
                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map((course) => (
                    <span key={course} className="bg-card border border-border px-2 py-1 text-xs">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="font-pixel text-xl mb-6 flex items-center">
            <Briefcase className="mr-3 text-minecraft-diamond" size={24} />
            💼 Experience
          </h2>
          {experience.map((exp, index) => (
            <div key={index} className="minecraft-block p-6 mb-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="font-pixel text-lg text-minecraft-gold">{exp.title}</h3>
                  <p className="text-foreground font-medium">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.description}</p>
                </div>
                <div className="bg-minecraft-iron text-card px-3 py-1 font-pixel text-xs border border-border mt-2 md:mt-0">
                  {exp.period}
                </div>
              </div>
              <div>
                <h4 className="font-pixel text-sm mb-2">Key Achievements:</h4>
                <ul className="text-sm space-y-1">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-minecraft-gold mr-2">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="font-pixel text-xl mb-6 flex items-center">
            <Code className="mr-3 text-minecraft-redstone" size={24} />
            ⚙️ Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(skills).map(([category, data]) => (
              <div key={category} className="minecraft-block p-6">
                <h3 className="font-pixel text-sm mb-4 flex items-center text-minecraft-gold">
                  <span className="mr-2">{data.icon}</span>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {data.items.map((skill) => (
                    <span 
                      key={skill}
                      className="bg-card border border-border px-2 py-1 text-xs hover-glow"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-12">
          <h2 className="font-pixel text-xl mb-6 flex items-center">
            <Cpu className="mr-3 text-minecraft-grass" size={24} />
            🏆 Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="minecraft-block p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-medium text-sm">{cert.name}</h3>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                </div>
                <div className="bg-minecraft-gold text-card px-2 py-1 font-pixel text-xs border border-border">
                  {cert.year}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="minecraft-block p-8 bg-gradient-to-r from-minecraft-emerald to-minecraft-diamond text-card">
            <h3 className="font-pixel text-xl mb-4">🤝 Let's Work Together!</h3>
            <p className="mb-6">Ready to build innovative solutions that make a difference?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-card text-card-foreground btn-pixel"
              >
                💬 Contact Me
              </a>
              <a 
                href="/projects" 
                className="bg-card text-card-foreground btn-pixel"
              >
                🗂️ View My Work
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;