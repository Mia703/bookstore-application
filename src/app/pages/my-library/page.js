import Footer from "../../components/Footer";
import Navigation from "../../components/mainNavigation";
import "./styles.css";
 
export default function Library () {
     return (
        <div id="library-page">
            <Navigation />
            <section className="library-section">
                <h1>My Library</h1>
                <div className="shelf-buttons">
                    <button>Read</button>
                    <button>Currently Reading</button>
                    <button>Want to Read</button>
                    <button>Discontinued</button>
                </div>
                <div className="book-shelf">
                    <div className="book-card">
                        <img src="book1-cover.jpg" alt="Book 1 Cover"></img>
                    </div>
                    <div className="book-card">
                        <img src="book2-cover.jpg" alt="Book 2 Cover"></img>
                    </div>
                    <div className="book-card">
                        <img src="book3-cover.jpg" alt="Book 3 Cover"></img>
                    </div>
                    <div className="book-card">
                        <img src="book4-cover.jpg" alt="Book 4 Cover"></img>
                    </div>
                    <div className="book-card">
                        <img src="book5-cover.jpg" alt="Book 5 Cover"></img>
                    </div>
                    <div className="book-card">
                        <img src="book6-cover.jpg" alt="Book 6 Cover"></img>
                    </div>
                    <div className="book-card">
                        <img src="book7-cover.jpg" alt="Book 7 Cover"></img>
                    </div>
                    <div className="book-card">
                        <img src="book8-cover.jpg" alt="Book 8 Cover"></img>
                    </div>
                    <div className="book-card">
                        <img src="book9-cover.jpg" alt="Book 9 Cover"></img>
                    </div>
                    <div className="book-card">
                        <img src="book10-cover.jpg" alt="Book 10 Cover"></img>
                    </div>
                    <div className="book-card">
                        <img src="book11-cover.jpg" alt="Book 11 Cover"></img>
                    </div>
                    <div className="book-card">
                        <img src="book12-cover.jpg" alt="Book 12 Cover"></img>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
     );
}
