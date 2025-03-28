
import { ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface FeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function ThreeColumnFeature({ features }: { features: FeatureProps[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <Card key={index} className="hover-scale hover:shadow-md transition-shadow">
          <CardHeader>
            <div className="h-12 w-12 rounded-lg gradient-bg flex items-center justify-center mb-4 text-white">
              {feature.icon}
            </div>
            <CardTitle>{feature.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{feature.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
