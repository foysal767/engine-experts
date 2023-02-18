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
              <div className="flex justify-center items-center gap-4">
                <img
                  className="w-28 h-28 rounded-full"
                  src="assets/users/users1.png"
                  alt=""
                />
                <p className="text-lg text-gray-500 font-semibold text-center lg:text-justify">
                  <span className="text-gray-700 font-bold">
                    Name: James Cameroon
                  </span>{" "}
                  <br />
                  Expansion valves are devices used to control the refrigerant
                  flow in a refrigeration system. They help to facilitate the
                  change of higher pressure
                </p>
              </div>
              <hr className="text-2xl border-red-400 border-b-2 mt-2" />
            </div>
          </div>
        </div>
        <div className="rightWeeklyBlog text-2xl text-gray-700 font-bold basis-4/12">
          Regular Blog
        </div>
      </div>
    </section>
  )
}

export default WeeklyBlog
