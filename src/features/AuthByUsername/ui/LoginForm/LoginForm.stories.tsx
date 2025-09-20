import {LoginForm} from "features/AuthByUsername/ui/LoginForm/LoginForm";
import type {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
