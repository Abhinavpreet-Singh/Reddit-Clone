import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/clientApp";
import useAuth from "../../hooks/useAuth";
import Navbar from "../Navbar";
import AuthModal from "../Modal/Auth";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const bg = useColorModeValue("gray.200", "#1A1A1B");
  return (
    <Box minH="100vh" bg={bg} display="flex" flexDirection="column">
      <Navbar />
      <Box flex="1">
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
