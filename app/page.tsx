"use client"

import type React from "react"

import { useState, useEffect } from "react"
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Star,
  Search,
  Download,
  ArrowUp,
  Calendar,
  Award,
  Briefcase,
  GraduationCap,
  ChevronRight,
  Heart,
  Sparkles,
} from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

// Typing effect hook
const useTypewriter = (text: string, speed = 100) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed])

  return displayText
}

export default function Portfolio() {
  const [activeSkillCategory, setActiveSkillCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedProject, setSelectedProject] = useState(null)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const typedText = useTypewriter("MERN Stack Developer", 150)

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100

      setScrollProgress(progress)
      setShowScrollTop(scrollTop > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const skillCategories = [
    { name: "All", color: "bg-blue-600 hover:bg-blue-700" },
    { name: "Programming", color: "bg-emerald-600 hover:bg-emerald-700" },
    { name: "Frontend", color: "bg-purple-600 hover:bg-purple-700" },
    { name: "Backend", color: "bg-orange-600 hover:bg-orange-700" },
    { name: "Database", color: "bg-red-600 hover:bg-red-700" },
    { name: "Tools", color: "bg-slate-600 hover:bg-slate-700" },
  ]

  const skills = [
    { name: "C++", category: "Programming" },
    { name: "JavaScript", category: "Programming" },
    { name: "TypeScript", category: "Programming" },
    { name: "SQL", category: "Programming" },
    { name: "HTML", category: "Frontend" },
    { name: "CSS", category: "Frontend" },
    { name: "React.js", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "MySQL", category: "Database" },
    { name: "Git", category: "Tools" },
    { name: "GitHub", category: "Tools" },
    { name: "Postman", category: "Tools" },
    { name: "Figma", category: "Tools" },
    { name: "Vite", category: "Tools" },
  ]

  const projects = [
    {
      id: 1,
      title: "Biomesh",
      description:
        "A decentralized AI-powered human body data network for secure collection, storage, and analysis of biometric and medical data using blockchain and AI technologies.",
      fullDescription:
        "Biomesh represents a revolutionary approach to healthcare data management, combining blockchain technology with AI to create a secure, decentralized network for medical data. The platform enables users to maintain complete control over their biometric and medical information while facilitating advanced research and AI-driven diagnostics. Built with a focus on privacy, security, and interoperability, Biomesh addresses critical challenges in healthcare data sharing and medical research collaboration.",
      technologies: ["React", "Tailwind CSS", "Vite", "Node.js", "Express.js", "MongoDB", "TypeScript", "AI/ML"],
      github: "https://github.com/Khushi-Bedmutha/Biomesh",
      live: "https://biomesh.vercel.app/",
      role: "MERN Stack Developer",
      duration: "3 months",
      features: [
        "Decentralized data storage using blockchain",
        "AI-powered medical data analysis",
        "Secure user authentication and authorization",
        "Real-time data synchronization",
        "Privacy-focused data sharing protocols",
      ],
      challenges: [
        "Implementing blockchain integration for data security",
        "Optimizing AI model performance for real-time analysis",
        "Ensuring HIPAA compliance for medical data",
      ],
    },
    {
      id: 2,
      title: "FoodVal",
      description:
        "A waste-to-energy platform connecting food industries with biogas plants. Features secure authentication, real-time order tracking, and payment processing.",
      fullDescription:
        "FoodVal addresses the critical issue of food waste management by creating a digital marketplace that connects food industries with biogas plants and composting facilities. The platform streamlines the process of converting organic waste into valuable resources like biogas and compost, promoting circular economy principles and sustainable waste management practices.",
      technologies: ["React", "TypeScript", "ShadCN", "Node.js", "Express.js", "MongoDB", "Auth0", "Stripe"],
      github: "https://github.com/Khushi-Bedmutha/FoodVal",
      live: "https://foodval-frontend.onrender.com/",
      role: "MERN Stack Developer",
      duration: "2 months",
      features: [
        "Industry-biogas plant matching system",
        "Real-time order tracking and management",
        "Secure payment processing with Stripe",
        "Auth0 integration for authentication",
        "Responsive design for all devices",
      ],
      challenges: [
        "Implementing complex order management system",
        "Integrating multiple third-party services",
        "Optimizing database queries for performance",
      ],
    },
    {
      id: 3,
      title: "MealsForYou",
      description:
        "A student-focused meal planning application with polling functionality to optimize food selection in mess services based on majority preference.",
      fullDescription:
        "MealsForYou revolutionizes mess management in educational institutions by implementing a democratic approach to meal planning. The platform allows students to vote on meal preferences, helping mess administrators make data-driven decisions about menu planning while ensuring student satisfaction and reducing food waste.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Khushi-Bedmutha/MealsForYou",
      live: "https://meals-for-you.vercel.app",
      role: "Frontend Developer",
      duration: "1 month",
      features: [
        "Student polling system for meal preferences",
        "Real-time vote counting and results",
        "Admin dashboard for mess management",
        "Mobile-responsive design",
        "User-friendly interface",
      ],
      challenges: [
        "Implementing real-time polling without backend",
        "Creating responsive design with vanilla CSS",
        "Managing state with vanilla JavaScript",
      ],
    },
    {
      id: 4,
      title: "SmartShield",
      description:
        "IoT-based women safety device using Raspberry Pi. Features emergency switch, real-time location tracking, and automatic alert system with photo capture.",
      fullDescription:
        "SmartShield is a comprehensive IoT-based personal safety solution designed specifically for women's security. The device combines hardware and software components to provide immediate emergency response capabilities, including real-time location tracking, automatic alert systems, and evidence collection through photo capture.",
      technologies: ["Raspberry Pi", "IoT", "Python", "LAN", "Camera Module"],
      github: "https://github.com/Khushi-Bedmutha/SmartShield",
      live: "#",
      role: "IoT Developer",
      duration: "2 months",
      features: [
        "Emergency button for instant alerts",
        "Real-time GPS location tracking",
        "Automatic photo capture and transmission",
        "Multiple emergency contact notification",
        "Low-power consumption design",
      ],
      challenges: [
        "Integrating hardware components with software",
        "Ensuring reliable network connectivity",
        "Optimizing power consumption for portability",
      ],
    },
    {
      id: 5,
      title: "PriceCompare",
      description: "A price comparison application to help users find the best deals across different platforms.",
      fullDescription:
        "PriceCompare is a comprehensive price comparison platform that aggregates product prices from multiple e-commerce websites, helping users make informed purchasing decisions. The application features real-time price tracking, price history analysis, and personalized deal notifications.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/Khushi-Bedmutha/PriceCompare",
      live: "#",
      role: "Full Stack Developer",
      duration: "1.5 months",
      features: [
        "Multi-platform price aggregation",
        "Real-time price tracking",
        "Price history and trend analysis",
        "User wishlist and notifications",
        "Product comparison tools",
      ],
      challenges: [
        "Web scraping from multiple sources",
        "Handling rate limiting and anti-bot measures",
        "Real-time data synchronization",
      ],
    },
    {
      id: 6,
      title: "PrimeStudyAbroad",
      description: "A comprehensive platform for students seeking study abroad opportunities and guidance.",
      fullDescription:
        "PrimeStudyAbroad is a complete educational consultancy platform that connects students with study abroad opportunities. The platform provides comprehensive information about universities, courses, application processes, and visa requirements, along with personalized counseling services.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/Khushi-Bedmutha/prime",
      live: "https://prime-study.netlify.app",
      role: "Frontend Developer",
      duration: "2 months",
      features: [
        "University and course database",
        "Application tracking system",
        "Document management",
        "Counselor-student communication",
        "Visa and immigration guidance",
      ],
      challenges: [
        "Managing large datasets efficiently",
        "Implementing complex filtering systems",
        "Creating intuitive user workflows",
      ],
    },
  ]

  const achievements = [
    {
      title: "IIC Winner 2024",
      organization: "Institution's Innovation Council",
      date: "2024",
      type: "Winner",
      description: "Won the Institution's Innovation Council competition for innovative project development.",
      icon: "🏆",
    },
    {
      title: "Smart India Hackathon 2024 Finalist",
      organization: "Government of India",
      date: "2024",
      type: "Finalist",
      description: "Selected as finalist in the prestigious Smart India Hackathon 2024.",
      icon: "🥈",
    },
    {
      title: "HackOverFlow 3.0 Finalist",
      organization: "Technical Competition",
      date: "2024",
      type: "Finalist",
      description: "Reached finals in HackOverFlow 3.0 hackathon competition.",
      icon: "🥉",
    },
    {
      title: "IoT Mini Project Competition",
      organization: "College Competition",
      date: "2024",
      type: "3rd Position",
      description: "Secured third position in IoT Mini Project Competition.",
      icon: "🏅",
    },
    {
      title: "NPTEL DBMS Certification",
      organization: "NPTEL",
      date: "2024",
      type: "Certified",
      description: "Successfully completed Database Management Systems course from NPTEL.",
      icon: "📜",
    },
    {
      title: "AWS Academy Graduate",
      organization: "Amazon Web Services",
      date: "2025",
      type: "Certified",
      description: "AWS Academy Cloud Foundations certification.",
      icon: "☁️",
    },
  ]

  const experiences = [
    {
      title: "Frontend Development Intern",
      company: "Prime Study Abroad",
      period: "Nov 2024 - Dec 2024",
      description:
        "Built a full-stack web application using React, Node.js, Express.js, and MongoDB. Worked on UI design, backend API development, user authentication, and API integration.",
      type: "Internship",
      website: "https://prime-study.netlify.app",
    },
    {
      title: "Frontend Developer Intern",
      company: "AICTE IDEA LAB 2025 Internship Program",
      period: "July 2025 - Present",
      description: "Working on frontend development projects as part of the AICTE IDEA LAB internship program.",
      type: "Internship",
    },
  ]

  const activities = [
    {
      title: "Secretary",
      organization: "CSI KKWIEER Student Chapter",
      period: "March 2025 - Present",
      description: "Leading student chapter activities and organizing technical events.",
    },
    {
      title: "Board Of Director HR & Development",
      organization: "Elite Club",
      period: "Dec 2024 - Present",
      description: "Managing HR and development activities for the Elite Club.",
    },
    {
      title: "Organizing Committee and Anchor",
      organization: "Maffick Anchoring, Innovera National Level Hackathon",
      period: "March 2025",
      description: "Organized and anchored national level hackathon events.",
    },
  ]

  const filteredSkills = skills.filter(
    (skill) =>
      (activeSkillCategory === "All" || skill.category === activeSkillCategory) &&
      skill.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create mailto link with form data
    const subject = encodeURIComponent(contactForm.subject || "Portfolio Contact")
    const body = encodeURIComponent(
      `Name: ${contactForm.name}\nEmail: ${contactForm.email}\n\nMessage:\n${contactForm.message}`,
    )
    window.location.href = `mailto:khushparv@gmail.com?subject=${subject}&body=${body}`

    // Reset form
    setContactForm({ name: "", email: "", subject: "", message: "" })
  }

  const downloadResume = () => {
    // Create a temporary link to download resume
    const link = document.createElement("a")
    link.href = "/Khushi_Bedmutha_Resume.pdf" // Resume file in public folder
    link.download = "Khushi_Bedmutha_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600">Loading Portfolio...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-900 transition-all duration-500">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-200/50 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full backdrop-blur-md border-b border-slate-200/50 z-40 bg-white/80 transition-all duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link
              href="#"
              className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Khushi Bedmutha
            </Link>
            <div className="hidden md:flex space-x-8">
              {["about", "skills", "projects", "experience", "achievements", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section === "about" ? "home" : section)}
                  className="text-slate-600 hover:text-blue-600 transition-colors capitalize"
                >
                  {section}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-500" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-full blur-3xl transform -translate-y-1/2"></div>
        <div className="container mx-auto relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Heart className="w-5 h-5 text-red-500 animate-pulse" />
              <span className="text-slate-600 text-sm">Passionate about creating amazing experiences</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
              Hi, I'm Khushi.
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent min-h-[3rem] flex items-center justify-center">
              {typedText}
              <span className="animate-pulse ml-1">|</span>
            </h2>

            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              As a MERN Stack developer, I build user-focused web applications by combining strong technical skills with
              clear communication and teamwork. I'm driven by curiosity, collaboration, and a passion for continuous
              learning.
            </p>

            <div className="flex gap-4 mb-8 justify-center">
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="https://github.com/Khushi-Bedmutha" target="_blank">
                  View My Work
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                variant="outline"
                onClick={downloadResume}
                className="border-slate-300 hover:bg-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 bg-transparent"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>

            <div className="flex gap-6 justify-center">
              <Link
                href="https://github.com/Khushi-Bedmutha"
                target="_blank"
                className="text-slate-600 hover:text-blue-600 transition-all duration-300 hover:scale-110"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/khushi-bedmutha-850041257/"
                target="_blank"
                className="text-slate-600 hover:text-blue-600 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href="mailto:khushparv@gmail.com"
                className="text-slate-600 hover:text-blue-600 transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-50/50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-slate-600 text-lg">Technologies I use to build exceptional web applications</p>
          </div>

          {/* Search */}
          <div className="max-w-md mx-auto mb-8 animate-fade-in-up animation-delay-100">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-600 w-4 h-4" />
              <Input
                placeholder="Search skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/80 border-slate-300 backdrop-blur-sm"
              />
            </div>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up animation-delay-200">
            {skillCategories.map((category) => (
              <Button
                key={category.name}
                onClick={() => setActiveSkillCategory(category.name)}
                variant={activeSkillCategory === category.name ? "default" : "outline"}
                className={
                  activeSkillCategory === category.name
                    ? `${category.color} text-white shadow-lg`
                    : "border-slate-300 hover:bg-slate-100"
                }
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredSkills.map((skill, index) => (
              <Card
                key={skill.name}
                className="bg-white/80 border-slate-200 backdrop-blur-sm shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold group-hover:text-blue-600 transition-colors mb-2 text-lg">
                    {skill.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-slate-600 text-lg">A selection of my recent work showcasing various technologies</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="bg-white/80 border-slate-200 backdrop-blur-sm shadow-sm hover:shadow-2xl transition-all duration-500 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </CardTitle>
                      <Badge variant="outline" className="text-xs mb-3">
                        {project.role}
                      </Badge>
                    </div>
                    <div className="flex gap-2">
                      <Link
                        href={project.github}
                        target="_blank"
                        className="text-slate-600 hover:text-blue-600 transition-all duration-300 hover:scale-110"
                      >
                        <Github className="w-5 h-5" />
                      </Link>
                      {project.live !== "#" && (
                        <Link
                          href={project.live}
                          target="_blank"
                          className="text-slate-600 hover:text-blue-600 transition-all duration-300 hover:scale-110"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </Link>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4 text-sm line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="w-full bg-transparent">
                        View Details
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-white border-slate-200">
                      <DialogHeader>
                        <DialogTitle className="text-2xl mb-4">{project.title}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-2">Overview</h4>
                          <p className="text-slate-600">{project.fullDescription}</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-2">Key Features</h4>
                            <ul className="space-y-1">
                              {project.features?.map((feature, idx) => (
                                <li key={idx} className="text-slate-600 text-sm flex items-start gap-2">
                                  <span className="text-emerald-500 mt-1">•</span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Challenges Overcome</h4>
                            <ul className="space-y-1">
                              {project.challenges?.map((challenge, idx) => (
                                <li key={idx} className="text-slate-600 text-sm flex items-start gap-2">
                                  <span className="text-orange-500 mt-1">•</span>
                                  {challenge}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <Badge key={tech} variant="outline">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-4 pt-4">
                          <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600">
                            <Link href={project.github} target="_blank">
                              <Github className="w-4 h-4 mr-2" />
                              View Code
                            </Link>
                          </Button>
                          {project.live !== "#" && (
                            <Button variant="outline" asChild>
                              <Link href={project.live} target="_blank">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Live Demo
                              </Link>
                            </Button>
                          )}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-slate-50/50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Experience
            </h2>
            <p className="text-slate-600 text-lg">My professional experience and internships</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="bg-white/80 border-slate-200 backdrop-blur-sm shadow-sm hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <Badge className="bg-emerald-100 text-emerald-800">{exp.type}</Badge>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <p className="text-blue-600 font-medium">{exp.company}</p>
                        {exp.website && (
                          <Link
                            href={exp.website}
                            target="_blank"
                            className="text-slate-400 hover:text-blue-600 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mb-4">
                        <Calendar className="w-4 h-4 text-slate-400" />
                        <p className="text-slate-600 text-sm">{exp.period}</p>
                      </div>
                      <p className="text-slate-600">{exp.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Achievements & Certifications
            </h2>
            <p className="text-slate-600 text-lg">Recognition and certifications earned throughout my journey</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="bg-white/80 border-slate-200 backdrop-blur-sm shadow-sm hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl">{achievement.icon}</span>
                        <Badge
                          className={`${
                            achievement.type === "Winner"
                              ? "bg-emerald-100 text-emerald-800"
                              : achievement.type === "Finalist"
                                ? "bg-blue-100 text-blue-800"
                                : achievement.type === "Certified"
                                  ? "bg-purple-100 text-purple-800"
                                  : "bg-orange-100 text-orange-800"
                          }`}
                        >
                          {achievement.type}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg mb-2">{achievement.title}</CardTitle>
                      <div className="text-slate-600 text-sm mb-2 flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        {achievement.organization} • {achievement.date}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Activities */}
      <section className="py-20 px-4 bg-slate-50/50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Leadership & Activities
            </h2>
            <p className="text-slate-600 text-lg">My involvement in various organizations and leadership roles</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <Card
                key={index}
                className="bg-white/80 border-slate-200 backdrop-blur-sm shadow-sm hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{activity.title}</h3>
                      <p className="text-blue-600 mb-2 font-medium">{activity.organization}</p>
                      <div className="flex items-center gap-2 mb-3">
                        <Calendar className="w-4 h-4 text-slate-400" />
                        <p className="text-slate-600 text-sm">{activity.period}</p>
                      </div>
                      <p className="text-slate-600 text-sm">{activity.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Education
            </h2>
            <p className="text-slate-600 text-lg">My academic background and qualifications</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="bg-white/80 border-slate-200 backdrop-blur-sm shadow-sm hover:shadow-2xl transition-all duration-500 animate-fade-in-up">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Bachelor of Technology in Computer Engineering</h3>
                    <p className="text-slate-600">K. K. Wagh Institute of Engineering and Research, Nashik</p>
                    <div className="flex items-center gap-4 text-sm mt-2">
                      <span className="text-slate-600">2022 - Present</span>
                      <span>•</span>
                      <span className="text-blue-600 font-semibold">CGPA: 8.06</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 border-slate-200 backdrop-blur-sm shadow-sm hover:shadow-2xl transition-all duration-500 animate-fade-in-up animation-delay-100">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Higher Secondary Certificate (HSC)</h3>
                    <p className="text-slate-600">HSC Board</p>
                    <div className="flex items-center gap-4 text-sm mt-2">
                      <span className="text-slate-600">2020 - 2022</span>
                      <span>•</span>
                      <span className="text-emerald-600 font-semibold">87.33%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 border-slate-200 backdrop-blur-sm shadow-sm hover:shadow-2xl transition-all duration-500 animate-fade-in-up animation-delay-200">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Secondary School Certificate (SSC)</h3>
                    <p className="text-slate-600">CBSE Board</p>
                    <div className="flex items-center gap-4 text-sm mt-2">
                      <span className="text-slate-600">2019 - 2020</span>
                      <span>•</span>
                      <span className="text-purple-600 font-semibold">89.6%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-50/50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-slate-600 text-lg">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
          </div>

          {/* Contact Information - Updated structure */}
          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white/80 border-slate-200 backdrop-blur-sm shadow-sm hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <Link href="mailto:khushparv@gmail.com" className="text-blue-600 hover:underline text-sm break-all">
                      khushparv@gmail.com
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 border-slate-200 backdrop-blur-sm shadow-sm hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Linkedin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">LinkedIn</h3>
                      <Link
                        href="https://www.linkedin.com/in/khushi-bedmutha-850041257/"
                        target="_blank"
                        className="text-blue-600 hover:underline text-sm break-all"
                      >
                        Connect with me
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 border-slate-200 backdrop-blur-sm shadow-sm hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-900 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Github className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">GitHub</h3>
                      <Link
                        href="https://github.com/Khushi-Bedmutha"
                        target="_blank"
                        className="text-blue-600 hover:underline text-sm break-all"
                      >
                        View my repositories
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-200/50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600">&copy; 2025 Khushi Bedmutha. All rights reserved.</p>
            <div className="flex gap-6">
              <Link
                href="https://github.com/Khushi-Bedmutha"
                target="_blank"
                className="text-slate-600 hover:text-blue-600 transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/khushi-bedmutha-850041257/"
                target="_blank"
                className="text-slate-600 hover:text-blue-600 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:khushparv@gmail.com"
                className="text-slate-600 hover:text-blue-600 transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 z-40"
          size="icon"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}
    </div>
  )
}
