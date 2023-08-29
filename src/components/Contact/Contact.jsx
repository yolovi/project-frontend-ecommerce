import React, { useState } from "react";
import'./Contact.scss';


const Contact = () => {
  const [selectedSubject, setSelectedSubject] = useState("");

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
  };

  return (
    <div>
      <div id="container-contact">
        <h2 className="title"> Keep in Touch </h2>
        <div className="underline"></div>
        <form action="#" method="post" id="contact_form" className="form-contact">
          <div className="name contact">
            <label htmlFor="name"></label>
            <input className="contact"
              type="text"
              placeholder="My name is"
              name="name"
              id="name_input"
              required
            />
          </div>
          <div className="email contact">
            <label htmlFor="email"></label>
            <input className="contact"
              type="email"
              placeholder="My e-mail is"
              name="email"
              id="email_input"
              required
            />
          </div>
          <div className="telephone contact">
            <label htmlFor="name"></label>
            <input className="contact"
              type="text"
              placeholder="My number is"
              name="telephone"
              id="telephone_input"
              required
            />
          </div>

          <div className="subject contact">
            <label htmlFor="subject"></label>
            <select className="contact"
              placeholder="Subject line"
              name="subject"
              id="subject_input"
              required
              value={selectedSubject} // Agrega este prop para controlar la opción seleccionada
              onChange={handleSubjectChange} // Agrega esto para manejar el cambio de selección
            >
              <option disabled hidden value="">
                Subject line
              </option>
              <option value="start">I'd like to start a project</option>
              <option value="question">I'd like to ask a question</option>
              <option value="proposal">I'd like to make a proposal</option>
            </select>
          </div>

          <div className="orderNumber contact">
            <label htmlFor="orderNumber"></label>
            <input className="contact"
              type="text"
              placeholder="Order number"
              name="orderNumber"
              id="orderNumber"
              required
            />
          </div>
          <div className="msg-contact contact">
            <label htmlFor="message"></label>
            <textarea className="contact"
              name="message"
              placeholder="I'd like to chat about"
              id="message_input"
              cols="30"
              rows="5"
              required
            ></textarea>
            <h3>Please provide all the information about your issue you can.</h3> 
          </div>
          {/* //FIXME: aplicar estilo btn-black*/}
          <div className="btn-black"> 
            <input type="submit" value="Send Message" id="form_button" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
