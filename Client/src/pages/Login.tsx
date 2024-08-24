import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Labels from '@/components/containers/labels';
import { Button } from '@/components/ui/button';
import { LoginCredentials, login } from '@/network/users_api';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const { control, handleSubmit, setError, formState: { errors } } = useForm<LoginCredentials>();
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState<string | null>(null);

    const onSubmit = async (data: LoginCredentials) => {
        if (!data.username || !data.password) {
            if (!data.username) {
                setError('username', { type: 'manual', message: 'Username is required' });
            }
            if (!data.password) {
                setError('password', { type: 'manual', message: 'Password is required' });
            }
            return;
        }

        try {
            const user = await login(data);
            console.log('Login successful:', user);
            navigate('/App');
        } catch (error) {
            console.error('Login failed:', error);
            setLoginError('Invalid username or password');
            setError('username', { type: 'manual', message: 'Invalid username or password' });
            setError('password', { type: 'manual', message: 'Invalid username or password' });
        }
    };

    return (
        <div className='relative flex flex-col justify-center gap-3 items-center h-screen bg-others-background'>
            <div className="absolute overflow-hidden z-10 md:right-[2rem] top-0 size-40 md:size-96 bg-others-accent rounded-full blur-3xl opacity-[0.2]"></div>
            <div className="absolute overflow-hidden z-10 left-[-5rem] md:left-[2rem] bottom-0 size-24 md:size-72 bg-others-accent rounded-full blur-3xl opacity-[0.2]"></div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center gap-3'>
                <h1 className="text-4xl md:text-6xl text-transparent bg-clip-text font-bold inline-block bg-gradient-to-r from-others-primary via-others-secondary to-others-accent">Friend Lister</h1>
                <div className='w-full flex flex-col gap-2'>
                    <Controller
                        name="username"
                        control={control}
                        rules={{ required: 'Username is required' }}
                        render={({ field }) => (
                            <>
                                <Labels
                                    labelName="Username"
                                    type="text"
                                    placeholder="Enter your username"
                                    value={field.value}
                                    onChange={field.onChange}
                                    className={errors.username ? 'border-red-500' : ''}
                                />
                                {errors.username && <p className="text-red-500">{errors.username.message}</p>}
                            </>
                        )}
                    />
                    <Controller
                        name="password"
                        control={control}
                        rules={{ required: 'Password is required' }}
                        render={({ field }) => (
                            <>
                                <Labels
                                    labelName="Password"
                                    type="password"
                                    placeholder="Enter your password"
                                    value={field.value}
                                    onChange={field.onChange}
                                    className={errors.password ? 'border-red-500' : ''}
                                />
                                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                            </>
                        )}
                    />
                    <Button type="submit" className='bg-others-secondary hover:bg-[#582358] border-none text-others-text'>Login</Button>
                </div>
                <p className='text-others-text'>Don't have an account? <Link to="/Signup" className='text-others-accent'>Create one</Link></p>
            </form>
        </div>
    );
}

export default Login;
