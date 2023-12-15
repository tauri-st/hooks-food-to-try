import React, {useState} from "react";

//C. Accept food as a prop from App.js and use it in the JSX
const Food = ({name}) => {

    const [tried, setTried] = useState(false);

    const strikethroughTried = () => {
        setTried(!tried);
    };

    return (
        <li className={tried ? "strike" : ""} onClick={strikethroughTried}>{name}</li>
    )
};

export default Food;