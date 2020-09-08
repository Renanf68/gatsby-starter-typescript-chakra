import { theme, DefaultTheme } from "@chakra-ui/core"

const customTheme: DefaultTheme = {
  ...theme,
  breakpoints: ["44em", "80em"],
  fonts: {
    body: "Roboto, system-ui, sans-serif",
    heading: "Roboto, system-ui, sans-serif",
    mono: "Menlo, monospace",
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 600,
    bold: 700,
  },
  radii: {
    ...theme.radii,
    sm: "5px",
    md: "8px",
  },
  //primary and secondary added on theme.colors interface in node_modules
  colors: {
    ...theme.colors,
    primary: "#8257e5",
    secondary: "#FAF5FF",
    gray: {
      ...theme.colors.gray,
      300: "#e1e1e6",
      600: "#29292e",
      700: "#202024",
      800: "#121214",
    },
  },
}

export default customTheme
