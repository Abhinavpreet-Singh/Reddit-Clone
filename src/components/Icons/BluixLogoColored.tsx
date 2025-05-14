import React from 'react';
import { Icon, Box, Text, HStack } from "@chakra-ui/react";

type BluixLogoColoredProps = {
  showText?: boolean;
  boxSize?: string | number;
  [key: string]: any;
};

export const BluixLogoColored: React.FC<BluixLogoColoredProps> = ({ showText = true, boxSize = 8, ...props }) => {
  return (
    <HStack spacing={2} {...props}>
      <Icon viewBox="0 0 24 24" boxSize={boxSize}>
        {/* Primary diamond */}
        <path
          fill="#0967D2"
          d="M12 0L24 12L12 24L0 12L12 0Z"
        />
        {/* Inner diamond with gradient */}
        <path
          fill="#BAE3FF"
          d="M12 4L20 12L12 20L4 12L12 4Z"
        />
        {/* Center dot */}
        <circle cx="12" cy="12" r="3" fill="#0967D2" />
        
        {/* Optional: add subtle gradient overlay */}
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#47A3F3" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0967D2" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="24" height="24" fill="url(#grad)" fillOpacity="0.4" />
      </Icon>
      {showText && (
        <Text 
          fontWeight="extrabold" 
          fontSize={typeof boxSize === 'number' ? `${boxSize * 0.8}px` : `calc(${boxSize} * 0.8)`}
          color="#0967D2"
          letterSpacing="tight"
        >
          BluiX
        </Text>
      )}
    </HStack>
  );
};

export default BluixLogoColored;
