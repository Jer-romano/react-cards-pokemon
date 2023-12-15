import React, {useState} from "react";

const useFlip = (initial = true) => {
    const [state, setState] = useState(initial);

    const toggleState = () => {
        setState(s => !s);
    };

    return [state, toggleState];
};
export default useFlip;