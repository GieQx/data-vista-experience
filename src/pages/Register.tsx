
import { useState } from 'react';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";
import { Check, CreditCard, Ticket, Users } from 'lucide-react';

const Register = () => {
  const [step, setStep] = useState(1);
  const [registrationType, setRegistrationType] = useState('individual');
  
  const handleNextStep = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };
  
  const handlePrevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Submitted",
      description: "Thank you for registering for NCS 2025. You will receive a confirmation email shortly.",
    });
    // In a real application, you would submit the form data to a server here
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-stats-red via-stats-orange to-stats-yellow text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Register for NCS 2025</h1>
            <p className="text-lg md:text-xl mb-8">
              Secure your spot at the most influential statistics event of the year.
            </p>
          </div>
        </div>
      </section>
      
      {/* Registration Steps */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              <div className={`flex flex-col items-center ${step >= 1 ? 'text-stats-blue' : 'text-muted-foreground'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 border-2 ${step >= 1 ? 'border-stats-blue bg-stats-blue/10' : 'border-muted'}`}>
                  <span className="font-semibold">1</span>
                </div>
                <span className="text-sm font-medium">Registration Type</span>
              </div>
              
              <div className={`flex-1 h-1 mx-2 ${step >= 2 ? 'bg-stats-blue' : 'bg-muted'}`}></div>
              
              <div className={`flex flex-col items-center ${step >= 2 ? 'text-stats-blue' : 'text-muted-foreground'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 border-2 ${step >= 2 ? 'border-stats-blue bg-stats-blue/10' : 'border-muted'}`}>
                  <span className="font-semibold">2</span>
                </div>
                <span className="text-sm font-medium">Personal Details</span>
              </div>
              
              <div className={`flex-1 h-1 mx-2 ${step >= 3 ? 'bg-stats-blue' : 'bg-muted'}`}></div>
              
              <div className={`flex flex-col items-center ${step >= 3 ? 'text-stats-blue' : 'text-muted-foreground'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 border-2 ${step >= 3 ? 'border-stats-blue bg-stats-blue/10' : 'border-muted'}`}>
                  <span className="font-semibold">3</span>
                </div>
                <span className="text-sm font-medium">Options & Payment</span>
              </div>
              
              <div className={`flex-1 h-1 mx-2 ${step >= 4 ? 'bg-stats-blue' : 'bg-muted'}`}></div>
              
              <div className={`flex flex-col items-center ${step >= 4 ? 'text-stats-blue' : 'text-muted-foreground'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 border-2 ${step >= 4 ? 'border-stats-blue bg-stats-blue/10' : 'border-muted'}`}>
                  <span className="font-semibold">4</span>
                </div>
                <span className="text-sm font-medium">Confirmation</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Registration Form */}
      <section className="py-16 bg-stats-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Registration Type */}
              {step === 1 && (
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Registration Type</CardTitle>
                    <CardDescription>
                      Select the type of registration you would like to proceed with.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div 
                        className={`border rounded-lg p-6 cursor-pointer hover:shadow-md transition ${registrationType === 'individual' ? 'border-stats-blue ring-2 ring-stats-blue/30 bg-stats-blue/5' : 'border-border'}`}
                        onClick={() => setRegistrationType('individual')}
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div className="h-12 w-12 rounded-full bg-stats-blue/10 flex items-center justify-center text-stats-blue">
                            <Ticket size={24} />
                          </div>
                          {registrationType === 'individual' && (
                            <div className="h-6 w-6 rounded-full bg-stats-blue flex items-center justify-center text-white">
                              <Check size={14} />
                            </div>
                          )}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Individual Registration</h3>
                        <p className="text-muted-foreground mb-4">
                          Register as an individual attendee for the full convention experience.
                        </p>
                        <div className="text-xl font-bold text-stats-blue">
                          $499.00
                          <span className="text-sm font-normal text-muted-foreground ml-2">USD</span>
                        </div>
                      </div>
                      
                      <div 
                        className={`border rounded-lg p-6 cursor-pointer hover:shadow-md transition ${registrationType === 'group' ? 'border-stats-blue ring-2 ring-stats-blue/30 bg-stats-blue/5' : 'border-border'}`}
                        onClick={() => setRegistrationType('group')}
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div className="h-12 w-12 rounded-full bg-stats-teal/10 flex items-center justify-center text-stats-teal">
                            <Users size={24} />
                          </div>
                          {registrationType === 'group' && (
                            <div className="h-6 w-6 rounded-full bg-stats-blue flex items-center justify-center text-white">
                              <Check size={14} />
                            </div>
                          )}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Group Registration</h3>
                        <p className="text-muted-foreground mb-4">
                          Register 3 or more attendees from the same organization and save 15%.
                        </p>
                        <div className="text-xl font-bold text-stats-teal">
                          $424.15
                          <span className="text-sm font-normal text-muted-foreground ml-2">USD per person</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 space-y-4">
                      <div className="border rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-4">Registration Includes:</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="text-stats-green mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                            <span>Access to all keynote presentations and panel discussions</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="text-stats-green mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                            <span>Entry to all technical sessions and workshops</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="text-stats-green mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                            <span>Conference materials and digital proceedings</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="text-stats-green mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                            <span>Lunch and refreshments for all three days</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="text-stats-green mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                            <span>Welcome reception and networking dinner</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="text-stats-green mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                            <span>Certificate of attendance</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-8 flex justify-end">
                      <Button 
                        className="bg-stats-blue hover:bg-stats-blue/90 text-white"
                        onClick={handleNextStep}
                      >
                        Continue
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
              
              {/* Step 2: Personal Details */}
              {step === 2 && (
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Personal Details</CardTitle>
                    <CardDescription>
                      Please provide your personal and contact information.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium mb-1">First Name*</label>
                        <Input placeholder="Your first name" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Last Name*</label>
                        <Input placeholder="Your last name" required />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1">Email Address*</label>
                        <Input type="email" placeholder="Your email address" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Phone Number</label>
                        <Input placeholder="Your phone number" />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1">Organization*</label>
                        <Input placeholder="Your organization" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Job Title*</label>
                        <Input placeholder="Your job title" required />
                      </div>
                      
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium mb-1">Address</label>
                        <Input placeholder="Street address" className="mb-2" />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <Input placeholder="City" />
                          <Input placeholder="State/Province" />
                          <Input placeholder="Postal/Zip Code" />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1">Country*</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="us">United States</SelectItem>
                            <SelectItem value="ca">Canada</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="au">Australia</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1">Professional Field*</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your field" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="academic">Academic/Research</SelectItem>
                            <SelectItem value="government">Government</SelectItem>
                            <SelectItem value="corporate">Corporate/Industry</SelectItem>
                            <SelectItem value="ngo">Non-profit/NGO</SelectItem>
                            <SelectItem value="student">Student</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    {registrationType === 'group' && (
                      <div className="mb-6">
                        <div className="border-t pt-6 mb-4">
                          <h3 className="text-lg font-semibold mb-4">Additional Group Members</h3>
                          <p className="text-muted-foreground mb-4">
                            Please provide information for each additional attendee in your group.
                          </p>
                        </div>
                        
                        <div className="space-y-6">
                          <div className="border rounded-lg p-4">
                            <h4 className="font-medium mb-4">Group Member #1</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <Input placeholder="First Name" />
                              <Input placeholder="Last Name" />
                              <Input placeholder="Email Address" />
                              <Input placeholder="Job Title" />
                            </div>
                          </div>
                          
                          <div className="border rounded-lg p-4">
                            <h4 className="font-medium mb-4">Group Member #2</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <Input placeholder="First Name" />
                              <Input placeholder="Last Name" />
                              <Input placeholder="Email Address" />
                              <Input placeholder="Job Title" />
                            </div>
                          </div>
                          
                          <Button variant="outline" className="w-full">
                            + Add Another Group Member
                          </Button>
                        </div>
                      </div>
                    )}
                    
                    <div className="border-t pt-6">
                      <h3 className="text-lg font-semibold mb-4">Dietary & Accessibility Requirements</h3>
                      <div className="mb-6">
                        <label className="block text-sm font-medium mb-1">Dietary Preferences</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">No specific requirements</SelectItem>
                            <SelectItem value="vegetarian">Vegetarian</SelectItem>
                            <SelectItem value="vegan">Vegan</SelectItem>
                            <SelectItem value="gluten-free">Gluten-free</SelectItem>
                            <SelectItem value="dairy-free">Dairy-free</SelectItem>
                            <SelectItem value="other">Other (please specify)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="mb-6">
                        <label className="block text-sm font-medium mb-1">Accessibility Requirements</label>
                        <Textarea placeholder="Please specify any accessibility requirements you may have" />
                      </div>
                    </div>
                    
                    <div className="flex justify-between mt-8">
                      <Button 
                        variant="outline" 
                        onClick={handlePrevStep}
                      >
                        Back
                      </Button>
                      <Button 
                        className="bg-stats-blue hover:bg-stats-blue/90 text-white"
                        onClick={handleNextStep}
                      >
                        Continue
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
              
              {/* Step 3: Options & Payment */}
              {step === 3 && (
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Options & Payment</CardTitle>
                    <CardDescription>
                      Select additional options and complete your payment.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold mb-4">Additional Options</h3>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <Checkbox id="workshop" className="mt-1" />
                          <div className="ml-3">
                            <label htmlFor="workshop" className="font-medium cursor-pointer">Pre-Convention Workshop ($150)</label>
                            <p className="text-sm text-muted-foreground">
                              Gain extra skills with a specialized workshop on October 14, 2025 (day before the convention).
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <Checkbox id="dinner" className="mt-1" />
                          <div className="ml-3">
                            <label htmlFor="dinner" className="font-medium cursor-pointer">Gala Dinner Guest Ticket ($85)</label>
                            <p className="text-sm text-muted-foreground">
                              Purchase an additional ticket for a guest to attend the gala dinner (October 16, 2025).
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <Checkbox id="proceedings" className="mt-1" />
                          <div className="ml-3">
                            <label htmlFor="proceedings" className="font-medium cursor-pointer">Printed Proceedings ($45)</label>
                            <p className="text-sm text-muted-foreground">
                              Receive a printed copy of the convention proceedings (digital version included with registration).
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold mb-4">Registration Summary</h3>
                      <div className="bg-stats-light rounded-lg p-4">
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span>Individual Registration</span>
                            <span>$499.00</span>
                          </div>
                          <div className="flex justify-between text-muted-foreground">
                            <span>Pre-Convention Workshop</span>
                            <span>$0.00</span>
                          </div>
                          <div className="flex justify-between text-muted-foreground">
                            <span>Gala Dinner Guest Ticket</span>
                            <span>$0.00</span>
                          </div>
                          <div className="flex justify-between text-muted-foreground">
                            <span>Printed Proceedings</span>
                            <span>$0.00</span>
                          </div>
                          <div className="border-t pt-3 flex justify-between font-semibold">
                            <span>Total</span>
                            <span>$499.00 USD</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
                      <RadioGroup defaultValue="card" className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="card" id="card" />
                          <label htmlFor="card" className="flex items-center cursor-pointer">
                            <CreditCard className="mr-2 h-5 w-5" />
                            <span>Credit Card</span>
                          </label>
                        </div>
                        
                        <div className="pl-6 space-y-4">
                          <div>
                            <label className="block text-sm font-medium mb-1">Cardholder Name</label>
                            <Input placeholder="Name on card" />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium mb-1">Card Number</label>
                            <Input placeholder="Card number" />
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium mb-1">Expiration Date</label>
                              <Input placeholder="MM/YY" />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-1">CVV</label>
                              <Input placeholder="CVV" />
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="invoice" id="invoice" />
                          <label htmlFor="invoice" className="cursor-pointer">
                            Request Invoice (for organizational payments)
                          </label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <div className="flex items-start mb-8">
                      <Checkbox id="terms" className="mt-1" required />
                      <div className="ml-3">
                        <label htmlFor="terms" className="font-medium cursor-pointer">I agree to the terms and conditions</label>
                        <p className="text-sm text-muted-foreground">
                          By registering, you agree to the convention's <a href="#" className="text-stats-blue underline">terms and conditions</a>, including the cancellation and refund policy.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between">
                      <Button 
                        variant="outline" 
                        onClick={handlePrevStep}
                      >
                        Back
                      </Button>
                      <Button 
                        className="bg-stats-blue hover:bg-stats-blue/90 text-white"
                        onClick={handleNextStep}
                      >
                        Complete Registration
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
              
              {/* Step 4: Confirmation */}
              {step === 4 && (
                <Card className="mb-8">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="h-16 w-16 rounded-full bg-stats-green/20 flex items-center justify-center">
                        <Check className="h-8 w-8 text-stats-green" />
                      </div>
                    </div>
                    <CardTitle className="text-center">Registration Successful!</CardTitle>
                    <CardDescription className="text-center">
                      Thank you for registering for the National Convention on Statistics 2025.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-8">
                      <p className="mb-4">
                        Your registration has been confirmed. A confirmation email has been sent to your provided email address.
                      </p>
                      <p className="font-medium">
                        Registration ID: NCS2025-2407811
                      </p>
                    </div>
                    
                    <div className="bg-stats-light rounded-lg p-6 mb-8">
                      <h3 className="text-lg font-semibold mb-4">Next Steps</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Check className="text-stats-green mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                          <span>Check your email for detailed registration information</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="text-stats-green mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                          <span>Book your hotel accommodation at our partner hotels for special rates</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="text-stats-green mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                          <span>Browse the agenda and create your personalized schedule</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="text-stats-green mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                          <span>Connect with other attendees through our networking platform</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button variant="outline" className="w-full">
                        Download Registration Receipt
                      </Button>
                      <Button className="bg-stats-blue hover:bg-stats-blue/90 text-white w-full">
                        View Your Account
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </form>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      {step < 4 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Registration FAQs</h2>
                <p className="text-lg text-muted-foreground">
                  Find answers to common questions about registering for NCS 2025.
                </p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">What is the cancellation policy?</h3>
                  <p className="text-muted-foreground">
                    Cancellations received before August 15, 2025 will receive a full refund minus a $50 processing fee. Cancellations between August 16 and September 30, 2025 will receive a 50% refund. No refunds will be issued for cancellations after September 30, 2025.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Can I transfer my registration to someone else?</h3>
                  <p className="text-muted-foreground">
                    Yes, registration transfers are permitted at no additional cost. Please contact us at registration@ncs2025.org with the details of the original registrant and the new attendee.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Is there a student discount available?</h3>
                  <p className="text-muted-foreground">
                    Yes, full-time students can register at a reduced rate of $199. Valid student ID will be required at check-in.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Will the presentations be available after the convention?</h3>
                  <p className="text-muted-foreground">
                    Yes, all registered attendees will have access to the digital proceedings, including presentation slides and recorded sessions, for up to one year after the event.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="mb-4 text-muted-foreground">
                  Have more questions about registration?
                </p>
                <Button variant="outline">Contact Support</Button>
              </div>
            </div>
          </div>
        </section>
      )}
      
      <Footer />
    </div>
  );
};

export default Register;
