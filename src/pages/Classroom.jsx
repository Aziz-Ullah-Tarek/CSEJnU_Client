import React, { useState } from 'react';

const Classroom = () => {
    const [bookingModal, setBookingModal] = useState(false);
    const [viewScheduleModal, setViewScheduleModal] = useState(false);
    const [selectedClassroom, setSelectedClassroom] = useState(null);
    const [bookingData, setBookingData] = useState({
        date: '',
        startTime: '',
        endTime: '',
        purpose: '',
        bookedBy: ''
    });

    // Store all classrooms with their bookings
    const [classrooms, setClassrooms] = useState([
        { 
            id: 1, 
            name: 'Classroom 601', 
            capacity: '60 students', 
            floor: '5th Floor', 
            facilities: 'Smart Board, Projector, AC',
            image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500',
            bookings: []
        },
        { 
            id: 2, 
            name: 'Classroom 721', 
            capacity: '60 students', 
            floor: '6th Floor', 
            facilities: 'Projector, Whiteboard',
            image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=500',
            bookings: []
        },
        { 
            id: 3, 
            name: 'Virtual Classroom', 
            capacity: '70 students', 
            floor: '5th Floor', 
            facilities: 'Smart Board, Projector, AC',
            image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=500',
            bookings: []
        },
        { 
            id: 4, 
            name: 'Exam Hall 712', 
            capacity: '80 students', 
            floor: '6th Floor', 
            facilities: 'Fan, Whiteboard',
            image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500',
            bookings: []
        },
        { 
            id: 5, 
            name: 'Seminar Library', 
            capacity: '20 students', 
            floor: '6th Floor', 
            facilities: 'Advanced AV System, AC, Books',
            image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500',
            bookings: []
        },
    ]);

    const handleBooking = (classroom) => {
        setSelectedClassroom(classroom);
        setBookingModal(true);
    };

    const handleViewSchedule = (classroom) => {
        setSelectedClassroom(classroom);
        setViewScheduleModal(true);
    };

    const submitBooking = (e) => {
        e.preventDefault();
        
        // Create new booking object
        const newBooking = {
            id: Date.now(),
            classroomId: selectedClassroom.id,
            classroomName: selectedClassroom.name,
            date: bookingData.date,
            startTime: bookingData.startTime,
            endTime: bookingData.endTime,
            purpose: bookingData.purpose,
            bookedBy: bookingData.bookedBy,
            createdAt: new Date().toISOString()
        };

        // Update the specific classroom's bookings
        setClassrooms(prevClassrooms => 
            prevClassrooms.map(classroom => 
                classroom.id === selectedClassroom.id 
                    ? { ...classroom, bookings: [...classroom.bookings, newBooking] }
                    : classroom
            )
        );

        // TODO: Connect to backend API when ready
        console.log('Booking submitted:', newBooking);
        alert(`Booking confirmed for ${selectedClassroom.name}!\nDate: ${bookingData.date}\nTime: ${bookingData.startTime} - ${bookingData.endTime}`);
        
        setBookingModal(false);
        setBookingData({ date: '', startTime: '', endTime: '', purpose: '', bookedBy: '' });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Page Header */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-center">Classrooms</h1>
                    <p className="text-lg md:text-xl text-center mt-4">Modern learning spaces equipped with latest technology</p>
                </div>
            </div>

            {/* Classrooms Grid */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {classrooms.map((classroom) => (
                        <div key={classroom.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                            {/* Image */}
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src={classroom.image} 
                                    alt={classroom.name} 
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            
                            {/* Content */}
                            <div className="p-5">
                                <h2 className="text-xl font-bold text-gray-800 mb-3">{classroom.name}</h2>
                                
                                <div className="space-y-2.5 mb-4">
                                    <p className="text-sm text-gray-700">
                                        <span className="font-semibold">👥 Capacity:</span> {classroom.capacity}
                                    </p>
                                    
                                    <p className="text-sm text-gray-700">
                                        <span className="font-semibold">📍 Location:</span> {classroom.floor}
                                    </p>
                                    
                                    <div>
                                        <p className="text-sm font-semibold text-gray-700 mb-1">🛠️ Facilities:</p>
                                        <p className="text-xs text-gray-600 leading-relaxed">{classroom.facilities}</p>
                                    </div>
                                    
                                    <div className="pt-2 border-t border-gray-200">
                                        <p className="text-sm text-gray-700">
                                            <span className="font-semibold">📅 Bookings:</span> 
                                            <span className="ml-1 text-purple-600 font-bold">{classroom.bookings.length}</span>
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Buttons */}
                                <div className="flex gap-2 mt-4">
                                    <button 
                                        onClick={() => handleBooking(classroom)}
                                        className="flex-1 px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition"
                                    >
                                        Book Room
                                    </button>
                                    <button 
                                        onClick={() => handleViewSchedule(classroom)}
                                        className="flex-1 px-4 py-2 border-2 border-purple-600 text-purple-600 text-sm font-medium rounded-lg hover:bg-purple-50 transition"
                                    >
                                        View All
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Booking Modal */}
            {bookingModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
                        <h3 className="text-2xl font-bold mb-4 text-purple-600">Book {selectedClassroom?.name}</h3>
                        <form onSubmit={submitBooking} className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold mb-2">Your Name</label>
                                <input 
                                    type="text" 
                                    required
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                                    value={bookingData.bookedBy}
                                    onChange={(e) => setBookingData({...bookingData, bookedBy: e.target.value})}
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-2">Date</label>
                                <input 
                                    type="date" 
                                    required
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                                    value={bookingData.date}
                                    onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Start Time</label>
                                    <input 
                                        type="time" 
                                        required
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                                        value={bookingData.startTime}
                                        onChange={(e) => setBookingData({...bookingData, startTime: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-2">End Time</label>
                                    <input 
                                        type="time" 
                                        required
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                                        value={bookingData.endTime}
                                        onChange={(e) => setBookingData({...bookingData, endTime: e.target.value})}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-2">Purpose</label>
                                <textarea 
                                    required
                                    rows="3"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                                    value={bookingData.purpose}
                                    onChange={(e) => setBookingData({...bookingData, purpose: e.target.value})}
                                    placeholder="Describe the purpose of booking..."
                                />
                            </div>
                            <div className="flex gap-3 mt-6">
                                <button 
                                    type="submit"
                                    className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                                >
                                    Submit Booking
                                </button>
                                <button 
                                    type="button"
                                    onClick={() => setBookingModal(false)}
                                    className="flex-1 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* View Schedule Modal */}
            {viewScheduleModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-2xl font-bold text-purple-600">
                                All Bookings - {selectedClassroom?.name}
                            </h3>
                            <button 
                                onClick={() => setViewScheduleModal(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        
                        {selectedClassroom?.bookings && selectedClassroom.bookings.length > 0 ? (
                            <div className="space-y-3">
                                {selectedClassroom.bookings.map((booking, index) => (
                                    <div key={booking.id} className="border border-purple-200 rounded-lg p-4 bg-purple-50">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="font-bold text-purple-700">Booking #{index + 1}</h4>
                                            <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded">
                                                {new Date(booking.date).toLocaleDateString()}
                                            </span>
                                        </div>
                                        <div className="space-y-1 text-sm">
                                            <p><span className="font-semibold">Booked by:</span> {booking.bookedBy}</p>
                                            <p><span className="font-semibold">Time:</span> {booking.startTime} - {booking.endTime}</p>
                                            <p><span className="font-semibold">Purpose:</span> {booking.purpose}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-8 text-gray-500">
                                <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <p className="text-lg font-medium">No bookings yet</p>
                                <p className="text-sm">Be the first to book this classroom!</p>
                            </div>
                        )}
                        
                        <button 
                            onClick={() => setViewScheduleModal(false)}
                            className="mt-6 w-full px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Classroom;
