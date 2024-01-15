import React, {FC} from 'react'
import styles from './home.module.css';

type Props = {
    children: React.ReactNode;
}

const layout: FC<Props> = ({children}) => {
  return (
    <div className={`${styles.container}`}>{children}</div>
  )
}

export default layout