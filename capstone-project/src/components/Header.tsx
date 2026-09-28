import { Check, User, Bell } from 'lucide-react'
function Header() {
  return (
    <div className="w-full h-16 bg-white flex justify-between items-center px-4">
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-black flex justify-center items-center">
                <Check color='white' size={'20px'} />
            </div>
            <p>TaskFlow</p>
        </div>

        <div className='flex items-center gap-2'>
            <Bell size={'20px'} color='black' />
            <div className='w-6 h-6 bg-black flex justify-center items-center rounded-full'>
                <User size={'15px'} color='white' />
            </div>
        </div>
    </div>
  )
}

export default Header