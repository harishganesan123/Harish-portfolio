'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/ui/section-header';
import { fadeIn } from '@/lib/motion';
import { siteConfig } from '@/lib/constants';

export function ContactPreview() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4">
        <SectionHeader
          title="Let&apos;s Connect"
          description="Interested in AI, data science, intelligent automation or building something together?"
          className="text-center"
        />
        <motion.div variants={fadeIn('up', 0.2)} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-10 flex flex-wrap justify-center gap-4">
          <Button asChild><a href={siteConfig.links.email}><Mail className="mr-2 h-4 w-4" /> Email Me</a></Button>
          <Button variant="outline" asChild><a href={siteConfig.links.phone}><Phone className="mr-2 h-4 w-4" /> Call Me</a></Button>
          <Button variant="ghost" asChild><Link href="/contact">Contact Page <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
        </motion.div>
      </div>
    </section>
  );
}