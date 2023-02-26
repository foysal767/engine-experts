import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const SellerOrder = () => {
  const { accType, user, logOut } = useContext(AuthContext);
  const location = useLocation();
  const [orders, setOrders] = useState([]);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  if (accType !== "Seller") {
    <Navigate to="/" state={{ from: location }} replace></Navigate>;
  }

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/sellerOrder?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          logOut(navigate);
        }
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setOrders(data?.data);
        }
      });
  }, [loader]);

  const handleCompleted = (id: any) => {
    fetch(`https://engine-experts-server-phi.vercel.app/sellerOrder/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.success) {
          toast.success(data?.message);
          setLoader(!loader);
        }
      });
  };

  return (
    <section className="w-full lg:w-[80%] md:w-[80%] mx-auto px-4 md:px-8 lg:px-12 bg-[#EBF2F4] py-16">
      <h1 className="text-2xl text-start mb-6">
        {orders?.length <= 0
          ? "Orders Not Available"
          : `Your Active orders ${orders?.length}`}
      </h1>
      <div className="w-full flex flex-col gap-4">
        {orders?.map((order: any, i: any) => (
          <div
            key={i}
            className="flex flex-col lg:flex-row gap-3 justify-between items-center px-4 py-3 text-xl bg-[#d9dee4] rounded border"
          >
            <h2>{i + 1}</h2>
            <h2>{order?.serviceName}</h2>
            <h2>{order?.userEmail}</h2>
            <h2>${order?.price}</h2>
            <Link to={`/dashboard1/orderdetails/${order?._id}`}>
              <button className="btn btn-sm border-none bg-green-600 rounded-xl text-white px-3">
                See Details
              </button>
            </Link>
            <button
              className="btn btn-sm border-none text-white bg-blue-500 px-3 rounded-xl"
              onClick={() => handleCompleted(order?._id)}
            >
              Complete
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SellerOrder;
