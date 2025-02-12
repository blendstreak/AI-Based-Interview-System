import React from 'react';
import '../App.css';
import Navi from './nav';

const Premium = () =>
{
    return (
        <div className='bg-[#121212] h-dvh w-full'>
            <Navi/>
            <div  className='w-full h-fit flex content-center justify-center gap-9 mt-20'>
                <div className=' w-1/3 border-2 border-white text-white rounded-2xl p-5 py-5'>
                        <h1 className='text-center  text-5xl font-semibold pt-5 text-white mb-3'>Free  <span className='text-3xl'> $0.00/month </span></h1>
                        <ul className='  grid content-start  justify-center '>
                            <li className='m-4 text-3xl'>3 Interviews/Month </li>
                            <li className='m-4 text-3xl'>Detailed Analysis</li>
                            <li className='m-4 text-3xl'>No Time Boundation</li>
                            <li className='m-4 text-3xl'>Proper Resume Analysis</li>
                            <li className='m-4 text-3xl'>No Ads</li>
                            <li className='m-4 text-3xl'>Verbal Communication Analysis</li>
                            <li className='m-4 text-3xl'>24X7 Coustomer Care Support</li>
                        </ul>
                </div>
                <div className=' w-1/3 border-2 border-white text-white rounded-2xl p-5 py-5'>
                        <h1 className='text-5xl font-semibold pt-5 mb-3 text-center'>Premium <span className='text-3xl'> $24.00/month </span></h1>
                        <ul className=' grid content-start justify-center'>
                            <li className='m-4 text-3xl'>Unlimited interviews </li>
                            <li className='m-4 text-3xl'>Detailed Analysis</li>
                            <li className='m-4 text-3xl'>No Time Boundation</li>
                            <li className='m-4 text-3xl'>Proper Resume Analysis</li>
                            <li className='m-4 text-3xl'>No Ads</li>
                            <li className='m-4 text-3xl'>Verbal Communication Analysis</li>
                            <li className='m-4 text-3xl'>24X7 Coustomer Care Support</li>
                        </ul>
                </div>
            </div>
        </div>
    );
}

export default Premium;