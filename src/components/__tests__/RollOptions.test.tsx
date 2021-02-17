import RollOptions from '../RollOptions'
import { render } from '@testing-library/react';


describe('Roll Options', () => {
  test('should render correctly without error', () => {
    const { container } = render(<RollOptions/>)
    expect(container).toBeInTheDocument()
  })
  
  test('should render number box', () => {
    
  })

  test('should render number stepper', () => {
    
  })
  
})
