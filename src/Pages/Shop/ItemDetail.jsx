import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import emailjs from "@emailjs/browser";
import './Shop.scss';

function ItemDetail() {
    const { filename } = useParams();
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate inputs are filled in
        const name = form.current['name'].value.trim();
        const email = form.current['email'].value.trim();
        const address = form.current['address'].value.trim();

        if (!name || !email || !address) {
            alert("Please fill in all fields before submitting.");
            return;
        }

        // Send the email using EmailJS
        emailjs.sendForm('service_6unbmln', 'template_ljcyn68', form.current, '1inIfYSAlco8MYLPK')
            .then(() => {
                alert("Your purchase request has been sent!");
                window.location.reload();  // Refresh the page after submission
            })
            .catch((error) => {
                console.error("Error sending email:", error);
                alert("There was an error sending your request. Please try again later.");
            });
    };

    return (
        <div className="item-detail-container flex flex-col items-center justify-center">
            <div className="w-[80%] grid grid-cols-12 mt-40">
                <div className="col-span-12 lg:col-span-6">
                    <div className="image-section">
                        <img src={`/products/${filename}`} alt="Selected Product" className="w-[80%] item-image h-[500px]" />
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                    <div className="form-section mt-5">
                        <h2 className="text-[30px] font-medium">Purchase Item</h2>
                        <form ref={form} className="purchase-form" onSubmit={handleSubmit}>
                            <div>
                                <input type="text" id="name" placeholder="Name..." name="name" className="item-inputs" required />
                            </div>
                            <div>
                                <input type="email" id="email" placeholder="Email..." name="email" className="item-inputs" required />
                            </div>
                            <div>
                                <input type="text" id="address" placeholder="Phone Number..." name="address" className="item-inputs" required />
                            </div>
                            <button type="submit" className="shop-buttons mt-5">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
