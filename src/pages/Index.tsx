
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { SpeakerCard } from "@/components/SpeakerCard";
import { AgendaTab } from "@/components/AgendaTab";
import { ThreeColumnFeature } from "@/components/ThreeColumnFeature";
import { DataVisualization } from "@/components/DataVisualization";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  BarChart4, PieChart, LineChart, Users, Globe, BookOpen, 
  Lightbulb, Award, Network, MessageCircle, Download, Share2 
} from "lucide-react";

const Index = () => {
  // Sample data for featured speakers
  const speakers = [
    {
      name: "Dr. Juana dela Cruz",
      title: "Chief Statistician",
      organization: "National Statistics Office",
      bio: "Leading expert in national statistical systems with over 20 years of experience in developing statistical methodologies.",
      image: "https://randomuser.me/api/portraits/women/01.jpg",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Prof. Michael Santos",
      title: "Director",
      organization: "International Data Science Institute",
      bio: "Pioneering researcher in integrating AI with traditional statistical methods to enhance data analysis capabilities.",
      image: "https://randomuser.me/api/portraits/men/02.jpg",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Dr. Emily Reyes",
      title: "Head of Data Visualization",
      organization: "Global Analytics Corporation",
      bio: "Award-winning data visualization expert who transforms complex statistical information into compelling visual narratives.",
      image: "https://randomuser.me/api/portraits/women/03.jpg",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Dr. Robert Garcia",
      title: "AI Research Lead",
      organization: "Tech Innovation Labs",
      bio: "Leading authority on artificial intelligence applications in statistical analysis and predictive modeling.",
      image: "https://randomuser.me/api/portraits/men/04.jpg",
      linkedin: "#"
    }
  ];

  // Features for three column layout
  const eventFeatures = [
    {
      icon: <Lightbulb size={24} />,
      title: "Keynote Presentations",
      description: "Hear from world-renowned statisticians and data scientists sharing groundbreaking research and insights."
    },
    {
      icon: <Users size={24} />,
      title: "Expert Panels",
      description: "Engage with diverse panels discussing the future of statistics in policy-making and development planning."
    },
    {
      icon: <BookOpen size={24} />,
      title: "Hands-on Workshops",
      description: "Participate in interactive workshops to enhance your practical skills with cutting-edge statistical tools."
    }
  ];

  const resourceFeatures = [
    {
      icon: <Download size={24} />,
      title: "Resource Library",
      description: "Access a comprehensive collection of statistical reports, methodologies, and research papers."
    },
    {
      icon: <Network size={24} />,
      title: "Networking Hub",
      description: "Connect with professionals, researchers, and policy makers through our dedicated networking platform."
    },
    {
      icon: <MessageCircle size={24} />,
      title: "Live Q&A Sessions",
      description: "Interact directly with speakers and experts through moderated question and answer sessions."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">About the Convention</h2>
            <p className="text-lg text-muted-foreground">
              The National Convention on Statistics 2025 brings together professionals, researchers, and policy makers to explore the latest advancements in statistical methodologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-stats-blue mb-4">Empowering Data-Driven Decisions</h3>
              <p className="mb-4">
                The NCS 2025 showcases cutting-edge statistical methodologies and promotes collaboration between statisticians, data scientists, and policy makers to advance data-informed decision making.
              </p>
              <p className="mb-6">
                Through keynote presentations, expert panels, and interactive workshops, participants will explore the transformative potential of statistics in shaping national policies and strategies.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="h-10 w-10 rounded-full bg-stats-teal/10 flex items-center justify-center text-stats-teal">
                    <Users size={20} />
                  </div>
                  <span className="font-medium">1500+ Attendees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-10 w-10 rounded-full bg-stats-blue/10 flex items-center justify-center text-stats-blue">
                    <Globe size={20} />
                  </div>
                  <span className="font-medium">50+ Schools/Agencies</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-10 w-10 rounded-full bg-stats-aqua/10 flex items-center justify-center text-stats-aqua">
                    <Award size={20} />
                  </div>
                  <span className="font-medium">20+ Speakers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-10 w-10 rounded-full bg-stats-green/10 flex items-center justify-center text-stats-green">
                    <Share2 size={20} />
                  </div>
                  <span className="font-medium">30+ Sessions</span>
                </div>
              </div>
              
              <Button className="bg-stats-teal hover:bg-stats-blue text-white">Learn More</Button>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg">
              <DataVisualization />
            </div>
          </div>
        </div>
      </section>
      
      {/* Event Features */}
      <section className="py-16 bg-stats-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">What to Expect</h2>
            <p className="text-lg text-muted-foreground">
              Join us for three days of enriching experiences designed to expand your statistical knowledge and network.
            </p>
          </div>
          
          <ThreeColumnFeature features={eventFeatures} />
        </div>
      </section>
      
      {/* Speakers Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Featured Speakers</h2>
            <p className="text-lg text-muted-foreground">
              Learn from the world's leading experts in statistics and data science.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {speakers.map((speaker, index) => (
              <SpeakerCard key={index} {...speaker} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button variant="outline" className="border-stats-teal text-stats-teal hover:bg-stats-teal/10">
              View All Speakers
            </Button>
          </div>
        </div>
      </section>
      
      {/* Agenda Section */}
      <section className="py-16 bg-stats-blue text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Event Schedule</h2>
            <p className="text-lg opacity-90">
              Three days packed with insightful sessions, workshops, and networking opportunities.
            </p>
          </div>
          
          <div className="bg-white text-stats-blue rounded-lg shadow-lg p-6">
            <AgendaTab />
          </div>
          
          <div className="text-center mt-10">
            <Button className="bg-white text-stats-blue hover:bg-stats-light">
              Download Full Schedule
            </Button>
          </div>
        </div>
      </section>
      
      {/* Resources Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Resources & Tools</h2>
            <p className="text-lg text-muted-foreground">
              Access valuable resources to enhance your understanding of statistical concepts and methodologies.
            </p>
          </div>
          
          <ThreeColumnFeature features={resourceFeatures} />
          
          <div className="mt-12 p-6 bg-stats-light rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <div className="text-center md:text-left col-span-1 md:col-span-2">
                <h3 className="text-xl font-bold mb-2">Statistical Data Explorer</h3>
                <p className="text-muted-foreground">
                  Try our interactive data exploration tool to visualize statistical trends and relationships.
                </p>
              </div>
              <div className="text-center md:text-right">
                <Button className="bg-stats-teal hover:bg-stats-blue text-white">
                  Launch Explorer
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Registration Section */}
      <section className="py-16 gradient-bg text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Register for NCS 2025</h2>
            <p className="text-lg opacity-90">
              Secure your spot at the most influential statistics event of the year.
            </p>
          </div>
          
          <div className="bg-white text-stats-blue rounded-lg shadow-lg p-6 md:p-8 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">First Name</label>
                <Input placeholder="Your first name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Last Name</label>
                <Input placeholder="Your last name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <Input type="email" placeholder="Your email address" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Organization</label>
                <Input placeholder="Your organization" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">What are you most interested in?</label>
                <Textarea placeholder="Tell us about your interests" />
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Button className="bg-stats-blue hover:bg-stats-blue/90 text-white font-medium py-6 px-8 w-full md:w-auto">
                Complete Registration
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Statistics Components */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Statistics in Action</h2>
            <p className="text-lg text-muted-foreground">
              Explore how statistical methods are transforming various sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-stats-light rounded-lg p-6 hover-scale hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-stats-blue text-white flex items-center justify-center mb-4">
                <BarChart4 size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Economic Analysis</h3>
              <p className="text-muted-foreground mb-4">
                Using statistical methods to forecast economic trends and inform policy decisions.
              </p>
              <Button variant="link" className="text-stats-blue p-0 h-auto">Learn More &rarr;</Button>
            </div>
            
            <div className="bg-stats-light rounded-lg p-6 hover-scale hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-stats-teal text-white flex items-center justify-center mb-4">
                <PieChart size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Public Health Statistics</h3>
              <p className="text-muted-foreground mb-4">
                Harnessing data to track health outcomes and improve healthcare delivery systems.
              </p>
              <Button variant="link" className="text-stats-teal p-0 h-auto">Learn More &rarr;</Button>
            </div>
            
            <div className="bg-stats-light rounded-lg p-6 hover-scale hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-stats-green text-white flex items-center justify-center mb-4">
                <LineChart size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Environmental Monitoring</h3>
              <p className="text-muted-foreground mb-4">
                Statistical approaches for tracking environmental changes and sustainability metrics.
              </p>
              <Button variant="link" className="text-stats-green p-0 h-auto">Learn More &rarr;</Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
