import { useRef, useState } from "react"
import PersonalInfo from "./Form/PersonalInfo"
import Experience from "./Form/Experience"
import Education from "./Form/Education"
import { v4 as uuidv4 } from "uuid"
import ReactToPrint from "react-to-print"

export default function Main() {
    let componentRef = null;
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [title, setTitle] = useState(null)
    const [description, setDescription] = useState(null)
    const [address, setAdress] = useState(null)
    const [email, setEmail] = useState(null)
    const [phoneNumber, setPhoneNumber] = useState(null)
    const [experience, setExperience] = useState([])
    const [education, setEducation] = useState([])

    function FirstName(event) {
        setFirstName(event.target.value)
    }

    function LastName(event) {
        setLastName(event.target.value)
    }

    function Title(event) {
        setTitle(event.target.value)
    }

    function Email(event) {
        setEmail(event.target.value)
    }

    function Description(event) {
        setDescription(event.target.value)
    }

    function Adress(event) {
        setAdress(event.target.value)
    }

    function Phone(event) {
        setPhoneNumber(event.target.value)
    }

    function clear(e) {
        for (let i = 0; i < e.target.length; i++) {
            e.target[i].value = ""
        }
    }

    function addExperience(e) {
        e.preventDefault()
        const id = uuidv4()
        const position = e.target[0].value
        const company = e.target[1].value
        const start = e.target[2].value
        const end = e.target[3].value
        const desc = e.target[4].value

        let newExperience = { id, position, company, start, end, desc}
        setExperience([...experience, newExperience])
        clear(e)
    }

    function deleteExperience(id) {
        setExperience((currentExperience) => {
            return currentExperience.filter((exp) => exp.id !== id)
        })
    }

    function saveExperience(e, id) {
        e.preventDefault()

        let position = e.target[0].value
        let company = e.target[1].value
        let start = e.target[2].value
        let end = e.target[3].value
        let desc = e.target[4].value
        let updateExp = { position, company, start, end, desc }
        setExperience(
            experience.map((exp) => {
                if (exp.id === id) {
                    return { ...exp, ...updateExp}
                } else {
                    return exp
                }
            })
        )
    }

    function addEducation(e) {
        e.preventDefault()
        const id = uuidv4()
        const course = e.target[0].value
        const university = e.target[1].value
        const start = e.target[2].value
        const end = e.target[3].value
        let newEducation = { id, course, university, start, end }

        setEducation([...education, newEducation])
        clear(e)
    }

    function saveEducation(e, id) {
        e.preventDefault();
    
        const course = e.target[0].value;
        const university = e.target[1].value;
        const start = e.target[2].value;
        const end = e.target[3].value;
        const updateEdu = { course, university, start, end };
        setEducation(
          education.map((edu) => {
            if (edu.id === id) {
              return { ...edu, ...updateEdu };
            } else {
              return edu;
            }
          })
        );
      }

      function deleteEducation(id) {
        setEducation((currentEducation) => {
          return currentEducation.filter((edu) => edu.id !== id);
        });
      }

      function reset() {
        const empty = []
        setEducation(empty)
        setExperience(empty)
        setFirstName("");
        setLastName("");
        setTitle("");
        setEmail("");
        setAddress("");
        setPhoneNumber("");
      }

      function loadExample() {
        reset();
        setFirstName("JOHN");
    
        setLastName("DOE");
        setTitle("SPECIALIST IT MANAGER");
        setEmail("johndoe@email.com");
        setAddress("Saint Paul, MN");
        setPhoneNumber("(123) 456-7890");
        const experience1 = {
          id: uuidv4(),
          position: "Digital Marketing Analyst Intern",
          company: "Amazon",
    
          start: "Current",
          end: "April 2021",
          desc: `Created A/B testing plan for Facebook ad copy, leading to an
          improvement in ROI of 18%.
          Built key reports for executive team around KPIs, such as
          marketing spend, new leads, revenue generated, and ROI
          Oversaw the creation of the blog for SEO purposes, which grew
        from 500 to 5,000 monthly organic visitors
    
        Interviewed clients to understand their product positioning to
        incorporate into ad copy, resulting in client satisfaction of 96%
        Designed weekly email campaigns to target potential
        subscribers, increasing subscriptions by 12%
        Gathered data and insights, and discussed trends with team of 3
        other interns and 4 analysts to set new goals`,
        };
    
        const experience2 = {
          id: uuidv4(),
          position: "Recruiting Intern",
          company: "Notarize",
    
          start: "August 2020",
          end: "April 2021",
          desc: `Proactively sourced candidates using LinkedIn Recruiter for
          technical roles, including back-end software engineering and data
          engineering roles, leading to 4 full-time hires
          Iterated on messaging to qualified candidates for given roles to
          improve the response rate from 8% to 17%
           Communicated with candidates across each step of the application
          process, and updated the status of each candidate in Greenhouse
           Coordinated with external recruiting agencies to assess the
          qualifications of candidates they submitted for technical roles
           Gathered hiring paperwork, and communicated required
          documents needed from hires during onboarding
           Participated in interviews, and provided feedback and information
          to candidates regarding status 2-3 days after interviews
          `,
        };
        const education2 = {
          course: "B.S. in Marketing",
          university: "University of St. Thomas",
          start: `August 2018`,
          end: `May 2022`,
        };
    
        const education1 = {
          course: "B.S. Comuter Science",
          university: "University of London",
          start: `August 2022`,
          end: `Present`,
        };
    
        setEducation([education1, education2]);
        setExperience([experience1, experience2]);
      }

      function generatePrint() {
        return (
          <>
            <ReactToPrint
              trigger={() => {
                return <button>Print CV</button>;
              }}
            />
          </>
        );
      }

      return (
        <>
        <div className="main">
            <section className="cv-form">
                <PersonalInfo
                FirstName={FirstName}
                LastName={LastName}
                Title={LastName}
                Email={Email}
                Description={Description}
                Address={Adress}
                Phone={Phone}
                />
                <Experience
                onSubmit={addExperience}
                deleteExperience={deleteExperience}
                experience={experience}
                saveExperience={saveExperience}
                />
                <Education
                addEducation={addEducation}
                education={education}
                saveEducation={saveEducation}
                deleteEducation={deleteEducation}
                />
                <section className="btn-container">
                    <button className="btn btn-load" onClick={loadExample}>Load Example</button>
                    <button className="btn btn-reset" onClick={reset}>Reset</button>
                    <ReactToPrint
                    trigger={() => {
                        return <button className="btn btn-print">Print CV</button>
                    }}
                    content={() => componentRef}
                    documentTitle="Cv"
                    pageStyle="print"
                    />
                </section>
            </section>
            <div className="preview" ref={(el) => componentRef = el}>
            </div>
        </div>
        </>
      )

}