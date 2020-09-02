import Enzyme, { shallow, render, mount, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import TestRenderer from 'react-test-renderer';
import ReactSixteenAdapter from "enzyme-adapter-react-16";
import React from "react";

Enzyme.configure({ adapter: new ReactSixteenAdapter() });

global.Enzyme = Enzyme;
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.configure = configure;
global.toJson = toJson;
global.TestRenderer = TestRenderer;
global.React = React;