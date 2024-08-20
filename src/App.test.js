import React from 'react';
import ReactDOM from 'react-dom';
import Zoom from "react-medium-image-zoom";
import ZoomedImage from './components/About/ZoomedImage';
import App from './App';

// Mocking react-medium-image-zoom
jest.mock("react-medium-image-zoom", () => ({ children }) => <div>{children}</div>);

describe("ZoomedImage", () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
 
});
