import { Favorite } from '@mui/icons-material'
import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import { IconButton } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from './store/features/userSlice';
import { auth } from './firebase';


type Props = {}

function NavbarLogin({}: Props) {
  return (
    <div className='flex justify-between items-center p-4 md:p-6'>
        <div>
        <h1 className='uppercase cursor-pointer font-[Plus Jakarta Sans] text-[24px] font-bold text-[#3563E9]'>morent</h1>
        </div>
        <div className='flex items-center gap-2'>
            <IconButton>
            <Favorite className='text-black' />
            </IconButton>
            <IconButton>
            <NotificationsIcon className='text-black' />
            </IconButton>
            <img onClick={() => auth.signOut()} className='w-[32px] cursor-pointer rounded-full' src="https://i.pinimg.com/1200x/c3/51/18/c3511874093854d317bc7c3927132b7b.jpg" alt="" />
        </div>
    </div>
  )
}

export default NavbarLogin