import BlogService from "./BlogService/BlogService"
import LatestBlog from "./LatestBlog/LatestBlog"
import WeeklyBlog from "./WeeklyBlog/WeeklyBlog"
const Blog = () => {
  return (
    <main>
      <BlogService></BlogService>
      <LatestBlog></LatestBlog>
      <WeeklyBlog></WeeklyBlog>
    </main>
  )
}

export default Blog
