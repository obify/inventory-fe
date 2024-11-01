import React from 'react'

const ModifyLocation = () => {
  return (
    <div className="bg-gray-100 flex p-2 md:p-4">
      <div className="px-8 pt-6 pb-8 mb-4 max-w-md w-full">
        <h1 className="text-center text-2xl font-bold mb-6">Add location</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="locationName">
              Location name
            </label>
            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="locationName" placeholder="Enter location name" />
          </div>
          <div className="mb-4 flex justify-between">
            <div className='block text-gray-700 font-bold'>Location status</div>
            <div>
              <input type="checkbox" className="peer sr-only opacity-0" id="toggle" />
              <label htmlFor="toggle" className="relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-gray-400 px-0.5 outline-gray-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow before:transition-transform before:duration-300 peer-checked:bg-green-500 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-green-500">
                <span className="sr-only">Enable</span>
              </label>
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

export default ModifyLocation