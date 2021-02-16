import { render } from '@testing-library/react';
import Header from '../Header';

describe('The header', () => {
  test('should render correcly without error', () => {
    const { container } = render(<Header />) 
    const logo = container.querySelector('.logo')
    expect(logo).toBeInTheDocument()
  })
  
})
