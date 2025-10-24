import React from 'react';
import ContactComponent from '@/components/contact';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ContactComponent />
       <div className="mt-16 rounded-lg overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d759.4139759908745!2d49.90020496961651!3d40.416472998215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da3fa4a5ffd%3A0xeb26c2ae25aaea97!2zSMmZxZ90yZlyeGFuIMSwxZ8gTcmZcmvJmXpp!5e0!3m2!1sen!2saz!4v1761335916512!5m2!1sen!2saz"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Həştərxan İş Mərkəzi Location"
          />
        </div>
      <Footer />
    </main>
  );
}