import { Link } from "react-router-dom";

function EventCard(props) {
    const { eventData } = props;
    const eventLink = `/event/${eventData.id}`;

    return (
            <div>
                <Link to={eventLink} >
                    <h3>{eventData.title}</h3>
                    <h3>{new Date(eventData.date_created).toLocaleDateString('en-GB')}</h3>
                </Link>
            </div>
    );
}

export default ProjectCard;
