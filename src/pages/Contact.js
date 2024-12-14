import React, { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
import { useDocTitle } from "../components/CustomHook";
import Notiflix from "notiflix";
import SocialLinks from "../components/SocialLinks/SocialLinks";

const Contact = () => {
  useDocTitle("sale Compass - Send us a message");
  const [isLoading, setIsLoading] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState([]);
  const form = useRef();

  const clearErrors = () => {
    setErrors([]);
  };

  const clearInput = () => {
    setFirstName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_j5piclp",
        "template_kl7mbbf",
        form.current,
        "MDleq_EZ7vEa3sNer"
      )
      .then(
        (result) => {
          clearInput();
          console.log(result.text);
          Notiflix.Notify.success(
            "Email Recieved! We'll get back to you shortly."
          );
        },
        (error) => {
          clearInput();
          Notiflix.Notify.failure(
            "Error submitting form. Please try again later."
          );
          console.log(error.text);
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="flex items-center justify-center w-full py-12 mt-8 bg-white bg-gray-200 lg:py-24">
        <div
          className="container px-4 mx-auto my-8 lg:px-20"
          data-aos="zoom-in"
        >
          <form ref={form} onSubmit={sendEmail}>
            <div className="w-full p-8 my-4 mr-auto bg-white shadow-2xl md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 rounded-2xl">
              <div className="flex">
                <h1 className="text-4xl font-bold text-center text-blue-900 uppercase lg:text-left">
                  Send us a message
                </h1>
              </div>
              <div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-2">
                <div>
                  <input
                    name="from_name"
                    className="w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Name*"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    onKeyUp={clearErrors}
                  />
                  {errors && (
                    <p className="text-sm text-red-500">{errors.first_name}</p>
                  )}
                </div>

                <div>
                  <input
                    name="user_email"
                    className="w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"
                    type="email"
                    placeholder="Email*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyUp={clearErrors}
                  />
                  {errors && (
                    <p className="text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <input
                    name="phone_number"
                    className="w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"
                    type="number"
                    placeholder="Phone*"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onKeyUp={clearErrors}
                  />
                  {errors && (
                    <p className="text-sm text-red-500">
                      {errors.phone_number}
                    </p>
                  )}
                </div>
              </div>
              <div className="my-4">
                <textarea
                  name="message"
                  placeholder="Message*"
                  className="w-full h-32 p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyUp={clearErrors}
                ></textarea>
                {errors && (
                  <p className="text-sm text-red-500">{errors.message}</p>
                )}
              </div>
              <div className="w-1/2 my-2 lg:w-2/4">
                <button
                  type="submit"
                  disabled={isLoading}
                  id="submitBtn"
                  className={`${isLoading ? "disabled" : ""
                    } uppercase text-sm font-bold tracking-wide bg-gray-500 ${!isLoading ? "hover:bg-blue-900" : ""
                    }  text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline`}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </div>
          </form>
          <div className="w-full px-8 py-6 ml-auto bg-blue-900 lg:-mt-96 lg:w-2/6 rounded-2xl">
            <div className="flex flex-col text-white">
              <div className="flex w-2/3 my-4 lg:w-3/4">
                <div className="flex flex-col">
                  <i className="pt-2 pr-2 fas fa-map-marker-alt" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl">Office Address</h2>
                  <p className="text-gray-400">Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E</p>
                </div>
              </div>

              <div className="flex w-2/3 my-4 lg:w-1/2">
                <div className="flex flex-col">
                  <i className="pt-2 pr-2 fas fa-phone-alt" />
                </div>

                <div className="flex flex-col">
                  <h2 className="text-2xl">Call Us</h2>
                  <p className="text-gray-400">Tel: +971 52 839 8397</p>

                  <div className="mt-5">
                    <h2 className="text-2xl">Send an E-mail</h2>
                    <p className="text-gray-400">
                      contact@salecompass.ae
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
