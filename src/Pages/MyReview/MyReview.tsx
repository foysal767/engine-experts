import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://engine-experts-server-phi.vercel.app/userReviews/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setReviews(data.data);
          setLoading(false);
        }
      });
  }, [user?.email]);

  if (loading) {
    return (
      <div className="grid place-items-center w-full h-screen">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <section className="text-black mt-5 px-4 md:px-12 lg:px-12">
      {reviews?.length >= 1 ? (
        <h2 className="text-4xl">Total reviews : {reviews?.length}</h2>
      ) : (
        <h2 className="text-4xl mb-8 text-red-600">No reviews added yet.</h2>
      )}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
        {reviews?.map((review: any, i: any) => (
          <div key={i} className="shadow-xl mx-auto px-4 py-5 w-full">
            <h3 className="text-left text-xl font-bold">{review?.name}</h3>
            <div className="flex items-center">
              <img
                className="w-[180px] h-[80px] my-2"
                src={review?.image}
                alt=""
              />

              <div className="ml-5">
                <h3 className="text-left text-lg font-bold">
                  Review:{" "}
                  <span className="text-sm">{review?.review?.feedback}</span>
                </h3>
                <h3 className="text-left text-lg font-bold mb-2">
                  Rating: {review?.review?.rating}
                </h3>
              </div>
            </div>
            <div className="flex items-center space-x-3">
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
          </div>
        ))}
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
          <button className="btn bg-green-600 w-full text-white border-none mt-5">
            Submit
          </button>
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
