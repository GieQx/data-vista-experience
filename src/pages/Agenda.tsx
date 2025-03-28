
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AgendaTab } from "@/components/AgendaTab";
import { Button } from "@/components/ui/button";
import { Calendar, Download, Filter } from "lucide-react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Agenda = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-stats-aqua to-stats-green text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Event Schedule</h1>
            <p className="text-lg md:text-xl mb-8">
              Explore our comprehensive program of keynotes, panel discussions, workshops, and networking events.
            </p>
          </div>
        </div>
      </section>
      
      {/* Schedule Overview */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center flex-wrap gap-4 mb-8">
            <h2 className="text-3xl font-bold">Program Overview</h2>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Filter className="mr-2 h-5 w-5 text-muted-foreground" />
                <Select>
                  <SelectTrigger className="w-40 md:w-[180px]">
                    <SelectValue placeholder="Filter by track" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="all">All Tracks</SelectItem>
                      <SelectItem value="data-science">Data Science</SelectItem>
                      <SelectItem value="methodology">Statistical Methodology</SelectItem>
                      <SelectItem value="policy">Policy & Governance</SelectItem>
                      <SelectItem value="education">Statistical Education</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <Button variant="outline" className="flex items-center space-x-2">
                <Download className="h-4 w-4" />
                <span>Download PDF</span>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-stats-light p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Calendar className="text-stats-blue mr-3" />
                <h3 className="text-xl font-semibold">Day 1: 01 October 2025</h3>
              </div>
              <p className="text-muted-foreground mb-3">Opening Ceremony & Keynotes</p>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Registration Opens</span>
                  <span className="text-stats-blue">8:00 AM</span>
                </li>
                <li className="flex justify-between">
                  <span>Opening Ceremony</span>
                  <span className="text-stats-blue">9:30 AM</span>
                </li>
                <li className="flex justify-between">
                  <span>Keynote Address</span>
                  <span className="text-stats-blue">10:30 AM</span>
                </li>
                <li className="flex justify-between">
                  <span>Panel Discussion</span>
                  <span className="text-stats-blue">1:30 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Afternoon Workshops</span>
                  <span className="text-stats-blue">3:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Welcome Reception</span>
                  <span className="text-stats-blue">6:30 PM</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-stats-light p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Calendar className="text-stats-teal mr-3" />
                <h3 className="text-xl font-semibold">Day 2: 02 October 2025</h3>
              </div>
              <p className="text-muted-foreground mb-3">Technical Sessions & Workshops</p>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Morning Keynote</span>
                  <span className="text-stats-teal">9:00 AM</span>
                </li>
                <li className="flex justify-between">
                  <span>Technical Sessions</span>
                  <span className="text-stats-teal">10:30 AM</span>
                </li>
                <li className="flex justify-between">
                  <span>Poster Presentations</span>
                  <span className="text-stats-teal">12:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Parallel Workshops</span>
                  <span className="text-stats-teal">2:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Innovation Showcase</span>
                  <span className="text-stats-teal">4:30 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Networking Dinner</span>
                  <span className="text-stats-teal">7:00 PM</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-stats-light p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Calendar className="text-stats-green mr-3" />
                <h3 className="text-xl font-semibold">Day 3: 03 October 2025</h3>
              </div>
              <p className="text-muted-foreground mb-3">Specialized Tracks & Closing</p>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Specialized Tracks</span>
                  <span className="text-stats-green">9:00 AM</span>
                </li>
                <li className="flex justify-between">
                  <span>Round Table Discussions</span>
                  <span className="text-stats-green">10:30 AM</span>
                </li>
                <li className="flex justify-between">
                  <span>Awards Ceremony</span>
                  <span className="text-stats-green">1:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Closing Keynote</span>
                  <span className="text-stats-green">2:30 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Closing Remarks</span>
                  <span className="text-stats-green">4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Farewell Reception</span>
                  <span className="text-stats-green">5:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Detailed Schedule */}
      <section className="py-12 bg-stats-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Detailed Schedule</h2>
            <p className="text-lg text-muted-foreground">
              Browse the complete agenda with session details, speakers, and locations.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <AgendaTab />
          </div>
        </div>
      </section>
      
      {/* Pre-convention Workshops */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Pre-Convention Workshops</h2>
            <p className="text-lg text-muted-foreground">
              Enhance your skills with specialized workshops held on October 14, 2025.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-border rounded-lg p-6 hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">Advanced Data Visualization Techniques</h3>
              <p className="text-sm text-muted-foreground mb-4">9:00 AM - 12:00 PM | Room A101</p>
              <p className="mb-4">
                Learn advanced techniques for creating compelling and informative data visualizations using modern tools and best practices.
              </p>
              <div className="flex items-center space-x-3 mb-4">
                <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Instructor" className="w-10 h-10 rounded-full" />
                <div>
                  <p className="font-medium">Dr. Emily Zhang</p>
                  <p className="text-sm text-muted-foreground">Global Analytics Corporation</p>
                </div>
              </div>
              <Button variant="outline" className="w-full">Register for Workshop</Button>
            </div>
            
            <div className="border border-border rounded-lg p-6 hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">Statistical Methods for Machine Learning</h3>
              <p className="text-sm text-muted-foreground mb-4">1:00 PM - 4:00 PM | Room B205</p>
              <p className="mb-4">
                Explore the intersection of statistical theory and machine learning applications for improved predictive modeling.
              </p>
              <div className="flex items-center space-x-3 mb-4">
                <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="Instructor" className="w-10 h-10 rounded-full" />
                <div>
                  <p className="font-medium">Dr. Thomas Lee</p>
                  <p className="text-sm text-muted-foreground">DataTech Solutions</p>
                </div>
              </div>
              <Button variant="outline" className="w-full">Register for Workshop</Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Agenda;
