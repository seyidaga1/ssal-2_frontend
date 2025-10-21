import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ProjectsComponent from "@/components/projects"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ProjectsComponent />
      <Footer />
    </main>
  );
}
