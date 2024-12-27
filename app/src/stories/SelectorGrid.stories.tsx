import type { Meta, StoryObj } from "@storybook/react";

import SelectorGrid from "../components/SelectorGrid/SelectorGrid";

const meta = {
  title: "Components/SelectorGrid",
  component: SelectorGrid,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SelectorGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FourByFour: Story = {
  args: {
    gridSize: 4,
    gridMode: "digit",
  },
  render: (args) => (
    <div>
      <SelectorGrid {...args} />
    </div>
  ),
};

export const SixBySix: Story = {
  args: {
    gridSize: 6,
    gridMode: "digit",
  },
  render: (args) => (
    <div>
      <SelectorGrid {...args} />
    </div>
  ),
};
