import React from "react";
import ContactForm from "./ContactForm";
import Heading from "../Heading";
import SubHeading from "../SubHeading";

const Contacts = () => {
    // contact info handler
    const info = (heading, icon, text) => {
        return (
            <div className="max-w-[55%] mt-6">
                <h2 className="text-teal-300">{heading}</h2>
                <p>{text}</p>
            </div>
        );
    };

    return (
        <div id="contact" className="mt-40">
            <section className="max-w-[80%] mx-auto" id="contacts">
                <div className="lmd:flex lmd:justify-between">
                    <div className="lmd:max-w-[60%]">
                        <div data-aos="fade-right">
                            <SubHeading title={"GET IN TOUCH WITH ME"} />
                            <Heading heading="Contact" />
                        </div>

                        <div className="text-[0.8rem] text-white-200 ">
                            <p
                                data-aos="fade-left"
                                className="mt-6 max-w-[70%]"
                            >
                                I am available for freelance work. Connect with me.
                            </p>
                            <div
                                data-aos="zoom-in-up"
                                className="mt-6 block items-center justify-between"
                            >
                                {info(
                                    "Address",
                                    "Location Icon",
                                    "Nigeria"
                                )}
                                {info(
                                    "Email",
                                    "Email Icon",
                                    `sulaymantaofiq@gmail.com`
                                )}
                            </div>
                        </div>
                    </div>
                    {/* /contact form */}
                    <ContactForm />
                </div>
            </section>
        </div>
    );
};

export default Contacts;
