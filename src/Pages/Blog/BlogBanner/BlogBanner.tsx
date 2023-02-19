const BlogBanner = () => {
  return (
    <section className="bg-black bg-[url('/public/assets/image-gallery/carbon_BG-20.png')] h-6/12">
      <div className="bannerWrapper flex flex-col md:flex-row lg:flex-row p-16 gap-8">
        <div className="leftBanner basis-6/12 justify-center items-center">
          <div className="text-4xl font-extrabold md:mt-32 lg:mt-60">
            Engine Expertise Blog
          </div>
        </div>
        <div className="leftBanner basis-6/12">
          <img src="assets/blog/bannarBlog6.png" alt="" />
        </div>
      </div>
    </section>
  )
}

export default BlogBanner
