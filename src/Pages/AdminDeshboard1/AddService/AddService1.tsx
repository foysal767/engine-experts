import { useContext } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const AddService1 = () => {
  const { isAdmin } = useContext(AuthContext);
  const navigate = useNavigate();
  if (!isAdmin) {
    navigate("/");
  }

  const addService = (e: any) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const details = e.target.details.value;
    const image = e.target.image.value;
    const addingService = {
      name,
      price,
      details,
      image,
      reviews: [],
      Totalreviews: 0,
    };
    fetch("https://engine-experts-server-phi.vercel.app/addservice", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addingService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Successfully Added Service!");
          e.target.reset();
        }
      });
  };
  return (
    <section className="w-full lg:w-[80%] md:w-[80%] mx-auto px-4 md:px-8 lg:px-12 bg-[#EBF2F4] pb-10">
      <h1 className="text-2xl font-serif text-start mb-6">
        Add Your Desired service
      </h1>
      <form className="flex flex-col gap-4 w-full" onSubmit={addService}>
        <div className="w-full grid lg:grid-cols-2 gap-4">
          <input
            className="border bg-white text-xl w-full h-[53px] rounded px-2"
            type="text"
            name="name"
            placeholder="Service Name"
          />
          <input
            className="border bg-white text-xl w-full h-[53px] rounded px-2"
            type="text"
            name="price"
            placeholder="Service Price"
          />
        </div>
        <div className="w-full">
          <textarea
            className="bg-white text-xl w-full rounded px-2"
            name="details"
            cols={30}
            rows={4}
            placeholder="Service details drop here"
            draggable="false"
          ></textarea>
        </div>
        <div className="w-full flex items-center justify-center gap-4 p-0">
          <input
            className="border bg-white text-xl w-full lg:w-[70%] h-[53px] rounded px-2"
            type="text"
            name="image"
            placeholder="Service Image URL"
          />
          <button
            className="lg:w-[30%] md:w-[200px] h-[53px] my-0 py-0 border rounded bg-red-500"
            type="submit"
          >
            Add Service
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddService1;
