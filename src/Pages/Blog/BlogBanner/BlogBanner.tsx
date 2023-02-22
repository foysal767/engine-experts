import "./BlogBanner.css"

const BlogBanner = () => {
  return (
    <section className="bg-black bg-[url('/public/assets/image-gallery/carbon_BG-20.png')] h-screen">
      <div className="bannerWrapper flex flex-col md:flex-row lg:flex-row p-16 gap-8">
        <div className="leftBanner basis-1/12"></div>
        <div className="middleBanner basis-10/12">
          <div className="mt-40">
            <h1 className="text-4xl font-extrabold mb-4">
              Welcome to Engine Expertise Blog
            </h1>
            <p className="text-xs text-center text-slate-300">
              These formidable engines, our six Best Engines evaluators believe,
              are — or, for repeat winners, remain — benchmark executions of
              engine design, innovation, manufacturing. They excel in a business
              that holds their "contribution" to the overall product in the
              highest regard and stand proud of the conventional For 2001’s
              installment, nothing about the Best Engines contest has changed.
              Each engine
            </p>
          </div>
        </div>
        <div className="rightBanner basis-1/12"></div>
      </div>
    </section>
  )
}

export default BlogBanner
