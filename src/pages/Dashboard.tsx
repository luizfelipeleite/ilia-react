import React, {useState, useEffect} from "react";
import {Product} from "../interfaces/Product";
import ProductList from "../components/products/ProductList";
import CreateOrder from "../components/orders/CreateOrder";

const Dashboard = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [cart, setCart] = useState<Product[]>([]);
    const [error, setError] = useState<string>('');
    const fakeStoreApi: string | undefined = process.env.REACT_APP_FAKE_STORE_ENDPOINT;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${fakeStoreApi}/products`, {
                    method: 'GET',
                });

                if (response.ok) {
                    const responseJson = await response.json();
                    setProducts(responseJson);
                } else {
                    setError(await response.text());
                }
            } catch (error: unknown) {
                if (error instanceof Error) {
                    setError(error.message);
                }
            }
        };

        fetchProducts();
    }, [fakeStoreApi]);

    const handleAddToCart = (product: Product) => {
        setCart([...cart, product]);
    };

    return (
        <>
            <h1 className="text-3xl font-bold my-4">Dashboard</h1>
            {error && <p className="text-red-500 text-xs">{error}</p>}
            <ProductList products={products} onAddToCart={handleAddToCart}/>
            <CreateOrder cart={cart}/>
        </>
    );
}

export default Dashboard;
