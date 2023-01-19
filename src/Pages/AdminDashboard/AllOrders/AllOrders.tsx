import React from 'react';

const AllOrders = () => {
    return (
        <section className='flex-1'>
            <div className='user-Info mt-4'>
                <div className='singleUserInfo flex items-center justify-between p-4 hover:border-l-4 hover:border-l-gray-300 transition-all duration-300 rounded-lg shadow-md shadow-white mb-8'>
                    <div className='flex items-center space-x-2'>

                        <div>
                            <img className='w-12 h-12 rounded-full' src="/assets/users/users2.png" alt="" />
                        </div>
                        <div>
                            <h2>User Name</h2>
                        </div>
                    </div>
                    <div>User Email</div>
                    <div>Service Name</div>
                    <div className="edit-service flex space-x-2">
                        <h1>Total Cost</h1>
                    </div>
                    <div className="delete flex space-x-2">
                        <h2>Delete Service</h2>
                        <span>X</span>
                    </div>
                </div>
                <div className='singleUserInfo flex items-center justify-between p-4 hover:border-l-4 hover:border-l-gray-300 transition-all duration-300 rounded-lg shadow-md shadow-white mb-8'>
                    <div className='flex items-center space-x-2'>

                        <div>
                            <img className='w-12 h-12 rounded-full' src="/assets/users/users2.png" alt="" />
                        </div>
                        <div>
                            <h2>User Name</h2>
                        </div>
                    </div>
                    <div>User Email</div>
                    <div>Service Name</div>
                    <div className="edit-service flex space-x-2">
                        <h1>Total Cost</h1>
                    </div>
                    <div className="delete flex space-x-2">
                        <h2>Delete Service</h2>
                        <span>X</span>
                    </div>
                </div>
                <div className='singleUserInfo flex items-center justify-between p-4 hover:border-l-4 hover:border-l-gray-300 transition-all duration-300 rounded-lg shadow-md shadow-white mb-8'>
                    <div className='flex items-center space-x-2'>

                        <div>
                            <img className='w-12 h-12 rounded-full' src="/assets/users/users2.png" alt="" />
                        </div>
                        <div>
                            <h2>User Name</h2>
                        </div>
                    </div>
                    <div>User Email</div>
                    <div>Service Name</div>
                    <div className="edit-service flex space-x-2">
                        <h1>Total Cost</h1>
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

export default AllOrders;