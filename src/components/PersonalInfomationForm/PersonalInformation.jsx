import { useState } from "react";
import "./PersonalInfoForm.css";
export default function PersonalInformation({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  nameErr,
  emailErr,
  phoneErr,
}) {
  return (
    <>
      <section className="start-section">
        <div className="main-heading">
          <p>Registration Form</p>
        </div>
        <div className="sub-heading">
          <p>Please fill out this form with the required information</p>
        </div>
        <div className="progressbar">
          <div className="progress-box">
            <div className="progress">
              <div className="progress-1">
                <p className="progress-number">1</p>
              </div>
              <div className="inner-line"></div>
            </div>

            <p className="progress-title">Personal Information</p>
          </div>
          <div className="progress-box">
            <div className="progress">
              <div className="progress-1 next-progress">
                <p className="progress-number">2</p>
              </div>
              <div className="inner-line not-progressed"></div>
            </div>

            <p className="progress-title">Educational Background</p>
          </div>
          <div className="progress-box">
            <div className="progress">
              <div className="progress-1 not-progressed">
                <p className="progress-number">3</p>
              </div>
            </div>

            <p className="progress-title">Work Experience</p>
          </div>
        </div>
      </section>
      <section className="input-section">
        <div className="input-group">
          <div className="input-title">
            <p>
              Name<span className="required-symbol">*</span>
            </p>
          </div>
          <div className="input-form">
            <input
              type="text"
              placeholder="John Doe"
              name="Uname"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <span className="error-msg">{nameErr}</span>
        </div>
        <div className="input-group">
          <div className="input-title">
            <p>
              Email<span className="required-symbol">*</span>
            </p>
          </div>
          <div className="input-form">
            <input
              type="email"
              placeholder="example@mail.com"
              name="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <span className="error-msg">{emailErr}</span>
        </div>
        <div className="input-group">
          <div className="input-title">
            <p>
              Phone Number<span className="required-symbol">*</span>
            </p>
          </div>
          <div className="input-form">
            <input
              type="tel"
              placeholder="01911111111"
              name="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <span className="error-msg">{phoneErr}</span>
        </div>
      </section>
    </>
  );
}
