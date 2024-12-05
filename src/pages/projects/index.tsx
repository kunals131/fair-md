import RootLayout from '@/components/layout'
import RecentProjects from '@/components/Projects'
import React from 'react'

const Page = () => {
    return (
        <RootLayout>
            <div className=''>
                <RecentProjects />
            </div>
        </RootLayout>
    )
}

export default Page