import { useEffect, useState } from "react";

const useAdmin = (data: any) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  useEffect(() => {
    if (data) {
      console.log("inside hook", data);
      fetch(`http://localhost:5000/admin?email=${data}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setIsAdmin(true);
            setIsAdminLoading(false);
          } else {
            setIsAdmin(false);
            setIsAdminLoading(false);
          }
        });
    }
  }, [data]);
  return [isAdmin, isAdminLoading];
};
export default useAdmin;
