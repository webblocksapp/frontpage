import React from 'react';
import { styled } from '@storybook/theming';
import { within, userEvent } from '@storybook/testing-library';
import { CodeLanguageSelector } from './CodeLanguageSelector';

// The Wrapper helps capture the tooltip contents in the snapshot
const Wrapper = styled.span`
  display: inline-block;
  width: 225px;
  height: 510px;
`;

export default {
  title: 'Screens/DocsScreen/CodeLanguageSelector',
  component: CodeLanguageSelector,
  decorators: [(storyFn) => <Wrapper>{storyFn()}</Wrapper>],
};

const Template = (args) => <CodeLanguageSelector {...args} />;

export const Base = Template.bind({});
Base.args = {};
Base.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const menuButton = canvas.getByRole('button', { name: /TS/i });
  await userEvent.click(menuButton);
  await userEvent.keyboard('{arrowdown}');
};
