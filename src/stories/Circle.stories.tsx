import { Meta, StoryObj } from "@storybook/react-webpack5";
import Circle from "./Circle.tsx";

// Storybookのカタログ操作はMeta情報で変更する
const meta: Meta<typeof Circle> = {
  component: Circle,
  title: "Circle",
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["orange", "green", "blue"],
    },
  },
  tags: ["autodocs"], // Docsを作成する場合
};

export default meta;

type Story = StoryObj<typeof meta>

/** オレンジ色の円です */
export const BaseCircle: Story = {
  args: {
    variant: "orange"
  },
};

/** 緑色の円です */
export const GreenCircle: Story  = {
  args: {
    variant: "green",
  },
};

/** 青色の円です */
export const BlueCircle: Story  = {
  args: {
    variant: "blue",
  },
};

/** 円のグループです */
export const GroupedCircle: Story  = {
  render: () => (
    <div style={{ padding: 10 }}>
      <Circle variant="orange" />
      <Circle variant="green" />
      <Circle variant="blue" />
    </div>
  )
};