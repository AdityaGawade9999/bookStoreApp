import React from 'react'

function Cards({item}) {
  return (
    <div>
        <div className='mt-4 my-3 p-3'>
            <div className="card bg-zinc-100 w-92 shadow-xl  m-4 pt-2 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white">
              <figure>
                  <img
                  src={item.image}
                  alt="Shoes" className='h-44' />
              </figure>
              <div className="card-body">
                  <h2 className="card-title">
                  {item.name}
                  <div className="badge badge-secondary">{item.category}</div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-between">
                  <div className="badge badge-outline p-4">Rs.{item.price}</div>
                  <div className="badge badge-outline hover:bg-pink-500 hover:text-white p-4 ">Buy Now</div>
                  </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Cards