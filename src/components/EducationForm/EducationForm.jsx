import "./EducationForm.css";
export default function EducationForm({
  educationLevel,
  setEducationLevel,
  studyField,
  setStudyField,
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
              <div className="progress-1 next-progress">
                <p className="progress-number ">3</p>
              </div>
            </div>

            <p className="progress-title">Work Experience</p>
          </div>
        </div>
      </section>
      <section className="input-section">
        <div className="input-group">
          <div className="input-title">
            <p>Highest Degree</p>
          </div>
          <div className="input-form">
            <select
              name=""
              id=""
              value={educationLevel}
              onChange={(e) => setEducationLevel(e.target.value)}
            >
              <option value="Primary">Primary</option>
              <option value="Secondary">Secondary</option>
              <option value="Higher Secondary">Higher Secondary</option>
              <option value="Bachelors">Bachelors</option>
              <option value="Masters">Masters</option>
              <option value="Phd">Phd</option>
            </select>
          </div>
          <span className="error-msg"></span>
        </div>
        <div className="input-group">
          <div className="input-title">
            <p>Feild of Study</p>
          </div>
          <div className="input-form">
            <input
              type="text"
              placeholder="Science"
              name="studyField"
              value={studyField}
              onChange={(e) => setStudyField(e.target.value)}
            />
          </div>
          <span className="error-msg"></span>
        </div>
      </section>
    </>
  );
}
