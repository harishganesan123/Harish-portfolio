'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, GraduationCap, Workflow } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn } from '@/lib/motion';

export function AboutPreview() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4">
        <SectionHeader
          title="About Me"
          description="AI-focused B.Tech. undergraduate building intelligent applications and automation workflows."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 items-center">
          <motion.div variants={fadeIn('right', 0.2)} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I&apos;m a B.Tech. Artificial Intelligence student at Amity University Lucknow with hands-on experience across Machine Learning, Deep Learning, NLP, LLMs, RAG, Computer Vision and AI-driven automation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              As an AI & Data Science Intern at HCL GUVI, I contribute to AI-powered educational solutions, create technical learning content, and coordinate internship activities. My projects focus on turning AI concepts into practical, usable systems.
            </p>
            <Button asChild>
              <Link href="/about">More About Me <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </motion.div>

          <motion.div variants={fadeIn('left', 0.25)} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card className="card-gradient">
              <CardContent className="p-6">
                <Brain className="h-7 w-7 text-primary mb-4" />
                <h3 className="font-semibold">AI & ML</h3>
                <p className="text-sm text-muted-foreground mt-2">ML, DL, NLP, LLMs, RAG and Computer Vision.</p>
              </CardContent>
            </Card>
            <Card className="card-gradient">
              <CardContent className="p-6">
                <Workflow className="h-7 w-7 text-secondary mb-4" />
                <h3 className="font-semibold">Build</h3>
                <p className="text-sm text-muted-foreground mt-2">FastAPI, React, PostgreSQL and AI services.</p>
              </CardContent>
            </Card>
            <Card className="card-gradient">
              <CardContent className="p-6">
                <GraduationCap className="h-7 w-7 text-accent mb-4" />
                <h3 className="font-semibold">Learn</h3>
                <p className="text-sm text-muted-foreground mt-2">B.Tech AI · 8.61 CGPA · 9.20 latest SGPA.</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}