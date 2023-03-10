import { useEffect, useState } from "react";

const useAccType = (data: any) => {
  const [accType, setAccType] = useState("");
  const [isAccLoading, setIsAccLoading] = useState(true);
  useEffect(() => {
    setAccType("");
    if (data) {
      fetch(
        `https://engine-experts-server-phi.vercel.app/accType?email=${data}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setAccType(data?.data);
            setIsAccLoading(false);
          } else {
            setIsAccLoading(false);
          }
        });
    }
  }, [data]);

  return [accType, isAccLoading];
};
export default useAccType;
