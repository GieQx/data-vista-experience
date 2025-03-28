
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

type SessionType = {
  time: string;
  title: string;
  speaker: string;
  location: string;
  type: 'keynote' | 'workshop' | 'panel' | 'break';
};

type DaySchedule = {
  date: string;
  sessions: SessionType[];
};

const agenda: DaySchedule[] = [
  {
    date: "Day 1 - October 15, 2025",
    sessions: [
      {
        time: "09:00 - 10:00",
        title: "Opening Ceremony & Welcome Address",
        speaker: "Dr. Sarah Johnson",
        location: "Main Hall",
        type: "keynote"
      },
      {
        time: "10:15 - 11:15",
        title: "Advancing National Statistical Systems",
        speaker: "Prof. Michael Chen",
        location: "Main Hall",
        type: "keynote"
      },
      {
        time: "11:30 - 12:30",
        title: "Data Integration for Policy Decisions",
        speaker: "Panel of Experts",
        location: "Room A",
        type: "panel"
      },
      {
        time: "12:30 - 13:30",
        title: "Lunch Break",
        speaker: "",
        location: "Dining Area",
        type: "break"
      },
      {
        time: "13:30 - 15:00",
        title: "Statistical Methods Workshop",
        speaker: "Dr. David Williams",
        location: "Workshop Room 1",
        type: "workshop"
      },
      {
        time: "15:15 - 16:45",
        title: "Big Data Analytics in Public Sector",
        speaker: "Dr. Lisa Rodriguez",
        location: "Room B",
        type: "workshop"
      }
    ]
  },
  {
    date: "Day 2 - October 16, 2025",
    sessions: [
      {
        time: "09:00 - 10:00",
        title: "Data Visualization Best Practices",
        speaker: "Dr. Emily Zhang",
        location: "Main Hall",
        type: "keynote"
      },
      {
        time: "10:15 - 11:15",
        title: "AI in Statistical Analysis",
        speaker: "Prof. Robert Taylor",
        location: "Room C",
        type: "keynote"
      },
      {
        time: "11:30 - 12:30",
        title: "Future of National Statistics",
        speaker: "Panel of Experts",
        location: "Main Hall",
        type: "panel"
      },
      {
        time: "12:30 - 13:30",
        title: "Lunch Break",
        speaker: "",
        location: "Dining Area",
        type: "break"
      },
      {
        time: "13:30 - 15:00",
        title: "Machine Learning for Statisticians",
        speaker: "Dr. James Wilson",
        location: "Workshop Room 2",
        type: "workshop"
      },
      {
        time: "15:15 - 16:30",
        title: "Closing Ceremony & Awards",
        speaker: "Organizing Committee",
        location: "Main Hall",
        type: "keynote"
      }
    ]
  },
  {
    date: "Day 3 - October 17, 2025",
    sessions: [
      {
        time: "09:00 - 10:00",
        title: "Statistical Literacy Programs",
        speaker: "Dr. Amanda Jones",
        location: "Main Hall",
        type: "keynote"
      },
      {
        time: "10:15 - 11:15",
        title: "International Data Sharing Frameworks",
        speaker: "International Panel",
        location: "Room A",
        type: "panel"
      },
      {
        time: "11:30 - 12:30",
        title: "Data Privacy & Ethics",
        speaker: "Dr. Thomas Moore",
        location: "Room B",
        type: "keynote"
      },
      {
        time: "12:30 - 13:30",
        title: "Lunch Break",
        speaker: "",
        location: "Dining Area",
        type: "break"
      },
      {
        time: "13:30 - 15:00",
        title: "Statistical Software Workshop",
        speaker: "Technical Team",
        location: "Computer Lab",
        type: "workshop"
      },
      {
        time: "15:15 - 16:45",
        title: "Networking Session",
        speaker: "All Participants",
        location: "Main Hall",
        type: "break"
      }
    ]
  }
];

export function AgendaTab() {
  return (
    <Tabs defaultValue="day1" className="w-full">
      <TabsList className="grid grid-cols-3 w-full">
        <TabsTrigger value="day1">Day 1</TabsTrigger>
        <TabsTrigger value="day2">Day 2</TabsTrigger>
        <TabsTrigger value="day3">Day 3</TabsTrigger>
      </TabsList>
      
      {agenda.map((day, index) => (
        <TabsContent key={`day${index + 1}`} value={`day${index + 1}`} className="mt-6">
          <h3 className="text-xl font-semibold mb-4">{day.date}</h3>
          <div className="space-y-4">
            {day.sessions.map((session, sessionIndex) => (
              <div 
                key={sessionIndex}
                className={`p-4 rounded-lg border transition-all ${
                  session.type === 'keynote' ? 'border-stats-teal/50 bg-stats-teal/5' :
                  session.type === 'workshop' ? 'border-stats-blue/50 bg-stats-blue/5' :
                  session.type === 'panel' ? 'border-stats-aqua/50 bg-stats-aqua/5' :
                  'border-gray-200 bg-gray-50'
                }`}
              >
                <div className="flex flex-wrap md:flex-nowrap justify-between">
                  <div className="w-full md:w-auto flex items-start space-x-2">
                    <Clock size={18} className="mt-1 flex-shrink-0 text-stats-teal" />
                    <span className="font-medium">{session.time}</span>
                  </div>
                  
                  <div className="flex-grow mt-2 md:mt-0 md:mx-4">
                    <h4 className="font-semibold text-lg">{session.title}</h4>
                    {session.speaker && (
                      <div className="flex items-center mt-1 text-sm text-muted-foreground">
                        <Users size={16} className="mr-1" />
                        <span>{session.speaker}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="w-full md:w-auto mt-2 md:mt-0 text-sm flex items-center text-muted-foreground">
                    <MapPin size={16} className="mr-1" />
                    <span>{session.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
