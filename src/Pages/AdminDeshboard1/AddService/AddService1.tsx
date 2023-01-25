const AddService1 = () => {
  return (
    <section className="w-full lg:w-[80%] md:w-[80%] mx-auto px-4 md:px-8 lg:px-12 bg-[#EBF2F4] pb-10">
      <h1 className="text-2xl font-serif text-start mb-6">
        Add Your Desired service
      </h1>
      <form className="flex flex-col">
        <div className="w-full flex gap-4">
          <input
            className="border bg-white text-xl"
            type="text"
            name="name"
            placeholder="Service Name"
          />
          <input
            className="border bg-white text-xl"
            type="text"
            name="price"
            placeholder="Service Price"
          />
        </div>
        <div className="w-full">
          <textarea
            className="bg-white text-xl"
            name="details"
            cols={30}
            rows={4}
            placeholder="Service details drop here"
            draggable="false"
          ></textarea>
        </div>
        <div className="w-full flex items-center justify-center gap-4 p-0">
          <input
            className="border bg-white text-xl"
            type="text"
            name="image"
            placeholder="Service Image URL"
          />
          <button className="lg:w-[200px] md:w-[200px] h-[53px] my-0 py-0 border bg-red-500" type="submit">Add Service</button>
        </div>
      </form>
    </section>
  );
};

export default AddService1;
