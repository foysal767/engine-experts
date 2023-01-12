import React from 'react';
import  './BrandSection.css';
import brand1 from '../../../../assets/brand-1.png';
import brand2 from '../../../../assets/brand-2.png';
import brand3 from '../../../../assets/brand-3.png';
import brand4 from '../../../../assets/brand-4.png';
import brand5 from '../../../../assets/brand-5.png';
import brand6 from '../../../../assets/brand-6.png';
import brand8 from '../../../../assets/brand-8.png';

const BrandSection = () => {
    return (
        <div className='mt-12 text-white client-wrap mb-24'>
            <h1 className='text-center text-5xl font-semibold' >Our Clients</h1>
            <hr/>
            <div className='client-in'>
                <ul>
                    <li>
                        <img src={brand1} alt="brand-1" />
                    </li>
                    <li>
                        <img src={brand2} alt="brand-2" />
                    </li>
                    <li>
                        <img src={brand3} alt="brand-3" />
                    </li>
                    <li>
                        <img src={brand4} alt="brand-4" />
                    </li>
                    <li>
                        <img src={brand5} alt="brand-5" />
                    </li>
                    <li>
                        <img src={brand6} alt="brand-6" />
                    </li>
                    <li>
                        <img src={brand8} alt="brand-8" />
                    </li>
                </ul>
            </div>
            
        </div>
    );
};

export default BrandSection;