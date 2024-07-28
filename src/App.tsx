import React from 'react';
import './App.css';
import LoginForm from "./components/login/LoginForm";
import Dashboard from "./pages/Dashboard";

function App() {
    return (
        <div className="App bg-gray-100">
            <LoginForm/>
            <Dashboard/>
        </div>
    );
}

export default App;
