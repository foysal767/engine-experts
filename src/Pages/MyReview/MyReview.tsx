import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const MyReview = () => {

  const { user } = useContext(AuthContext);

  const { data: reviews = [], refetch, isLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/userReviews?email=${user?.email}`
      );
      const data = await res.json();
      return data.data;
    },
  });
  if (isLoading) {
    return (
      <div className="grid place-items-center w-full h-screen">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <section className="text-black mt-5 px-4 md:px-12 lg:px-12">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5">
        {
          reviews?.map((review: any, i: any) => <div key={i} className="shadow-xl mx-auto px-4 py-5">
          <h3 className="text-xl font-bold">{review?.name}</h3>
          <img
            className="w-[280px] h-[180px] my-2"
            src={review?.image}
            alt=""
          />
          <h3 className="text-left text-lg font-bold">
            Review: <span className="text-sm">{review?.review?.feedback}</span>
          </h3>
          <h3 className="text-left text-lg font-bold mb-2">Rating: {review?.review?.rating}</h3>
          <div className="flex justify-between items-center">
            <label
              htmlFor="edit-modal"
              className="btn bg-blue-600 lg:btn-sm btn-xs border-none text-white"
            >
              Edit
            </label>
            <label
              htmlFor="delete-modal"
              className="btn bg-red-600 lg:btn-sm btn-xs border-none text-white"
            >
              Delete
            </label>
          </div>
        </div>)
        }
        
      </div>

      {/* Edit modal */}
      <input type="checkbox" id="edit-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative bg-white">
          <label
            htmlFor="edit-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Service 1</h3>
          <label>
            <p className="text-left">Give feedback</p>
          </label>
          <input
            type="text"
            placeholder="Comment your feedback here..."
            className="input input-bordered w-full text-white"
          />
          <label>
            <p className="text-left">Rating</p>
          </label>
          <select className="select select-bordered w-full text-white">
            <option>Good</option>
            <option>Excellent</option>
            <option>As well</option>
          </select>
          <button className="btn bg-green-600 w-full text-white border-none mt-5">Submit</button>
        </div>
      </div>
      {/* Delete modal */}
      <input type="checkbox" id="delete-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg">
            Are you sure you want to delete?
          </h3>
          <p className="py-4">
            If you delete once it will be removed permanently.
          </p>
          <div className="modal-action">
            <button className="btn btn-sm bg-green-600 text-white border-none">
              Yes
            </button>
            <label
              htmlFor="delete-modal"
              className="btn btn-sm bg-red-600 text-white border-none"
            >
              No
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyReview;
