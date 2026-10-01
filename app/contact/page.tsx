'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <motion.div variants={staggerContainer()} initial="hidden" animate="show" className="max-w-4xl mx-auto">
          <motion.div variants={fadeIn('down', 0.1)} className="text-center mb-12">
            <p className="text-primary font-medium mb-3">CONTACT</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Let&apos;s build something useful.</h1>
            <p className="text-lg text-muted-foreground">For opportunities, collaborations or project discussions, reach out directly.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div variants={fadeIn('right', 0.2)}>
              <Card className="card-gradient h-full">
                <CardContent className="p-7 space-y-7">
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div><p className="font-semibold">Email</p><a className="text-muted-foreground hover:text-primary" href="mailto:harishganesan123@gmail.com">harishganesan123@gmail.com</a></div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div><p className="font-semibold">Phone</p><a className="text-muted-foreground hover:text-primary" href="tel:+919843233133">+91 98432 33133</a></div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div><p className="font-semibold">Location</p><p className="text-muted-foreground">Coimbatore, Tamil Nadu, India</p></div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn('left', 0.25)}>
              <Card className="h-full">
                <CardContent className="p-7">
                  <h2 className="text-2xl font-semibold mb-3">Direct contact</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Email is the best way to reach me for internships, AI/ML opportunities, collaborations and technical discussions.
                  </p>
                  <Button className="w-full" asChild><a href="mailto:harishganesan123@gmail.com?subject=Portfolio%20Contact">Send an Email</a></Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}