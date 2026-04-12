import Link from "next/link";
import { Users, BookOpen, LayoutDashboard, Star } from "lucide-react";
import { ReactNode } from "react";
import Image from "next/image";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const navItems = [
    { name: "Overview", href: "/admin", icon: LayoutDashboard },
    { name: "Leads", href: "/admin/leads", icon: Users },
    { name: "Courses", href: "/admin/courses", icon: BookOpen },
    { name: "Content", href: "/admin/content", icon: Star },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-card hidden md:block">
        <div className="h-16 flex items-center px-6 border-b border-border">
          <Link href="/admin" className="flex items-center space-x-2">
            <Image src="/wordmark-logomark.png" alt="DLS Wordmark" width={300} height={80} className="h-8 w-auto object-contain" />
          </Link>
        </div>
        <nav className="p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-16 flex items-center px-6 border-b border-border bg-card justify-between md:justify-end">
          <div className="md:hidden flex items-center">
            <span className="font-bold text-xl text-foreground">DLS Admin</span>
          </div>
          <div className="flex items-center space-x-4 text-sm font-medium">
            <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center">A</span>
            <span>Admin User</span>
          </div>
        </header>
        <div className="flex-1 overflow-auto p-6 md:p-10">
          {children}
        </div>
      </main>
    </div>
  );
}
