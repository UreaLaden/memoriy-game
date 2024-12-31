import { Meta, StoryFn } from "@storybook/react";
import CustomDialog, {
  CustomDialogProps,
} from "../components/CustomDialogs/dialogs";
import { GameState } from "../utils/constants";

const meta = {
  title: "Components/CustomDialogs",
  component: CustomDialog,
  tags: ["autodocs"],
} satisfies Meta<typeof CustomDialog>;

export default meta;

const Template: StoryFn<CustomDialogProps> = (args: CustomDialogProps) => (
  <CustomDialog {...args} />
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

export const PauseMobile = Template.bind({});
PauseMobile.parameters = {
  ...Mobile.parameters,
};

PauseMobile.args = {
  gameState: GameState.PAUSE,
  isOpen: true,
};

export const PauseTablet = Template.bind({});
PauseTablet.parameters = {
  ...Tablet.parameters,
};
PauseTablet.args = {
  gameState: GameState.PAUSE,
  isOpen: true,
};
export const PauseDesktop = Template.bind({});
PauseDesktop.parameters = {
  ...Desktop.parameters,
};
PauseDesktop.args = {
  gameState: GameState.PAUSE,
  isOpen: true,
};

export const StartMobile = Template.bind({});
StartMobile.parameters = {
  ...Mobile.parameters,
};
StartMobile.args = {
  gameState: GameState.START,
  isOpen: true,
};
export const StartTablet = Template.bind({});
StartTablet.parameters = {
  ...Tablet.parameters,
};
StartTablet.args = {
  gameState: GameState.START,
  isOpen: true,
};
export const StartDesktop = Template.bind({});
StartDesktop.parameters = {
  ...Desktop.parameters,
};
StartDesktop.args = {
  gameState: GameState.START,
  isOpen: true,
};

export const EndMobile = Template.bind({})
EndMobile.parameters = {
  ...Mobile.parameters,
};
EndMobile.args = {
  gameState: GameState.END,
  isOpen: true,
};

export const EndTablet = Template.bind({})
EndTablet.parameters = {
  ...Tablet.parameters,
};
EndTablet.args = {
  gameState: GameState.END,
  isOpen: true,
};

export const EndDesktop = Template.bind({})
EndDesktop.parameters = {
  ...Desktop.parameters,
};
EndDesktop.args = {
  gameState: GameState.END,
  isOpen: true,
};