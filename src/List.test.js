import React from 'react';
import List from './List';
import ReactDOM from 'react-dom';
import Card from './Card';

it('renders without crashing', () => {
  const Cards = [];
  const div = document.createElement('div');
  ReactDOM.render(<List cards={Cards} />, div);
  ReactDOM.unmountComponentAtNode(div); 
});