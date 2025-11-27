import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './redux/slice/userSlice'

function App() {
  const dispatch = useDispatch()

  const users = useSelector(state => state.user)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  console.log(users)

  return (
    <>
      <h1>Users:</h1>
      sdkjbskvjdnbvkjnv
      {
        users.loading ? <div>Loading</div> : users.data.map(i => (
        <p key={i.id}>{i.name}</p>
      ))
      }
    
    </>
  )
}

export default App
