import React from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import DocumentCard from './document-card';
import FeaturesSection from './features-section';

const documentTypes = [
  {
    title: 'Experience Certificate',
    description: 'Generate professional experience certificates',
    path: '/experience-certificate/form',
    icon: '📄'
  },
  {
    title: 'Offer Letter',
    description: 'Create and manage offer letters',
    path: '/offer-letter/form',
    icon: '📝'
  },
  {
    title: 'Relieving Letter',
    description: 'Generate relieving letters',
    path: '/relieving-letter/form',
    icon: '📜'
  },
  {
    title: 'Internship Certificate',
    description: 'Create internship completion certificates',
    path: '/certificate?type=internship',
    icon: '🎓'
  }
];

const HomePage = () => {
  const { user, logout } = useAuth();
  return (
    <div className="min-h-screen bg-background">
      {/* Header with Logout Button */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-900">Document Generator</h1>
          {user ? (
            <Button onClick={logout} variant="outline">
              Logout
            </Button>
          ) : (
            <Button asChild variant="outline">
              <Link to="/login">Admin Login</Link>
            </Button>
          )}
        </div>
      </header>
      {/* Hero Section */}
      <section className="relative border-b border-border bg-gradient-to-br from-background via-background to-secondary/10 px-4 py-28 sm:px-6 sm:py-40 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="rounded-full bg-secondary/40 px-4 py-2 text-sm font-medium text-foreground/80">
                Professional Document Creation
              </span>
            </div>

            <h1 className="text-5xl font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
              Create documents that matter
            </h1>

            <p className="mx-auto max-w-2xl text-xl text-muted-foreground text-balance">
              Generate professional certificates, offer letters, and more. Simple, fast, and reliable document generation for your organization.
            </p>

            <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="rounded-full px-8">
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-muted-foreground/30 px-8 bg-transparent"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        </div>
      </section>

      {/* Document Types Grid */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Choose a Document Type
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Select the type of document you'd like to create
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {documentTypes.map((doc, index) => (
              <DocumentCard key={index} document={doc} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />
    </div>
  );
};

export default HomePage;
