import { Bookmark, Calendar, Home, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

// assets
import jionBlack from "@/assets/images/jion-black.png";
import jionWhite from "@/assets/images/jion-white.png";
// components
import {
  Sidebar as UISidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useTheme } from "@/hooks/use-theme";

export default function Sidebar() {
  const { theme } = useTheme();

  return (
    <UISidebar className="border-none">
      <SidebarHeader className="p-0 py-4">
        <SidebarGroupLabel className="flex justify-between">
          <Link to="/" className="flex items-center">
            <img
              className="h-8"
              src={theme === "dark" ? jionWhite : jionBlack}
              alt="logo"
            />
            <span className="mx-2 font-mono text-3xl font-bold uppercase">
              Jion
            </span>
          </Link>
          <SidebarTrigger />
        </SidebarGroupLabel>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuButton asChild>
                <Link to="/">
                  <Home />
                  <span className="text-lg">Home</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenu>
          </SidebarGroupContent>

          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarGroupLabel>
                <Calendar />
                <span className="ml-2 text-lg">Seasons</span>
              </SidebarGroupLabel>
              <SidebarMenuSub>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton asChild>
                    <Link to="/now">
                      <span className="text-lg">Now</span>
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton asChild>
                    <Link to="/upcoming">
                      <span className="text-lg">Upcoming</span>
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              </SidebarMenuSub>
            </SidebarMenu>
          </SidebarGroupContent>

          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarGroupLabel>
                <Sparkles />
                <span className="ml-2 text-lg">Top</span>
              </SidebarGroupLabel>
              <SidebarMenuSub>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton asChild>
                    <Link to="/top/anime">
                      <span className="text-lg">Anime</span>
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton asChild>
                    <Link to="/top/manga">
                      <span className="text-lg">Manga</span>
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              </SidebarMenuSub>
            </SidebarMenu>
          </SidebarGroupContent>

          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarGroupLabel>
                <Bookmark />
                <span className="ml-2 text-lg">Favorite</span>
              </SidebarGroupLabel>
              <SidebarMenuSub>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton asChild>
                    <Link to="/favorite/anime">
                      <span className="text-lg">Anime</span>
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton asChild>
                    <Link to="/favorite/manga">
                      <span className="text-lg">Manga</span>
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              </SidebarMenuSub>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </UISidebar>
  );
}
