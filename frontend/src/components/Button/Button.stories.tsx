import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Button, { ButtonProps } from '.';

export default {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    decorators: [],
    args: {
        label: 'Click me',
        onClick: () => fn(),
    },
    argTypes: {
        design: {
            control: {
                type: 'inline-radio',
            }
        }
    },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
    args: {
        label: 'Click me',
    }
};