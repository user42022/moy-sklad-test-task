import { useEffect, useState } from 'react'
import { Description } from '../../components/description/description'
import { Table } from '../../components/table/table'
import { fetchTodos, fetchUsers } from '../../api/api'
import { ToDo, User } from '../../api/types'
import styles from './main-page.module.scss'

export const  MainPage = () =>  {
  const [users, setUsers] = useState<User[]>([])
  const [todos, setTodos] = useState<ToDo[]>([])

  const content = users.map(user => ({...user, todos: todos.filter(({userId})=> userId === user.id).length}))

  useEffect(()=> {
    Promise.all([fetchUsers(),fetchTodos()])
    .then(([users,todos]) => {
      setUsers(users)
      setTodos(todos)
    })
  }, [])

  return (
  <main className={styles.main}>
    <Description />
    {Boolean(users.length) && Boolean(todos.length) && <Table content={content} />}
  </main>
  )
}
