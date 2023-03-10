import { useEffect, useState } from "react";

const useAdmin = (data: any) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  useEffect(() => {
    setIsAdmin(false);
    if (data) {
      fetch(`https://engine-experts-server-phi.vercel.app/admin?email=${data}`)
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
