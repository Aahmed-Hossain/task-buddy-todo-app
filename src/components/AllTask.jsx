
'use client'
import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
import { getTask } from '@/utils/getTask';
import { useEffect, useState } from 'react';
// import { axiosPublic } from '@/hooks/getTask'
import clsx from 'clsx';
import { toast } from 'react-toastify';
import axios from "axios";


const AllTask = () => {
    const [tasks, setTasks] = useState([]);
  useEffect(()=> {
    const fetchData = async()=> {
      try{
        const result = await getTask();
      setTasks(result);
      }catch(error){
        console.log(error);
      }
    }
    fetchData();
  },[]);
  
  const handleStatus = (id) => {
     axios.put(`http://localhost:5000/tasks/status/${id}`)
    .then(res=> {
        console.log('status', res.data);
        toast.success(`Status changed successfully`)
    });
    };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:p-6 lg:p-12">
      {
        tasks.map((task, idx)=> (
          <div className='border border-slate-300 rounded-md' key={idx}>
            <h2 style={{ backgroundColor: task.title_color }} className='text-center py-4 rounded-t-md font-bold text-gray-900'>{task.title}</h2>
            <p className='px-2 py-4 h-[20vh]'>{task.description}</p>
          
          <div className='text-center flex justify-around py-3 text-gray-700'>
          {/* status button */}
          <button
          onClick={() => handleStatus(task._id)}
          disabled={task.status === 'Completed'}
           className={clsx('flex items-center gap-1 bg-red-200 hover:bg-red-300 hover:p-2 hover:py-1 hover:rounded px-2 py-1 border border-zinc-200',{
            'bg-blue-200 font-semibold': task.status === 'Completed'
           })}>{task.status}
          </button>

          <button className='flex items-center gap-1 bg-green-100 hover:bg-green-200 hover:p-2 hover:py-1 hover:rounded px-2 py-1 border border-zinc-200'> <span>Status:</span> <span className={clsx(
        'uppercase',
        {
          'text-red-700 font-semibold': task.priority === 'high',
          'text-blue-500 font-semibold':task.priority === 'low',
          'text-orange-400 font-semibold':task.priority === 'medium',
        },
      )}>{task.priority}</span> <  HiDotsVertical/>
          </button>

          </div>
        
          <div className='text-center flex justify-around py-3 text-gray-700'>
              {/* task edit button */}
          <button className='flex items-center gap-1 hover:bg-gray-200 hover:p-2 hover:py-1 hover:rounded px-2 py-1 border border-zinc-200'><FaRegEdit/><span>Edit Task</span></button>
           {/* trash button */}
          <button className='flex items-center gap-1 hover:bg-gray-200 hover:p-2 hover:py-1 hover:rounded px-2 py-1 border border-zinc-200'><MdOutlineDelete/><span>Move to trash</span></button>
          </div>
          </div>
        ))
      }
    </div>
  )
}

export default AllTask