export default function Experience(
    {
        onSubmit,
        experience,
        saveExperience,
        deleteExperience,
    }
    ) {
        return (
            <section id="experience">
                <h2>Work Experience</h2>
                {experience.map((i) => {
                    return (
                        <div key={i.id}>
                            <li key={i.id}>
                                <form key={i.id} onSubmit={(e) => saveExperience(e, i.id)}></form>
                                <input placeholder="Position" required defaultValue={i.position} />
                                <input placeholder="Company" required defaultValue={i.company} />
                                <input placeholder="Start Date" required defaultValue={i.start} />
                                <input placeholder="End Date" required defaultValue={i.end} />
                                <input placeholder="Description" required id="description" defaultValue={i.desc} />
                                <div className="btn-container">
                                    <button type="submit" className="btn btn-save">Save</button>
                                    <button type="button" className="btn btn-delete" onClick={(e) => deleteExperience(i.id)}>Delete</button>
                                </div>
                            </li>
                        </div>
                    )
                })}
                <form onSubmit={onSubmit}>
                    <input placeholder="Position" required />
                    <input placeholder="Company" required />
                    <input placeholder="Start Date" required />
                    <input placeholder="End Date" required />
                    <textarea placeholder="Description" className="description" required></textarea>
                    <button className="btn btn-add" type="submit">Add</button>
                </form>
            </section>
        )
    }