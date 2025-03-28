
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, BarChart } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-stats-light">
      <div className="text-center max-w-md px-4">
        <div className="mb-6 flex justify-center">
          <div className="h-24 w-24 rounded-2xl gradient-bg flex items-center justify-center text-white">
            <BarChart size={48} />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">404</h1>
        <h2 className="text-2xl font-bold text-stats-blue mb-6">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="bg-stats-teal hover:bg-stats-blue text-white">
          <Link to="/">
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
