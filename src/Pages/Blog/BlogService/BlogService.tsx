import { Link } from "react-router-dom"
import blogs from "../blog.json"
import "./BlogService.css"
const BlogService = () => {
  return (
    <div className="background sideBar basis-3/12 p-4 rounded-lg">
      <h1 className="text-2xl text-center text-white font-bold mb-4">
        Popular Servicing
      </h1>

      {blogs.map((blog: any) => (
        <Link to={`/blog/${blog.id}`} key={blog?.id}>
          <div className="animated flex flex-col md:flex-row lg:flex-row gap-2 justify-center items-center mb-10 p-2 cursor-pointer rounded-lg hover:border-2 hover:border-red-200 text-white hover:font-bold">
            <h1 className="w-full md:w-8/12">{blog?.name}</h1>
            <img
              src={blog?.img}
              className="w-full md:w-4/12 my-2 rounded-lg"
              alt=""
            />
          </div>
        </Link>
      ))}
    </div>
  )
}

export default BlogService
