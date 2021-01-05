import { useDispatch } from 'react-redux'
import { getUserInfo } from '../Reducers/userReducer'

const MyBooks = () => {
  const dispatch = useDispatch()

  const printUserInfo = () => {
    const user = dispatch(getUserInfo())
    console.log(user)
  }

  return (
    <div>
      <h1 className="mt-3 text-center">My Library</h1>
      <button onClick={printUserInfo}>Print user!</button>
    </div>
  )
}

export default MyBooks