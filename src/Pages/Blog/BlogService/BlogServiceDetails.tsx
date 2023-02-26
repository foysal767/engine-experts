import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import blogs from "../blog.json"
type blog = {
  id: string
  name: string
  img: string
  description: string
}
const BlogServiceDetails = () => {
  const { id } = useParams()
  const [blog, setBlog] = useState<blog>()

  const findBlog = (id: any) => {
    setBlog(blogs.find(blog => blog.id === id))
  }

  useEffect(() => {
    findBlog(id)
  }, [id])

  return (
    <div className="mb-10 flex flex-col text-gray-600 w-full">
      <h1 className="text-2xl text-center font-bold ">{blog?.name}</h1>

      <img src={blog?.img} className="w-full my-4 lg:w-1/2 mx-auto" alt="" />
      <p className="text-xl md:text-justify mt-2 md:px-10">
        {blog?.description}
      </p>
      <div className="mt-2"></div>
    </div>
  )
}

export default BlogServiceDetails
