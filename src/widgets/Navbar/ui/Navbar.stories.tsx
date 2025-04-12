import type {Meta, StoryObj} from '@storybook/react';

import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {Navbar} from "widgets/Navbar";

const meta = {
    title: 'shared/Navbar',
    component: Navbar,
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavbarPrimary: Story = {
    args: {},
};

export const NavbarClear: Story = {
    args: {},
};

export const NavbarOutline: Story = {
    args: {},
}
NavbarOutline.decorators = [ThemeDecorator(Theme.LIGHT)];

export const NavbarDark: Story = {
    args: {},
}
NavbarDark.decorators = [ThemeDecorator(Theme.DARK)];