import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* Container  */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-green-600  '>Skills</p>
                <p className='py-4'>These are the technologies that I have worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#9798556a] hover:scale-110 duration-500'>
                    <img  className='w-20 mx-auto' src={HTML} alt="HTML Icon" />
                    <p className='my-4 font-bold'>HTML</p>
                </div>

                <div className='shadow-md shadow-[#9798556a] hover:scale-110 duration-500'>
                    <img  className='w-20 mx-auto' src={CSS} alt="" />
                    <p className='my-4 font-bold'>CSS</p>
                </div>

                <div className='shadow-md shadow-[#9798556a] hover:scale-110 duration-500'>
                    <img  className='w-20 mx-auto' src={JavaScript} alt="" />
                    <p className='my-4 font-bold'>JavaScript</p>
                </div>

                <div className='shadow-md shadow-[#9798556a] hover:scale-110 duration-500'>
                    <img  className='w-20 mx-auto' src={ReactImg} alt="" />
                    <p className='my-4 font-bold'>ReactJS</p>
                </div>

                <div className='shadow-md shadow-[#9798556a] hover:scale-110 duration-500'>
                    <img  className='w-20 mx-auto' src={Node} alt="" />
                    <p className='my-4 font-bold'>Node</p>
                </div>

                <div className='shadow-md shadow-[#9798556a] hover:scale-110 duration-500'>
                    <img  className='w-20 mx-auto' src={GitHub} alt="" />
                    <p className='my-4 font-bold'>GitHub</p>
                </div>

                <div className='shadow-md shadow-[#9798556a] hover:scale-110 duration-500'>
                    <img  className='w-20 mx-auto' src={Tailwind} alt="" />
                    <p className='my-4 font-bold'>TailWind CSS</p>
                </div>

                <div className='shadow-md shadow-[#9798556a] hover:scale-110 duration-500'>
                    <img  className='w-20 mx-auto' src={Mongo} alt="" />
                    <p className='my-4 font-bold'>MongoDB</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Skills
