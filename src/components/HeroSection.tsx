
import { Button } from '@/components/ui/button';
import { CountdownTimer } from './CountdownTimer';
import { BarChart3, Users, Globe, TrendingUp } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
          <source src="https://videos.pexels.com/video-files/27946985/12269404_2320_1080_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 data-grid z-10 opacity-30"></div>
      <div className="absolute top-20 -left-10 w-40 h-40 bg-stats-teal/20 rounded-full blur-3xl animate-float z-10"></div>
      <div className="absolute bottom-20 -right-10 w-56 h-56 bg-stats-aqua/20 rounded-full blur-3xl animate-float z-10"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-stats-green/20 rounded-full blur-2xl animate-pulse-light z-10"></div>
      
      {/* Floating data elements */}
      <div className="absolute top-1/4 left-10 md:left-20 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-lg animate-float z-20" style={{animationDelay: '0.5s'}}>
        <BarChart3 className="text-stats-blue" />
      </div>
      <div className="absolute top-2/3 right-10 md:right-32 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-lg animate-float z-20" style={{animationDelay: '1s'}}>
        <TrendingUp className="text-stats-teal" />
      </div>
      <div className="absolute top-1/3 right-20 md:right-48 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-lg animate-float z-20" style={{animationDelay: '1.5s'}}>
        <Users className="text-stats-aqua" />
      </div>
      <div className="absolute bottom-1/4 left-20 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-lg animate-float z-20" style={{animationDelay: '2s'}}>
        <Globe className="text-stats-green" />
      </div>
      
      <div className="container relative z-30 mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading text-white">
            National Convention on <span className="bg-gradient-to-br from-stats-yellow via-stats-orange to-stats-red bg-clip-text text-transparent">Statistics 2025</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white">
            Empowering data-driven decision-making and showcasing innovation in statistics for a better future.
          </p>
          
          <div className="mb-10">
            <CountdownTimer />
          </div>
          
          <p className="text-sm md:text-base mb-6 text-white">
            October 01-03, 2025 • National Convention Center
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button className="bg-stats-red hover:bg-stats-red/90 text-white font-medium text-lg py-6 px-8">
              Register Now
            </Button>
            <Button variant="outline" className="border-stats-yellow text-stats-yellow hover:bg-stats-yellow/10 font-medium text-lg py-6 px-8">
              View Schedule
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
