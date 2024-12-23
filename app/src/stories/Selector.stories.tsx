import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Selector from "../components/selector/Selector";

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
    state: "hidden",
    value: 6,
    mode: "graphic",
  },
  render: (args) => (
    <div style={{width:'60px', height:'60px', border:'1px solid black'}}>
      <Selector {...args} />
    </div>
  ),
};

export const WithGraphicActive: Story = {
  args: {
    state: "active",
    value: 6,
    mode: "graphic",
  },
  render: (args) => (
    <div style={{width:'60px', height:'60px', border:'1px solid black'}}>
      <Selector {...args} />
    </div>
  ),
};


export const WithGraphicInactive: Story = {
  args: {
    state: "inactive",
    value: 6,
    mode: "graphic",
  },
  render: (args) => (
    <div style={{width:'60px', height:'60px', border:'1px solid black'}}>
      <Selector {...args} />
    </div>
  ),
};

export const NoGraphicActive: Story = {
  args: {
    state: "active",
    value: 18,
    mode: "digit",
  },
  render: (args) => (
    <div style={{width:'60px', height:'60px', border:'1px solid black', fontFamily:'Atkinson Hyperlegible',fontWeight:'700'}}>
      <Selector {...args} />
    </div>
  ),
};

export const NoGraphicInactive: Story = {
  args: {
    state: "inactive",
    value: 6,
    mode: "digit",
  },
  render: (args) => (
    <div style={{width:'60px', height:'60px', border:'1px solid black'}}>
      <Selector {...args} />
    </div>
  ),
};
