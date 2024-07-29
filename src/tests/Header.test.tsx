import {render, screen} from '@testing-library/react';
import Header from '../components/Header';
import {AuthProvider} from '../contexts/AuthContext';
import {BrowserRouter as Router} from 'react-router-dom';

test('renders header with links', () => {
    render(
        <AuthProvider>
            <Router>
                <Header/>
            </Router>
        </AuthProvider>
    );

    expect(screen.getByText('E-commerce')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('My Orders')).toBeInTheDocument();
});
