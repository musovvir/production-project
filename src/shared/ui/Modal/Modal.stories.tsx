import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cumque doloribus, id laboriosam neque perferendis, quas rerum sed soluta suscipit, ut velit voluptatem voluptatibus? Adipisci assumenda earum, explicabo id laboriosam porro recusandae rem sequi tenetur. Aspernatur blanditiis consequatur consequuntur culpa doloremque ducimus eius enim error, esse est ex, explicabo facilis fuga harum itaque minima molestiae numquam odio officiis perspiciatis placeat provident quae quas quasi quisquam quo quod recusandae rem, similique sit sunt voluptatem voluptates voluptatum! Aliquid amet cumque debitis doloribus earum est, fugiat fugit incidunt ipsam ipsum iste, labore laboriosam odio placeat quos reprehenderit repudiandae saepe similique temporibus, tenetur vero!\n',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cumque doloribus, id laboriosam neque perferendis, quas rerum sed soluta suscipit, ut velit voluptatem voluptatibus? Adipisci assumenda earum, explicabo id laboriosam porro recusandae rem sequi tenetur. Aspernatur blanditiis consequatur consequuntur culpa doloremque ducimus eius enim error, esse est ex, explicabo facilis fuga harum itaque minima molestiae numquam odio officiis perspiciatis placeat provident quae quas quasi quisquam quo quod recusandae rem, similique sit sunt voluptatem voluptates voluptatum! Aliquid amet cumque debitis doloribus earum est, fugiat fugit incidunt ipsam ipsum iste, labore laboriosam odio placeat quos reprehenderit repudiandae saepe similique temporibus, tenetur vero!\n',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
