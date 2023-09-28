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

}