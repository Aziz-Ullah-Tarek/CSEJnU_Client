import React from 'react';

const Lab = () => {
    const labs = [
        {
            id: 1,
            name: 'Computer Lab 1',
            computers: 50,
            software: 'Programming Languages, IDEs, Database Management',
            specialization: 'General Purpose Programming'
        },
        {
            id: 2,
            name: 'Computer Lab 2',
            computers: 45,
            software: 'Web Development Tools, Graphics Software',
            specialization: 'Web & Graphics Design'
        },
        {
            id: 3,
            name: 'Networking Lab',
            computers: 40,
            software: 'Network Simulators, Security Tools',
            specialization: 'Computer Networks & Security'
        },
        {
            id: 4,
            name: 'AI & ML Lab',
            computers: 35,
            software: 'Python, TensorFlow, PyTorch, Jupyter',
            specialization: 'Artificial Intelligence & Machine Learning'
        },
        {
            id: 5,
            name: 'IoT Lab',
            computers: 30,
            software: 'Arduino IDE, Raspberry Pi, Sensors',
            specialization: 'Internet of Things'
        },
        {
            id: 6,
            name: 'Research Lab',
            computers: 25,
            software: 'Research Tools, Simulation Software',
            specialization: 'Advanced Research Projects'
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Page Header */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl font-bold text-center">Laboratories</h1>
                    <p className="text-xl text-center mt-4">State-of-the-art facilities for practical learning</p>
                </div>
            </div>

            {/* Labs Grid */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {labs.map((lab) => (
                        <div key={lab.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
                            <figure className="h-48 bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                                <div className="text-white text-6xl">🔬</div>
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-2xl text-purple-600">{lab.name}</h2>
                                <div className="space-y-3">
                                    <div className="badge badge-lg badge-primary">{lab.specialization}</div>
                                    <p className="flex items-center gap-2">
                                        <span className="font-semibold">💻 Computers:</span> {lab.computers}
                                    </p>
                                    <div>
                                        <p className="font-semibold mb-1">📦 Software & Tools:</p>
                                        <p className="text-sm text-gray-600">{lab.software}</p>
                                    </div>
                                </div>
                                <div className="card-actions justify-end mt-4">
                                    <button className="btn btn-sm btn-primary">View Details</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Lab Features */}
                <div className="mt-16">
                    <h2 className="text-4xl font-bold text-center mb-12">Lab Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center p-6 bg-purple-50 rounded-lg">
                            <div className="text-5xl mb-4">⚡</div>
                            <h3 className="text-xl font-bold mb-2">High-Speed Internet</h3>
                            <p className="text-sm">Dedicated high-bandwidth connectivity</p>
                        </div>
                        <div className="text-center p-6 bg-indigo-50 rounded-lg">
                            <div className="text-5xl mb-4">🖥️</div>
                            <h3 className="text-xl font-bold mb-2">Latest Hardware</h3>
                            <p className="text-sm">Updated computers and equipment</p>
                        </div>
                        <div className="text-center p-6 bg-purple-50 rounded-lg">
                            <div className="text-5xl mb-4">❄️</div>
                            <h3 className="text-xl font-bold mb-2">Climate Control</h3>
                            <p className="text-sm">Air-conditioned comfortable environment</p>
                        </div>
                        <div className="text-center p-6 bg-indigo-50 rounded-lg">
                            <div className="text-5xl mb-4">👨‍💻</div>
                            <h3 className="text-xl font-bold mb-2">Technical Support</h3>
                            <p className="text-sm">24/7 lab assistance available</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lab;
