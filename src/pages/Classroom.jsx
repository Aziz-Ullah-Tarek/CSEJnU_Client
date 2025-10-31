import React from 'react';

const Classroom = () => {
    const classrooms = [
        { id: 1, name: 'Classroom 101', capacity: '60 students', floor: '1st Floor', facilities: 'Smart Board, Projector, AC' },
        { id: 2, name: 'Classroom 102', capacity: '50 students', floor: '1st Floor', facilities: 'Projector, Whiteboard' },
        { id: 3, name: 'Classroom 201', capacity: '70 students', floor: '2nd Floor', facilities: 'Smart Board, Projector, AC' },
        { id: 4, name: 'Classroom 202', capacity: '60 students', floor: '2nd Floor', facilities: 'Projector, AC' },
        { id: 5, name: 'Classroom 301', capacity: '80 students', floor: '3rd Floor', facilities: 'Smart Board, Projector, AC, Audio System' },
        { id: 6, name: 'Seminar Hall', capacity: '150 students', floor: '4th Floor', facilities: 'Advanced AV System, AC, Stage' },
    ];

    return (
        <div className="min-h-screen">
            {/* Page Header */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl font-bold text-center">Classrooms</h1>
                    <p className="text-xl text-center mt-4">Modern learning spaces equipped with latest technology</p>
                </div>
            </div>

            {/* Classrooms Grid */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {classrooms.map((classroom) => (
                        <div key={classroom.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
                            <figure className="h-48 bg-gradient-to-r from-purple-400 to-indigo-400 flex items-center justify-center">
                                <div className="text-white text-6xl">🏫</div>
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-2xl">{classroom.name}</h2>
                                <div className="space-y-2">
                                    <p className="flex items-center gap-2">
                                        <span className="font-semibold">👥 Capacity:</span> {classroom.capacity}
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <span className="font-semibold">📍 Location:</span> {classroom.floor}
                                    </p>
                                    <p className="flex items-start gap-2">
                                        <span className="font-semibold">🛠️ Facilities:</span>
                                        <span>{classroom.facilities}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Classroom;
