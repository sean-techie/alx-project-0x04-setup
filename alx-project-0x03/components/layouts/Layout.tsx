import { LayoutProps } from "@/interface"; // ✅ Import interface

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-xl font-bold">Splash App</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        &copy; {new Date().getFullYear()} Splash App. All rights reserved.
      </footer>
    </div>
  );
}
