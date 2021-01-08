import { Toast } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { resetNotification } from '../Reducers/notificationReducer'

const Notification = () => {
  const dispatch = useDispatch()
  const message = useSelector(state => state.notification)
  
  const handleShow = () => {
    dispatch(resetNotification())
  }

  if (message !== null) {
    return (
      <Toast onClose={handleShow}>
        <Toast.Header>
          <strong>Notification!</strong>
        </Toast.Header>
        <Toast.Body>
          {message}
        </Toast.Body>
      </Toast>
    )
  }

  return (
    null
  )
}

export default Notification