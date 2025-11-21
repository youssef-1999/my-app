"use client"

import {
  Home,
  CreditCard,
  User,
  TrendingUp,
  Wallet,
  HandCoins,
  Settings,
  Award,
  Baby,
  BadgeDollarSign,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import Link from "next/link"
import { useUIStore } from "@/store/UIStore"

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
]

export function AppSidebar() {
  const setActiveSection = useUIStore((state) => state.setActiveSection)

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-blue-800 font-extrabold text-2xl"> <BadgeDollarSign />BankDash</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      onClick={() => setActiveSection(item.title)}  // ✅ هنا الربط
                      className="flex items-center gap-2"
                    >
                      <item.icon />
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
  )
}
