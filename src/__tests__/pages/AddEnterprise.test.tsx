import { test } from '@jest/globals';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AddEnterprise from '../../pages/AddEnterprise';

describe('<AddEnterprise />', () => {
  test('Should render add enterprise page properly', () => {
    const { container } = render(
      <MemoryRouter>
        <AddEnterprise />
      </MemoryRouter>,
    );
    expect(container.firstChild).toHaveClass('add-enterprise-main');
  });
});
