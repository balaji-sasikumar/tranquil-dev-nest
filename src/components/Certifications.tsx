import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Certification {
  title: string;
  platform: string;
  credential_url: string;
}

interface CertificationsProps {
  certifications: Certification[];
}

const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Certifications
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <Card
            key={index}
            className="certification-card animate-reveal hover:shadow-lg transition-all duration-300 border border-primary/10 flex flex-col h-full"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <CardHeader className="pb-3">
              <div className="space-y-1.5">
                <CardTitle className="text-lg">{cert.title}</CardTitle>
                <CardDescription>
                  <Badge variant="outline" className="bg-primary/5">
                    {cert.platform}
                  </Badge>
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="pt-0 flex flex-grow flex-col justify-end">
              <div className="mt-auto flex justify-end">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary hover:text-primary-foreground hover:bg-primary"
                  onClick={() => window.open(cert.credential_url, "_blank")}
                >
                  View Credential
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
