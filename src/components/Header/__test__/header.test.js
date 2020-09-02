import React from 'react';
import Header from "../index.js";

describe("<Header>", () => {;
  let header;
  const props = {
    title: 'Header Title',
    description: 'Header description',
    headingLevel: 1
  };

  beforeEach(() => {
    header = mount(
      <Header {...props}  />
    );
    // console.log(header.debug());
  });
  
  it('Header title"', () => {
    expect(header.find('.h-title').text()).toEqual("Header Title");
  });
  it('Header Description"', () => {
    expect(header.find('.description').text()).toEqual("Header description");
  });
  it('Header Tag"', () => {
    expect(header.find('h1').html()).toContain('Header Title');
  });
});