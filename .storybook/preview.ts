import type { Preview } from "@storybook/react";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: {
        ...MINIMAL_VIEWPORTS,
        mobile: {
          name:'Mobile',
          styles:{
            width:'375px',
            height:'667px'
          }
        },
        tablet: {
          name:'Tablet',
          styles:{
            width:'768px',
            height:'1024px',
          }
        },
        desktop: {
          name:'Desktop',
          styles:{
            width:'1440px',
            height:'900px'
          }
        },
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
