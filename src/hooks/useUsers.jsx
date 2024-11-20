import { useEffect, useState } from 'react';

/* Este hook se usa para logear los usuarios, registrar, validacion, y almacenamiento el la storage */

const useUsers = () => {

  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || [])

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])

  const setDefaultUser = () => {
    if(!users.length) {
      setUsers([{ name: 'flor', password: '1234' }])
    }
  }

  const userExists = (userToCheck) => users.some(user => user.name === userToCheck.name)

  const addUser = (newUser) => {
    if(!userExists(newUser)) {
      setUsers(users => [...users, newUser])
    }
  }

  const checkCredentials = (userToCheck) => users.some(user => user.name === userToCheck.name && user.password === userToCheck.password)

  return {setDefaultUser, addUser, userExists, checkCredentials};
}
 
export default useUsers;