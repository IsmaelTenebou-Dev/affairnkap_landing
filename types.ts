
// Import React to resolve the 'Cannot find namespace React' error
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}
