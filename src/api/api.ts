import { ToDo, User } from "./types"

const base_url = 'https://jsonplaceholder.typicode.com'

enum Endpoints {
  users = 'users',
  todos = 'todos',
}

const fetchEndpoint = <T>(endpoint: Endpoints) => fetch([base_url, endpoint].join('/')).then<T>(res => {
  if (res.status !== 200) {
    throw new Error('fetch failure')
  }

  return res.json()
})

export const fetchUsers = () => fetchEndpoint<User[]>(Endpoints.users).catch(() => [])
export const fetchTodos = () => fetchEndpoint<ToDo[]>(Endpoints.todos).catch(() => [])