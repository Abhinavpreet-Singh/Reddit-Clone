import React from 'react';
import { IconType } from 'react-icons';
import { BluixLogo } from './BluixLogo';

// This adapter allows BluixLogo to be used where IconType is expected
export const BluixLogoIcon: IconType = React.memo(
  (props) => <BluixLogo showText={false} {...props} />
) as unknown as IconType;
