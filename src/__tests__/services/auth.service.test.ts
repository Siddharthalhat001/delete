import {
  expect, test, jest, describe, afterEach,
} from '@jest/globals';
import { Login } from '../../interfaces/auth.interface';
import AuthService from '../../services/auth.service';
import http from '../../httpConfig';

jest.mock('../../httpConfig');

const loginUserPayload: Login = {
  username: 'ankur.n',
  password: 'abcd',
};

describe('AuthService', () => {
  afterEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  test('Should call login user with success', () => {
    expect.assertions(2);

    const mock = jest.spyOn(http, 'post');
    mock.mockResolvedValue({
      success: true,
      data: {
        user: {
          name: 'Ankur Nariya',
        },
      },
    });

    AuthService.login(loginUserPayload)
      .then((data: any) => {
        expect(data.success).toBeTruthy();
        expect(data.data.user.name).toEqual('Ankur Nariya');
      });
  });

  test('Should call store role successfully', () => {
    expect.assertions(1);

    localStorage.setItem('role', 'abcd');

    AuthService.storeRole('abcd');
    expect(localStorage.getItem('role')).toEqual('abcd');
  });

  test('Should call get role with success', () => {
    expect.assertions(1);

    localStorage.setItem('role', 'abcd');

    const result = AuthService.getRole();
    expect(result).toEqual('abcd');
  });

  test('Should call store user name successfully', () => {
    expect.assertions(1);

    localStorage.setItem('uname', 'abcd');

    AuthService.storeUserName('abcd');
    expect(localStorage.getItem('uname')).toEqual('abcd');
  });

  test('Should call get username with success', () => {
    expect.assertions(1);

    localStorage.setItem('uname', 'abcd');

    const result = AuthService.getUserName();
    expect(result).toEqual('abcd');
  });

  test('Should call logout with success', () => {
    expect.assertions(1);

    AuthService.logout();

    const username = localStorage.getItem('uname');
    expect(username).toBeNull();
  });
});
