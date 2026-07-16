import { useState } from 'react';
import { api } from '@/features/routine/api/api';

interface LoginFormProps {
    onLoginSuccess: () => void;
}

interface UserResponse {
    id: string;
    name: string;
    email: string;
}

type Mode = 'login' | 'register';

export function LoginForm({ onLoginSuccess }: LoginFormProps) {
    const [mode, setMode] = useState<Mode>('login');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const switchMode = (nextMode: Mode) => {
        setMode(nextMode);
        setError('');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            if (mode === 'register') {
                await api.post<UserResponse, { name: string; email: string; password: string }>(
                    'v1/user',
                    { name, email, password }
                );
            }
            const user = await api.post<UserResponse, { email: string; password: string }>(
                'v1/auth/login',
                { email, password }
            );
            localStorage.setItem('user', JSON.stringify(user));
            onLoginSuccess();
        } catch (err) {
            setError(
                mode === 'register'
                    ? 'Não foi possível criar a conta. Verifique os dados e tente novamente: ' + err
                    : 'Credenciais inválidas. Verifique seu e-mail e senha: ' + err
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="w-full max-w-md flex flex-col mx-auto mt-20 p-8 gap-2 bg-surface rounded-xl border-2 border-surface2 border-b-8">
            <div className='flex flex-col items-center gap-3 justify-center'>
                <img
                    className='size-16' 
                    src="/habitforge-favicon.svg" alt="" />
                <h2 className="text-2xl font-bold mb-6 leading-none text-ink text-center font-secondary">
                    Welcome to HabitForge!
                </h2>
            </div>

            <div className="flex mb-4 rounded-lg border border-surface2 overflow-hidden">
                <button
                    type="button"
                    onClick={() => switchMode('login')}
                    className={`flex-1 p-2 text-sm font-semibold transition-colors ${
                        mode === 'login' ? 'bg-ink text-bg' : 'bg-bg text-muted'
                    }`}
                >
                    Login
                </button>
                <button
                    type="button"
                    onClick={() => switchMode('register')}
                    className={`flex-1 p-2 text-sm font-semibold transition-colors ${
                        mode === 'register' ? 'bg-ink text-bg' : 'bg-bg text-muted'
                    }`}
                >
                   Register
                </button>
            </div>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {mode === 'register' && (
                    <fieldset className="flex flex-col items-start gap-1 border-none p-0 m-0">
                        <label htmlFor="name" className="text-sm font-medium text-muted">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="p-3 w-full rounded-lg border border-surface2 bg-bg text-ink focus:outline-none focus:border-primary transition-colors"
                            placeholder="Your name"
                        />
                    </fieldset>
                )}

                <fieldset className="flex flex-col items-start gap-1 border-none p-0 m-0">
                    <label htmlFor="email" className="text-sm font-medium text-muted">
                        E-mail
                    </label>
                    <input 
                        id="email"
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="p-3 w-full rounded-lg border border-surface2 bg-bg text-ink focus:outline-none focus:border-primary transition-colors"
                        placeholder="youremail@email.com"
                    />
                </fieldset>

                <fieldset className="flex flex-col items-start gap-1 border-none p-0 m-0">
                    <label htmlFor="password" className="text-sm font-medium text-muted">
                        Password
                    </label>
                    <input 
                        id="password"
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        minLength={mode === 'register' ? 8 : undefined}
                        className="p-3 rounded-lg  w-full border border-surface2 bg-bg text-ink focus:outline-none focus:border-primary transition-colors"
                        placeholder="••••••••••••"
                    />
                </fieldset>

                {error && (
                    <p className="text-red-500 text-sm font-medium text-center">
                        {error}
                    </p>
                )}

                <button 
                    type="submit" 
                    disabled={isLoading}
                    className="mt-2 p-3 bg-ink text-bg rounded-lg font-semibold cursor-pointer hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                    {isLoading
                        ? mode === 'register' ? 'Criando conta...' : 'Autenticando...'
                        : mode === 'register' ? 'Criar conta' : 'Entrar'}
                </button>
            </form>
        </main>
    );
}