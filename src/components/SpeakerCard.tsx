
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter } from "lucide-react";

interface SpeakerCardProps {
  name: string;
  title: string;
  organization: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
}

export function SpeakerCard({ name, title, organization, bio, image, linkedin, twitter }: SpeakerCardProps) {
  return (
    <Card className="overflow-hidden hover-scale hover:shadow-lg transition-shadow">
      <div className="h-32 gradient-bg relative">
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
          <Avatar className="h-24 w-24 border-4 border-white">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback className="bg-stats-teal text-white text-xl font-semibold">
              {name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
      <CardContent className="pt-16 pb-6 text-center">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-stats-teal font-medium text-sm mb-1">{title}</p>
        <p className="text-muted-foreground text-sm mb-3">{organization}</p>
        <p className="text-sm text-center mb-4 line-clamp-3">{bio}</p>
        
        {(linkedin || twitter) && (
          <div className="flex justify-center space-x-3">
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-stats-blue hover:text-stats-teal transition-colors">
                <Linkedin size={18} />
              </a>
            )}
            {twitter && (
              <a href={twitter} target="_blank" rel="noopener noreferrer" className="text-stats-blue hover:text-stats-teal transition-colors">
                <Twitter size={18} />
              </a>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
