import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ServicesComponent from "@/components/services"

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServicesComponent />
      <Footer />
    </main>
  );
}