
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ThreeColumnFeature } from "@/components/ThreeColumnFeature";
import { Download, FileText, Video, Book, Lightbulb, Database, Link } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Resources = () => {
  // Features for resources layout
  const resourceFeatures = [
    {
      icon: <Download size={24} />,
      title: "Resource Library",
      description: "Access a comprehensive collection of statistical reports, methodologies, and research papers."
    },
    {
      icon: <FileText size={24} />,
      title: "Presentation Materials",
      description: "Download slides and handouts from previous conventions and workshops."
    },
    {
      icon: <Video size={24} />,
      title: "Video Archives",
      description: "Watch recorded sessions and presentations from past events."
    }
  ];

  const learningFeatures = [
    {
      icon: <Book size={24} />,
      title: "Learning Courses",
      description: "Self-paced courses on statistical methods, data visualization, and analysis techniques."
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Case Studies",
      description: "Real-world applications of statistical methods in various sectors and industries."
    },
    {
      icon: <Database size={24} />,
      title: "Open Datasets",
      description: "Curated datasets for practice, research, and educational purposes."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-stats-red to-stats-orange text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources & Tools</h1>
            <p className="text-lg md:text-xl mb-8">
              Access valuable resources to enhance your understanding of statistical concepts and methodologies.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Resources Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Convention Resources</h2>
            <p className="text-lg text-muted-foreground">
              Browse and download materials to support your statistical learning and professional development.
            </p>
          </div>
          
          <ThreeColumnFeature features={resourceFeatures} />
          
          <div className="mt-16">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Learning Materials</h2>
              <p className="text-lg text-muted-foreground">
                Enhance your skills with our educational content and training resources.
              </p>
            </div>
            
            <ThreeColumnFeature features={learningFeatures} />
          </div>
        </div>
      </section>
      
      {/* Resource Library */}
      <section className="py-16 bg-stats-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Resource Library</h2>
            <p className="text-lg text-muted-foreground">
              Browse our collection of publications, reports, and educational materials.
            </p>
          </div>
          
          <Tabs defaultValue="reports" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-white">
                <TabsTrigger value="reports" className="px-6">Reports & Papers</TabsTrigger>
                <TabsTrigger value="presentations" className="px-6">Presentations</TabsTrigger>
                <TabsTrigger value="datasets" className="px-6">Datasets</TabsTrigger>
                <TabsTrigger value="tools" className="px-6">Tools</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="reports">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-border rounded-lg p-4 hover:shadow-sm transition">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">Statistical Methodologies for Sustainable Development</h3>
                        <p className="text-sm text-muted-foreground mb-2">Published: March 2025</p>
                        <p className="text-sm mb-4">A comprehensive guide to statistical approaches for measuring and tracking sustainable development goals.</p>
                      </div>
                      <Button size="sm" variant="ghost" className="text-stats-blue">
                        <Download size={18} />
                      </Button>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <FileText size={14} className="mr-1" />
                      <span>PDF (2.4 MB)</span>
                    </div>
                  </div>
                  
                  <div className="border border-border rounded-lg p-4 hover:shadow-sm transition">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">AI Integration in National Statistical Systems</h3>
                        <p className="text-sm text-muted-foreground mb-2">Published: March 2025</p>
                        <p className="text-sm mb-4">Exploring the role of artificial intelligence in modernizing statistical operations and analysis.</p>
                      </div>
                      <Button size="sm" variant="ghost" className="text-stats-blue">
                        <Download size={18} />
                      </Button>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <FileText size={14} className="mr-1" />
                      <span>PDF (3.1 MB)</span>
                    </div>
                  </div>
                  
                  <div className="border border-border rounded-lg p-4 hover:shadow-sm transition">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">Statistical Literacy for Policy Makers</h3>
                        <p className="text-sm text-muted-foreground mb-2">Published: February 2025</p>
                        <p className="text-sm mb-4">A guide for policy makers on understanding and using statistical information effectively.</p>
                      </div>
                      <Button size="sm" variant="ghost" className="text-stats-blue">
                        <Download size={18} />
                      </Button>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <FileText size={14} className="mr-1" />
                      <span>PDF (1.8 MB)</span>
                    </div>
                  </div>
                  
                  <div className="border border-border rounded-lg p-4 hover:shadow-sm transition">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">Innovative Approaches to Data Collection</h3>
                        <p className="text-sm text-muted-foreground mb-2">Published: April 2025</p>
                        <p className="text-sm mb-4">Exploring new methods and technologies for efficient and accurate statistical data collection.</p>
                      </div>
                      <Button size="sm" variant="ghost" className="text-stats-blue">
                        <Download size={18} />
                      </Button>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <FileText size={14} className="mr-1" />
                      <span>PDF (2.9 MB)</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <Button variant="outline">View All Reports</Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="presentations">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="border border-border rounded-lg overflow-hidden hover:shadow-sm transition">
                    <div className="aspect-video bg-stats-light flex items-center justify-center">
                      <FileText size={48} className="text-stats-blue opacity-50" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold">Opening Keynote: The Future of Statistics</h3>
                      <p className="text-sm text-muted-foreground mb-3">NCS 2022 | Dr. Maria Rodriguez</p>
                      <Button size="sm" variant="outline" className="w-full">
                        <Download size={16} className="mr-2" /> Download Slides
                      </Button>
                    </div>
                  </div>
                  
                  <div className="border border-border rounded-lg overflow-hidden hover:shadow-sm transition">
                    <div className="aspect-video bg-stats-light flex items-center justify-center">
                      <FileText size={48} className="text-stats-blue opacity-50" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold">Data Visualization Best Practices</h3>
                      <p className="text-sm text-muted-foreground mb-3">Workshop | Dr. Emily Zhang</p>
                      <Button size="sm" variant="outline" className="w-full">
                        <Download size={16} className="mr-2" /> Download Slides
                      </Button>
                    </div>
                  </div>
                  
                  <div className="border border-border rounded-lg overflow-hidden hover:shadow-sm transition">
                    <div className="aspect-video bg-stats-light flex items-center justify-center">
                      <FileText size={48} className="text-stats-blue opacity-50" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold">AI and Machine Learning in Statistics</h3>
                      <p className="text-sm text-muted-foreground mb-3">Panel Discussion | Multiple Speakers</p>
                      <Button size="sm" variant="outline" className="w-full">
                        <Download size={16} className="mr-2" /> Download Slides
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <Button variant="outline">View All Presentations</Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="datasets">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-border rounded-lg p-4 hover:shadow-sm transition">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold">Global Sustainable Development Indicators</h3>
                        <p className="text-sm text-muted-foreground mb-2">Updated: March 2025</p>
                        <p className="text-sm mb-4">Comprehensive dataset of SDG indicators across countries and regions from 2015-2025.</p>
                        <div className="flex space-x-3 text-sm">
                          <span className="bg-stats-blue/10 text-stats-blue px-2 py-1 rounded-full">CSV</span>
                          <span className="bg-stats-blue/10 text-stats-blue px-2 py-1 rounded-full">Excel</span>
                          <span className="bg-stats-blue/10 text-stats-blue px-2 py-1 rounded-full">JSON</span>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        <Download size={16} className="mr-1" /> Download
                      </Button>
                    </div>
                  </div>
                  
                  <div className="border border-border rounded-lg p-4 hover:shadow-sm transition">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold">Climate Change Statistical Indicators</h3>
                        <p className="text-sm text-muted-foreground mb-2">Updated: January 2025</p>
                        <p className="text-sm mb-4">Time series data on climate-related metrics from multiple sources, harmonized for analysis.</p>
                        <div className="flex space-x-3 text-sm">
                          <span className="bg-stats-green/10 text-stats-green px-2 py-1 rounded-full">CSV</span>
                          <span className="bg-stats-green/10 text-stats-green px-2 py-1 rounded-full">R</span>
                          <span className="bg-stats-green/10 text-stats-green px-2 py-1 rounded-full">Python</span>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        <Download size={16} className="mr-1" /> Download
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <Button variant="outline">Browse All Datasets</Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="tools">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-stats-light rounded-lg p-6 hover:shadow-md transition text-center">
                    <Database className="mx-auto mb-4 text-stats-blue" size={40} />
                    <h3 className="text-xl font-semibold mb-2">Statistical Data Explorer</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Interactive tool for visualizing and exploring statistical datasets from various sources.
                    </p>
                    <Button className="bg-stats-blue hover:bg-stats-blue/90 text-white">
                      Launch Tool
                    </Button>
                  </div>
                  
                  <div className="bg-stats-light rounded-lg p-6 hover:shadow-md transition text-center">
                    <Link className="mx-auto mb-4 text-stats-teal" size={40} />
                    <h3 className="text-xl font-semibold mb-2">API Documentation</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Access our statistical databases programmatically through our well-documented APIs.
                    </p>
                    <Button className="bg-stats-teal hover:bg-stats-teal/90 text-white">
                      View Documentation
                    </Button>
                  </div>
                  
                  <div className="bg-stats-light rounded-lg p-6 hover:shadow-md transition text-center">
                    <Book className="mx-auto mb-4 text-stats-green" size={40} />
                    <h3 className="text-xl font-semibold mb-2">Statistical Methods Guide</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Comprehensive reference for statistical methodologies, formulas, and best practices.
                    </p>
                    <Button className="bg-stats-green hover:bg-stats-green/90 text-white">
                      Open Guide
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Educational Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Educational Resources</h2>
              <p className="mb-4 text-lg text-muted-foreground">
                Enhance your statistical knowledge with our curated educational materials designed for learners at all levels.
              </p>
              <p className="mb-6 text-lg text-muted-foreground">
                From introductory concepts to advanced methodologies, our resources will help you develop proficiency in statistical analysis and interpretation.
              </p>
              
              <ul className="space-y-4 mb-6">
                <li className="flex items-start space-x-3">
                  <div className="h-6 w-6 mt-1 rounded-full bg-stats-blue/20 flex items-center justify-center text-stats-blue">
                    <Book size={14} />
                  </div>
                  <span className="text-muted-foreground">Interactive online courses with self-paced learning modules</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="h-6 w-6 mt-1 rounded-full bg-stats-teal/20 flex items-center justify-center text-stats-teal">
                    <Video size={14} />
                  </div>
                  <span className="text-muted-foreground">Video tutorials from leading statistical experts</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="h-6 w-6 mt-1 rounded-full bg-stats-green/20 flex items-center justify-center text-stats-green">
                    <FileText size={14} />
                  </div>
                  <span className="text-muted-foreground">Downloadable practice exercises and case studies</span>
                </li>
              </ul>
              
              <Button className="bg-stats-blue hover:bg-stats-blue/90 text-white">Explore Learning Center</Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80" 
                     alt="Educational resources" 
                     className="w-full h-auto" />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                     alt="Statistical analysis" 
                     className="w-full h-auto" />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img src="https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                     alt="Data visualization" 
                     className="w-full h-auto" />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img src="https://images.unsplash.com/photo-1551836022-b92e87e5f10f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80" 
                     alt="Collaborative learning" 
                     className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Resources;
