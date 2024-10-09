import React, { useState } from "react";
import NiceSelect from "../ui/nice-select";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    inquiryType: '',
    message: '',
  });

  const [status, setStatus] = useState(null);

  const selectHandler = (value) => {
    setFormData((prev) => ({ ...prev, inquiryType: value }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/mnnqawky', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        alert('Your request has been submitted successfully!');
        // Clear the form
        setFormData({
          fullName: '',
          email: '',
          phoneNumber: '',
          inquiryType: '',
          message: '',
        });
      } else {
        setStatus('error');
        alert('Failed to submit your request. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      setStatus('error');
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="box">
      <div className="row gx-20">
        {/* Same input fields as before */}
        <div className="col-12">
          <div className="postbox__comment-input mb-30">
            <input 
              type="text" 
              name="fullName" 
              value={formData.fullName} 
              onChange={handleChange} 
              className="inputText" 
              required 
            />
            <span className="floating-label">Full Name</span>
          </div>
        </div>
        <div className="col-12">
          <div className="postbox__comment-input mb-30">
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="inputText" 
              required 
            />
            <span className="floating-label">Your Email</span>
          </div>
        </div>
        <div className="col-12">
          <div className="postbox__comment-input mb-35">
            <input 
              type="text" 
              name="phoneNumber" 
              value={formData.phoneNumber} 
              onChange={handleChange} 
              className="inputText" 
              required 
            />
            <span className="floating-label">Phone Number</span>
          </div>
        </div>
        <div className="col-12">
          <div className="postbox__select mb-30">
            <NiceSelect
              options={[
                { value: "Your Inquiry about", text: "Your Inquiry about" },
                { value: "Get a personalized demo", text: "Get a personalized demo" },
                { value: "Talk to founders", text: "Talk to founders" },
                { value: "Setting up Pennyflo", text: "Setting up Pennyflo" },
                { value: "Integrations", text: "Integrations" },
                { value: "Partnerships/ Media", text: "Partnerships/ Media" },
              ]}
              onChange={selectHandler}
            />
          </div>
        </div>
        <div className="col-xxl-12">
          <div className="postbox__comment-input mb-30">
            <textarea 
              className="textareaText" 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              required 
            ></textarea>
            <span className="floating-label-2">Message...</span>
          </div>
        </div>
        <div className="col-xxl-12">
          <div className="postbox__btn-box">
            <button type="submit" className="submit-btn w-100">Send your Request</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactUsForm;
