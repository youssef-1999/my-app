"use client";

import {
  Home,
  CreditCard,
  User,
  TrendingUp,
  Wallet,
  HandCoins,
  Settings,
  Award,
  BadgeDollarSign,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import Link from "next/link";
import { useUIStore } from "@/store/UIStore";

const items = [
  { title: "Dashboard", url: "/dashboard", icon: Home },
  { title: "Transactions", url: "/transactions", icon: CreditCard },
  { title: "Accounts", url: "/accounts", icon: User },
  { title: "Investments", url: "/investments", icon: TrendingUp },
  { title: "Credit Cards", url: "/creditcards", icon: Wallet },
  { title: "Loans", url: "/loans", icon: HandCoins },
  { title: "Services", url: "/services", icon: Settings },
  { title: "My Privileges", url: "/myprivileges", icon: Award },
  { title: "Setting", url: "/setting", icon: Settings },
];

export function AppSidebar() {
  const setActiveSection = useUIStore((state) => state.setActiveSection);

  return (
    <Sidebar collapsible="icon" variant="sidebar">

      <SidebarContent>

        <SidebarGroup>

          {/* Logo */}
          <SidebarGroupLabel className="flex items-center gap-2 text-2xl font-extrabold text-blue-800 py-4 px-4">
            <BadgeDollarSign className="text-blue-600 w-6 h-6" />
            BankDash
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      onClick={() => setActiveSection(item.title)}
                      className="flex items-center gap-3 px-4 py-2 text-sm"
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>

        </SidebarGroup>

      </SidebarContent>

    </Sidebar>
  );
}
