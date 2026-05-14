import { PlusIcon } from 'lucide-react'
import React from 'react'

function News() {
  return (
    <div>
      <div className='flex items-center justify-between m-6'>
        <h2>News Management</h2>
        <button className='flex items-center gap-4 text-white bg-amber-500 rounded-md py-1 px-3 font-medium'><PlusIcon /> Add New News</button>
      </div>
    </div>
  )
}

export default News