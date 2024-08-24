import { useForm, Controller } from 'react-hook-form';
import Labels from '@/components/containers/labels';
import { Button } from '@/components/ui/button';
import { SignUpCredentials, signUp } from '@/network/users_api';
import { Link, useNavigate } from 'react-router-dom';

interface SignUpForm extends SignUpCredentials {
    confirmPassword: string;
}

function Signup() {
    const { control, handleSubmit, watch, setError , formState: { errors } } = useForm<SignUpForm>();
    const navigate = useNavigate();

    const onSubmit = async (data: SignUpForm) => {
        try {
            const { confirmPassword, ...signUpData } = data;
            const user = await signUp(signUpData);
            console.log('Signup successful:', user);
            navigate('/');
        } catch (error: any) {
            console.error('Signup failed:', error);

            if (error.message.includes("Username")) {
                setError("username", { message: "Username is already taken." });
            } else if (error.message.includes("email")) {
                setError("email", { message: "Email is already in use." });
            } else {
                console.error('An unexpected error occurred:', error);
            }
        }
    };

    const password = watch('password');

    return (
        <div className='relative flex flex-col justify-center gap-3 items-center h-screen bg-others-background'>
            <div className="absolute overflow-hidden z-10 right-[2rem] top-0 size-48 md:size-72 bg-others-accent rounded-full blur-3xl opacity-[0.2]"></div>
            <div className="absolute overflow-hidden z-10 left-[2rem] bottom-0 size-40 md:size-60 bg-others-accent rounded-full blur-3xl opacity-[0.2]"></div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center gap-3'>
                <h1 className="text-4xl md:text-6xl text-transparent bg-clip-text font-bold inline-block bg-gradient-to-r from-others-primary via-others-secondary to-others-accent">Create Account</h1>
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
                        name="email"
                        control={control}
                        rules={{ required: 'Email is Required' }}
                        render={({ field }) => (
                            <>
                                <Labels
                                    labelName="Email"
                                    type="email"
                                    placeholder="Enter your email"
                                    value={field.value}
                                    onChange={field.onChange}
                                    className={errors.email ? 'border-red-500' : ''}
                                />
                                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                            </>
                        )}
                    />
                    <Controller
                        name="password"
                        control={control}
                        rules={{ required: 'Password is Required' }}
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
                    <Controller
                        name="confirmPassword"
                        control={control}
                        rules={{
                            required: 'Confirm Password is Required',
                            validate: value => value === password || 'Passwords do not match'
                        }}
                        render={({ field }) => (
                            <>
                                <Labels
                                    labelName="Confirm Password"
                                    type="password"
                                    placeholder="Confirm your password"
                                    value={field.value}
                                    onChange={field.onChange}
                                    className={errors.confirmPassword ? 'border-red-500' : ''}
                                />
                                {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
                            </>
                        )}
                    />
                    <Button type="submit" className='bg-others-secondary hover:bg-[#582358] border-none text-others-text'>Create Account</Button>
                </div>
                <p className='text-others-text'>Already have an account? <Link to="/" className='text-others-accent'>Login now</Link></p>
            </form>
        </div>
    );
}

export default Signup;
