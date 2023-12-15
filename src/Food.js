import React, {useState} from "react";

//C. Accept food as a prop from App.js and use it in the JSX
const Food = ({name}) => {

    const [tried, setTried] = useState(false);

    return <li>{name}</li>
    
};

export default Food;