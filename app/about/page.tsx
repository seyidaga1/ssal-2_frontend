import React from 'react';
import AboutComponent from '@/components/about';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutComponent />
      <Footer />
    </main>
  );
}