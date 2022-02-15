// render the User component 3 times in FixIt1
// have to pass data (props)

const FixIt1 = () => {
    return (
        <div>
            <User name="benjamin" />
            <User name="cristiano" >
            <User name="VI" >
        </div>
    )
}

const User = () => {
    return <h2>hello {props.name}</h2>
}

export default FixIt1
