import React from 'react';

const Display = (props) => {
    return (
        <div className='mt-4 col-6'>
            <h4 className='text-center my-3'>{props.heading}</h4>
            <ul className='list-box'>
                {
                    props.data.map(
                        (item, index) => {
                            return <li className='position-relative' key={index}>
                                {item}
                                <span onClick={() => props.removeHandler(index)} className='close-btn'>X</span>
                            </li>
                        }
                    )
                }
            </ul>
        </div>
    );
}

export default Display;
