import type { Meta, StoryFn } from "@storybook/react";

import SelectorGrid, {
  SelectorGridProps,
} from "../components/SelectorGrid/SelectorGrid";

const meta = {
  title: "Components/SelectorGrid",
  component: SelectorGrid,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SelectorGrid>;

export default meta;

const Template: StoryFn<SelectorGridProps> = (args: SelectorGridProps) => (
  <div>
    <SelectorGrid {...args} />
  </div>
);

export const Mobile = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: "mobile",
  },
};

export const Tablet = Template.bind({});
Tablet.parameters = {
  viewport: {
    defaultViewport: "tablet",
  },
};

export const Desktop = Template.bind({});
Desktop.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};

export const FourByFourMobile = Template.bind({});
FourByFourMobile.parameters = {
  ...Mobile.parameters,
};
FourByFourMobile.args = {
  gridSize: 4,
  gridMode: "digit",
};

export const FourByFourTablet = Template.bind({});
FourByFourTablet.parameters = {
  ...Tablet.parameters,
};
FourByFourTablet.args = {
  gridSize: 4,
  gridMode: "digit",
};

export const FourByFourDesktop = Template.bind({});
FourByFourDesktop.parameters = {
  ...Desktop.parameters,
};
FourByFourDesktop.args = {
  gridSize: 4,
  gridMode: "digit",
};

export const SixBySixMobile = Template.bind({});
SixBySixMobile.parameters = {
  ...Mobile.parameters,
};
SixBySixMobile.args = {
  gridSize: 6,
  gridMode: "digit",
};

export const SixBySixTablet = Template.bind({});
SixBySixTablet.parameters = {
  ...Tablet.parameters,
};
SixBySixTablet.args = {
  gridSize: 6,
  gridMode: "digit",
};

export const SixBySixDesktop = Template.bind({});
SixBySixDesktop.parameters = {
  ...Desktop.parameters,
};
SixBySixDesktop.args = {
  gridSize: 6,
  gridMode: "digit",
};


