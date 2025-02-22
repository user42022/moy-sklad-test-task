import { FC } from 'react'
import { ContentRow } from './content-row/content-row'
import { User } from '../../api/types'
import styles from './table.module.scss'

type Todos = number
export type Row =  User & {todos: Todos}

const tableHeaders = ['#', 'USERNAME', 'TO-DO COUNT']

export const Table: FC<{ content: Row[] }> = ({ content }) => (
  <table className={styles.table}>
    <thead>
      <tr className={styles.header}>
        {tableHeaders.map(header => <th key={header}>{header}</th>)}
      </tr>
    </thead>
    <tbody>
      {content.map(user => <ContentRow key={user.id} {...user}/>)}
    </tbody>
  </table>
)