import {FC} from 'react'

const Button= ({text}) => {
  return (
   <button className=' rounded-3xl border p-4  bg-green-600 hover:bg-orange-500   text-white '>{text}</button>
  )
}

export default Button