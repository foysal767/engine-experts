import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
const SignUp = () => {
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleSubmit = (event:any)=> {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const password:any = form.password.value;
      //  console.log(name, photoURL, email, password);
  
      createUser(email, password)
        .then((result:any) => {
          const user = result.user;
          console.log(user);
          setError('');
          form.reset();
          handleUpdateUserProfile(name, email, password);
          handleEmailVerification();
          toast.success('Please verify your email before login')
        })
        .catch((error:any) => {
          console.error(error)
          setError(error.message)
        });
    }
  
    const handleUpdateUserProfile = (name, photoURL) => {
      const profile = {
        displayName: name,
        photoURL: photoURL
      }
      updateUserProfile(profile)
        .then(() => { })
        .catch((error:any) => console.error(error));
    }
  
    const handleEmailVerification = () => {
      verifyEmail()
        .then(() => { })
        .catch((error:any) => console.error(error));
    }
    return (
        <section className="bg-base-200 font-poppins dark:bg-gray-900">
        <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
            <form onSubmit={handleSubmit} className="w-full max-w-md">
                <h3 className='text-3xl font-bold font-poppins ml-12 text-white'>Sign Up To Expert Engine</h3>
                <div className="relative flex items-center mt-8">
                    <span className="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </span>

                    <input type="text" id='name' className="block w-full py-3  text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Username" />
                </div>

                <div className="relative flex items-center mt-8">
                    <span className="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 w-6 h-6 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                    </span>

                    <input type="text" id='photoURL' className="block w-full py-3  text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Upload Image" />
                </div>

                <div className="relative flex items-center mt-6">
                    <span className="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </span>

                    <input type="email" id='email' className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" />
                </div>

                <div className="relative flex items-center mt-4">
                    <span className="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </span>

                    <input type="password" id='password' className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" />
                </div>
                <div className="mt-6">
                    <button className="w-full px-6 py-3 text-sm font-medium tracking-wide  capitalize transition-colors duration-300 transform bg-black rounded-lg hover:bg-gray-900 text-yellow-400 focus:outline-none focus:ring focus:bg-gray-700 focus:ring-opacity-50">
                        Sign Up
                    </button>
                    {error}
                    <div className="mt-6 text-center ">
                       
                            Already have an account?<Link to='/login' className='hover:underline'> Log in</Link>
                        
                    </div>
                </div>
            </form>
        </div>
    </section>
    );
};

export default SignUp;