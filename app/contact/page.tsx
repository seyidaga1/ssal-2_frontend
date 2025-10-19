import React from 'react';
import ContactComponent from '@/components/contact';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ContactComponent />
      <Footer />
    </main>
  );
}