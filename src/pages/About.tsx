
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, Globe, BookOpen, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-stats-blue to-stats-teal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About NCS 2025</h1>
            <p className="text-lg md:text-xl mb-8">
              Learn about the National Convention on Statistics 2025 and our mission to advance the field of statistics for a sustainable future.
            </p>
          </div>
        </div>
      </section>
      
      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="mb-4 text-lg text-muted-foreground">
                The National Convention on Statistics 2025 is the premiere event for statistics professionals, researchers, and policy makers to collaborate on data-driven solutions for sustainable development.
              </p>
              <p className="mb-6 text-lg text-muted-foreground">
                Our goal is to bridge the gap between statistical theory and practical applications, fostering innovation and knowledge exchange across sectors.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4">Core Values</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <div className="h-6 w-6 mt-1 rounded-full bg-stats-green/20 flex items-center justify-center text-stats-green">
                    <BookOpen size={14} />
                  </div>
                  <span className="text-muted-foreground">Advancing statistical knowledge through rigorous research and education</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="h-6 w-6 mt-1 rounded-full bg-stats-teal/20 flex items-center justify-center text-stats-teal">
                    <Globe size={14} />
                  </div>
                  <span className="text-muted-foreground">Promoting data-driven decision-making for sustainable development</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="h-6 w-6 mt-1 rounded-full bg-stats-blue/20 flex items-center justify-center text-stats-blue">
                    <Users size={14} />
                  </div>
                  <span className="text-muted-foreground">Fostering inclusive collaboration across disciplines and sectors</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="h-6 w-6 mt-1 rounded-full bg-stats-aqua/20 flex items-center justify-center text-stats-aqua">
                    <Award size={14} />
                  </div>
                  <span className="text-muted-foreground">Recognizing excellence and innovation in statistical practice</span>
                </li>
              </ul>
              
              <Button className="bg-stats-blue hover:bg-stats-blue/90 text-white">Learn More</Button>
            </div>
            
            <div className="space-y-6">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                     alt="Statistics conference" 
                     className="w-full h-auto" />
              </div>
              
              <div className="bg-stats-light rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-2">Event History</h4>
                <p className="text-muted-foreground">
                  Founded in 1985, the National Convention on Statistics has evolved into a cornerstone event in the statistical community. Every three years, we bring together the brightest minds to address emerging challenges and opportunities in the field.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Statistics */}
      <section className="py-16 bg-stats-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">NCS 2025 by the Numbers</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-4xl font-bold text-stats-blue mb-2">1,500+</div>
              <div className="text-muted-foreground">Expected Attendees</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-4xl font-bold text-stats-teal mb-2">50+</div>
              <div className="text-muted-foreground">Countries Represented</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-4xl font-bold text-stats-aqua mb-2">100+</div>
              <div className="text-muted-foreground">Expert Speakers</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-4xl font-bold text-stats-green mb-2">30+</div>
              <div className="text-muted-foreground">Workshop Sessions</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet the Organizing Committee</h2>
            <p className="text-lg text-muted-foreground">
              Our dedicated team of professionals committed to making NCS 2025 an exceptional experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mb-4 relative mx-auto w-40 h-40 rounded-full overflow-hidden">
                <img 
                  src="https://randomuser.me/api/portraits/women/76.jpg" 
                  alt="Dr. Maria Rodriguez" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Dr. Maria Rodriguez</h3>
              <p className="text-stats-blue font-medium">Committee Chair</p>
              <p className="text-sm text-muted-foreground mt-2">
                National Statistics Office
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 relative mx-auto w-40 h-40 rounded-full overflow-hidden">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="Prof. James Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Prof. James Chen</h3>
              <p className="text-stats-blue font-medium">Academic Program Director</p>
              <p className="text-sm text-muted-foreground mt-2">
                National University
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 relative mx-auto w-40 h-40 rounded-full overflow-hidden">
                <img 
                  src="https://randomuser.me/api/portraits/women/45.jpg" 
                  alt="Dr. Sarah Johnson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Dr. Sarah Johnson</h3>
              <p className="text-stats-blue font-medium">Technical Program Lead</p>
              <p className="text-sm text-muted-foreground mt-2">
                International Data Institute
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 relative mx-auto w-40 h-40 rounded-full overflow-hidden">
                <img 
                  src="https://randomuser.me/api/portraits/men/67.jpg" 
                  alt="Dr. Michael Thompson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Dr. Michael Thompson</h3>
              <p className="text-stats-blue font-medium">Outreach Coordinator</p>
              <p className="text-sm text-muted-foreground mt-2">
                Global Statistics Foundation
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
