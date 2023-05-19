import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className='bg-[#090c22] text-center text-white py-4 mt-[5rem]'>
            <div className='flex gap-5 justify-center'>
                <p>&copy; {currentYear} designed by Promise Orung. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer