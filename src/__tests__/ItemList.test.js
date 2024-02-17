import { React, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ItemList from '../components/ItemList';

describe('ItemList', () => {
  it('renders ItemList component correctly', () => {
    render(
      <Router>
        <ItemList />
      </Router>
    );
    const itemListComponent = screen.getByText(
      /Let's find out a bit more about the items you're interested in selling to us/
    );
    expect(itemListComponent).toBeInTheDocument();
  });
});
