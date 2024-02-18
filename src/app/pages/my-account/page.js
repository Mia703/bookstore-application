import Navigation from "../../components/homeNavigation";
import Footer from "../../components/Footer"
import "./styles.css";
 
export default function Account () {
     return (
        <div id="account-page">
			<Navigation />
            <section className="account-section">
                <div className="container">
                    <h1>Welcome, (Name)</h1>                
                    <img src="https://i.pinimg.com/736x/59/cf/f9/59cff97550efef9af0940d1f9e33652a.jpg" alt="profile image" className="image"></img>
                    <p>From your account dashboard, you can edit your <a href="#profile-link">profile details</a> and <a href="#password-link">edit your password</a>.</p>
                    <p className="sign-out">Not (Name)? <a href="#sign-out-link">Sign out</a></p>
                </div>
            </section>
            <Footer />
		</div>
     );
}
