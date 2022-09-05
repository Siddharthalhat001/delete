import { test } from '@jest/globals';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Layout from '../../../components/Layout';

describe('<Layout />', () => {
  test('Should render layout properly', () => {
    const { container } = render(
      <MemoryRouter>
        <Layout>
          <div>This is layout</div>
        </Layout>
      </MemoryRouter>,
    );
    expect(container.firstChild).toHaveClass('layout-main');
  });
});
