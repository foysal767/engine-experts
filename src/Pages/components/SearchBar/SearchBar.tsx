import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './SearchBar.css';


const SearchBar = () => {
    const [filteredData, setFilteredData] = useState([]);
    // const [wordEntered, setWordEntered] = useState("");
    // const [searchResult, setSearchResult] = useState();

    const { data: services = [] } = useQuery({
        queryKey: ["services"],
        queryFn: async () => {
            const res = await fetch(
                "https://engine-experts-server-phi.vercel.app/services"
            );
            const data = await res.json();
            return data.data;
        },
    });

    const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchWord = event.target.value;
        const newFilter = services.filter((value: any) => {
            return value.name.includes(searchWord);
        });
        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };


    return (
        <div className="flex-col  ">
            <div className="form-control w-full">
                <input type="search" placeholder="Search" onChange={handleFilter} className="input input-ghost w-full " />

                {
                    filteredData.length !== 0 && (

                        <div className="dataResult ">
                            {
                                filteredData.map((value: any, i: any) => {
                                    return <Link className='searchItem' to={`/servicedetails/${value?.name}`} key={i}>{value?.name}</Link>

                                })
                            }
                        </div>
                    )

                }

            </div>

        </div>

    );
};

export default SearchBar;