import { useState } from "react";
import PersonalInformation from "./PersonalInfomationForm/PersonalInformation";
import EducationForm from "./EducationForm/EducationForm";
import ProfessionalForm from "./ProfessionalForm/ProfessionalForm";
import "./MainForm.css";

export default function MainForm() {
  const [progressCount, setProgressCount] = useState(1);
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneErr, setPhoneErr] = useState("");
  const [educationLevel, setEducationlevel] = useState("primary");
  const [studyField, setStudyField] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [data, setData] = useState(null);
  function handleSubmit() {
    let err = false;
    setNameErr("");
    setEmailErr("");
    setPhoneErr("");
    if (name.trim().length === 0) {
      setNameErr("Please enter your Name");
      err = true;
    }
    if (email.trim().length === 0) {
      setEmailErr("Please enter your Email");
      err = true;
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.trim())
    ) {
      setEmailErr("Entered email is not valid");
      err = true;
    }

    if (phone.trim().length === 0) {
      setPhoneErr("Please enter your phone number");
      err = true;
    } else if (!/^0\d{10}$/.test(phone.trim())) {
      setPhoneErr("Entered phone number is not valid");
      err = true;
    }
    if (progressCount < 4 && err === false) setProgressCount((c) => c + 1);

    if (progressCount === 3) {
      setProgressCount(0);
    }
  }

  function handlePrevious() {
    if (progressCount > 1) setProgressCount((c) => c - 1);
  }
  return (
    <form action="" className="personal-form">
      {progressCount === 1 && (
        <PersonalInformation
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          nameErr={nameErr}
          emailErr={emailErr}
          phoneErr={phoneErr}
        />
      )}
      {progressCount === 2 && (
        <EducationForm
          educationLevel={educationLevel}
          setEducationLevel={setEducationlevel}
          studyField={studyField}
          setStudyField={setStudyField}
        />
      )}
      {progressCount === 3 && (
        <ProfessionalForm
          position={position}
          setPosition={setPosition}
          companyName={companyName}
          setCompanyName={setCompanyName}
        />
      )}
      {progressCount === 0 &&
        JSON.stringify({
          Personal_Info: { Name: name, Email: email, Phone: phone },
          Education: {
            Education_Level: educationLevel,
            Study_Field: studyField,
          },
          Professional: { Company_Name: companyName, Position: position },
        })}
      {progressCount > 0 && (
        <div className="btn-group">
          {progressCount === 1 ? (
            <a className="btn prev disabled" onClick={handlePrevious}>
              Previous
            </a>
          ) : (
            <a className="btn prev" onClick={handlePrevious}>
              Previous
            </a>
          )}
          {progressCount === 3 ? (
            <a className="btn submit " onClick={handleSubmit}>
              Submit
            </a>
          ) : (
            <a className="btn submit" onClick={handleSubmit}>
              Next
            </a>
          )}
        </div>
      )}
      {progressCount === 0 && (
        <div className="btn-group">
          <a className="btn prev disabled" onClick={handlePrevious}>
            Previous
          </a>

          <a className="btn submit disabled " onClick={handleSubmit}>
            Submit
          </a>
        </div>
      )}
    </form>
  );
}
