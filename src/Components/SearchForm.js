import React, { useState } from 'react'

function SearchForm() {
    const [message,setMessage]=useState("")
    const [result ,setResult] = useState(null)
    const [error,setError]=useState("")
    const [loading,setLoading]=useState(false)
    const [number,setNumber]=useState("")

    const  updateMessage=(e)=>{
      setMessage(e.target.value)
     
    }

    const handleClick=()=>{
      if (message.slice(0,4)=="0702"){
        setNumber(message.slice(0,5))
      }
      else setNumber(message.slice(0,4))
      setLoading(true)
      setError("")
      setResult("")
        fetch(`https://sim-checker.vercel.app/phone_number/find/${number}/`)
         .then(res=>res.json())
         .then(data=>{
          !data.data ? setError(data): setResult(data.data)
          setLoading(false) })
        .catch(err=>{
          setError(err)
          setLoading(false)
    })
    }
  return (
    <div className='md:w-[70%] mx-auto grid gap-2 my-20 text-center'>
         <h1 className='text-[2.5em]'>Discover Your Sim</h1>
         <h5 className='text-light_blue'>Find the Mobile Operators of your phone number easily</h5>
         <div className='md:flex gap-y-5 gap-5 mt-5 justify-center'>
                
                  <input
                  className='px-4 py-2 mb-5 rounded-md outline-none md:w-[60%] w-full text-dark_purple'
                    onChange={updateMessage}
                    value={message}
                      type="text"
                      placeholder="Enter your phone number"

                  />
                <div>
                <button
                      className='bg-dark_purple px-5 py-2 rounded-md'
                      onClick={handleClick}
                  >
                      Find Sim
                  </button>
                </div>
            </div>
           
         {loading&& <p>Loading...</p>}
          {result &&
          <p className='text-3xl'>{result[0].sim.name}</p>
             }
             {
              error && 
               <p>{error.message}</p>
             }
    </div>
  )
}

export default SearchForm