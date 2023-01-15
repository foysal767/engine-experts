import React from 'react';
import  './BrandSection.css';
// import brand1 from '../../../../assets/brand-1.png';
// import brand2 from '../../../../assets/brand-2.png';
// import brand3 from '../../../../assets/brand-3.png';
// import brand4 from '../../../../assets/brand-4.png';
// import brand5 from '../../../../assets/brand-5.png';
// import brand6 from '../../../../assets/brand-6.png';
// import brand8 from '../../../../assets/brand-8.png';

const BrandSection = () => {
    return (
      <div className="mt-12 text-white client-wrap mb-24">
        <h1 className="text-center font-poppins text-5xl font-semibold">
          Our Clients
        </h1>
        <br />
        <div className="client-in mt-10">
          <ul className="grid grid-cols-2 justify-items-center md:grid-cols-4 lg:grid-cols-7  mx-auto gap-3">
            <li>
              <img src="assets/brand-1.png" alt="brand-1" />
            </li>
            <li>
              <img src="assets/brand-2.png" alt="brand-2" />
            </li>
            <li>
              <img src="assets/brand-3.png" alt="brand-3" />
            </li>
            <li>
              <img src="assets/brand-4.png" alt="brand-4" />
            </li>
            <li>
              <img src="assets/brand-5.png" alt="brand-5" />
            </li>
            <li>
              <img src="assets/brand-6.png" alt="brand-6" />
            </li>
            <li>
              <img src="assets/brand-8.png" alt="brand-8" />
            </li>
          </ul>
        </div>
      </div>
    );
};

export default BrandSection;