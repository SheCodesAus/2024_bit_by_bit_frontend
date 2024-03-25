import { Link } from "react-router-dom";

function EventCard(props) {
    const { eventData } = props;
    const eventLink = `/event/${eventData.id}`;

    return (
        <div className="event-card bg-white shadow-md p-8 rounded-lg" style={{ minWidth: '240px' }}>
            <Link to={eventLink} >
                <h3 className="font-bold">{eventData.program}</h3>
                <h3>{new Date(eventData.date).toLocaleDateString('en-GB')}</h3>
                <h3 className="font-bold">{eventData.location}</h3> {/* There was a typo here: 'locatin' */}
                <h3 className="font-bold">{eventData.time}</h3>
                <div>
                    <select className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option value="">Select Role</option>
                        {/* Populate with actual roles */}
                    </select>
                    <label className="flex items-center mt-2"> {/* Added mt-2 for spacing */}
                        <input type="checkbox" /> Available
                    </label>
                </div>
            </Link>
        </div>
    );
}

export default EventCard;
