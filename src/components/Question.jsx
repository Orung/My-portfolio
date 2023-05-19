import React from 'react'

const Question = () => {
    return (
        <div className='container m-auto text-center py-[9rem] text-white'>
            <h1 className='md:text-[64px] text-[20px]'>Do you have a project or any concerns?
                You can write an email to me.</h1>
            <div className='button mt-[3rem]'>
                <a href="mailto:promiseorung@gmail.com" className="bg-[#F37A23] hover:bg-[#ef8a41] text-white font-bold py-3 px-[3rem] rounded">
                    Email me
                </a>
            </div>
        </div>
    )
}

export default Question