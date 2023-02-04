import { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";

type singleService = {
  name: string;
  price: number;
  details: string;
  image: string;
};
const AllService1 = () => {
  const { isAdmin } = useContext(AuthContext);
  const [serviceId, setServiceId] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [singleService, setSingleService] = useState<singleService>();
  const location = useLocation();
  if (!isAdmin) {
    <Navigate to="/" state={{ from: location }} replace></Navigate>;
  }
  const {
    data: services = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await fetch(
        "https://engine-experts-server-phi.vercel.app/services"
      );
      const data = await res.json();
      return data.data;
    },
  });

  const handleServiceEdit = (id: any) => {
    setServiceId(id);
    setOpenModal(true);
    fetch(`http://localhost:5000/singleService/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleService(data.data));
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleEditSubmit = (e: any) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const description = e.target.description.value;
    const image = e.target.image.value;
    const editService = {
      name: name,
      price: price,
      details: description,
      image: image,
    };
    fetch(`http://localhost:5000/editService/${serviceId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(editService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
          handleCloseModal();
          refetch();
        }
      });
  };

  const handleServiceDelete = (id: any, name: any) => {
    const confirm = window.confirm(
      `Are you sure, want to delete this ${name}?`
    );
    if (confirm) {
      fetch(`https://engine-experts-server-phi.vercel.app/services/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            toast.success(data.message);
            refetch();
          }
        });
    }
  };

  if (isLoading) {
    return (
      <div className="grid place-items-center w-full h-screen">
        <span className="loader"></span>
      </div>
    );
  }
  return (
    <section className="w-full lg:w-[80%] md:w-[80%] mx-auto px-4 md:px-8 lg:px-12 bg-[#EBF2F4] pb-10">
      <div className="w-full lg:flex justify-between lg:items-center mb-5 text-start">
        <h1 className="text-2xl font-serif text-start mb-6">
          Total Available Services: {services?.length}
        </h1>
        <Link to="/dashboard1/addservice1">
          <button className="w-[100px] h-[50px] rounded bg-blue-400">
            Add Service
          </button>
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        {services?.map((service: any, i: any) => (
          <div className="flex flex-col lg:flex-row gap-3 justify-between items-center px-4 py-3 text-xl bg-[#d9dee4] rounded border text-center">
            <h2>{i + 1}.</h2>
            <img
              className="w-[50px] hidden lg:block h-[50px] rounded-full bg-gray-300"
              src={service?.image}
              alt=""
            />
            <h2>{service?.name}</h2>
            <h2>{service?.price}</h2>
            <div className="flex gap-3">
              <label
                onClick={() => handleServiceEdit(service?._id)}
                htmlFor="edit-Service"
                className="btn bg-green-500 px-3 rounded-xl border-none text-black font-medium"
              >
                Edit
              </label>
              <button
                onClick={() => handleServiceDelete(service?._id, service?.name)}
                className="bg-red-500 px-3 rounded-xl"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit modal */}
      <input type="checkbox" id="edit-Service" className="modal-toggle" />
      {openModal && (
        <div className="modal">
          <div className="modal-box relative bg-white">
            <label
              htmlFor="edit-Service"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <form onSubmit={handleEditSubmit}>
              <label>
                <p className="text-left">Service Name</p>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Type your Service Name"
                className="input input-bordered w-full text-white"
                defaultValue={singleService?.name}
              />
              <label>
                <p className="text-left">Price</p>
              </label>
              <input
                name="price"
                type="text"
                placeholder="Type your Service Price"
                className="input input-bordered w-full text-white"
                defaultValue={singleService?.price}
              />
              <label>
                <p className="text-left">Description</p>
              </label>
              <input
                name="description"
                type="text"
                placeholder="Write your Service Details"
                className="input input-bordered w-full text-white"
                defaultValue={singleService?.details}
              />
              <label>
                <p className="text-left">Input Image URL</p>
              </label>
              <input
                name="image"
                type="text"
                placeholder="Put your Service Image URL"
                className="input input-bordered w-full text-white"
                defaultValue={singleService?.image}
              />
              <button
                className="btn bg-green-600 w-full text-white border-none mt-5"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default AllService1;
