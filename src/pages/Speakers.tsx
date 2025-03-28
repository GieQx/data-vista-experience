
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SpeakerCard } from "@/components/SpeakerCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Speakers = () => {
  // Sample data for speakers
  const keynoteSpeakers = [
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
  
  const panelSpeakers = [
    {
      name: "Dr. James Perez",
      title: "Senior Economist",
      organization: "Central Bank",
      bio: "Expert in econometric modeling and forecasting with a focus on policy implications for sustainable development.",
      image: "https://randomuser.me/api/portraits/men/33.jpg",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Dr. Maria Rodriguez",
      title: "Public Health Statistician",
      organization: "World Health Organization",
      bio: "Specializes in statistical methods for population health monitoring and epidemiological research.",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Prof. David Aquino",
      title: "Professor of Statistics",
      organization: "Stanford University",
      bio: "Renowned educator and researcher in statistical theory with contributions to experimental design and analysis.",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Dr. Lisa Martin",
      title: "Chief Data Officer",
      organization: "National Research Council",
      bio: "Pioneer in developing data governance frameworks for large-scale statistical operations and open data initiatives.",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      linkedin: "#",
      twitter: "#"
    }
  ];
  
  const workshopLeaders = [
    {
      name: "Dr. Thomas",
      title: "Machine Learning Specialist",
      organization: "DataTech Solutions",
      bio: "Expert in applying machine learning techniques to statistical problems and developing predictive models.",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Dr. Chen",
      title: "Biostatistician",
      organization: "Health Research Institute",
      bio: "Specializes in statistical methods for clinical trials and health data analysis.",
      image: "https://randomuser.me/api/portraits/men/54.jpg",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Prof. Mark Dan Navarro",
      title: "Environmental Statistician",
      organization: "Climate Research Center",
      bio: "Focuses on statistical modeling of environmental data and climate change analysis.",
      image: "https://randomuser.me/api/portraits/men/62.jpg",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Dr. Jennifer Lopez",
      title: "Statistical Software Developer",
      organization: "Statistical Tools Inc.",
      bio: "Develops innovative statistical software tools and packages for data scientists and researchers.",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      linkedin: "#",
      twitter: "#"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-stats-yellow to-stats-orange text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Speakers</h1>
            <p className="text-lg md:text-xl mb-8">
              Learn from the world's leading experts in statistics and data science at NCS 2025.
            </p>
          </div>
        </div>
      </section>
      
      {/* Speaker Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="keynote" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-stats-light">
                <TabsTrigger value="keynote" className="px-6">Keynote Speakers</TabsTrigger>
                <TabsTrigger value="panel" className="px-6">Panel Moderators</TabsTrigger>
                <TabsTrigger value="workshop" className="px-6">Workshop Leaders</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="keynote">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold mb-4">Keynote Speakers</h2>
                <p className="text-lg text-muted-foreground">
                  Our keynote speakers will share cutting-edge insights and visionary perspectives on the future of statistics.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {keynoteSpeakers.map((speaker, index) => (
                  <SpeakerCard key={index} {...speaker} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="panel">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold mb-4">Panel Moderators</h2>
                <p className="text-lg text-muted-foreground">
                  Expert moderators who will lead engaging discussions on critical statistical topics and challenges.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {panelSpeakers.map((speaker, index) => (
                  <SpeakerCard key={index} {...speaker} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="workshop">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold mb-4">Workshop Leaders</h2>
                <p className="text-lg text-muted-foreground">
                  Skilled instructors who will guide hands-on workshops to enhance your practical statistical skills.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {workshopLeaders.map((speaker, index) => (
                  <SpeakerCard key={index} {...speaker} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Call for Speakers */}
      <section className="py-16 bg-stats-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Become a Speaker</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're still accepting proposals for additional speakers. Share your statistical expertise and innovations with our global audience.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Speaker Submission Guidelines</h3>
              <ul className="text-left mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-stats-blue mr-2">•</span>
                  <span>Presentations should focus on advances in statistical methods, applications, or education</span>
                </li>
                <li className="flex items-start">
                  <span className="text-stats-blue mr-2">•</span>
                  <span>Proposals must include an abstract (300 words max) and speaker biography</span>
                </li>
                <li className="flex items-start">
                  <span className="text-stats-blue mr-2">•</span>
                  <span>Priority given to topics related to sustainable development, AI integration, or innovative methodologies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-stats-blue mr-2">•</span>
                  <span>Submission deadline: August 15, 2025</span>
                </li>
              </ul>
              <button className="bg-stats-blue text-white font-medium py-2 px-6 rounded-md hover:bg-stats-blue/90 transition">
                Submit Proposal
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Speakers;
