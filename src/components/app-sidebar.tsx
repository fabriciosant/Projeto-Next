"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  Target,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import { Github } from "lucide-react"
import { FaReact, FaJs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"


// This is sample data.
const data = {
  user: {
    name: "Fabricio",
    email: "fabricio@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "NextJS",
      logo: SiNextdotjs,
      plan: "Desenvolvimento",
    },
    {
      name: "React",
      logo: FaReact,
      plan: "Desenvolvimento",
    },
    {
      name: "Javascript",
      logo: FaJs,
      plan: "Desenvolvimento",
    },
  ],
  navMain: [
    {
      title: "Github",
      url: "#",
      icon: Github,
      items: [
        {
          title: "NextJS",
          url: "https://github.com/fabriciosant/Projeto-Next",
        },
        {
          title: "Ruby on Rails",
          url: "https://github.com/fabriciosant/CulinarySuite",
        },
        {
          title: "Javascript",
          url: "https://github.com/fabriciosant/ping-pong",
        },
      ],
    },
    {
      title: "Documentações",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "NextJS",
          url: "https://nextjs.org/docs",
        },
        {
          title: "Ruby on Rails",
          url: "https://gorails.com/setup/ubuntu/24.04",
        },
        {
          title: "Shadcn UI",
          url: "https://ui.shadcn.com/docs",
        },
      ],
    },
    {
      title: "Configurações",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Geral",
          url: "#",
        },
        {
          title: "Projetos",
          url: "#",
        },
        {
          title: "Conta",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
