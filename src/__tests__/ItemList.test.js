import { React, render, screen } from '@testing-library/react';
import ItemList from '../components/ItemList';

describe('ItemList', () => {
  it('renders ItemList component correctly', () => {
    render(<ItemList />);
    const itemListComponent = screen.getByText(
      /Let's find out a bit more about the items you're interested in selling to us/
    );
    expect(itemListComponent).toBeInTheDocument();
  });
});
