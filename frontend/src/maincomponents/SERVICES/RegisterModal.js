import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

const RegisterModal = ({ showmodal, onClose }) => {
  
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
    captchaInput: "",
  };

  const [formData, setFormData] = useState(initialFormData||{});
  const [captcha, setCaptcha] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const [showModal, setShowModal] = useState(showmodal);
  useEffect(() => {
    const hasContacted = localStorage.getItem("hasContacted");
    if (!hasContacted) {
      setShowModal(true);
    }
    generateCaptcha();
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

      // Ask the user if they want to send the email
      const confirmSend = window.confirm("Do you want to send the email?");
      if (confirmSend) {
        // Create the mailto link
        const mailtoLink = `mailto:info@infomericainc.com?subject=Contact&body=${encodeURIComponent(`
            Name: ${formData.name}
            Email: ${formData.email}
            Phone: ${formData.phone}
            Organization: ${formData.organization}
            Message: ${formData.message}
          `)}`;

        // Open the mailto link
        window.location.href = mailtoLink;

        // After mailto is triggered, store the hasContacted flag
        localStorage.setItem("hasContacted", "true");
        // setShowModal(false);

        // Clear the form fields
        setFormData(initialFormData);
      } else {
        // The user discarded the email, so don't store the hasContacted flag
        localStorage.removeItem("hasContacted");
      }
    }
  };
  const generateCaptcha = () => {
    const randomchar =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let uniquechar = "";
    for (let i = 1; i < 7; i++) {
      uniquechar += randomchar.charAt(
        Math.floor(Math.random() * randomchar.length)
      );
    }
    setCaptcha(uniquechar);
  };
  return (
    <>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        backdrop="static"
        centered
      >
        <Modal.Header closeButton onClick={onClose}>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
                <div
                  className="mr-2 mt-1"
                  onClick={generateCaptcha}
                  style={{ cursor: "pointer" }}
                >
                  <i className="fas fa-sync"></i>
                </div>
                <div
                  id="image"
                  className="bg-secondary text-white fst-italic p-1 rounded fs-5 no-select"
                >
                  {captcha}
                </div>
              </div>
            </div>
            {captchaError && (
              <p className="text-danger text-center">{captchaError}</p>
            )}
            <Button
              type="submit"
              className="btn fs-6 w-100 text-white"
              style={{ backgroundColor: "rgb(14, 46, 78)" }}
            >
              Send Message
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default RegisterModal;
