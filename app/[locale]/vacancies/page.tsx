import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function VacanciesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Career Opportunities</h1>
        <div className="grid gap-6">
          {/* Add your vacancies content here */}
          <div className="border rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Senior Electrical Engineer</h2>
            <p className="text-muted-foreground mb-4">
              We are looking for an experienced electrical engineer to join our team.
            </p>
            {/* Add more vacancy details */}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
