import React from 'react'
import Event from './Event'

const UpcomingEvents = () => {
    return (
        <div className="mt-3 events">
            <div className="d-flex flex-row">
                <h6>Upcoming Events</h6>
                <span className="subheading-filter color-red ml-auto">All</span>
            </div>

            <Event
                image={require("../../../../static/assets/img/event.jpg")}
                eventName="Medal of Honour Challenge"
                eventDate="3:10 PM, Today"
            />

            <Event
                image={require("../../../../static/assets/img/posts/post1.jpg")}
                eventName="Something new"
                eventDate="2:19 AM, Saturday"
            />
        </div>
    )
}

export default UpcomingEvents
