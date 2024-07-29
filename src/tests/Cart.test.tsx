import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import Cart from '../pages/Cart';
import AuthContext, {AuthProvider} from '../contexts/AuthContext';
import {toast} from 'react-toastify';
import {Product} from '../interfaces/Product';

jest.mock('react-toastify', () => ({
    toast: {
        success: jest.fn()
    }
}));

const product: Product = {
    id: 1,
    title: 'Product 1',
    price: 9.99,
    description: 'Description 1',
    category: 'Category 1',
    image: 'https://via.placeholder.com/150'
};

const TestComponent = () => {
    const {setCart} = React.useContext(AuthContext);

    React.useEffect(() => {
        setCart([product]);
    }, [setCart]);

    return null;
};

test('renders cart and creates order', () => {
    render(
        <AuthProvider>
            <Cart/>
            <TestComponent/>
        </AuthProvider>
    );

    const createOrderButton = screen.getByRole('button', {name: /Create Order/i});
    expect(createOrderButton).toBeEnabled();

    expect(screen.getByText('Product 1')).toBeInTheDocument();

    fireEvent.click(createOrderButton);

    expect(screen.queryByText('Product 1')).not.toBeInTheDocument();
    expect(toast.success).toHaveBeenCalledWith('Order created successfully!');
});
