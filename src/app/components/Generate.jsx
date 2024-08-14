"use client"


import React from 'react'

function Generate() {
  return (
    <div>
     <div className="bg-white flex px-1 py-1 rounded-full border border-blue-500 overflow-hidden max-w-md mx-auto font-[sans-serif]">
        <input type='email' placeholder='Search Something...' class="w-full outline-none bg-white pl-4 text-sm" />
        <button type='button'
          className="bg-blue-600 hover:bg-blue-700 transition-all text-white text-sm rounded-full px-5 py-2.5">Search</button>
      </div>

    </div>
  )
}

export default Generate