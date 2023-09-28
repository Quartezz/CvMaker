export default function Education (
    {
        addEducation,
        education,
        deleteEducation,
        saveEducation,
    }
) {
    return (
        <section id="Education">
            <h2>Education</h2>
            {education.map((educat) => {
                return (
                    <li key={educat.id}>
                        <form onSubmit={(e) => saveEducation(e, educat.id)}>
                            <input type="text" placeholder="Course" defaultValue={educat.course} />
                            <input type="text" placeholder="University" defaultValue={educat.university} />
                            <input type="text" placeholder="Started" defaultValue={educat.start} />
                            <input type="text" placeholder="Ended" defaultValue={educat.end} />
                            <div className="btn-container">
                                <button type="submit" className="btn btn-save">Save</button>
                                <button type="button" className="btn btn-delete" onClick={() => deleteEducation(educat.id)}>Delete</button>
                            </div>
                        </form>
                    </li>
                )
            })}
            <form onSubmit={addEducation}>
                <input type="text" placeholder="Course" />
                <input type="text" placeholder="University/School" />
                <input type="text" placeholder="Started" />
                <input type="text" placeholder="Ended" />
                <button type="submit" className="btn btn-add">Add</button>
            </form>

        </section>
    )
}