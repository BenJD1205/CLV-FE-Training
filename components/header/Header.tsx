'use client'
import React,{FC} from 'react'
import Link from 'next/link'
import { AiOutlineCodeSandbox, AiFillAccountBook, AiFillBook, AiFillFile, AiFillStar, AiFillSetting, AiFillExperiment } from 'react-icons/ai'
import styles from './header.module.css'

type Props = {}

const Header:FC<Props> = (props) => {
  return (
    <div className='flex h-[40px] bg-teal-500 justify-between items-center p-4'>
      <Link href={'/'} className='font-bold text-[18px] flex gap-2 items-center'><AiOutlineCodeSandbox size={30} /> OPUS CONTAINER</Link>
      <div className='flex items-center'>
        <div className={styles.item}>
          <AiFillAccountBook size={20} />
          <span>17</span>
        </div>
        <div className={styles.item}>
          <span>NAME</span>
          <p>OPUS ADMIN</p>
        </div>
        <div className={styles.item}>
          <span>ID</span>
          <p>OPUSADM</p>
        </div>
        <div className={styles.item}>
          <span>OFFICE</span>
          <p>SINHO</p>
        </div>
        <div className={styles.item}>
          <p onClick={() => {}} style={{cursor:'pointer'}}>LOGOUT</p>
        </div>
        <div className={styles.item}>
          <AiFillBook color='blue' size={20} />
          <AiFillFile size={20} />
        </div>
        <div className={styles.item}>
          <AiFillExperiment size={20} />
          <AiFillStar size={20} />
          <AiFillSetting size={20} />
        </div>
      </div>
    </div>
  )
}

export default Header