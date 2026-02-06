'use client';

import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Lightning Fast',
      description: 'Generate documents in seconds, not hours',
      icon: '⚡',
    },
    {
      title: 'Professional Quality',
      description: 'Polished templates for every document type',
      icon: '✨',
    },
    {
      title: 'Fully Customizable',
      description: 'Personalize each document to your needs',
      icon: '🎨',
    },
    {
      title: 'Secure & Reliable',
      description: 'Your data is protected with enterprise-grade security',
      icon: '🔒',
    },
  ];

  return (
    <section className="border-t border-border bg-secondary/5 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Why choose us?
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-4 rounded-xl border border-border/50 bg-card/40 p-6 backdrop-blur-sm transition-all hover:border-primary/20 hover:bg-card/60 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="text-3xl">{feature.icon}</div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
