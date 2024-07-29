import React, {useContext} from "react";
import AuthContext from "../contexts/AuthContext";
import {Product} from "../interfaces/Product";
import {toast} from "react-toastify";

const Cart: React.FC = () => {
    const {cart, setCart, orders, setOrders} = useContext(AuthContext);

    const handleCreateOrder = () => {
        const newOrder = {
            id: orders.length + 1,
            products: cart,
            date: new Date(),
        };

        setOrders([...orders, newOrder]);
        setCart([]);
        toast.success("Order created successfully!");
    };

    return (
        <section className="flex flex-col justify-center items-center p-4">
            <h2 className="text-2xl font-semibold my-4">Cart</h2>
            <div className="max-w-screen-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {cart.map((product: Product) => (
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
                    </div>
                ))}
            </div>
            <button
                onClick={handleCreateOrder}
                disabled={cart.length === 0}
                className="bg-blue-500 text-white p-2 rounded disabled:opacity-50 flex items-center justify-center mt-4"
            >
                Create Order
            </button>
        </section>
    );
}

export default Cart;
