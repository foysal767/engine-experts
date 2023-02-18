import BlogBanner from "./BlogBanner/BlogBanner"
import BlogService from "./BlogService/BlogService"
import LatestBlog from "./LatestBlog/LatestBlog"
const Blog = () => {
  return (
    <main>
      <BlogBanner></BlogBanner>
      <BlogService></BlogService>
      <LatestBlog></LatestBlog>
    </main>
  )
}

export default Blog
