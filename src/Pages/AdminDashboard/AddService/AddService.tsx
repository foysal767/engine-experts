import toast from "react-hot-toast";

const AddService = () => {
  const addService = (event: any) => {
    event.preventDefault();
    const name = event.target.name.value;
    const price = event.target.price.value;
    const details = event.target.details.value;

    const product = {
      name,
      price,
      details,
      reviews: [],
    };

    fetch("http://localhost:5000/addservice", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("successfully added service");
        }
      });
  };
  return (
    <section className="flex-1 border px-4">
      <form onSubmit={addService} className="grid lg:grid-cols-2 gap-4">
        <div className="w-full flex flex-col gap-4">
          <input
            className="bg-white px-3 rounded-sm text-black text-xl py-2"
            type="text"
            name="name"
          />
          <input
            className="bg-white px-3 rounded-sm text-black text-xl py-2"
            type="text"
            name="price"
          />
          <input
            className="bg-white rounded text-black text-xl py-2 w-full border"
            type="file"
            name="image"
            id="image"
          />
          <button className="w-full py-2 text-2xl bg-blue-500 rounded">
            Add Service
          </button>
        </div>
        <div>
          <textarea
            className="w-full h-full bg-white text-black text-xl p-2"
            name="details"
            cols={30}
            rows={10}
          ></textarea>
        </div>
      </form>
    </section>
  );
};

export default AddService;
