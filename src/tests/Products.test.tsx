import React from 'react';
import {render, screen} from '@testing-library/react';
import Products from '../pages/Products';
import {AuthProvider} from '../contexts/AuthContext';

test('renders product list', () => {
    render(
        <AuthProvider>
            <Products/>
        </AuthProvider>
    );

    expect(screen.getByText('Products List')).toBeInTheDocument();
});
