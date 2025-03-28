
import { useState, useEffect } from 'react';

// Set the event date - October 15, 2025 at 9:00 AM
const EVENT_DATE = new Date('2025-10-01T08:00:00').getTime();

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = EVENT_DATE - now;

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      } else {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      }
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center space-x-4 md:space-x-6">
      <div className="flex flex-col items-center">
        <div className="bg-white/90 backdrop-blur-sm w-16 md:w-24 h-16 md:h-24 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-2xl md:text-4xl font-bold text-stats-blue">{timeLeft.days}</span>
        </div>
        <span className="text-xs md:text-sm mt-2 font-medium">Days</span>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="bg-white/90 backdrop-blur-sm w-16 md:w-24 h-16 md:h-24 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-2xl md:text-4xl font-bold text-stats-blue">{timeLeft.hours}</span>
        </div>
        <span className="text-xs md:text-sm mt-2 font-medium">Hours</span>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="bg-white/90 backdrop-blur-sm w-16 md:w-24 h-16 md:h-24 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-2xl md:text-4xl font-bold text-stats-blue">{timeLeft.minutes}</span>
        </div>
        <span className="text-xs md:text-sm mt-2 font-medium">Minutes</span>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="bg-white/90 backdrop-blur-sm w-16 md:w-24 h-16 md:h-24 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-2xl md:text-4xl font-bold text-stats-blue">{timeLeft.seconds}</span>
        </div>
        <span className="text-xs md:text-sm mt-2 font-medium">Seconds</span>
      </div>
    </div>
  );
}
