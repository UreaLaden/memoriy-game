import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Selector from "../components/Selector/Selector";

const meta = {
  title: "Components/Selector",
  component: Selector,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Selector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Hidden: Story = {
  args: {
    id:"testId",
    value: 6,
    mode: "graphic",
    gridSize: 4,
  },
  render: (args) => (
    <div style={{ width: "60px", height: "60px", border: "1px solid black" }}>
      <Selector {...args} />
    </div>
  ),
};

export const WithGraphicActive: Story = {
  args: {
    id:"testId",    
    value: 6,
    mode: "graphic",
    gridSize: 6,
  },
  render: (args) => (
    <div style={{ width: "60px", height: "60px", border: "1px solid black" }}>
      <Selector {...args} />
    </div>
  ),
};

export const WithGraphicInactive: Story = {
  args: {
    id:"testId",
    value: 6,
    mode: "graphic",
    gridSize: 4,
  },
  render: (args) => (
    <div style={{ width: "60px", height: "60px", border: "1px solid black" }}>
      <Selector {...args} />
    </div>
  ),
};

export const NoGraphicActive: Story = {
  args: {
    id:"testId",
    value: 18,
    mode: "digit",
    gridSize: 6,
  },
  render: (args) => (
    <div
      style={{
        width: "60px",
        height: "60px",
        border: "1px solid black",
        fontFamily: "Atkinson Hyperlegible",
        fontWeight: "700",
      }}
    >
      <Selector {...args} />
    </div>
  ),
};

export const NoGraphicInactive: Story = {
  args: {
    id:"testId",
    value: 6,
    mode: "digit",
    gridSize:4
  },
  render: (args) => (
    <div style={{ width: "60px", height: "60px", border: "1px solid black" }}>
      <Selector {...args} />
    </div>
  ),
};
