import React from "react";
import { Product } from "../../interfaces/Product";

interface CreateOrderProps {
    cart: Product[];
}

const CreateOrder: React.FC<CreateOrderProps> = ({ cart }) => {
    const handleCreateOrder = () => {
        console.log("Creating order with products:", cart);
    };

    return (
        <div className="mt-6">
            <h2 className="text-2xl font-semibold my-4">Create Order</h2>
            <button
                onClick={handleCreateOrder}
                disabled={cart.length === 0}
                className="bg-blue-500 text-white p-2 rounded disabled:opacity-50"
            >
                Create Order
            </button>
        </div>
    );
}

export default CreateOrder;
