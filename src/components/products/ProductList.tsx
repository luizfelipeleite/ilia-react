import React from "react";
import {Product} from "../../interfaces/Product";

interface ProductListProps {
    products: Product[];
    onAddToCart: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({products, onAddToCart}) => {
    return (
        <section className="flex flex-col justify-center items-center p-4">
            <h2 className="text-2xl font-semibold my-5">Products List</h2>
            <div className="max-w-screen-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((product: Product) => (
                    <div key={product.id} className="bg-white border p-4 rounded-lg shadow-md">
                        <div className="w-full h-48 mb-4">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                        <p className="text-gray-700 mb-4">${product.price}</p>
                        <button
                            className="bg-blue-500 text-white px-5 py-2 rounded flex items-center justify-center"
                            onClick={() => onAddToCart(product)}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProductList;
