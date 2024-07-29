import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import ProductList from '../components/products/ProductList';
import {toast} from 'react-toastify';
import {Product} from '../interfaces/Product';

jest.mock('react-toastify', () => ({
    toast: {
        success: jest.fn()
    }
}));

const products: Product[] = [
    {
        id: 1,
        title: 'Product 1',
        price: 9.99,
        description: 'Description 1',
        category: 'Category 1',
        image: 'https://via.placeholder.com/150'
    },
    {
        id: 2,
        title: 'Product 2',
        price: 2.99,
        description: 'Description 2',
        category: 'Category 2',
        image: 'https://via.placeholder.com/150'
    }
];

test('renders product list', () => {
    render(<ProductList products={products} onAddToCart={jest.fn()}/>);

    expect(screen.getByText('Products List')).toBeInTheDocument();
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('$9.99')).toBeInTheDocument();
});

test('adds product to cart and shows toast message', () => {
    const handleAddToCart = jest.fn();

    render(<ProductList products={products} onAddToCart={handleAddToCart}/>);

    fireEvent.click(screen.getAllByRole('button', {name: /Add to Cart/i})[0]);

    expect(handleAddToCart).toHaveBeenCalledWith(products[0]);
    expect(toast.success).toHaveBeenCalledWith('Product added to cart!');
});
