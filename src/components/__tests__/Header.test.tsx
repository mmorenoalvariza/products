import { render, screen } from '@testing-library/react';
import { Header } from '../Header';

describe('Header', () => {
  render(<Header />);

  it('Renders the header', async () => {
    expect(screen.getByAltText('logo')).toBeVisible();
    expect(screen.getByText('Subtotal: $ 0')).toBeVisible();
  });
});
