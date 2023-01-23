import { useQuery } from "@tanstack/react-query";
import React from "react";

const AddCampaign = () => {
  const { data: campaign = [], isLoading } = useQuery({
    queryKey: ["campaign"],
    queryFn: async () => {
      const res = await fetch(
        "https://engine-experts-server-phi.vercel.app/services"
      );
      const data = await res.json();
      return data.data;
    },
  });
  return (
    <div className="flex-1 border">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {campaign?.map((service: any, i: any) => {
          return (
            <div className="rounded-xl bg-slate-400">
              <div>
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src={service?.image} alt="" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-3xl">{service?.name}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddCampaign;
