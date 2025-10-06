"use client";

import * as React from "react";
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react";

import { NavDocuments } from "@/components/nav-documents";
import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "EverPrompt User",
    email: "user@everprompt.ai",
    avatar: "/logo_everprompt.svg",
  },
  navMain: [
    {
      title: "Prompts",
      url: "#",
      icon: IconFileAi,
    },
    {
      title: "Workflows",
      url: "#",
      icon: IconListDetails,
    },
    {
      title: "Templates",
      url: "#",
      icon: IconFileDescription,
    },
    {
      title: "Community",
      url: "#",
      icon: IconUsers,
    },
    {
      title: "Analytics",
      url: "#",
      icon: IconChartBar,
    },
  ],
  navClouds: [
    {
      title: "My Prompts",
      icon: IconFileAi,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Recent",
          url: "#",
        },
        {
          title: "Favorites",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "n8n Workflows",
      icon: IconListDetails,
      url: "#",
      items: [
        {
          title: "Recent Workflows",
          url: "#",
        },
        {
          title: "Imported",
          url: "#",
        },
        {
          title: "Collections",
          url: "#",
        },
      ],
    },
    {
      title: "Templates",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Community",
          url: "#",
        },
        {
          title: "My Templates",
          url: "#",
        },
        {
          title: "Featured",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Search",
      url: "#",
      icon: IconSearch,
    },
  ],
  documents: [
    {
      name: "Prompt Library",
      url: "#",
      icon: IconDatabase,
    },
    {
      name: "n8n Integration",
      url: "#",
      icon: IconReport,
    },
    {
      name: "Community",
      url: "#",
      icon: IconUsers,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#" className="flex items-center gap-2">
                <img
                  src="/logo_everprompt.svg"
                  alt="EverPrompt"
                  className="h-8 w-8"
                />
                <span className="text-base font-semibold">EverPrompt</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
