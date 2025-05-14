// Importing necessary Chakra utilities and types
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

// Importing custom component styles
import { Button } from "./button";
import { Input } from "./input";
import { Menu } from "./menu";

// Theme configuration to set initial color mode and whether to follow system preference
const config: ThemeConfig = {
  initialColorMode: "light",       // Start in light mode by default
  useSystemColorMode: false,       // Do not use system color mode settings
};

// Extending the default Chakra theme with BluiX design system
export const theme = extendTheme({
  config,

  // Modern BluiX color palette with unique dark navy theme
  colors: {
    brand: {
      50: "#E0F2FE",  // Lightest blue
      100: "#B9E6FE",
      200: "#7CDBFF",
      300: "#2C74B3",
      400: "#205295",
      500: "#144272",  // Primary blue (navy)
      600: "#0A2647",
      700: "#061A35",
      800: "#041025",
      900: "#020815",  // Darkest blue (almost black)
    },
    accent: {
      100: "#FCEFFF",  // Soft purple accent
      200: "#F8DDFF",
      300: "#F3C6FF",
      400: "#EB99FF",
      500: "#D27AFF",  // Primary purple accent
      600: "#9747FF",
    },    dark: {
      100: "#E1E5EA",      // Lightest gray for dark mode
      200: "#9AA5B4",
      300: "#3E4C59",
      400: "#0A2647",      // Dark navy
      500: "#051937",      // Main background color for dark mode (deep navy)
      600: "#000F25",      // Almost black with blue tint
      card: "#0C2D5B",     // Card background in dark mode (navy)
    },
    light: {
      100: "#FFFFFF",
      200: "#F8FAFF",      // Slight blue tint to white
      300: "#ECF2FF",      // Light blue tint
      400: "#DBEAFE",      // Lighter blue
      500: "#BFDBFE",      // Light blue
    }
  },
  // Modern fonts
  fonts: {
    heading: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
    body: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
    mono: "SF Mono, Menlo, monospace",
  },
  
  // BorderRadius for more modern UI
  radii: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    '2xl': '24px',
    full: '9999px',
  },
  
  // Shadow variations
  shadows: {
    card: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
    button: "0 1px 3px rgba(0, 0, 0, 0.1)",
    hover: "0 8px 30px rgba(0, 0, 0, 0.12)",
  },

  // Global styles for the application
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === "dark" ? "dark.500" : "light.300",      // Body background based on color mode
        color: props.colorMode === "dark" ? "light.300" : "dark.500",   // Body text color based on color mode
        lineHeight: "tall",
        transition: "background 0.2s ease-out",
      },
      
      button: {
        _hover: {
          transform: "translateY(-1px)",
          boxShadow: "hover",
        },
        transition: "all 0.2s ease",
      },
      
      a: {
        transition: "color 0.2s ease",
      },
      "html, body": {
        bg: props.colorMode === "dark" ? "dark.500" : "gray.200",
        color: props.colorMode === "dark" ? "dark.100" : "gray.900",
      },
    }),
  },

  // Custom component themes
  components: {
    Button, // Custom button styles
    Menu,   // Custom menu styles
    // Input, // Not working for now - needs to be debugged later
  },

  // Semantic tokens for consistent theming across light/dark modes
  semanticTokens: {
    colors: {
      "chakra-body-text": { _light: "gray.900", _dark: "dark.100" },
      "chakra-body-bg": { _light: "gray.200", _dark: "dark.500" },
      "chakra-border-color": { _light: "gray.200", _dark: "dark.300" },
      "chakra-placeholder-color": { _light: "gray.500", _dark: "dark.200" },
    },
  },

  // Layer styles for reusable component style patterns
  layerStyles: {
    card: {
      bg: { _light: "white", _dark: "dark.card" },              // Card background
      border: "1px solid",
      borderColor: { _light: "gray.200", _dark: "dark.300" },   // Card border color
    },
    cardHover: {
      _hover: {
        bg: { _light: "gray.50", _dark: "dark.400" },           // Hover state for cards
      }
    }
  },
});
