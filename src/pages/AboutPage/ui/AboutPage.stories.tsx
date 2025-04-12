import type {Meta, StoryObj} from '@storybook/react';

import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import AboutPage from "pages/AboutPage/ui/AboutPage";

const meta = {
    title: 'shared/AboutPage',
    component: AboutPage,
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};

export const Clear: Story = {
    args: {},
};

export const Outline: Story = {
    args: {},
}
Outline.decorators = [ThemeDecorator(Theme.LIGHT)];

export const OutlineDark: Story = {
    args: {},
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];