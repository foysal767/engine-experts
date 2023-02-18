const WeeklyBlog = () => {
  return (
    <section className="my-16 px-10">
      <span className="text-6xl text-gray-800 font-bold">
        1,000 Horsepower LB7 Duramax Engine
      </span>
      <p className="text-xl text-gray-600 mt-2">
        Like many before him, Bryan Woitas got bit by the diesel bug after
        experimenting with some mild power-adders on his daily driver. Years
        later, he has a 1,000-horsepower LB7 Duramax to show off!
      </p>
      <div className="flex flex-col md:flex-row lg:flex-row mt-16">
        <div className="leftWeeklyBlog text-2xl text-black font-bold basis-8/12">
          <div className="weeklyCounter">
            <div>
              <h1 className="text-2xl text-gray-700 font-bold text-left">
                Diesel of the week
              </h1>
              <hr className="text-2xl border-red-400 border-b-2" />
              <img
                className="w-full"
                src="assets/image-gallery/Engine-Service-&-Repair.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="rightWeeklyBlog text-2xl text-gray-700 font-bold basis-4/12">
          Diesel of the month
        </div>
      </div>
    </section>
  )
}

export default WeeklyBlog
