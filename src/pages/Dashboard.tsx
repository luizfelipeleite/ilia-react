import {useEffect, useState} from "react";
import {Product} from "../interfaces/Product";
import ProductList from "../components/products/ProductList";

const Dashboard = () => {
    const [products, setProducts] = useState<Product[]>([]);
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
    }, []);

    return (
        <>
            {error && <p className="text-red-500 text-xs">{error}</p>}
            <ProductList products={products}/>
        </>
    );
}

export default Dashboard;
