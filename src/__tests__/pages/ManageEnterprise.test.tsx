import { test } from '@jest/globals';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ManageEnterprise from '../../pages/ManageEnterprise';

describe('<ManageEnterprise />', () => {
  test('Should render manage enterprise page properly', () => {
    const { container } = render(
      <MemoryRouter>
        <ManageEnterprise />
      </MemoryRouter>,
    );
    expect(container.firstChild).toHaveClass('manage-enterprise-main');
  });
});
