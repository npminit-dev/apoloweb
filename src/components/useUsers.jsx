import { useEffect, useState } from 'react';

const useUsers = () => {

  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || [])

  useEffect(() => {
    console.log(users)
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])

  const setDefaultUser = () => {
    if(!users.length) {
      setUsers([{ name: 'flor', password: '1234' }])
    }
  }

  const userExists = (userToCheck) => users.some(user => user.name === userToCheck.name && user.password === userToCheck.password)

  const addUser = (newUser) => {
    if(users.every(user => user.name !== newUser.name && user.password !== newUser.password)) {
      setUsers(users => [...users, newUser])
    }
  }

  return {setDefaultUser, addUser, userExists};
}
 
export default useUsers;