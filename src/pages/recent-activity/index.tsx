import RootLayout from '@/components/layout'
import RecentActivity from '@/components/RecentActivity'
import Stats from '@/components/Stats'
import React from 'react'

const Home = () => {
    return (
        <RootLayout>
            <div className='text-2xl mb-2 font-semibold'>Hello Arnav, </div>
            <div className='-translate-x-[18px]'>
                <Stats />
            </div>
            <div className='mt-6'>
                <div className='font-semibold text-lg'>Recent Acitivty</div>
                <RecentActivity />
            </div>
        </RootLayout>
    )
}

export default Home