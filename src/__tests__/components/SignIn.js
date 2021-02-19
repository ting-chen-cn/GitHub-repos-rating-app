import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { SignInContainer } from '../../components/SignIn/SignInForm';

describe('SignInForm', () => {
  it('calls function provided by onSubmit prop after pressing the submit button', async () => {
    const onSubmit = jest.fn();
    const { getByTestId } = render(<SignInContainer onSubmit={onSubmit} />);

    fireEvent.changeText(getByTestId('username'), 'kalle');
    fireEvent.changeText(getByTestId('password'), 'password');
    fireEvent.press(getByTestId('signInSubmitButton'));

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1);

      expect(onSubmit.mock.calls[0][0]).toEqual({
        username: 'kalle',
        password: 'password',
      });
    });
  });
});