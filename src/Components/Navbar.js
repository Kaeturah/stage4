import '../Components/Navbar.css'

function Navbar(){
    return(
        <div className="Navbar">
            <nav>
            <div class="logo">
                <img src="./Images/Navlogo.png" alt=""/>
            </div>
            <div class="options">
                <ul>
                    <li>Destinations</li>
                    <li>Hotels</li>
                    <li>Flights</li>
                    <li>Bookings</li>
                </ul>
            </div>
            <div class="signup">
                <ul>
                    <li>Login</li>
                    <li><button type="submit">Sign Up</button></li>
                </ul>
            </div>
        </nav>
        </div>
    )
}

export default Navbar;