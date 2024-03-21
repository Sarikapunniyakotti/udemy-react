import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
function Navbar()
{
    return(
    <div>
        <div class="navbar">

<div class="navbar__s1">
    <h1 class="navbar__s1__title">Udemy</h1>
</div>
<div class="navbar__s2">
    <FontAwesomeIcon icon={faMagnifyingGlass}  style={{color: "#383b43"}} /> 
    <input placeholder="Search for anything here Tech, Business, Arts..."></input>
</div>
<div class="navbar__s3">
    <p>Courses </p>
    <div class="mylearning">
        <p>My Learning</p>
        <div class="mylearning__popup">
            <p>You did not purchased anything yet!</p>
        </div>
    </div>
    <FontAwesomeIcon icon={faShoppingCart} /> 
    <FontAwesomeIcon icon={faBell} /> 
    <FontAwesomeIcon icon={faUser} /> 
    
</div>
<div class="navbar__s4">
    <FontAwesomeIcon icon={faBars}/>
</div>

</div>
    </div>
    )
}

export default Navbar