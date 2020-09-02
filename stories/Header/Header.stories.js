import React from 'react';

import Header from '../../src/components/Header';

export default {
  title: 'Example/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const VariationH1 = Template.bind({});
VariationH1.args = {
  title: 'Title 1',
  description: 'Description 1',
  label: 'Variation H1',
  headingLevel: 1
};

export const VariationH2 = Template.bind({});
VariationH2.args = {
  title: 'Title 2',
  description: 'Description 2',
  label: 'Variation H2',
  headingLevel: 2
};