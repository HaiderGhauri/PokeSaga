import { useState } from "react";
import { FaGlobe, FaLocationDot, FaPhone } from "react-icons/fa6";
import { SiMinutemailer } from "react-icons/si";

export function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }))
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (!formData.name, !formData.email, !formData.message) {
            alert("Please fill all the field correctly")
            return
        };

        const submittedData = {
            name: formData.name,
            email: formData.email,
            message: formData.message,
        };

        console.log(submittedData);

        setFormData({ name: "", email: "", message: "" })
    };

    return (
        <section className="mx-auto max-w-[1300px] w-[95%] my-14 mt-28 sm:my-16 sm:mt-32 z-0 flex flex-col gap-8 text-amber-950">
            <h1 className="text-3xl mb-1.5 font-bold">Contact Us</h1>
            <hr className="text-stone-400" />

            <section className="flex flex-col sm:flex-row justify-between w-full rounded-xl overflow-hidden">
                <form
                    onSubmit={handleFormSubmit}
                    className="bg-amber-100 basis-[50%] px-8 py-6 flex flex-col gap-6">
                    <h2 className="text-2xl font-semibold block">Write Us</h2>
                    <div>
                        <label htmlFor="name" className="text-lg font-semibold block">
                            Full Name</label>
                        <input
                            className="border-b-1 border-b-gray-800 py-2 w-full outline-0"
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Full name"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="text-lg font-semibold block">
                            Email</label>
                        <input
                            className="border-b-1 border-b-gray-800 py-2 w-full outline-0"
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="example@gmail.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="text-lg font-semibold block">
                            Messgae</label>
                        <textarea
                            className="border-b-1 border-b-gray-800 pr-8 py-2 outline-0 w-full h-25"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            id="message"
                        ></textarea>
                    </div>

                    <button className="font-bold bg-amber-950 text-red-50 px-4 py-2 cursor-pointer rounded-md">
                        Submit
                    </button>
                </form>

                <section className="basis-[50%] bg-stone-300 px-8 py-6 flex flex-col gap-8">
                    <div>
                        <h2 className="text-2xl font-semibold block">Contact Information</h2>
                        <p className="text-lg font-semibold">We're open for any suggestion or just to have a chat.</p>
                    </div>

                    <div className="flex flex-row gap-2.5">
                        <i className="p-2 rounded-[50%] bg-stone-200 shadow-[0_0_8px_rgba(0,0,0,0.3)]"><FaLocationDot /></i>
                        <p className="font-semibold mt-0.5">Gulshan Karachi, Pakistan</p>
                    </div>

                    <div className="flex flex-row gap-2.5 ">
                        <i className="p-2 rounded-[50%] bg-stone-200 shadow-[0_0_8px_rgba(0,0,0,0.3)]"><FaPhone /></i>
                        <p className="font-semibold mt-0.5">0123-4567890</p>
                    </div>

                    <div className="flex flex-row gap-2.5 ">
                        <i className="p-2 rounded-[50%] bg-stone-200 shadow-[0_0_8px_rgba(0,0,0,0.3)]"><SiMinutemailer /></i>
                        <p className="font-semibold mt-0.5">exaplme@gmail.com</p>
                    </div>

                    <div className="flex flex-row gap-2.5">
                        <i className="p-2 rounded-[50%] bg-stone-200 shadow-[0_0_8px_rgba(0,0,0,0.3)]"><FaGlobe /></i>
                        <p className="font-semibold mt-0.5">PokéSaga</p>
                    </div>
                </section>
            </section>
        </section>
    )
};