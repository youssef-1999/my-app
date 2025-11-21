import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { TopBar } from "@/components/TopBar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <div className="flex min-h-screen w-full bg-gray-50">

            {/* Sidebar */}
            <AppSidebar />

            {/* Main content area */}
            <div className="flex flex-col flex-1 min-w-0">

              {/* TopBar */}
              <TopBar />

              {/* Page Content */}
              <main className="mt-20 px-6 py-4">
                {children}
              </main>

            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
