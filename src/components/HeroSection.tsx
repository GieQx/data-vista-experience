
import { Button } from '@/components/ui/button';
import { CountdownTimer } from './CountdownTimer';
import { BarChart3, Users, Globe, TrendingUp } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="relative bg-stats-light overflow-hidden min-h-[90vh] flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 data-grid"></div>
      <div className="absolute top-20 -left-10 w-40 h-40 bg-stats-teal/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 -right-10 w-56 h-56 bg-stats-aqua/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-stats-green/20 rounded-full blur-2xl animate-pulse-light"></div>
      
      {/* Floating data elements */}
      <div className="absolute top-1/4 left-10 md:left-20 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-lg animate-float" style={{animationDelay: '0.5s'}}>
        <BarChart3 className="text-stats-blue" />
      </div>
      <div className="absolute top-2/3 right-10 md:right-32 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-lg animate-float" style={{animationDelay: '1s'}}>
        <TrendingUp className="text-stats-teal" />
      </div>
      <div className="absolute top-1/3 right-20 md:right-48 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-lg animate-float" style={{animationDelay: '1.5s'}}>
        <Users className="text-stats-aqua" />
      </div>
      <div className="absolute bottom-1/4 left-20 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-lg animate-float" style={{animationDelay: '2s'}}>
        <Globe className="text-stats-green" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">
            National Convention on <span className="text-gradient">Statistics 2025</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Empowering data-driven decision-making and showcasing innovation in statistics for a better future.
          </p>
          
          <div className="mb-10">
            <CountdownTimer />
          </div>
          
          <p className="text-sm md:text-base mb-6">
            October 15-17, 2025 • National Convention Center
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button className="bg-stats-blue hover:bg-stats-blue/90 text-white font-medium text-lg py-6 px-8">
              Register Now
            </Button>
            <Button variant="outline" className="border-stats-teal text-stats-teal hover:bg-stats-teal/10 font-medium text-lg py-6 px-8">
              View Schedule
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
