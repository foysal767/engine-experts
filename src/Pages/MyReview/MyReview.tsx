import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { SiTrustpilot } from "react-icons/si";
import { AiTwotoneEdit, AiTwotoneDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

interface singleReview {
  feedback: any;
  _id: any;
}
const MyReview = () => {
  const { user, logOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loader, setLoader] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [deletedId, setDeletedId] = useState();
  const [singleReview, setSingleReview] = useState<singleReview>();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_API}/userReviews/${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          logOut(navigate);
        }
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setReviews(data.data);
          setLoading(false);
        }
      });
  }, [user?.email, loader]);

  const handleDelete = (id: any) => {
    fetch(`${process.env.REACT_APP_API}/userReviews?id=${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setLoader(!loader);
          toast.success(data.message);
        }
      });
  };
  const handleEdit = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const feedback = form.feedback.value;
    fetch(`${process.env.REACT_APP_API}/userReviews?id=${singleReview?._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ feedback: feedback }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setLoader(!loader);
          setOpenModal(false);
          toast.success(data.message);
        }
      });
  };

  if (loading) {
    return (
      <div className="grid place-items-center w-full h-screen">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <section className="text-black mt-5 px-4 md:px-12 lg:px-12 pb-12">
      {reviews?.length >= 1 ? (
        <h2 className="text-4xl font-semibold mb-6 border-b-2 border-b-gray-600 pb-2">
          Total reviews : {reviews?.length}
        </h2>
      ) : (
        <h2 className="text-4xl font-semibold mb-8 text-red-600">
          No reviews added yet.
        </h2>
      )}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
        {reviews?.map((review: any, i: any) => (
          <div
            key={i}
            className="shadow-xl px-4 py-5 w-full flex items-center justify-between bg-gray-200"
          >
            <div>
              <h3 className="text-xl text-left font-bold mb-3">
                {review?.service}
              </h3>
              <h3 className="text-left mb-2 flex gap-2 items-center">
                <span className="text-md font-bold">Rating:</span>{" "}
                <span className="text-xl flex gap-1">
                  {[...Array(review?.rating)].map((star, i) => (
                    <SiTrustpilot className="text-[#E81C2E]"></SiTrustpilot>
                  ))}
                </span>
              </h3>
              <h3 className="text-left">
                <span className="text-md font-bold">Review:</span>{" "}
                {review?.feedback}
              </h3>
            </div>
            <div className="flex flex-col gap-12 items-center">
              <label
                htmlFor="edit-modal"
                className="cursor-pointer text-green-600 text-2xl"
                onClick={() => {
                  setSingleReview(review);
                  setOpenModal(true);
                }}
              >
                <AiTwotoneEdit></AiTwotoneEdit>
              </label>
              <label
                htmlFor="delete-modal"
                className="cursor-pointer text-red-600 text-2xl"
                onClick={() => {
                  setDeletedId(review?._id);
                  setOpenModal(true);
                }}
              >
                <AiTwotoneDelete></AiTwotoneDelete>
              </label>
            </div>
          </div>
        ))}
      </div>

      {/* Edit modal */}
      <input type="checkbox" id="edit-modal" className="modal-toggle" />
      {openModal && (
        <div className="modal">
          <div className="modal-box relative bg-white">
            <label
              htmlFor="edit-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ???
            </label>
            <form onSubmit={handleEdit}>
              <label>
                <p className="text-left">Give feedback</p>
              </label>
              <input
                type="text"
                name="feedback"
                placeholder="Comment your feedback here..."
                className="input input-bordered w-full"
                defaultValue={singleReview?.feedback}
              />
              <button
                type="submit"
                className="btn bg-green-600 w-full text-white border-none mt-5"
                // onClick={() => setOpenModal(false)}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Delete modal */}
      <input type="checkbox" id="delete-modal" className="modal-toggle" />
      {openModal && (
        <div className="modal">
          <div className="modal-box bg-white">
            <h3 className="font-bold text-lg">
              Are you sure you want to delete?
            </h3>
            <p className="py-4">
              If you delete once it will be removed permanently.
            </p>
            <div className="modal-action">
              <button
                className="btn btn-sm bg-green-600 text-white border-none"
                onClick={() => {
                  handleDelete(deletedId);
                  setOpenModal(false);
                }}
              >
                Yes
              </button>
              <label
                htmlFor="delete-modal"
                className="btn btn-sm bg-red-600 text-white border-none"
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                No
              </label>
            </div>
          </div>
        </div>
      )}
      {/* <div className="modal">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg">
            Are you sure you want to delete?
          </h3>
          <p className="py-4">
            If you delete once it will be removed permanently.
          </p>
          <div className="modal-action">
            <button
              className="btn btn-sm bg-green-600 text-white border-none"
              onClick={() => setReviewDelete(true)}
            >
              Yes
            </button>
            <label
              htmlFor="delete-modal"
              className="btn btn-sm bg-red-600 text-white border-none"
              onClick={() => setReviewDelete(false)}
            >
              No
            </label>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default MyReview;
