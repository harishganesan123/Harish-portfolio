import Link from 'next/link';
import { Github, Mail, Phone } from 'lucide-react';

import { siteConfig } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card py-10 border-t">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <Link href="/" className="text-2xl font-bold text-gradient">Harish G</Link>
            <p className="mt-2 text-sm text-muted-foreground max-w-md">
              AI & Data Science enthusiast building practical intelligent applications with modern AI technologies.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button size="icon" variant="outline" asChild><a href={siteConfig.links.email} aria-label="Email"><Mail className="h-5 w-5" /></a></Button>
            <Button size="icon" variant="outline" asChild><a href={siteConfig.links.phone} aria-label="Phone"><Phone className="h-5 w-5" /></a></Button>
            <Button size="icon" variant="outline" asChild><a href={siteConfig.links.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github className="h-5 w-5" /></a></Button>
          </div>
        </div>
        <Separator className="my-7" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>© {currentYear} Harish G. All rights reserved.</p>
          <p>B.Tech. Artificial Intelligence · Amity University Lucknow</p>
        </div>
      </div>
    </footer>
  );
}