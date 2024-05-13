import React from 'react'

export default function ProjectInfo(props) {
    const info = props.info;
  return (
    // h-screen w-[40%] fixed right-0 top-0 z-[99]
    <div className='h-full w-full'>
        <div className='h-inherit w-inherit px-2'>
            <div className='float-right pb-3'>
                <span>close</span>
            </div>
            <div>
                <div>
                    <img src={info.imgSrc} alt="" />
                </div>
                <div className='text-3xl font-bold'>{info.name}</div>
                <p className='text-2xl'>{info.description}</p>
            </div>
        </div>
    </div>
  )
}
