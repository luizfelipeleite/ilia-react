import React, {useContext} from "react";
import AuthContext from "../contexts/AuthContext";
import {Order} from "../interfaces/Order";

const Orders: React.FC = () => {
    const {orders} = useContext(AuthContext);

    return (
        <section className="flex flex-col justify-center items-center p-4">
            <h2 className="text-2xl font-semibold my-4">My Orders</h2>
            <div className="max-w-screen-lg">
                {orders.map((order: Order) => (
                    <div key={order.id} className="mb-6">
                        <h3 className="text-xl font-semibold">Order ID: {order.id}</h3>
                        <p className="text-gray-700">Date: {order.date.toLocaleString()}</p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">
                            {order.products.map((product, index) => (
                                <div key={index} className="bg-white border p-4 rounded-lg shadow-md">
                                    <div className="w-full h-14 mb-4">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <h3 className="text-sm font-semibold mb-2">{product.title}</h3>
                                    <p className="text-gray-700">${product.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Orders;
