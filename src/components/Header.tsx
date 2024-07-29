import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import AuthContext from "../contexts/AuthContext";
import {FaShoppingCart} from "react-icons/fa";

const Header: React.FC = () => {
    const {cart} = useContext(AuthContext);

    return (
        <header className="bg-white shadow-md p-4 mb-6">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="hidden sm:block lg:text-3xl font-bold">E-commerce</h1>
                <nav>
                    <Link to="/" className="text-blue-500 hover:text-blue-700 mx-4">
                        Products
                    </Link>
                    <Link to="/orders" className="text-blue-500 hover:text-blue-700 mx-4">
                        My Orders
                    </Link>
                </nav>
                <nav>
                    <Link to="/cart" className="text-blue-500 hover:text-blue-700 mx-4 relative">
                        <FaShoppingCart className="inline w-5 h-5"/> <span
                        className="absolute -right-3 -bottom-3 border rounded-full p-0.5 px-1 leading-none border-blue-500 text-xs">{cart.length}</span>
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
