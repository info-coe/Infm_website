import React, { useEffect, useState } from "react";
import contactImage from "./Images/contactus2.jpeg";

export default function Contactus() {
    const initialFormData = {
        name: "",
        email: "",
        phone: "",
        organization: "",
        message: "",
        captchaInput: "",
      };
    
      const [formData, setFormData] = useState(initialFormData);
      const [captcha, setCaptcha] = useState("");
      const [captchaError, setCaptchaError] = useState("");
      useEffect(() => {
        if (localStorage.getItem("firstLoadDone") === null) {
          localStorage.setItem("firstLoadDone", 1);
          generateCaptcha();
        } else {
          generateCaptcha();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.captchaInput !== captcha) {
          setCaptchaError("Invalid captcha");
        } else {
          setCaptchaError("");
          window.location.href = `mailto:info@infomericainc.com?subject=Contact&body=${encodeURIComponent(`
                Name: ${formData.name}
                Email: ${formData.email}
                Phone: ${formData.phone}
                Organization: ${formData.organization}
                Message: ${formData.message}
              `)}`;
          setFormData(initialFormData); // Clear the form fields
        }
      };
    
      const generateCaptcha = () => {
        const captchaElement = document.getElementById("image");
        let uniquechar = "";
        const randomchar =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 1; i < 7; i++) {
          uniquechar += randomchar.charAt(
            Math.floor(Math.random() * randomchar.length)
          );
        }
        captchaElement.innerHTML = uniquechar;
        setCaptcha(uniquechar);
      };

  return (
      <div className="contactusdiv mt-3">
        <h1 className="text-center"><span className="text-primary">Contact</span> <span style={{color:"#ff0000"}}> Us</span></h1>
        <p className="text-center mt-3">
          Please take a moment to get in touch, we will get back to you shortly.
        </p>
        <div className="d-lg-flex">
          <div className="col-lg-6 contactdiv">
            <img
              src={contactImage}
              alt="contact"
              width="100%"
              height="100%"
              style={{ backgroundSize: "cover", backgroundPosition: "center" }}
            ></img>
          </div>
          <div className="d-flex flex-column gap-2 col-lg-6 p-2 ps-md-5 pe-md-5 pt-md-4 pb-md-4 bg-light contactdiv">
            <form onSubmit={handleSubmit}>
              <div className="m-1">
                <label>
                  <b>Your Name</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="m-1">
                <label>
                  <b>Email Address</b>
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="m-1">
                <label>
                  <b>Phone Number</b>
                </label>
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  minLength={10}
                  maxLength={10}
                  required
                />
              </div>
              <div className="m-1">
                <label>
                  <b>Organization</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="m-1">
                <label>
                  <b>Message</b>
                </label>
                <textarea
                  rows="2"
                  cols="50"
                  className="form-control"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="d-flex justify-content-center mt-2 mb-2">
                <div id="user-input" className="d-flex m-2 gap-2">
                  <input
                    type="text"
                    className="mr-2 form-control"
                    id="submit"
                    name="captchaInput"
                    placeholder="Enter Captcha"
                    value={formData.captchaInput}
                    onChange={handleChange}
                    required
                  />
                  <div className="mr-2 mt-1" onClick={generateCaptcha}>
                    <i className="fas fa-sync"></i>
                  </div>
                  <div
                    id="image"
                    className="bg-secondary text-decoration-line-through fst-italic p-1 rounded fs-5 no-select"
                    selectable="False"
                  ></div>
                </div>
              </div>
              {captchaError && (
                <p className="text-danger text-center">{captchaError}</p>
              )}
              <button
                type="submit"
                className="btn fs-6 w-100 text-white"
                style={{ backgroundColor: "rgb(14, 46, 78)" }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
  );
}
