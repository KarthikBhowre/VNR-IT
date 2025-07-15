import react from "react";

function Footers() {
    return (
        <footer>
            <div className="footcontainer">
                <div className="footlogo">
                    <img src="https://learning.vnritsolutions.com/_next/image?url=%2Fvnr_logo_dark.png&w=640&q=75" alt="logobottom" />
                </div>
                <div className="subletter">
                    <h1>Subscribe Newsletter</h1>
                    <div className="subform">
                        <input type="email" placeholder="Email" />
                        <button type="submit"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-right" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="5" y1="12" x2="19" y2="12"></line><line x1="13" y1="18" x2="19" y2="12"></line><line x1="13" y1="6" x2="19" y2="12"></line></svg></button>
                    </div>
                    <div className="socialmedia">
                        <a href="www.facebook.com">Facebook</a>
                        <a href="www.instagram.com">Instagram</a>
                        <a href="www.youtube.com">Youtube</a>
                    </div>
                </div>
                <div className="navigation">
                    <h1>Navigation</h1>
                    <div className="navitems">
                        <a href="">Home</a>
                        <a href="">Contact Us</a>
                        <a href="">Portfolio</a>
                        <a href="">Training & Learning</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footers;