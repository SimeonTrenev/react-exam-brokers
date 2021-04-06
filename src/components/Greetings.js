import './Greetings.css'

function Greetings(props) {
    console.log(props)
return(
    <div className='greetings'>
        <span>Welcome, {} !</span>
    </div>
)
}

export default Greetings;