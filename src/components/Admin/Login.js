import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../Shared/LoadingSpinner';
import SocialLogin from './SocialLogin';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();

    const onSubmit = async data => {
        console.log(data)
        await signInWithEmailAndPassword(data.email, data.password);
        toast.success('Login successfull...')
    };

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [user, navigate])
    if (error) {
        toast.error(error?.message)
    }
    if (loading) {
        return <LoadingSpinner />
    }

    return (
        <section className="w-full max-w-sm p-6 m-auto my-12 bg-white rounded-md shadow-md dark:bg-gray-800">
            <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">Admin</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                <div>
                    <label htmlFor="username" className="block text-sm text-gray-800 dark:text-gray-200 text-left">Email</label>
                    <input type="email"
                        {...register("email")}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div className="mt-4">
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm text-gray-800 dark:text-gray-200">Password</label>
                        <a href="!#" className="text-xs text-gray-600 dark:text-gray-400 hover:underline">Forget Password?</a>
                    </div>

                    <input type="password"
                        {...register("password")}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div className="mt-6">
                    <button
                        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                        Login
                    </button>
                </div>
            </form>
            <SocialLogin />
            <p className="mt-8 text-xs font-light text-center text-gray-400"> You want to be a Admin? <Link to={'/signup'}
                className="font-medium text-gray-700 dark:text-gray-200 hover:underline">Register</Link>
            </p>
        </section>
    );
};

export default Login;