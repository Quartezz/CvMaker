export default function PreviewPersonal(
    {
        firstName,
        lastName,
        title,
        address,
        email,
        phoneNumber,
        description,
    }
) {
    return (
        <div id="preview-personal">
            <div className="info">
                <div id="info-1">
                    <p id="name">
                        {firstName} {lastName}
                    </p>
                    <h2 id="title">{title}</h2>
                </div>
                <div id="info-2">
                    <p>
                        <i className="fa-solid fa-location-dot"></i> {address}
                    </p>
                    <p>
                        <i className="fa-solid fa-phone"></i> {phoneNumber}
                    </p>
                    <p>
                    <i className="fa-solid fa-envelope"></i> {email}
                    </p>
                </div>
            </div>
            <hr />
            <p>{description}</p>
        </div>
    )
}