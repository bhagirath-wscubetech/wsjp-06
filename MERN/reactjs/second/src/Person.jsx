function Person(props) {
    return (
        <div className="person-box" style={
            {
                background: props.age >= 18 ? 'lightblue' : '',
                color: props.gender == "F" ? 'red' : ''
            }
        }>
            <h1>Name:{props.name}</h1>
            <h1>Age:{props.age}</h1>
            <h1>Gender:{props.gender}</h1>
        </div>
    )
}

export default Person;