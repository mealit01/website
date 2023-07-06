import React from 'react'
import Navbar from '../components/NavLinks'
import { Link } from 'react-router-dom'
import Img404 from '../assets/images/404.png'
function NotFound() {
    React.useEffect(() => {
        //scroll to top
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className="not-found">
            <Navbar />
            <div className="not-found__content">
                <img src={Img404} alt="404" />
                <h1>This Page Contains Nothing but Scraps :'( </h1>
                <p>Go back to the home page and try again</p>
                <Link to="/" className="btn btn-dark">Go Home</Link>
            </div>
        </div>
    )
}

export default NotFound