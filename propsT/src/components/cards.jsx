import React from 'react'

function cards({username, btntext}) {
    
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-green-200 ">
        <img
          src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/6e61b/MainAfter.avif"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400 text-center">
            {username}
          </span>
          <h2 className="text-xl font-semibold text-center tracking-wide">Lorem ipsum dolor</h2>
        </div>
        <p className="text-black text-center ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
        <button className='mt-2 inline-flex cursor-pointer items-center text-sm font-semibold border-2 rounded-2xl p-1 bg-blue-300'>{btntext}</button>
      </div>
  )
}

export default cards