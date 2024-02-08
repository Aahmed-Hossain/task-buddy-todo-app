// 'use client'
// import { useEffect, useState } from 'react';
// import { allTask } from './../data';
// import { getTask } from '@/utils/getTask';
// export default function AllTask () {
//   // const [tasks, setTasks] = useState([]);
//   // useEffect(()=> {
//   //   const fetchData = async()=> {
//   //     try{
//   //       const result = await getTask();
//   //     setTasks(result);
//   //     }catch(error){
//   //       console.log(error);
//   //     }
//   //   }
//   //   fetchData();
//   // },[]);
//   console.log(tasks);
//     return (
//       <main className="">
//       <div>
//         <h2>{tasks.length}</h2>
//         {
//             allTask.map((task, _id)=>())
//         }
//       </div>
//       </main>
//     );
//   }
import { getTask } from '@/utils/getTask'
import React from 'react'

const AllTask = async() => {
  const tasks = await getTask();
  console.log(tasks);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:p-6 lg:p-12">
      {
        tasks.map((task, _id)=> (
          <div className='border border-slate-300 rounded-md' key={_id}>
            <h2 style={{ backgroundColor: task.title_color }} className='text-center py-4 rounded-t-md font-bold text-gray-900'>{task.title}</h2>
            <p className='px-2 py-4 h-[20vh]'>{task.description}</p>
          <div className='text-center flex justify-around py-3 text-gray-700'>
          <button className='bg-red-200 hover:bg-red-300 px-2 py-1 rounded-full'>{task.status}</button>
          <button className='bg-green-200 px-3 py-1 font-md rounded-full hover:bg-green-300'>{task.priority}</button>
          </div>
          </div>
        ))
      }
    </div>
  )
}

export default AllTask