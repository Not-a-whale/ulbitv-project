import type {Meta, StoryObj} from "@storybook/react";
import {Text, TextTheme} from "shared/ui/Text/Text";

const meta = {
    title: 'shared/Text',
    component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OnlyTitle: Story = {
    args: {
        title: 'Title',
        className: 'custom-class',
    },
};

export const Error: Story = {
    args: {
        title: 'Error Title',
        text: 'This is an error message.',
        theme: TextTheme.ERROR,
        className: 'custom-class',
    },
};

export const OnlyText: Story = {
    args: {
        text: 'Text content goes here.',
        className: 'custom-class',
    },
};
