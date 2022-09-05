import { test } from '@jest/globals';
import { render, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import AddNewEnterprise from '../../../components/AddNewEnterprise';
import { VALIDATION_FIELD_MAPPING } from '../../../utils/appConstant';
import EnterpriseService from '../../../services/enterprise.service';

jest.mock('../../../services/enterprise.service');

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));

describe('<AddNewEnterprise />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Should call input change for enterprise name', async () => {
    const { findByTestId } = render(
      <MemoryRouter>
        <AddNewEnterprise />
      </MemoryRouter>,
    );

    await act(async () => {
      const input = await findByTestId(`input-${VALIDATION_FIELD_MAPPING.enterpriseName}-`);
      userEvent.clear(input);
      userEvent.type(input, 'abcd');
    });

    expect(await findByTestId(`input-${VALIDATION_FIELD_MAPPING.enterpriseName}-abcd`)).toBeInTheDocument();
  });

  test('Should call back to list function', async () => {
    const { findByTestId } = render(
      <MemoryRouter>
        <AddNewEnterprise />
      </MemoryRouter>,
    );

    await act(async () => {
      const cancelBtn = await findByTestId('btn-cancel');
      userEvent.click(cancelBtn);
    });

    await waitFor(() => {
      expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
    });
  });

  test('Should call add enterprise function with success', async () => {
    act(() => {
      const mock = jest.spyOn(EnterpriseService, 'addEnterprise');
      mock.mockResolvedValue({
        status: 200, data: { }, statusText: '', headers: {}, config: {},
      });
    });

    const { findByTestId } = render(
      <MemoryRouter>
        <AddNewEnterprise />
      </MemoryRouter>,
    );

    await act(async () => {
      const inputEnterpriseName = await findByTestId(`input-${VALIDATION_FIELD_MAPPING.enterpriseName}-`);
      userEvent.clear(inputEnterpriseName);
      userEvent.type(inputEnterpriseName, 'abcd');

      const saveBtn = await findByTestId('btn-save');
      userEvent.click(saveBtn);
    });

    await waitFor(() => {
      expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
    });
  });

  test('Should call add enterprise function with error', async () => {
    act(() => {
      const mock = jest.spyOn(EnterpriseService, 'addEnterprise');
      mock.mockRejectedValue({
        status: 400, code: 4001, statusText: '', headers: {}, config: {},
      });
    });

    const { findByTestId } = render(
      <MemoryRouter>
        <AddNewEnterprise />
      </MemoryRouter>,
    );

    await act(async () => {
      const inputEnterpriseName = await findByTestId(`input-${VALIDATION_FIELD_MAPPING.enterpriseName}-`);
      userEvent.clear(inputEnterpriseName);
      userEvent.type(inputEnterpriseName, 'abcd');

      const saveBtn = await findByTestId('btn-save');
      userEvent.click(saveBtn);
    });

    await waitFor(() => {
      expect(mockedUsedNavigate).toHaveBeenCalledTimes(0);
    });
  });
});
