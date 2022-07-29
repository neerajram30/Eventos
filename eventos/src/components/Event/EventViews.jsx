import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getEventbyId, reset } from '../../features/event/eventSlice'

function EventViews() {
  const { event_id } = useParams();
  const dispatch = useDispatch();

  const { event, isLoading, isError, message } = useSelector(
    (state) => state.event
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!isError) {

      dispatch(getEventbyId(event_id))
    }
    dispatch(reset())

  }, [isError, message, dispatch])

  if (isLoading) {
    <p>ohh</p>
  }
  return (
    <div>EventViews</div>
  )
}

export default EventViews