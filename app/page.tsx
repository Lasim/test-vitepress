import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <div className="space-y-6">
        <h1 className="text-5xl font-bold">Welcome to My Awesome Project!</h1>
        <p className="text-xl text-muted-foreground">
          This is the main landing page.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/docs" // This will correctly link to /kaki/docs
            className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-primary rounded-md shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            View Documentation
          </Link>
          {/* You can add more links here if needed */}
        </div>
      </div>
    </main>
  );
}
