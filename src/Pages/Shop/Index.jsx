import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Shop.scss';

function importAllImages(r) {
    return r.keys().map((filename) => ({
        filename: filename.replace(/^.*[\\/]/, ''),
        image: r(filename).default,
    }));
}

let images = importAllImages(
    require.context("../../../public/products", false, /\.(png|jpe?g|svg)$/)
);

function Index() {
    const [isClient, setIsClient] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        setIsClient(true);
        const imageLoadPromises = images.map(
            ({ image }) =>
                new Promise((resolve) => {
                    const img = new Image();
                    img.src = image;
                    img.onload = resolve;
                    img.onerror = resolve;
                })
        );

        Promise.all(imageLoadPromises).then(() => setLoading(false));
    }, []);

    const handleBuyItemClick = (filename) => {
        navigate(`/${filename}`);
    };

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className="w-[80%] flex flex-col justify-center items-center">
                <h1 className="mt-40 text-[20px] md:text-[35px]">Filomena's Flowers <b className="font-medium">Online Shop</b></h1>
                <div className="hr-shop"></div>
                {loading ? (
                    <div className="loading-spinner"></div>
                ) : (
                    <div className="w-full grid grid-cols-12 md:gap-5 lg:gap-20 mt-10">
                        {images.map(({ filename, image }, index) => (
                            <div className="col-span-12 md:col-span-4 mt-10 md:mt-0 lg:col-span-3 flex flex-col shop-items-containers" key={index}>
                                <img src={`/products/${filename}`} className="w-full" alt="Product" />
                                <button className="shop-buttons" onClick={() => handleBuyItemClick(filename)}>Order Now</button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Index;
