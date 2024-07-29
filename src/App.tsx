import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import {useContext} from 'react';
import AuthContext, {AuthProvider} from './contexts/AuthContext';
import LoginForm from "./components/login/LoginForm";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Header from './components/Header';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
    return (
        <div className="App bg-gray-100">
            <AuthProvider>
                <Router>
                    <Header/>
                    <Routes>
                        <Route path="/login" element={<LoginForm/>}/>
                        <Route path="/" element={<PrivateRoute component={<Products/>}/>}/>
                        <Route path="/cart" element={<PrivateRoute component={<Cart/>}/>}/>
                        <Route path="/orders" element={<PrivateRoute component={<Orders/>}/>}/>
                    </Routes>
                </Router>
                <ToastContainer/>
            </AuthProvider>
        </div>
    );
}

const PrivateRoute = ({component}: { component: JSX.Element }) => {
    const {token} = useContext(AuthContext);
    return token ? component : <Navigate to="/login"/>;
};

export default App;
