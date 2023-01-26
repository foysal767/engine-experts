const AddService1 = () => {
  return (
    <section className="w-full lg:w-[80%] md:w-[80%] mx-auto px-4 md:px-8 lg:px-12 bg-[#EBF2F4] pb-10">
      <h1 className="text-2xl font-serif text-start mb-6">
        Add Your Desired service
      </h1>
      <form className="flex flex-col gap-4 w-full">
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
