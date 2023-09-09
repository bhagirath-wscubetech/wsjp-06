import React, { useContext } from 'react';
import { CartContext } from './Context/CartContextHolder';
const Filter = ({ clearFilter, activeCat, setActiveCat, range, setApply, setRating, rating }) => {
    const { categories } = useContext(CartContext);
    function toTitleCase(str) {
        // Split the string into words
        let words = str.toLowerCase().split(' ');

        // Capitalize the first letter of each word
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }

        // Join the words back together into a single string
        return words.join(' ');
    }

    return (
        <div className='col-3 p-3'>
            <h1 className='text-center my-2'>Filters</h1>
            <div className='shadow p-3'>
                <ul className='list-unstyled'>
                    <li className={`${activeCat == null ? 'text-primary' : ''}`} style={{ cursor: "pointer" }} onClick={() => setActiveCat(null)}>All</li>
                    {
                        categories.map(
                            (cat, index) => {
                                return <li onClick={() => setActiveCat(cat)}
                                    className={`${cat == activeCat ? 'text-primary' : ''}`}
                                    key={index} style={{ cursor: "pointer" }}>
                                    {toTitleCase(cat)}
                                </li>
                            }
                        )
                    }
                </ul>
                <hr />
                From
                <input type="number"
                    onChange={(e) => range.setFrom(e.target.value)} value={range.from} className='form-control' />
                To
                <input type="number"
                    onChange={(e) => range.setTo(e.target.value)}
                    value={range.to} className='form-control' min={range.from + 1} />
                <hr />
                <ul className='list-unstyled'>
                    <li onClick={() => setRating(4)} style={
                        {
                            cursor: "pointer",
                            color: rating == 4 ? 'blue' : ''
                        }
                    }>4 and above ⭐</li>
                    <li onClick={() => setRating(3)} style={
                        {
                            cursor: "pointer",
                            color: rating == 3 ? 'blue' : ''
                        }
                    }>3 and above ⭐</li>
                    <li onClick={() => setRating(2)} style={
                        {
                            cursor: "pointer",
                            color: rating == 2 ? 'blue' : ''
                        }
                    }>2 and above ⭐</li>
                </ul>
                <hr />
                <button onClick={() => setApply(true)} className='btn btn-primary me-2'>Apply</button>
                <button onClick={clearFilter} className='btn btn-warning me-2'>Clear</button>
            </div>
        </div>
    );
}

export default Filter;
