import { useTheme } from "@/contexts/theme";

export function UsethemesIcons() {
  const { theme } = useTheme();
  const bgColor = theme == "dark" ? "white" : "black";
  const text = theme == "dark" ? "black" : "white";
  return { bgColor, text };
}