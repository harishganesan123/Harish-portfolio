'use client';

import { motion } from 'framer-motion';
import { Brain, Code2, GraduationCap, Users } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <motion.div variants={staggerContainer()} initial="hidden" animate="show" className="max-w-5xl mx-auto">
          <motion.div variants={fadeIn('down', 0.1)} className="mb-12">
            <p className="text-primary font-medium mb-3">ABOUT HARISH G</p>
            <h1 className="text-4xl md:text-5xl font-bold">AI-focused builder with a practical engineering mindset.</h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl leading-relaxed">
              I am pursuing a B.Tech. in Artificial Intelligence at Amity University Lucknow. My work spans Machine Learning, Deep Learning, NLP, Computer Vision, LLMs, RAG and AI-driven automation, with a focus on building useful systems rather than isolated experiments.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Brain, title: 'AI & Data Science', text: 'Hands-on work across ML, DL, NLP, LLMs, RAG, Computer Vision and Reinforcement Learning.' },
              { icon: Code2, title: 'Application Development', text: 'Building AI applications with Python, FastAPI, React, PostgreSQL, SQLAlchemy, Redis and Celery.' },
              { icon: Users, title: 'Team & Communication', text: 'Internship experience involving coordination, technical discussions, execution and delivery.' },
              { icon: GraduationCap, title: 'Academic Foundation', text: 'B.Tech. Artificial Intelligence, 2023–2027 · 8.61 CGPA · 9.20 latest SGPA.' },
            ].map(({ icon: Icon, title, text }, index) => (
              <motion.div key={title} variants={fadeIn('up', 0.15 + index * 0.08)}>
                <Card className="card-gradient h-full">
                  <CardContent className="p-6">
                    <Icon className="h-7 w-7 text-primary mb-4" />
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeIn('up', 0.5)} className="mt-10 flex flex-wrap gap-3">
            <Button asChild><a href="mailto:harishganesan123@gmail.com">Get in Touch</a></Button>
            <Button variant="outline" asChild><a href="tel:+919843233133">Call Me</a></Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}