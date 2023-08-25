import { useState } from "react";

function Person(props) {
    const [toggle, setToggle] = useState(true);

    function changeToggle() {
        setToggle(!toggle);
    }

    return (
        <div className="person-box" style={
            {
                background: toggle == true ? 'lightblue' : ''
            }
        }>
            <h1>Name:{props.name}</h1>
            <h1>Age:{props.age}</h1>
            <h1>Gender:{props.gender}</h1>
            <button onClick={changeToggle}>
                {toggle == true ? "Hello" : "Hii"}
            </button>
        </div>
    )
}

export default Person;