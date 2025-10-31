import React from 'react';

const Faculty = () => {
    const faculty = [
        { id: 1, name: 'Dr. John Doe', designation: 'Professor & Head', specialization: 'Artificial Intelligence', email: 'john.doe@jnu.ac.bd' },
        { id: 2, name: 'Dr. Jane Smith', designation: 'Professor', specialization: 'Machine Learning', email: 'jane.smith@jnu.ac.bd' },
        { id: 3, name: 'Dr. Michael Brown', designation: 'Associate Professor', specialization: 'Computer Networks', email: 'michael.brown@jnu.ac.bd' },
        { id: 4, name: 'Dr. Sarah Johnson', designation: 'Associate Professor', specialization: 'Database Systems', email: 'sarah.johnson@jnu.ac.bd' },
        { id: 5, name: 'Mr. David Lee', designation: 'Assistant Professor', specialization: 'Web Technologies', email: 'david.lee@jnu.ac.bd' },
        { id: 6, name: 'Ms. Emily Davis', designation: 'Assistant Professor', specialization: 'Software Engineering', email: 'emily.davis@jnu.ac.bd' },
        { id: 7, name: 'Dr. Robert Wilson', designation: 'Associate Professor', specialization: 'Cyber Security', email: 'robert.wilson@jnu.ac.bd' },
        { id: 8, name: 'Ms. Lisa Anderson', designation: 'Assistant Professor', specialization: 'Data Science', email: 'lisa.anderson@jnu.ac.bd' },
    ];

    return (
        <div className="min-h-screen">
            {/* Page Header */}
            <div className="bg-linear-to-r from-purple-600 to-indigo-600 text-white py-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl font-bold text-center">Our Faculty</h1>
                    <p className="text-xl text-center mt-4">Meet our dedicated team of educators and researchers</p>
                </div>
            </div>

            {/* Faculty Grid */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {faculty.map((member) => (
                        <div key={member.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
                            <figure className="pt-8 px-8">
                                <div className="avatar placeholder">
                                    <div className="bg-purple-600 text-white rounded-full w-32 h-32">
                                        <span className="text-4xl">{member.name.charAt(0)}</span>
                                    </div>
                                </div>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-xl">{member.name}</h2>
                                <p className="text-sm font-semibold text-purple-600">{member.designation}</p>
                                <div className="badge badge-outline badge-primary">{member.specialization}</div>
                                <div className="mt-3">
                                    <a href={`mailto:${member.email}`} className="text-sm text-gray-600 hover:text-purple-600 flex items-center gap-2 justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        Email
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faculty;
