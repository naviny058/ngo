import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Palette,
  Folder,
  Users,
  Heart,
  FileText,
  Wrench,
  Mail,
  File,
  Settings,
  LogOut,
  PaperclipIcon,
  IdCard,
  WholeWord,
  Pen,
  ChevronDown,
  ChevronRight,
  Newspaper,
} from "lucide-react";

function Sidebar() {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (label) => {
    setOpenMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const sidebarItems = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <Palette />,
    },
    {
      label: "Content Management",
      icon: <Folder />,
      items: [
        {
          label: "Manage News",
          href: "/news",
          icon: <Newspaper />,
        },
      ]
    },
    {
      label: "Team",
      href: "/team",
      icon: <Users />,
    },
    {
      label: "Favorites",
      href: "/favorites",
      icon: <Heart />,
    },
    {
      label: "Documents",
      href: "/documents",
      icon: <FileText />,
    },
    {
      label: "Tools",
      icon: <Wrench />,
      items: [
        {
          label: "Certificate",
          href: "/certificate",
          icon: <PaperclipIcon />,
        },
        {
          label: "ID Card Generator",
          href: "/id-card-generator",
          icon: <IdCard />,
        },
      ],
    },
    {
      label: "Messages",
      href: "/messages",
      icon: <Mail />,
    },
    {
      label: "Files",
      href: "/files",
      icon: <File />,
    },
    {
      label: "Settings",
      icon: <Settings />,
      items: [
        {
          label: "Site Configuration",
          href: "/site-configuration",
          icon: <WholeWord />,
        },
        {
          label: "Style Management",
          href: "/style-management",
          icon: <Pen />,
        },
      ],
    },
    {
      label: "Logout",
      href: "/logout",
      icon: <LogOut />,
    },
  ];

  return (
    <aside className="w-64 h-screen bg-green-600 text-white flex flex-col">
      <div className="p-4 text-xl font-bold border-b border-gray-700">
        NGO Dashboard
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {sidebarItems.map((item) => (
          <div key={item.label}>
            {/* Parent Item */}
            {item.items ? (
              <div>
                <button
                  onClick={() => toggleMenu(item.label)}
                  className="w-full p-2 rounded hover:border-white flex items-center justify-between"
                >
                  <div className="flex items-center gap-4 text-sm">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  {openMenus[item.label] ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )}
                </button>

                {/* Nested Items */}
                {openMenus[item.label] && (
                  <div className="ml-8 mt-2 space-y-1">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.href}
                        className="p-2 rounded hover:border-white flex items-center gap-3 text-sm"
                      >
                        {subItem.icon}
                        <span>{subItem.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                to={item.href}
                className="p-2 rounded hover:border-white flex items-center gap-4"
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;