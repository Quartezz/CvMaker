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

}