import { PiChartPieLight } from "react-icons/pi";
import { PiNotepad } from "react-icons/pi";
import { PiHeartbeat } from "react-icons/pi";
import { BiInjection } from "react-icons/bi";
import { PiCalendarBlank } from "react-icons/pi";
import { PiChatCircleDots } from "react-icons/pi";
import { APP_URL } from "./url";

interface MenuItem {
  name: string;
  icon: React.ComponentType;
  url: string;
}

export const MENU_ITEMS: MenuItem[] = [
  { name: "dashboard", icon: PiChartPieLight, url: APP_URL.DASHBOARD },
  { name: "notes", icon: PiNotepad, url: APP_URL.NOTES },
  { name: "health", icon: PiHeartbeat, url: APP_URL.HEALTH },
  { name: "checkup", icon: BiInjection, url: APP_URL.CHECKUP },
  { name: "appointment", icon: PiCalendarBlank, url: APP_URL.APPOINTMENT },
  { name: "chat", icon: PiChatCircleDots, url: APP_URL.CHAT },
];
