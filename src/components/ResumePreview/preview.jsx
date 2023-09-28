import PreviewPersonal from "./previewPersonal"
import PreviewEducation from "./previewEducation"
import PreviewExperience from "./previewExperience"

export default function Preview({
    firstName,
    lastName,
    title,
    address,
    email,
    phoneNumber,
    description,
    experience,
    deleteExperience,
    editExperience,
    education
}) {
    return (
        <section className="cv-preview">
            <PreviewPersonal
            firstName={firstName}
            lastName={lastName}
            title={title}
            address={address}
            email={email}
            phoneNumber={phoneNumber}
            description={description}
            />
            <h2>Experience</h2>
            {experience.map((exp) => {
                return (
                    <PreviewExperience
                    key={exp.id}
                    deleteExperience={deleteExperience}
                    editExperience={editExperience}
                    id={exp.id}
                    position={exp.position}
                    company={exp.company}
                    start={exp.start}
                    end={exp.end}
                    desc={exp.desc}
                    />
                )
            })}
            <h2>Education</h2>
            {education.map((edu) => {
                return (
                    <PreviewEducation
                    key={edu.id}
                    id={edu.id}
                    course={edu.course}
                    university={edu.university}
                    end={edu.end}
                    start={edu.start}
          />
        );
      })}
        </section>
    )
}