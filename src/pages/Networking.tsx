
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Users, MessageSquare, Calendar, Globe, BriefcaseIcon, GraduationCap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Networking = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-stats-blue to-stats-teal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Connect & Collaborate</h1>
            <p className="text-lg md:text-xl mb-8">
              Build valuable professional relationships and expand your network with fellow statistics professionals.
            </p>
          </div>
        </div>
      </section>
      
      {/* Networking Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Network at NCS 2025?</h2>
            <p className="text-lg text-muted-foreground">
              Discover the many professional opportunities that await you at the National Convention on Statistics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg gradient-bg flex items-center justify-center mb-4 text-white">
                  <Users size={24} />
                </div>
                <CardTitle>Connect with Peers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Meet like-minded statistics professionals from around the world. Exchange ideas, share experiences, and forge lasting professional relationships.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg gradient-bg flex items-center justify-center mb-4 text-white">
                  <BriefcaseIcon size={24} />
                </div>
                <CardTitle>Career Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Connect with potential employers, collaborators, and mentors. Discover new career paths and opportunities in the field of statistics.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg gradient-bg flex items-center justify-center mb-4 text-white">
                  <GraduationCap size={24} />
                </div>
                <CardTitle>Knowledge Exchange</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Learn from experts and share your own insights. Engage in meaningful discussions on statistical methodologies and applications.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Networking Events */}
      <section className="py-16 bg-stats-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Networking Events</h2>
            <p className="text-lg text-muted-foreground">
              Participate in our specially designed networking events to connect with other attendees.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <Calendar className="text-stats-blue mr-3" />
                <h3 className="text-xl font-semibold">Welcome Reception</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                October 15, 2025 | 6:30 PM - 8:30 PM | Grand Ballroom
              </p>
              <p className="mb-6">
                Kick off the convention with our welcome reception. Enjoy refreshments while meeting fellow attendees in a relaxed atmosphere.
              </p>
              <Button className="bg-stats-blue hover:bg-stats-blue/90 text-white">RSVP for Event</Button>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <Globe className="text-stats-teal mr-3" />
                <h3 className="text-xl font-semibold">International Networking Lunch</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                October 16, 2025 | 12:00 PM - 1:30 PM | Terrace Garden
              </p>
              <p className="mb-6">
                Connect with international participants and foster global collaborations over a delightful lunch experience.
              </p>
              <Button className="bg-stats-teal hover:bg-stats-teal/90 text-white">RSVP for Event</Button>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <Users className="text-stats-green mr-3" />
                <h3 className="text-xl font-semibold">Special Interest Group Meetups</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                October 16-17, 2025 | Various Times | Meeting Rooms
              </p>
              <p className="mb-6">
                Join topic-focused meetups based on your interests. Engage in deep discussions with others who share your professional passions.
              </p>
              <Button className="bg-stats-green hover:bg-stats-green/90 text-white">Browse Interest Groups</Button>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <MessageSquare className="text-stats-aqua mr-3" />
                <h3 className="text-xl font-semibold">Closing Networking Reception</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                October 17, 2025 | 5:00 PM - 7:00 PM | Rooftop Lounge
              </p>
              <p className="mb-6">
                Conclude the convention with a farewell reception. Exchange contact information and solidify the connections you've made.
              </p>
              <Button className="bg-stats-aqua hover:bg-stats-aqua/90 text-white">RSVP for Event</Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Attendee Directory */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Attendee Directory</h2>
            <p className="text-lg text-muted-foreground">
              Browse the directory of registered attendees to find colleagues with similar interests.
            </p>
          </div>
          
          <div className="bg-stats-light rounded-lg p-6 mb-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">The attendee directory will be available once you register for the convention.</h3>
              <Button className="bg-stats-blue hover:bg-stats-blue/90 text-white">
                Register Now to Access
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Sample Attendee Profiles</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 border border-border rounded-lg">
                  <Avatar className="h-14 w-14">
                    <AvatarImage src="https://randomuser.me/api/portraits/women/44.jpg" />
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">Dr. Sarah Johnson</h4>
                    <p className="text-sm text-muted-foreground">Chief Statistician, National Statistics Office</p>
                    <p className="text-sm text-stats-blue">Interests: National Statistical Systems, Data Governance</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 border border-border rounded-lg">
                  <Avatar className="h-14 w-14">
                    <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" />
                    <AvatarFallback>MC</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">Prof. Michael Chen</h4>
                    <p className="text-sm text-muted-foreground">Director, International Data Science Institute</p>
                    <p className="text-sm text-stats-blue">Interests: AI Integration, Statistical Methods</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">How It Works</h3>
              <div className="bg-white p-6 border border-border rounded-lg">
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-stats-blue text-white h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">1</span>
                    <span>Register for the convention to gain access to the attendee directory</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-stats-blue text-white h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">2</span>
                    <span>Create your profile with your professional information and areas of interest</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-stats-blue text-white h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">3</span>
                    <span>Browse other attendees and connect with those who share your interests</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-stats-blue text-white h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">4</span>
                    <span>Schedule meetings during the convention through our platform</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Networking Tips */}
      <section className="py-16 bg-stats-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Networking Tips</h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Make the most of your networking opportunities at NCS 2025 with these helpful tips.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Prepare Your Elevator Pitch</h3>
                  <p className="text-muted-foreground">
                    Have a concise introduction ready that highlights your expertise, interests, and what you hope to gain from the convention.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Set Clear Networking Goals</h3>
                  <p className="text-muted-foreground">
                    Determine what you want to achieve through networking, whether it's finding collaborators, mentors, or staying updated on industry trends.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Follow Up Promptly</h3>
                  <p className="text-muted-foreground">
                    Connect with new contacts on professional networks or via email within a few days after meeting them to maintain the connection.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
                   alt="Networking event" 
                   className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Have Questions About Networking?</h2>
              <p className="text-lg text-muted-foreground">
                Reach out to our team for information about networking opportunities at NCS 2025.
              </p>
            </div>
            
            <div className="bg-stats-light p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-1">Message</label>
                <Textarea placeholder="How can we help you with networking at NCS 2025?" rows={4} />
              </div>
              
              <Button className="bg-stats-blue hover:bg-stats-blue/90 text-white w-full">Submit Inquiry</Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Networking;
