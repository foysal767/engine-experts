import React from 'react';
import { FaEdit } from 'react-icons/fa';

const AllUsers = () => {
    return (
        <section className='flex-1'>
            <div className='user-Info mt-4'>
                <div className='singleUserInfo flex items-center justify-between p-4 hover:border-l-4 hover:border-l-blue-700 transition-all duration-300 rounded-lg shadow-md shadow-red-500 mb-8'>
                    <div className='flex items-center space-x-2'>

                        <div>
                            <img className='w-12 h-12 rounded-full' src="/assets/users/users1.png" alt="" />
                        </div>
                        <div>
                            <h2>User Name</h2>
                        </div>
                    </div>
                    <div>User Email</div>
                    <div>Service Name</div>
                    <div className="edit-service flex space-x-2">
                        <h1>Edit Service</h1>
                        <FaEdit/>
                    </div>
                    <div className="delete flex space-x-2">
                        <h2>Delete Service</h2>
                        <span>X</span>
                    </div>
                </div>
                <div className='singleUserInfo flex items-center justify-between p-4 hover:border-l-4 hover:border-l-blue-700 transition-all duration-300 rounded-lg shadow-md shadow-red-500 mb-8'>
                    <div className='flex items-center space-x-2'>

                        <div>
                            <img className='w-12 h-12 rounded-full' src="/assets/users/users1.png" alt="" />
                        </div>
                        <div>
                            <h2>User Name</h2>
                        </div>
                    </div>
                    <div>User Email</div>
                    <div>Service Name</div>
                    <div className="edit-service flex space-x-2">
                        <h1>Edit Service</h1>
                        <FaEdit/>
                    </div>
                    <div className="delete flex space-x-2">
                        <h2>Delete Service</h2>
                        <span>X</span>
                    </div>
                </div>
                <div className='singleUserInfo flex items-center justify-between p-4 hover:border-l-4 hover:border-l-blue-700 transition-all duration-300 rounded-lg shadow-md shadow-red-500 mb-8'>
                    <div className='flex items-center space-x-2'>

                        <div>
                            <img className='w-12 h-12 rounded-full' src="/assets/users/users1.png" alt="" />
                        </div>
                        <div>
                            <h2>User Name</h2>
                        </div>
                    </div>
                    <div>User Email</div>
                    <div>Service Name</div>
                    <div className="edit-service flex space-x-2">
                        <h1>Edit Service</h1>
                        <FaEdit/>
                    </div>
                    <div className="delete flex space-x-2">
                        <h2>Delete Service</h2>
                        <span>X</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AllUsers;