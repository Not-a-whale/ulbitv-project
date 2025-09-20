import {type Meta, type StoryObj} from '@storybook/react';
import {Input} from 'shared/ui/Input/Input';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

const meta = {
    title: 'shared/Input',
    component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputPrimary: Story = {
    args: {
        placeholder: 'Type text',
        value: '123123',
    },
};

export const InputClear: Story = {
    args: {
        placeholder: 'Type text',
        value: '123123',
    },
};

export const InputOutline: Story = {
    args: {
        placeholder: 'Type text',
        value: '123123',
    },
}
InputOutline.decorators = [ThemeDecorator(Theme.LIGHT)];

export const InputDark: Story = {
    args: {
        placeholder: 'Type text',
        value: '123123',
    },
}
InputDark.decorators = [ThemeDecorator(Theme.DARK)];
