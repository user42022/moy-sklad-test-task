import { FC } from 'react'
import { Row } from '../table'
import userIcon from '@icons/user-icon.svg'
import styles from './content-row.module.scss'

export const ContentRow: FC<Row> = ({ id, name, email, todos }) => (
  <tr className={styles.bodyRow} key={id}>
    <td><div className={styles.userId}>{id}</div></td>
    <td >
      <div className={styles.userPersonalData}>
        <img className={styles.userIcon} src={userIcon} alt="user-icon" />
        <div className={styles.nameEmailContainer}>
          <p className={styles.userName}>{name}</p>
          <p className={styles.userEmail}>{email}</p>
        </div>
      </div>
    </td>
    <td>
      <div className={styles.toDoCount}>
        {todos}
      </div>
    </td>
  </tr>
)