import React, { useState } from 'react';

const StudentLogin = () => {
    const [formData, setFormData] = useState({
        studentId: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login attempt:', formData);
        alert('Login functionality will be implemented with backend integration');
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-100 to-indigo-100 py-12 px-4">
            <div className="card w-full max-w-md bg-base-100 shadow-2xl">
                <div className="card-body">
                    <div className="text-center mb-6">
                        <div className="avatar placeholder mb-4">
                            <div className="bg-purple-600 text-white rounded-full w-20 h-20">
                                <span className="text-3xl">🎓</span>
                            </div>
                        </div>
                        <h2 className="text-3xl font-bold">Student Portal</h2>
                        <p className="text-gray-600 mt-2">Login to access your dashboard</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Student ID</span>
                            </label>
                            <input
                                type="text"
                                name="studentId"
                                value={formData.studentId}
                                onChange={handleChange}
                                placeholder="Enter your student ID"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                className="input input-bordered w-full"
                                required
                            />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-purple-600">Forgot password?</a>
                            </label>
                        </div>

                        <button type="submit" className="btn btn-primary w-full">
                            Login
                        </button>
                    </form>

                    <div className="divider">OR</div>

                    <div className="text-center space-y-2">
                        <p className="text-sm text-gray-600">Don't have an account?</p>
                        <button className="btn btn-outline btn-sm">Register Now</button>
                    </div>

                    <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                        <h3 className="font-bold mb-2">Quick Links:</h3>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li>• View Course Materials</li>
                            <li>• Check Grades</li>
                            <li>• Submit Assignments</li>
                            <li>• Class Schedule</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentLogin;
