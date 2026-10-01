'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Mail } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { fadeIn, staggerContainer } from '@/lib/motion';
import { siteConfig } from '@/lib/constants';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 hero-grid" />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/10" />
      <div className="container relative z-10 px-4 py-24 md:py-32 lg:py-40 flex min-h-[88vh] items-center">
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          <motion.div variants={fadeIn('up', 0.1)} className="mb-6 flex flex-col items-start gap-5 sm:flex-row sm:items-center">\n            <img src="/profile.jpg" alt="Harish G" className="h-24 w-24 rounded-2xl border border-primary/30 object-cover shadow-lg" />\n            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              AI & Data Science Intern · AI Engineer in the Making\n            </div>\n          </motion.div>

          <motion.h1 variants={fadeIn('up', 0.2)} className="text-5xl md:text-7xl font-bold tracking-tight">
            Hi, I&apos;m <span className="text-gradient">Harish G</span>.
          </motion.h1>

          <motion.p variants={fadeIn('up', 0.35)} className="mt-6 max-w-3xl text-xl md:text-2xl leading-relaxed text-muted-foreground">
            I build practical AI systems using Machine Learning, Deep Learning, NLP, LLMs, RAG, Computer Vision and intelligent automation.
          </motion.p>

          <motion.div variants={fadeIn('up', 0.5)} className="mt-8 flex flex-wrap gap-3">
            {['Machine Learning', 'LLMs', 'RAG', 'NLP', 'Computer Vision', 'FastAPI'].map((item) => (
              <span key={item} className="rounded-full border border-border bg-card/70 px-4 py-2 text-sm">
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div variants={fadeIn('up', 0.65)} className="mt-10 flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link href="/projects">
                Explore Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={siteConfig.links.github} target="_blank" rel="noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <a href={siteConfig.links.email}>
                <ArrowRight className="mr-2 h-4 w-4" /> Resume
              </a>
            </Button>
          </motion.div>

          <motion.div variants={fadeIn('up', 0.8)} className="mt-12 flex flex-wrap gap-8 text-sm text-muted-foreground">
            <span><strong className="text-foreground">8.61</strong> CGPA</span>
            <span><strong className="text-foreground">9.20</strong> Latest SGPA</span>
            <span><strong className="text-foreground">2023–2027</strong> B.Tech AI</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}