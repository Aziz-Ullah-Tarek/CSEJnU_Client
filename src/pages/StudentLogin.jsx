import React, { useState } from 'react';
import { FaUser, FaLock, FaEnvelope, FaGoogle, FaGraduationCap } from 'react-icons/fa';
import { MdPhone } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StudentLogin = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        studentId: '',
        password: '',
        name: '',
        email: '',
        phone: '',
        confirmPassword: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (isLogin) {
            // Login validation
            if (!formData.studentId || !formData.password) {
                toast.error('Please fill in all fields!');
                return;
            }
            console.log('Login attempt:', { studentId: formData.studentId, password: formData.password });
            toast.success('Login successful! (Backend integration pending)');
            // TODO: Connect to backend API
        } else {
            // Register validation
            if (!formData.name || !formData.email || !formData.studentId || !formData.phone || !formData.password || !formData.confirmPassword) {
                toast.error('Please fill in all fields!');
                return;
            }
            if (formData.password !== formData.confirmPassword) {
                toast.error('Passwords do not match!');
                return;
            }
            if (formData.password.length < 6) {
                toast.error('Password must be at least 6 characters!');
                return;
            }
            console.log('Register attempt:', formData);
            toast.success('Registration successful! (Backend integration pending)');
            // TODO: Connect to backend API
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleGoogleLogin = () => {
        toast.info('Google login will be integrated with backend');
        // TODO: Implement Google OAuth
    };

    const toggleForm = () => {
        setIsLogin(!isLogin);
        setFormData({
            studentId: '',
            password: '',
            name: '',
            email: '',
            phone: '',
            confirmPassword: ''
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-600 via-pink-400 to-yellow-300 py-12 px-4">
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            
            <div className="w-full max-w-md">
                {/* Card */}
                <div className="bg-white  rounded-2xl shadow-2xl overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 text-center">
                        <div className="inline-block p-3 bg-white rounded-full mb-4">
                            <FaGraduationCap className="text-5xl text-purple-600" />
                        </div>
                        <h2 className="text-3xl font-bold mb-2">Student Portal</h2>
                        <p className="text-purple-100">
                            {isLogin ? 'Welcome back! Please login to continue' : 'Create your account to get started'}
                        </p>
                    </div>

                    {/* Form */}
                    <div className="p-6 sm:p-8">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Register Fields */}
                            {!isLogin && (
                                <>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Full Name
                                        </label>
                                        <div className="relative">
                                            
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Enter your full name"
                                                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Email
                                        </label>
                                        <div className="relative">
                                            
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Enter your email"
                                                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                                            />
                                        </div>
                                    </div>

                                </>
                            )}

                            {/* Common Fields */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Student ID
                                </label>
                                <div className="relative">
                                    
                                    <input
                                        type="text"
                                        name="studentId"
                                        value={formData.studentId}
                                        onChange={handleChange}
                                        placeholder="Enter your student ID"
                                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Enter your password"
                                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                                    />
                                </div>
                            </div>

                            {!isLogin && (
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Confirm Password
                                    </label>
                                    <div className="relative">
                                        
                                        <input
                                            type="password"
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            placeholder="Confirm your password"
                                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                                        />
                                    </div>
                                </div>
                            )}

                            {isLogin && (
                                <div className="flex justify-end">
                                    <a href="#" className="text-sm text-purple-600 hover:text-purple-700 font-medium">
                                        Forgot password?
                                    </a>
                                </div>
                            )}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:scale-[1.02] shadow-lg"
                            >
                                {isLogin ? 'Login' : 'Register'}
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-white text-gray-500 font-medium">OR</span>
                            </div>
                        </div>

                        {/* Google Login */}
                        <button
                            type="button"
                            onClick={handleGoogleLogin}
                            className="w-full flex items-center justify-center gap-3 bg-yellow-300 border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all transform hover:scale-[1.02]"
                        >
                            <FaGoogle className="text-xl text-pink-500" />
                            Continue with Google
                        </button>

                        {/* Toggle Login/Register */}
                        <div className="text-center mt-6">
                            <p className="text-gray-600">
                                {isLogin ? "Don't have an account? " : "Already have an account? "}
                                <button
                                    type="button"
                                    onClick={toggleForm}
                                    className="text-purple-600 font-semibold hover:text-purple-700 underline"
                                >
                                    {isLogin ? 'Register Now' : 'Login'}
                                </button>
                            </p>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default StudentLogin;
