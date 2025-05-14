import type { ComponentStyleConfig } from "@chakra-ui/theme";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "md",
    fontSize: "10pt",
    fontWeight: 600,
    _focus: {
      boxShadow: "0 0 0 2px rgba(9, 103, 210, 0.4)",
    },
    transition: "all 0.2s ease",
    letterSpacing: "0.015em",
  },
  sizes: {
    sm: {
      fontSize: "9pt",
      px: 3,
      py: 1,
    },
    md: {
      fontSize: "10pt",
      px: 4,
      py: 2,
    },
    lg: {
      fontSize: "11pt",
      px: 6,
      py: 3,
    },
  },  variants: {
    solid: {
      color: "white",
      bg: "brand.500",
      boxShadow: "0 0 10px rgba(45, 116, 179, 0.4)",
      _hover: {
        bg: "brand.600",
        transform: "translateY(-2px)",
        boxShadow: "0 0 15px rgba(45, 116, 179, 0.6)",
      },
      _dark: {
        bg: "brand.400",
        color: "white",
        _hover: {
          bg: "brand.400",
        },
      },
    },
    outline: {
      color: "brand.100",
      border: "1px solid",
      borderColor: "brand.100",
      _hover: {
        bg: "brand.50",
      },
      _dark: {
        color: "dark.200",
        borderColor: "dark.300",
        _hover: {
          bg: "dark.400",
          borderColor: "dark.200",
        },
      },
    },
    oauth: {
      height: "34px",
      border: "1px solid",
      borderColor: "gray.300",
      _hover: {
        bg: "gray.50",
      },
      _dark: {
        borderColor: "dark.300",
        _hover: {
          bg: "dark.400",
        },
      },
    },
    dark: {
      bg: "dark.500",
      color: "dark.100",
      _hover: {
        bg: "dark.400",
      },
    },
    menuItem: {
      height: "auto",
      width: "95%",
      margin: "0 auto",
      fontSize: "10pt",
      justifyContent: "flex-start",
      bg: "transparent",
      color: "gray.500",
      fontWeight: 500,
      padding: "4px 8px",
      _hover: {
        bg: "gray.100",
      },
      _dark: {
        color: "whiteAlpha.700",
        _hover: {
          bg: "dark.400",
        },
      },
    },
  },
};
