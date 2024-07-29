import React, {createContext, useState, ReactNode} from 'react';
import {Product} from '../interfaces/Product';
import {Order} from "../interfaces/Order";

interface AuthContextProps {
    token: string | null;
    setToken: (token: string | null) => void;
    cart: Product[];
    setCart: (cart: Product[]) => void;
    orders: Order[];
    setOrders: (orders: Order[]) => void;
}

const AuthContext = createContext<AuthContextProps>({
    token: null,
    setToken: () => {
    },
    cart: [],
    setCart: () => {
    },
    orders: [],
    setOrders: () => {
    },
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [token, setToken] = useState<string | null>(null);
    const [cart, setCart] = useState<Product[]>([]);
    const [orders, setOrders] = useState<Order[]>([]);

    return (
        <AuthContext.Provider value={{token, setToken, cart, setCart, orders, setOrders}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
