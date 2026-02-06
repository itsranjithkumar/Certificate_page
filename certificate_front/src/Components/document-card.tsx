
'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface DocumentCardProps {
  document: {
    title: string;
    description: string;
    path: string;
    icon: string;
  };
}

const DocumentCard = ({ document }: DocumentCardProps) => {
  return (
    <Link to={document.path}>
      <Card className="group h-full cursor-pointer overflow-hidden border border-border bg-card/50 transition-all duration-300 hover:border-primary/20 hover:bg-card hover:shadow-lg hover:shadow-primary/10">
        <div className="flex flex-col gap-4 p-6">
          <div className="text-3xl">{document.icon}</div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold tracking-tight text-foreground">
              {document.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {document.description}
            </p>
          </div>

          <div className="mt-auto pt-2">
            <Button
              variant="ghost"
              className="w-full justify-between rounded-lg bg-secondary/40 px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary/60 group-hover:bg-primary group-hover:text-primary-foreground transition-all"
            >
              Create
              <span className="opacity-0 transition-opacity group-hover:opacity-100">
                →
              </span>
            </Button>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default DocumentCard;
