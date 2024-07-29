import React, {FormEvent, useState, useContext} from "react";
import {useNavigate} from 'react-router-dom';
import AuthContext from "../../contexts/AuthContext";

const LoginForm: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const {setToken} = useContext(AuthContext);
    const fakeStoreApi: string | undefined = process.env.REACT_APP_FAKE_STORE_ENDPOINT;

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setError('');

        try {
            const response = await fetch(`${fakeStoreApi}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username, password})
            });

            if (response.ok) {
                const responseJson = await response.json();
                setToken(responseJson.token);
                navigate('/');
            } else {
                setError(await response.text());
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                setError(error.message);
            }
        }
    }

    return (
        <div className="h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit} className="bg-white w-full max-w-xs shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input type="text"
                           name="username"
                           id="username"
                           placeholder="Username"
                           value={username}
                           onChange={(event) => setUsername(event.target.value)}
                           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input type="password"
                           id="password"
                           name="password"
                           placeholder="Password"
                           value={password}
                           onChange={(event) => setPassword(event.target.value)}
                           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="flex items-center justify-between mb-3">
                    <button type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login
                    </button>
                </div>
                {error && <p className="text-red-500 text-xs">{error}</p>}
            </form>
        </div>
    );
}

export default LoginForm;
