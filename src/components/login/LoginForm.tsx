import {fetchData, fakeStoreApi} from '../../utils/api';
import {FormEvent, useState} from "react";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setError('');

        try {
            const response = await fetchData(`${fakeStoreApi}/auth/login`, {username, password});
            console.log(response.token);
        } catch (error: unknown) {
            if (error instanceof Error) {
                setError(error.message);
            }
        }
    }

    return (
        <div className="h-screen flex items-center justify-center ">
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