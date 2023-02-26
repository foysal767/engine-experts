import { Outlet } from "react-router-dom"
import BlogService from "./BlogService/BlogService"
import LatestBlog from "./LatestBlog/LatestBlog"
import WeeklyBlog from "./WeeklyBlog/WeeklyBlog"
const Blog = () => {
  return (
    <main>
      <section className="lg:flex w-full md:px-16 mt-8 gap-4">
        <BlogService></BlogService>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </section>
      <LatestBlog></LatestBlog>
      <WeeklyBlog></WeeklyBlog>
    </main>
  )
}

export default Blog
