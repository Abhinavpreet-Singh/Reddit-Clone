import React from 'react';
import { Flex, Text, Link, Box, Stack, Icon, useColorMode, Divider } from "@chakra-ui/react";
import { BluixLogo } from '../Icons/BluixLogo';
import { FaGithub, FaTwitter, FaDiscord } from 'react-icons/fa';

const Footer: React.FC = () => {
  const { colorMode } = useColorMode();
  const year = new Date().getFullYear();

  return (
    <Flex 
      as="footer" 
      width="100%" 
      padding="2rem 0"
      mt={6}
      direction="column" 
      align="center"
      bg={colorMode === "dark" ? "dark.500" : "gray.50"}
      borderTop={`1px solid ${colorMode === "dark" ? "#252D3C" : "gray.200"}`}
    >
      <Flex 
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align={{ base: "center", md: "flex-start" }}
        width="95%" 
        maxWidth="1100px"
        mb={8}
      >
        <Stack spacing={4} mb={{ base: 8, md: 0 }} align={{ base: "center", md: "flex-start" }}>
          <BluixLogo boxSize={10} showText={true} />
          <Text fontSize="9pt" color={colorMode === "dark" ? "gray.400" : "gray.500"}>
            Explore the deep with BluiX. Connect in style.
          </Text>
          <Flex>
            <Link href="https://github.com" isExternal mx={1}>
              <Icon as={FaGithub} boxSize={5} color={colorMode === "dark" ? "gray.400" : "gray.500"} />
            </Link>
            <Link href="https://twitter.com" isExternal mx={1}>
              <Icon as={FaTwitter} boxSize={5} color={colorMode === "dark" ? "gray.400" : "gray.500"} />
            </Link>
            <Link href="https://discord.com" isExternal mx={1}>
              <Icon as={FaDiscord} boxSize={5} color={colorMode === "dark" ? "gray.400" : "gray.500"} />
            </Link>
          </Flex>
        </Stack>

        <Stack spacing={8} direction={{ base: "column", md: "row" }} align={{ base: "center", md: "flex-start" }}>
          <Stack spacing={3} align={{ base: "center", md: "flex-start" }}>
            <Text fontWeight={700} fontSize="10pt">Product</Text>
            <Link fontSize="9pt" color={colorMode === "dark" ? "gray.400" : "gray.500"}>Features</Link>
            <Link fontSize="9pt" color={colorMode === "dark" ? "gray.400" : "gray.500"}>Premium</Link>
            <Link fontSize="9pt" color={colorMode === "dark" ? "gray.400" : "gray.500"}>Mobile App</Link>
          </Stack>
          
          <Stack spacing={3} align={{ base: "center", md: "flex-start" }}>
            <Text fontWeight={700} fontSize="10pt">Company</Text>
            <Link fontSize="9pt" color={colorMode === "dark" ? "gray.400" : "gray.500"}>About</Link>
            <Link fontSize="9pt" color={colorMode === "dark" ? "gray.400" : "gray.500"}>Careers</Link>
            <Link fontSize="9pt" color={colorMode === "dark" ? "gray.400" : "gray.500"}>Press</Link>
          </Stack>
          
          <Stack spacing={3} align={{ base: "center", md: "flex-start" }}>
            <Text fontWeight={700} fontSize="10pt">Resources</Text>
            <Link fontSize="9pt" color={colorMode === "dark" ? "gray.400" : "gray.500"}>Support</Link>
            <Link fontSize="9pt" color={colorMode === "dark" ? "gray.400" : "gray.500"}>Community Guidelines</Link>
            <Link fontSize="9pt" color={colorMode === "dark" ? "gray.400" : "gray.500"}>Privacy Policy</Link>
          </Stack>
        </Stack>
      </Flex>

      <Divider width="95%" maxWidth="1100px" mb={4} borderColor={colorMode === "dark" ? "#252D3C" : "gray.200"} />
      
      <Text fontSize="9pt" color={colorMode === "dark" ? "gray.400" : "gray.500"}>
        © {year} BluiX. All rights reserved.
      </Text>
    </Flex>
  );
};

export default Footer;
