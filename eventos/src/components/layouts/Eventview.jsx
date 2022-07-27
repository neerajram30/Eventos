import React from 'react'
import {useParams} from 'react-router-dom'

function Eventview() {
    const {event_id} = useParams()
  return (
    <div>Eventview
    </div>
  )
}

export default Eventview