import React from 'react';


export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Our Projects</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add your projects content here */}
          <div className="border rounded-lg overflow-hidden shadow-sm">
            <div className="aspect-video relative bg-gray-100">
              {/* Add project image */}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Commercial Installation</h3>
              <p className="text-muted-foreground">
                Large scale electrical installation for commercial building.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}