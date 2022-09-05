import { render } from '@testing-library/react';
import App from '../App';

test.skip('Should render App component successfully ', () => {
  const screen = render(<App />);
  expect(screen.getByText('Login')).toBeInTheDocument();
});
