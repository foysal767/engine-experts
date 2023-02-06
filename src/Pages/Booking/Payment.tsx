import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"
import { useParams } from "react-router"
import { AuthContext } from "../../Context/AuthProvider/AuthProvider"
import CheckOutForm from "./CheckOutForm"
import "./Payment.css"

const stripeKey = process.env.REACT_APP_STRIPE_PK
// console.log(stripeKey);

const stripePromise = loadStripe(`${stripeKey}` as string)
console.log("stripe", stripePromise)

const Payment = () => {
  const { user } = useContext(AuthContext)
  const { id } = useParams()

  const { data: servicePayment = {} } = useQuery({
    queryKey: ["servicePayment"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/servicePayment/${id}`)
      const data = await res.json()
      return data.data
    },
  })

  const { data: services = [], isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/services")
      const data = await res.json()
      return data.data
    },
  })
  if (isLoading) {
    return (
      <div className="grid place-items-center w-full h-screen">
        <span className="loader"></span>
      </div>
    )
  }
  return (
    <div className="my-20">
      <div className=" marquee">
        <h1 className="text-2xl text-black font-bold">
          Payment for {servicePayment.serviceName} & Price:{" "}
          {servicePayment?.price}
        </h1>
      </div>
      <div className="w-96 mx-auto my-6 border p-7 ">
        <Elements stripe={stripePromise}>
          <CheckOutForm servicePayment={servicePayment}></CheckOutForm>
        </Elements>
      </div>
    </div>
  )
}

export default Payment
