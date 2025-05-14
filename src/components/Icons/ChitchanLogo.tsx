import React from 'react';
import { Icon, useColorModeValue, Box, Text, HStack, IconProps } from '@chakra-ui/react';

export const BluiXLogo: React.FC<IconProps & { showText?: boolean }> = ({ showText = true, ...props }) => {
  const textColor = useColorModeValue('brand.700', 'brand.200');
  
  return (
    <HStack spacing={2}>
      <Icon viewBox="0 0 24 24" {...props}>
        <path
          fill={useColorModeValue('#0A2647', '#144272')}
          d="M12 0L24 12L12 24L0 12L12 0Z"
        />
        <path
          fill={useColorModeValue('#2C74B3', '#205295')}
          d="M12 4L20 12L12 20L4 12L12 4Z"
        />
        <circle cx="12" cy="12" r="3" fill={useColorModeValue('#0A2647', '#5DA3FA')} />
      </Icon>
      {showText && (
        <Text 
          fontWeight="extrabold" 
          fontSize={props.boxSize ? `calc(${props.boxSize.toString()} * 0.8)` : "xl"}
          color={textColor}
          letterSpacing="tight"
        >
          BluiX
        </Text>
      )}
    </HStack>
  );
};

export default BluiXLogo;