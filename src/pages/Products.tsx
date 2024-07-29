import React, {useState, useEffect, useContext} from "react";
import {Product} from "../interfaces/Product";
import ProductList from "../components/products/ProductList";
import AuthContext from "../contexts/AuthContext";

const Products: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState<string>('');
    const {cart, setCart} = useContext(AuthContext);
    const fakeStoreApi: string | undefined = process.env.REACT_APP_FAKE_STORE_ENDPOINT;

    useEffect(() => {
        (async () => {
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
        })();
    }, [fakeStoreApi]);

    const handleAddToCart = (product: Product) => {
        setCart([...cart, product]);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <main className="container mx-auto">
                {error && <p className="text-red-500 text-xs">{error}</p>}
                <ProductList products={products} onAddToCart={handleAddToCart}/>
            </main>
        </div>
    );
}

export default Products;
