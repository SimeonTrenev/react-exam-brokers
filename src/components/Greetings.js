import './Greetings.css'

function Greetings(props) {
    
return(
    <div className='greetings'>
        <span>Welcome, {props.email}!</span>
    </div>
)
}

export default Greetings;