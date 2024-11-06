import React, { useState, useEffect } from 'react';

function Navigation() {
    const [navOpacity, setNavOpacity] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // Calculate opacity based on scroll position (0 to 1)
            const opacity = Math.min(window.scrollY / 200, 1); // Adjust '200' for how quickly you want opacity to change
            setNavOpacity(opacity);
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className="w-full grid grid-cols-12 p-2 px-5 lg:px-20 fixed top-0">
            
            <div className="col-span-8 flex items-center">
                <a href="/"><img src="/images/layout/logo-red.png" className="w-[60px]" alt="" /></a>
                <h2 className="text-[20px] font-semibold text-black">Filomena's Flowers</h2>
            </div>
            <div className="col-span-4 flex justify-end w-full h-full items-center">
                <a href="/shop">
                    <img className="w-[30px] h-[30px]" src="/images/layout/shopping-bag.png" alt="" />
                </a>
            </div>
        </nav>
    );
}

export default Navigation;
