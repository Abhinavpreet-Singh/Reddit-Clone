import React from 'react';
import { Icon, useColorModeValue, Box, Text, HStack } from "@chakra-ui/react";

type BluixLogoProps = {
  showText?: boolean;
  boxSize?: string | number;
  [key: string]: any;
};

export const BluixLogo: React.FC<BluixLogoProps> = ({ showText = true, boxSize = 8, ...props }) => {
  const textColor = useColorModeValue('brand.700', 'brand.200');
  
  return (
    <HStack spacing={2} {...props}>
      <Icon viewBox="0 0 24 24" boxSize={boxSize}>
        <path
          fill={useColorModeValue('#0967D2', '#47A3F3')}
          d="M12 0L24 12L12 24L0 12L12 0Z"
        />
        <path
          fill={useColorModeValue('#E6F6FF', '#BAE3FF')}
          d="M12 4L20 12L12 20L4 12L12 4Z"
        />
        <circle cx="12" cy="12" r="3" fill={useColorModeValue('#0967D2', '#47A3F3')} />
      </Icon>
      {showText && (
        <Text 
          fontWeight="extrabold" 
          fontSize={typeof boxSize === 'number' ? `${boxSize * 0.8}px` : `calc(${boxSize} * 0.8)`}
          color={textColor}
          letterSpacing="tight"
        >
          BluiX
        </Text>
      )}
    </HStack>
  );
};

export default BluixLogo;
