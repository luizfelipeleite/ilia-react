import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import LoginForm from '../components/login/LoginForm';
import {AuthProvider} from '../contexts/AuthContext';
import {BrowserRouter as Router} from 'react-router-dom';

test('renders login form', () => {
    render(
        <AuthProvider>
            <Router>
                <LoginForm/>
            </Router>
        </AuthProvider>
    );

    expect(screen.getByLabelText(/Username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', {name: /Login/i})).toBeInTheDocument();
});

test('shows error on login failure', async () => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            ok: false,
            text: () => Promise.resolve('username or password is incorrect')
        })
    ) as jest.Mock;

    render(
        <AuthProvider>
            <Router>
                <LoginForm/>
            </Router>
        </AuthProvider>
    );

    fireEvent.change(screen.getByLabelText(/Username/i), {target: {value: 'wronguser'}});
    fireEvent.change(screen.getByLabelText(/Password/i), {target: {value: 'wrongpassword'}});
    fireEvent.click(screen.getByRole('button', {name: /Login/i}));

    // Wait for the error message
    expect(await screen.findByText('username or password is incorrect')).toBeInTheDocument();
});
