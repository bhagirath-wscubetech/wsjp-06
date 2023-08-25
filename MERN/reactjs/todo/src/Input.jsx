import React, { useRef } from 'react';

const Input = (props) => {
    const inpRef = useRef();

    function clickHandler() {
        const data = inpRef.current.value;
        inpRef.current.value = "";
        inpRef.current.focus();
        props.itemHandler(data);
    }

    return (
        <div className='row mt-3'>
            <div className="col-11">
                <input type="text" className='form-control' ref={inpRef} />
            </div>
            <div className="col-1">
                <button className='btn btn-primary' onClick={clickHandler}>Add</button>
            </div>
        </div>
    );
}

export default Input;
