import React from 'react';
import { Hero } from './Hero';

export default {
  title: 'Screens/IndexScreen/Hero',
  component: Hero,
  parameters: {
    chromatic: { viewports: [320, 1200] },
    layout: 'fullscreen',
  },
};

export const Default = () => <Hero />;
Default.parameters = {
  backgrounds: { default: 'dark' },
};
