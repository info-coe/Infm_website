import React, { useState } from "react";
import CorporateofficeaddressCard from "../../reusablecomponents/CorporateofficeaddressCard";

const Contactus = (props) => {
  const ContactusContent = JSON.parse(props.product.contactusContent.Content)[0];
  const initialFormData = {
    firstname: "",
    lastname:"",
    email: "",
    phone: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
      window.location.href = `mailto:info@infomericainc.com?subject=Contact&body=${encodeURIComponent(`
            First Name: ${formData.firstname}
            Last Name: ${formData.lastname}
            Email: ${formData.email}
            Phone: ${formData.phone}
            Message: ${formData.message}
          `)}`;
      setFormData(initialFormData); // Clear the form fields
    
  };

  return (
    <div>
      <img
        src={ContactusContent.Contact_Us_MainBanner}
        width="100%"
        alt="Main Service"
        className="mainimg img-fluid d-none d-md-block"
        style={{ objectFit: "cover" }}
      />
      <img
        src={ContactusContent.Contact_Us_MobileBanner}
        alt="Sub Service"
        className="sunimg img-fluid d-md-none w-100"
        style={{ objectFit: "cover" }}
      />
      <div className="container text-center pt-md-5 pb-md-5 p-3">
        <p
          className="text-center ps-md-5 pe-md-5 ms-md-5 me-md-5 mb-5"
          style={{ fontSize: "16px" }}
        >
          {ContactusContent.Contact_Us_Description}
        </p>

        <div
          className="text-white p-lg-5 p-3 ms-lg-5 me-lg-5"
          style={{
            backgroundImage: `url(${ContactusContent.Contact_Form.CF_BgImage})`,
            objectFit: "cover",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "20px",
          }}
        >
          <h2>{ContactusContent.Contact_Form.CF_contactusHead}</h2>
          <form onSubmit={handleSubmit}>
            <div className="d-md-flex m-1">
              <input
                type="text"
                placeholder="First Name"
                className="form-control m-md-2 mt-2 mb-2 rounded-pill p-3"
                  name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="form-control  m-md-2 mt-2 mb-2 rounded-pill p-3"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="d-md-flex m-1">
              <input
                type="tel"
                placeholder="Mobile Number"
                className="form-control  m-md-2 mt-2 mb-2 rounded-pill p-3"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                minLength={10}
                maxLength={10}
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="form-control  m-md-2 mt-2 mb-2 rounded-pill p-3"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="m-3">
              <textarea
                placeholder="Message"
                className="form-control rounded"
                style={{ height: "150px" }}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div>
              <button className="btn btn-danger m-2">Submit</button>
            </div>
          </form>
        </div>
        <div className="mt-5 mb-5">
          <h2 className="pt-5">
            <span className="text-primary">{ContactusContent.Corporate_Office_Address.COA_Head1}</span>
            &nbsp;<span className="" style={{color:"#FE0000"}}>{ContactusContent.Corporate_Office_Address.COA_Head2}</span>
          </h2>
          <div className="d-lg-flex">
            <CorporateofficeaddressCard data={ContactusContent.Corporate_Office_Address.COA_Address} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
