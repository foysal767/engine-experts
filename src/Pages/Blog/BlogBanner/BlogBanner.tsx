const BlogBanner = () => {
  return (
    <section className="bg-black bg-[url('/public/assets/image-gallery/carbon_BG-20.png')] h-6/12">
      <div className="bannerWrapper flex flex-col md:flex-row lg:flex-row p-16 gap-8">
        <div className="leftBanner basis-6/12">
          <div className="text-4xl font-extrabold">Engine Expertise Blog</div>
        </div>
        <div className="leftBanner basis-6/12">
          <img src="assets/blog/bannarBlog6.png" alt="" />
        </div>
      </div>
    </section>
  )
}

export default BlogBanner
