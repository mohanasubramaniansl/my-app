import { useState } from 'react'
import './App.css'
import './index.css'
import React from "react";
import type { CSSProperties } from "react";
import type * as CSS from "csstype";

type CSSKey = keyof CSS.Properties;
type CSSValue<K extends CSSKey> = CSS.Properties[K];

type PositionValue = CSSValue<"position">;
type bt={stle:CSSProperties ,func:Function}

function App() {
  const [clicked, setClicked] = useState<PositionValue | undefined>(undefined)

  return (
    <>
      <div className='outerspace flex flex-col gap-[3vh] items-center'>
        <nav className='bg-pink-700 p-4 flex justify-center gap-4 flex-wrap w-full'>
          <button className='rounded-lg px-2 basis-[20%] shrink-0 text-center'>All</button>
          <button className='rounded-lg px-2 basis-[20%] shrink-0 text-center'>Completed</button>
          <button className='rounded-lg px-2 basis-[20%] shrink-0 text-center'>Pending</button>
          <button className='rounded-lg px-2 basis-[20%] shrink-0 text-center' >Deleated</button>
        </nav>
        <input type="text" placeholder='Set the task here' className='text-center w-[50%]'/>
        <p className='read-the-doc'>Schudule your day and be productive</p>
        <table className='m-1 border-2'>
          <tr>
            <th>S.No</th>
            <th>Tasks</th>
            <th></th>
          </tr>
          <tr className='border-t'>
            <td>1.</td>
            <td>Task number 1 that I needed to finish on time here the real night manner comes it is working alright and I am going to add as much as possible to this</td>
            <td><Menubutton stle={{position:clicked}} onClick={() =>setClicked("relative")}></Menubutton></td>
          </tr>
          <div className='flex flex-col bg-red-600 text-gray-200 absolute'>
            <div>completed</div>
            <div>delete</div>
          </div>
        </table>
      </div>
      
    </>
  )
}


function Menubutton({stle,func}:bt){
  return <div onClick={()=>{func('relative')}} style={stle} className='rounded-full flex flex-col justify-evenly items-center bg-slate-500 w-7 h-7'>
            <div className='rounded-full bg-white w-0.5 h-0.5'></div>
            <div className='rounded-full bg-white w-0.5 h-0.5'></div>
            <div className='rounded-full bg-white w-0.5 h-0.5'></div>
        </div>
}

export default App
