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

// Menu items with proper icons
const items = [
  { title: "Dashboard", url: "#", icon: Home },
  { title: "Transactions", url: "#", icon: CreditCard },
  { title: "Accounts", url: "#", icon: User },
  { title: "Investments", url: "#", icon: TrendingUp },
  { title: "Credit Cards", url: "#", icon: Wallet },
  { title: "Loans", url: "#", icon: HandCoins },
  { title: "Services", url: "#", icon: Settings },
  { title: "My Privileges", url: "#", icon: Award },
  { title: "Setting", url: "#", icon: Settings },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Bank Dash</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a className="flex items-center gap-2" href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
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
