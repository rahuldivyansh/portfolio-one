import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold border-b-4 inline border-green-600'>About</p>
                </div>
                <div>
                        
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div>
                    <p className='sm:text-right text-4xl font-bold'>Hi. I am Divyansh, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                    <p>I like  working on interesting projects. I also like solving data structures and algorithms problems using java on platforms like geeksforgeeks and leetcode.</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default About
