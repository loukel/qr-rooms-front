import { Card } from "react-bootstrap"

const Attendees = ({ data: attendees }) => {
  console.log(attendees)
  return ( 
    <div>
      {attendees.map((attendee) => (
        <Card>
          <Card.Body>
            {attendee.name && 
              <div>
                Name: {attendee.name}
              </div>
            }
            {attendee.snapchat && 
              <div>
                Snapchat: {attendee.snapchat}
              </div>
            }
            {attendee.instagram && 
              <div>
                Instagram: {attendee.instagram}
              </div>
            }
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}
 
export default Attendees