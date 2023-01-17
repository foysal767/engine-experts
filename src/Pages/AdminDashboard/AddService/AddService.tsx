import React from 'react';

const AddService = () => {
    return (
        <div className='flex-1 border'>
          <section className='mt-7'>
           <input type="text" placeholder="Service Name" className=" input w-full max-w-xs" />
            <br />
            <textarea className="textarea textarea-bordered input w-full max-w-xs " placeholder="Service Description"></textarea>
            <br />
            <input type="text" placeholder="Service Price" className=" input w-full max-w-xs" />
            <br />
            <input type="file" className="file-input w-full max-w-xs" />
            <br />
            <button className="btn btn-wide mt-3 mb-3">Add Service</button>
           </section>
        </div>
    );
};

export default AddService;