import React, { useState } from 'react'
import Select from 'react-select';

const ModifyProduct = () => {

  const[categories, setCategories] = useState([{value: 11, label: 'Bread'},{value: 22, label: 'Oil'}, {value: 33, label: 'Meat'}])
  const[locations, setLocations] = useState([{value: 11, label: 'New York'},{value: 22, label: 'California'}, {value: 33, label: 'Los Angeles'}])

  const setUserChoice = (choice)=>{
    console.log(choice);
  }
  return (
    <div className="bg-gray-100 flex p-2 md:p-4">
      <div className="px-8 pt-6 pb-8 mb-4 max-w-md w-full">
        <h1 className="text-center text-2xl font-bold mb-6">Add product</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="productName">
              Product name
            </label>
            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="productName" placeholder="Enter product name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="productQty">
              Product quantity
            </label>
            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="productQty" placeholder="Enter product quantity" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="productPrice">
              Product unit price
            </label>
            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="productPrice" placeholder="Enter product unit price" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="prodCategory">
              Product category
            </label>
            <Select required options={categories} onChange={(choice) => setUserChoice(choice)} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="prodCategory">
              Store location
            </label>
            <Select required options={locations} onChange={(choice) => setUserChoice(choice)} />
          </div>
          <div className="mb-4 flex justify-between">
            <div className='block text-gray-700 font-bold'>Product status</div>
            <div>
              <input type="checkbox" className="peer sr-only opacity-0" id="toggle" />
              <label htmlFor="toggle" className="relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-gray-400 px-0.5 outline-gray-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow before:transition-transform before:duration-300 peer-checked:bg-green-500 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-green-500">
                <span className="sr-only">Enable</span>
              </label>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="mx-auto w-full max-w-[550px] bg-white">
              <form className="py-4 px-9">
                <div className="mb-6 pt-4">
                  <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                    Upload Product Images
                  </label>
                  <div className="mb-8">
                    <input type="file" name="file" id="file" className="sr-only" />
                    <label htmlFor="file" className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center">
                      <div>
                        <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                          Drop files here
                        </span>
                        <span className="mb-2 block text-base font-medium text-[#6B7280]">
                          Or
                        </span>
                        <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                          Browse
                        </span>
                      </div>
                    </label>
                  </div>
                  <div className="mb-5 rounded-md bg-[#F5F7FB] py-4 px-8">
                    <div className="flex items-center justify-between">
                      <span className="truncate pr-3 text-base font-medium text-[#07074D]">
                        product-image-1.png
                      </span>
                      <button className="text-[#07074D]">
                        <svg width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z" fill="currentColor" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z" fill="currentColor" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="rounded-md bg-[#F5F7FB] py-4 px-8">
                    <div className="flex items-center justify-between">
                      <span className="truncate pr-3 text-base font-medium text-[#07074D]">
                      product-image-2.png
                      </span>
                      <button className="text-[#07074D]">
                        <svg width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z" fill="currentColor" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z" fill="currentColor" />
                        </svg>
                      </button>
                    </div>
                    <div className="relative mt-5 h-[6px] w-full rounded-lg bg-[#E2E5EF]">
                      <div className="absolute left-0 right-0 h-full w-[75%] rounded-lg bg-[#6A64F1]" />
                    </div>
                  </div>
                </div>
                <div>
                  <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                    Send File
                  </button>
                </div>
              </form>
            </div>
          </div>

          <button className="bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default ModifyProduct