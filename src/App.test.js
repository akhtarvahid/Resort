import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Zoom from "react-medium-image-zoom";


 it('renders without crashing', () => {
   const div = document.createElement('div');
   ReactDOM.render(<App />, div);
   ReactDOM.unmountComponentAtNode(div);
 });