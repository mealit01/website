import React, { useState, useEffect } from 'react';
import NavLinks from './NavLinks';


function Navbar() {
    const [isMobile, setIsMobile] = useState(false);

    // Check screen size on mount and on resize
    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 1024);
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>
            <nav>
                {/* If screen size is not mobile, show nav links */}
                {!isMobile && <NavLinks className="desktop-nav" />}
                {isMobile && <NavLinks className="mobile-nav" />}
            </nav>
        </div>
    )
}

export default Navbar;
