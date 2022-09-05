import { test } from '@jest/globals';
import { render, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import LoginMiddleSection from '../../../../components/Login/RightSection/middleSection';
import { VALIDATION_FIELD_MAPPING } from '../../../../utils/appConstant';
import AuthService from '../../../../services/auth.service';

jest.mock('../../../../services/auth.service');

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));

describe('<LoginMiddleSection />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Should call input change for username', async () => {
    const { findByTestId } = render(
      <MemoryRouter>
        <LoginMiddleSection />
      </MemoryRouter>,
    );

    await act(async () => {
      const input = await findByTestId(`input-${VALIDATION_FIELD_MAPPING.uname}-`);
      userEvent.clear(input);
      userEvent.type(input, 'abcd');
    });

    expect(await findByTestId(`input-${VALIDATION_FIELD_MAPPING.uname}-abcd`)).toBeInTheDocument();
  });

  test('Should call input change for password', async () => {
    const { findByTestId } = render(
      <MemoryRouter>
        <LoginMiddleSection />
      </MemoryRouter>,
    );

    await act(async () => {
      const input = await findByTestId(`input-${VALIDATION_FIELD_MAPPING.password}-`);
      userEvent.clear(input);
      userEvent.type(input, 'abcd');
    });

    expect(await findByTestId(`input-${VALIDATION_FIELD_MAPPING.password}-abcd`)).toBeInTheDocument();
  });

  test('Should call login method on login button click', async () => {
    act(() => {
      const mock = jest.spyOn(AuthService, 'login');
      mock.mockResolvedValue({
        status: 200, data: { user: { name: 'test' } }, statusText: '', headers: {}, config: {},
      });
    });

    const { findByTestId } = render(
      <MemoryRouter>
        <LoginMiddleSection />
      </MemoryRouter>,
    );

    await act(async () => {
      const inputUsername = await findByTestId(`input-${VALIDATION_FIELD_MAPPING.uname}-`);
      const inputPassword = await findByTestId(`input-${VALIDATION_FIELD_MAPPING.password}-`);
      userEvent.clear(inputUsername);
      userEvent.type(inputUsername, 'abcd');
      userEvent.clear(inputPassword);
      userEvent.type(inputPassword, 'abcd');

      const loginBtn = await findByTestId('btn-login');
      userEvent.click(loginBtn);
    });

    await waitFor(() => {
      expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
    });
  });
});
