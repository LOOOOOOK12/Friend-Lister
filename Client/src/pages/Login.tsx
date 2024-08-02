import React from 'react'
import { useForm, Controller } from 'react-hook-form';
import Labels from '@/components/containers/labels';
import { Button } from '@/components/ui/button';
import { LoginCredentials } from '@/network/users_api';
import { Link } from 'react-router-dom';

interface Login {

    onChange: () => void
}

function Login() {

    const { control, handleSubmit, reset, formState: { errors } } = useForm<LoginCredentials>();

    const onSubmit = async (data:LoginCredentials) => {

    }

    return (
        <div className='relative flex flex-col justify-center gap-3 items-center h-screen bg-others-background'>
            <div className="absolute overflow-hidden z-10 right-[2rem] top-0 size-96 bg-others-accent rounded-full blur-3xl opacity-[0.2]"></div>
            <div className="absolute overflow-hidden z-10 left-[2rem] bottom-0 size-72 bg-others-accent rounded-full blur-3xl opacity-[0.2]"></div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center gap-3'>
                <h1 className="text-4xl md:text-6xl text-transparent bg-clip-text font-bold inline-block bg-gradient-to-r from-others-primary via-others-secondary to-others-accent">Friend Lister</h1>
                <div className='w-full flex flex-col gap-3'>
                    <Controller
                            name="username"
                            control={control}
                            rules={{ required: 'Username is Required' }}
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
                            rules={{ required: 'Username is Required' }}
                            render={({ field }) => (
                                <>
                                    <Labels
                                        labelName="Password"
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
                    <Button type='submit' className='bg-others-secondary hover:bg-[#582358] border-none text-others-text'>Login</Button>
                </div>
                <p className='text-others-text'>Don't have an account <Link to="/Signup"><a className='text-others-accent'>Create one</a></Link></p>
                <Link to="/App">test</Link>
            </form>
        </div>
    )
}

export default Login