import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import GoogleMaps from "../../GoogleMaps/GoogleMaps";

interface singleUsertype {
  email: string;
  name: string;
  phone: string;
  nationality: string;
  nid: string;
  address: string;
  _id: any;
}

const AllUsers1 = () => {
  const { isAdmin } = useContext(AuthContext);
  const [type, setType] = useState("Seller");
  const [openModal, setOpenModal] = useState(false);
  const [singleUser, setSingleUser] = useState<singleUsertype>();
  const [page, setPage] = useState(0);
  const [length, setLength] = useState(0);
  const [loader, setLoader] = useState(false);
  const [loading, setLoading] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState();
  const location = useLocation();
  if (!isAdmin) {
    <Navigate to="/" state={{ from: location }} replace></Navigate>;
  }

  const getSingleUser = (id: any) => {
    fetch(`https://engine-experts-server-phi.vercel.app/singleUser/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setSingleUser(data?.data);
        }
      });
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleVerify = (e: any) => {
    e.preventDefault();
    fetch(
      `https://engine-experts-server-phi.vercel.app/singleUser/${singleUser?._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          handleClose();
          toast.success(data.message);
          setLoader(!loader);
        }
      });
  };

  const handleUserDelete = (id: any, name: any, uid: any) => {
    const confirm = window.confirm(
      `Are you sure, want to delete this ${name}?`
    );
    if (confirm) {
      fetch(`https://engine-experts-server-phi.vercel.app/user/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            toast.success(data.message);
            setLoader(!loader);
          }
        });
    }
  };

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://engine-experts-server-phi.vercel.app/users?type=${type}&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setLength(Math.ceil(data?.length / 10));
          setAllUsers(data?.data);
          setUsers(data?.length);
          setLoading(false);
        }
      });
  }, [loader, page, type]);

  const handlePage = (i: any) => {
    setPage(i);
    setLoader(!loader);
  };

  if (loading) {
    return (
      <div className="grid place-items-center w-full h-screen">
        <span className="loader"></span>
      </div>
    );
  }
  return (
    <section className="w-full lg:w-[90%] md:w-[80%] mx-auto px-4 md:px-8 lg:px-12 bg-[#EBF2F4] py-20">
      <GoogleMaps></GoogleMaps>
      <h1 className="text-2xl  text-start mb-6">
        Total Active {type}: {users}
      </h1>
      <div className="w-full flex justify-start mb-4 px-4">
        <select
          onClick={(e: any) => setType(e.target.value)}
          name="userType"
          className="w-full lg:w-[25%] h-[53px] rounded-md bg-white border text-xl"
        >
          <option value="Seller" selected={type === "Seller" ? true : false}>
            Seller
          </option>
          <option value="User" selected={type === "User" ? true : false}>
            User
          </option>
          <option
            value="verifiedSeller"
            selected={type === "verifiedSeller" ? true : false}
          >
            Verified
          </option>
        </select>
      </div>
      <div className="w-full grid lg:grid-cols-2 gap-4 lg:px-3">
        {/* Single card starts from here */}
        {allUsers?.map((user: any, i: any) => (
          <div
            key={i}
            className="border flex justify-between items-center gap-2 p-5 text-start "
          >
            <img
              src={user?.image}
              alt=""
              className="w-[90px] h-[90px] rounded-full bg-gray-400 "
            />
            <div className="flex flex-col justify-between h-full">
              <h1 className="text-start text-2xl">
                {user?.name ? user?.name : "Name Not Found"}
              </h1>
              <h1 className="">
                Email: {user?.email} <br /> Address: {user?.address}
              </h1>
            </div>
            {type === "Seller" ? (
              <div className="flex flex-col justify-between items-center h-full">
                <label
                  onClick={() => {
                    getSingleUser(user?._id);
                    setOpenModal(true);
                  }}
                  // id="verify"
                  htmlFor="verify"
                  className="bg-yellow-500 h-[30px] px-3 rounded-md cursor-pointer"
                >
                  Verify
                </label>
                <button
                  className="bg-red-500 h-[30px] px-3 rounded-md"
                  onClick={() =>
                    handleUserDelete(user?._id, user?.name, user?.userId)
                  }
                >
                  Delete
                </button>
                {/* {isDeleting ? "Deleting..." : "Delete User"} */}
              </div>
            ) : (
              <div className="flex justify-between items-center h-full">
                <button
                  className="bg-red-500 h-[30px] px-3 rounded-md"
                  onClick={() =>
                    handleUserDelete(user?._id, user?.name, user?.userId)
                  }
                >
                  Delete
                </button>
                {/* {isDeleting ? "Deleting..." : "Delete User"} */}
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="verify" className="modal-toggle" />
      {openModal && (
        <div className="modal">
          <div className="modal-box relative bg-white text-black">
            <label
              htmlFor="verify"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ???
            </label>
            <form
              onSubmit={handleVerify}
              className="w-full mt-8 flex flex-col gap-2"
            >
              <div className="text-start">
                <p>Name</p>
                <input
                  type="text"
                  className="h-[35px] px-2 rounded-md input-bordered w-full bg-white border text-black"
                  defaultValue={singleUser?.name}
                  readOnly
                />
              </div>
              <div className="text-start">
                <p>Email</p>
                <input
                  type="text"
                  className="h-[35px] px-2 rounded-md input-bordered w-full bg-white border text-black"
                  defaultValue={singleUser?.email}
                  readOnly
                />
              </div>
              <div className="text-start">
                <p>Phone</p>
                <input
                  type="text"
                  className="h-[35px] px-2 rounded-md input-bordered w-full bg-white border text-black"
                  defaultValue={singleUser?.phone}
                  readOnly
                />
              </div>
              <div className="text-start">
                <p>Nationality</p>
                <input
                  type="text"
                  className="h-[35px] px-2 rounded-md input-bordered w-full bg-white border text-black"
                  defaultValue={singleUser?.nationality}
                  readOnly
                />
              </div>
              <div className="text-start">
                <p>NID No</p>
                <input
                  type="text"
                  className="h-[35px] px-2 rounded-md input-bordered w-full bg-white border text-black"
                  defaultValue={singleUser?.nid}
                  readOnly
                />
              </div>
              <div className="text-start">
                <p>Address</p>
                <input
                  type="text"
                  className="h-[35px] px-2 rounded-md input-bordered w-full bg-white border text-black"
                  defaultValue={singleUser?.address}
                  readOnly
                />
              </div>
              <button
                type="submit"
                // onClick={() => setOpenModal(false)}
                className="bg-blue-400 p-2 rounded"
              >
                Verify
              </button>
            </form>
          </div>
        </div>
      )}

      {/* pagination by jabes */}
      <div className="w-full flex h-[30px] mt-8 text-center items-center justify-center">
        <ul className="flex gap-2">
          <li
            className={`bg-gray-400 px-2 rounded cursor-pointer ${
              page === 0 ? "hidden" : "block"
            }`}
            onClick={() => setPage(page - 1)}
          >
            Prev
          </li>
          {[...Array(length)].map((order: any, i: any) => (
            <li
              className={`${
                page === i ? "bg-red-400" : "bg-gray-400"
              } px-2 rounded cursor-pointer`}
              onClick={() => handlePage(i)}
            >
              {i + 1}
            </li>
          ))}
          <li
            className={`bg-gray-400 px-2 rounded cursor-pointer ${
              length === page + 1 ? "hidden" : "block"
            }`}
            onClick={() => setPage(page + 1)}
          >
            Next
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AllUsers1;
