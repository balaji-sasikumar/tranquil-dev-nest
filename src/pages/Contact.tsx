
import React from 'react';
import AnimatedText from '@/components/AnimatedText';
import ContactForm from '@/components/ContactForm';

const Contact: React.FC = () => {
  return (
    <div className="space-y-8">
      <header className="text-center space-y-4 mb-8">
        <AnimatedText 
          text="Get in Touch" 
          className="text-3xl font-bold"
          animation="fade-in"
        />
        <AnimatedText 
          text="Have a question or want to work together?"
          className="text-muted-foreground max-w-lg mx-auto"
          delay={400}
        />
      </header>
      
      <ContactForm />
    </div>
  );
};

export default Contact;
