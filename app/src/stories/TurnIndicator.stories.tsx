import type { Meta, StoryObj } from "@storybook/react";
import TurnIndicator from "../components/selector/TurnIndicator/TurnIndicator";

const meta = {
  title: "Components/TurnIndicator",
  component: TurnIndicator,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TurnIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
  args: {
    isActive: true,
    player: 1,
    playerPoints: 2,
  },
  render: (args) => (
    <div
      style={{        
        width: "100px",
        height: "50px",
        padding: "10px",
      }}
    >
      <TurnIndicator {...args} />
    </div>
  ),
};

export const InActive: Story = {
  args: {
    isActive: false,
    player: 2,
    playerPoints: 4,
  },
  render: (args) => (
    <div
      style={{        
        width: "100px",
        height: "50px",        
      }}
    >
      <TurnIndicator {...args} />
    </div>
  ),
};
