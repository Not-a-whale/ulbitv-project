import type {Meta, StoryObj} from '@storybook/react';

import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {NotFoundPage} from "pages/NotFoundPage";

const meta = {
    title: 'shared/NotFoundPage',
    component: NotFoundPage,
} satisfies Meta<typeof NotFoundPage>;

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