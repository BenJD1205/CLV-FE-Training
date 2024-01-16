'use client'
import React, {FC, useContext} from 'react'
import {AiOutlineUser, AiOutlineVideoCamera, AiOutlineMenuFold, AiOutlineMenuUnfold} from 'react-icons/ai'
import { Layout, Menu} from 'antd';
import { SidebarContext } from '@/context/sidebar.context';
import HeaderApp  from '@/components/header/Header';
import styles from './home.module.css';
import Link from 'next/link';

const { Sider } = Layout;

type Props = {
    children: React.ReactNode;
}

const HomeLayout: FC<Props> = ({children}) => {
  const {collapsed} = useContext(SidebarContext)
  return (
    <div className={`${styles.container}`}>
        <HeaderApp />
        <Layout className='h-[100%]'>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <Menu
              theme="dark"
              mode="inline"
            >
              <Menu.Item key="1" icon={<AiOutlineUser />} title="User">
                <Link href={'/user'}>
                  User
                </Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<AiOutlineVideoCamera />} title="Vessel">
                <Link href={'/vessel'}>
                  Vessel
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
              {children}
          </Layout>
        </Layout>
    </div>
  )
}

export default HomeLayout