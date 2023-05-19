import React from 'react'

const Contact = () => {
    return (
        <div className=' md:container m-auto '>
            <div className='md:flex gap-5 my-4 flex-wrap  m-auto'>
                <div className='bg-[#151030] md:w-5/12 flex flex-col justify-center md:px-[3rem] px-[1rem] py-[4rem] rounded-2xl'>
                    <div className='mb-5'>
                        <h4 className="sm:text-[18px] text-[14px] text-[#aaa5c3] uppercase tracking-wider">
                            GET IN TOUCH
                        </h4>
                        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                            Contact
                        </h2>
                    </div>
                    <form>
                        <div className="mb-6">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                            <input type="text" id="name" className="shadow-sm bg-[#282249] border border-[#151030] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#282249] dark:border-[#151030] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="What’s your good name?" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" id="email" className="shadow-sm bg-[#282249] border border-[#151030] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#282249] dark:border-[#151030] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="What’s your email address?" required />
                        </div>
                        <div className="mb-6">

                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                            <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-[#282249] rounded-lg border border-[#151030] focus:ring-blue-500 focus:border-blue-500 dark:bg-[#282249] dark:border-[#151030] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="What you want to say?..."></textarea>

                        </div>
                        <button type="button" className="text-white bg-gradient-to-r from-[#F37A23] via-[#F37A23] to-[#222238] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-[#F37A23] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact