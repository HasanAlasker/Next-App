import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='flex gap-5 bg-gray-100 p-4 mb-8'>
        <Link href={'/'}>Home</Link>
        <Link href={'/users'}>Users</Link>
        <Link href={'/users/new'}>Add User</Link>
    </div>
  )
}
