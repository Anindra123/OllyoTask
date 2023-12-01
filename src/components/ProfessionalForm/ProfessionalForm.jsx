import "./ProfessionalForm.css";
export default function ProfessionalForm({
  companyName,
  setCompanyName,
  position,
  setPosition,
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
              <div className="progress-1 ">
                <p className="progress-number">2</p>
              </div>
              <div className="inner-line "></div>
            </div>

            <p className="progress-title">Educational Background</p>
          </div>
          <div className="progress-box">
            <div className="progress">
              <div className="progress-1">
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
            <p>Company Name</p>
          </div>
          <div className="input-form">
            <input
              type="text"
              placeholder="John Doe"
              name="comapanyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
          <span className="error-msg"></span>
        </div>
        <div className="input-group">
          <div className="input-title">
            <p>Position Held</p>
          </div>
          <div className="input-form">
            <input
              type="text"
              placeholder="Junior Developer"
              name="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>
          <span className="error-msg"></span>
        </div>
      </section>
    </>
  );
}
