import React, {useEffect} from 'react';
import {render, screen} from '@testing-library/react';
import Orders from '../pages/Orders';
import AuthContext, {AuthProvider} from '../contexts/AuthContext';
import {Order} from '../interfaces/Order';

const orders: Order[] = [
    {
        id: 1,
        products: [
            {
                id: 1,
                title: 'Product 1',
                price: 10.99,
                description: 'Description 1',
                category: 'Category 1',
                image: 'https://via.placeholder.com/150'
            }
        ],
        date: new Date()
    }
];

const TestComponent = () => {
    const {setOrders} = React.useContext(AuthContext);

    useEffect(() => {
        setOrders(orders);
    }, [setOrders]);

    return null;
};

test('renders orders list', () => {
    render(
        <AuthProvider>
            <Orders/>
            <TestComponent/>
        </AuthProvider>
    );

    expect(screen.getByText('Order ID: 1')).toBeInTheDocument();
    expect(screen.getByText('Product 1')).toBeInTheDocument();
});
