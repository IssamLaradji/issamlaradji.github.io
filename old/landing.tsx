'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Book, Mail, GraduationCap, ChevronDown, Github, Linkedin, Twitter, Calendar, Users, Newspaper, Rocket, FileQuestion } from 'lucide-react'
import { motion } from 'framer-motion'

export default function EnhancedAILandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
      {/* Header */}
      <header className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-gray-900/80 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="container mx-auto flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold">Prof. Jane Doe</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#research" className="hover:text-blue-400 transition-colors">Research</a></li>
              <li><a href="#events" className="hover:text-blue-400 transition-colors">Events</a></li>
              <li><a href="#communities" className="hover:text-blue-400 transition-colors">Communities</a></li>
              <li><a href="#blog" className="hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="#quizzes" className="hover:text-blue-400 transition-colors">Quizzes</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <motion.h1 
            className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Advancing AI Research and Education
          </motion.h1>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Exploring the frontiers of Artificial Intelligence at Stanford University
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Explore My Research
            </Button>
          </motion.div>
        </div>
        <motion.div 
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <ChevronDown className="animate-bounce" size={32} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="w-full md:w-1/3"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="/placeholder.svg?height=400&width=400" 
                alt="Professor Jane Doe" 
                className="rounded-full shadow-lg border-4 border-blue-500"
              />
            </motion.div>
            <motion.div 
              className="w-full md:w-2/3"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg mb-6">
                As a professor specializing in Artificial Intelligence at Stanford University, 
                I am dedicated to pushing the boundaries of AI research and educating the 
                next generation of AI professionals.
              </p>
              <p className="text-lg mb-6">
                My work focuses on developing advanced machine learning algorithms, 
                exploring the ethical implications of AI, and creating innovative 
                applications in natural language processing.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
                  Download CV
                </Button>
                <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white">
                  View Publications
                </Button>
                <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white">
                  Book Consultation
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section id="research" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Research Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Brain, title: "Machine Learning", description: "Exploring advanced algorithms and neural network architectures for improved AI capabilities." },
              { icon: GraduationCap, title: "AI Ethics", description: "Investigating the ethical implications of AI in society and developing frameworks for responsible AI." },
              { icon: Book, title: "Natural Language Processing", description: "Developing cutting-edge models for understanding and generating human language." }
            ].map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center text-blue-400">
                      <area.icon className="mr-2" size={24} />
                      {area.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{area.description}</p>
                  </Content>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="events" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "AI Ethics Symposium", date: "June 15, 2023", description: "A day-long symposium discussing the ethical implications of AI in society." },
              { title: "Machine Learning Workshop", date: "July 10, 2023", description: "Hands-on workshop on advanced machine learning techniques." },
              { title: "NLP Conference Keynote", date: "August 5, 2023", description: "Keynote speech at the International NLP Conference." }
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-700 hover:bg-gray-600 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-blue-300">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-2"><Calendar className="inline mr-2" size={16} />{event.date}</p>
                    <p className="text-gray-400">{event.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Communities Section */}
      <section id="communities" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Communities I Run</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "AI Ethics Forum", description: "A community dedicated to discussing and shaping ethical AI practices." },
              { name: "ML Researchers Network", description: "A network for machine learning researchers to collaborate and share insights." }
            ].map((community, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center text-purple-400">
                      <Users className="mr-2" size={24} />
                      {community.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{community.description}</p>
                    <Button className="mt-4 bg-purple-600 hover:bg-purple-700">Join Community</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Gallery */}
      <section id="blog" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "The Future of AI in Healthcare", date: "May 1, 2023", excerpt: "Exploring how AI is revolutionizing medical diagnosis and treatment..." },
              { title: "Ethical Considerations in AI Development", date: "April 15, 2023", excerpt: "Discussing the importance of ethics in AI and how to implement..." },
              { title: "Advancements in Natural Language Processing", date: "March 30, 2023", excerpt: "Recent breakthroughs in NLP and their potential applications..." }
            ].map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-700 hover:bg-gray-600 transition-colors h-full flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-blue-300">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-400 mb-2">{post.date}</p>
                    <p className="text-gray-300">{post.excerpt}</p>
                  </CardContent>
                  <CardContent className="pt-0">
                    <Button variant="link" className="text-blue-400 hover:text-blue-300 p-0">Read More</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
              View All Posts
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "AI-Powered Medical Diagnosis", description: "Developed an AI system that assists doctors in diagnosing complex medical conditions." },
              { title: "Ethical AI Framework", description: "Created a comprehensive framework for implementing ethical considerations in AI development." },
              { title: "Advanced NLP Model", description: "Built a state-of-the-art natural language processing model for improved language understanding." },
              { title: "AI in Education Platform", description: "Designed an AI-driven platform to personalize learning experiences for students." }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20
                }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-800 border-gray-700 hover:border-green-500 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-400">
                      <Rocket className="mr-2" size={24} />
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{project.description}</p>
                    <Button className="mt-4 bg-green-600 hover:bg-green-700">Learn More</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quizzes Section */}
      <section id="quizzes" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">AI Knowledge Quizzes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "AI Basics", description: "Test your knowledge of fundamental AI concepts." },
              { title: "Machine Learning Algorithms", description: "Challenge yourself with questions about various ML algorithms." },
              { title: "AI Ethics", description: "Explore ethical considerations in AI development." }
            ].map((quiz, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-700 hover:bg-gray-600 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center text-yellow-300">
                      <FileQuestion className="mr-2" size={24} />
                      {quiz.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{quiz.description}</p>
                    <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-gray-900">Take Quiz</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto max-w-md px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
          <motion.form 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Input placeholder="Your Name" className="bg-gray-800 border-gray-700 text-white" />
            <Input type="email" placeholder="Your Email" className="bg-gray-800 border-gray-700 text-white" />
            <Textarea placeholder="Your Message" className="bg-gray-800 border-gray-700 text-white" />
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">Send Message</Button>
          </motion.form>
          <div className="mt-8 text-center">
            <p className="text-gray-400 mb-2">Available for grad school consultations</p>
            <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Twitter size={24} />
            </a>
          </div>
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Prof. Jane Doe. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

