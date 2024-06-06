import React from 'react';
import SolutionData from "./solutionscontent.json";

const Solutions = () => {
    
    return (
        <>
              <img
                src={SolutionData[0].solutionsMainBanner}
                width="100%"
                alt="Main Solution"
              ></img>
              <h1>Solutions Page</h1>
        </>
    );
}

export default Solutions;
