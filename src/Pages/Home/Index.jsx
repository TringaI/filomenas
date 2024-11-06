import React, { useEffect, useRef } from 'react';
import './Home.scss';

function Index() {
    const elementsToFadeIn = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        elementsToFadeIn.current.forEach((el) => observer.observe(el));

        return () => {
            elementsToFadeIn.current.forEach((el) => observer.unobserve(el));
        };
    }, []);

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="banner w-full h-[100vh] flex flex-col justify-center items-center fade-in" ref={(el) => elementsToFadeIn.current.push(el)}>
                <h1 className="text-white  text-[9vw] lg:text-[7vw] text-center">Filomena's <b className="color-pink">Flowers</b></h1>
                <p className="text-white text-[3.5vw] lg:text-[2.7vw]"><i>Your fairy tale destination</i></p>
            </div>







            <div className="w-[80%] grid grid-cols-12 mt-20 fade-in" ref={(el) => elementsToFadeIn.current.push(el)}>
                <div className="col-span-12 lg:col-span-6 flex flex-col justify-center items-center">
                    <img className="w-[100%] md:w-[80%] lg:w-[70%] home-image" src="/images/home/home.jpg" alt="" />
                </div>
                <div className="col-span-12 mt-10 lg:mt-0 lg:col-span-6 h-full flex flex-col justify-center items-center lg:items-start">
                    <div className="flex items-center">
                        <h2 className="font-semibold text-[23px]">What is Filomena's Flowers</h2>
                        <img src="/images/layout/tulips.png" className="w-[35px] h-[35px] ml-5" alt="" />
                    </div>
                    <hr className="w-[80%] mt-2 home-hr" />
                    <p className="mt-5 text-[18px] w-[100%] md:w-[80%] lg:w-[90%]">
                        Filomena's Flowers is a cozy flower shop located in the heart of Prizren, bringing
                        color and warmth to the community. Every flower arrangement in the shop is made by
                        Filomena, whose skillful and caring hands give life to each bouquet. Her dedication
                        and passion can be seen in the details of every arrangement, making each one feel unique and special.
                        <br className="mt-5" /> <br />
                        In addition to beautiful flowers, Filomena's shop also offers a variety of souvenirs
                        and paintings. These items include both historic and patriotic themes, adding a personal
                        touch to each piece. Every souvenir and painting is crafted by Ms. Filomena herself,
                        capturing her love for her heritage and community. Whether you're looking for a gift or
                        something to brighten your own home, Filomena's Flowers has something heartfelt to offer.
                    </p>
                </div>
            </div>
            <img className="w-[90%] md:w-[60%] opacity-20 mt-20 fade-in" src="/images/home/dec-1.png" alt="" ref={(el) => elementsToFadeIn.current.push(el)} />

            <div className="w-full flex flex-col justify-center items-center mt-20 fade-in" ref={(el) => elementsToFadeIn.current.push(el)}>
                <div className="w-[80%] md:w-[70%] lg:w-[50%] grid grid-cols-12 md:gap-10">
                    <div className="col-span-12 md:col-span-6 h-full flex flex-col justify-center">
                        <h1 className="font-medium text-[30px]">In the heart of <b className="color-pink">Prizren</b></h1>
                        <p className="text-[16px]">We are located right in the heart of the most beautiful city - Prizren.
                            Just next to the fountain of Shadervan you can find the best flower shop ever.</p>
                    </div>
                    <div className="col-span-12 md:col-span-6 mt-10 md:mt-0">
                        <img src="/images/home/location-2.png" className="" alt="" />
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center mt-20 gallery">
                <div className="w-[80%] md:w-[80%] lg:w-[60%]">
                    <h1 className="text-[40px]">Gallery</h1>
                    <hr className="mt-2 mb-2 home-hr" />
                    <div className="w-full grid grid-cols-12 md:gap-10">
                        <div className="col-span-12 md:col-span-4 lg:col-span-3  mt-5">
                            <img className="w-full h-full" src="/images/home/1.jpg" alt="" />
                        </div>
                        <div className="col-span-12 md:col-span-4 lg:col-span-3 mt-5">
                            <img className="w-full h-full home-images" src="/images/home/2.JPG" alt="" />
                        </div>
                        <div className="col-span-12 md:col-span-4 lg:col-span-3  mt-5">
                            <img className="w-full h-full home-images" src="/images/home/3.JPG" alt="" />
                        </div>
                        <div className="col-span-12 md:col-span-4 lg:col-span-3  mt-5">
                            <img className="w-full h-full home-images" src="/images/home/4.JPG" alt="" />
                        </div>
                        <div className="col-span-12 md:col-span-4 lg:col-span-3  mt-5">
                            <img className="w-full h-full home-images" src="/images/home/5.JPG" alt="" />
                        </div>
                        <div className="col-span-12 md:col-span-4 lg:col-span-3 mt-5">
                            <img className="w-full h-full home-images" src="/images/home/6.JPG" alt="" />
                        </div>
                        <div className="col-span-12 md:col-span-4 lg:col-span-3  mt-5">
                            <img className="w-full h-full home-images" src="/images/home/7.jpg" alt="" />
                        </div>
                        <div className="col-span-12 md:col-span-4 lg:col-span-3  mt-5">
                            <img className="w-full h-full home-images" src="/images/home/8.JPG" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
