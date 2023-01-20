import React from 'react';
import Lottie from "lottie-react";
import loading from "./loading.json";

const Loading = () => {
    return (
        <div>
            <Lottie className="" animationData={loading} />
        </div>
    );
};

export default Loading;