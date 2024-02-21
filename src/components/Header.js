import Image from 'next/image';
import SearchBar from './SearchBar';
import { MenuIcon, ShoppingCart } from 'lucide-react';
import {getSession, signIn, signOut, useSession} from 'next-auth/react';
import { useRouter } from 'next/router';
import {useSelector} from 'react-redux';
import { selectItems } from '../slices/basketSlice';


const Header = () => {
  const {data: session, status} = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <header>
      <div className='flex items-center bg-amazon_blue p-2 gap-2 flex-grow py-1'>
        <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
          <Image
            onClick={() => router.push('/')}
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit='contain'
            className='cursor-pointer'
          />
        </div>
        <SearchBar/>
        <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
          <div onClick={status === "unauthenticated" ? signIn : signOut} className='link'>
            <p>
              {status === "authenticated" ? `Hello, ${session.user.name}`: "Sign in"}
            </p>
            <p className='font-extrabold md:text-sm'>Account & List</p>
          </div>
          <div onClick={() => session && router.push('/orders')} className='cursor-pointer link'>
            <p>Returns</p>
            <p className='font-extrabold md:text-sm'>& Orders</p>
          </div>
          <div onClick={() => router.push('/checkout')} 
            className='link relative flex items-center'
          >
            <span
              className='absolute top-0 right-0 md:right-10 h-4 w-4 
              bg-yellow-400 text-center rounded-full text-black font-bold'>
              {items.length}
            </span>
            <ShoppingCart className='h-10 w-9'/>
            <p className='hidden md:inline font-extrabold md:text-sm p-0.5 mt-2'>Basket</p>
          </div>
        </div>
      </div> 
      <div className='flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm '>
        <p className='link flex items-center'>
          <MenuIcon className='h-6 mr-2'/>
          All
        </p>
        <p className='link'>Prime Video</p>
        <p className='link'>Amazon Business</p>
        <p className='link'>Today's Deals</p>
        <p className='hidden lg:inline-flex'>Electronics</p>
        <p className='hidden lg:inline-flex'>Food & Groceries</p>
        <p className='hidden lg:inline-flex'>Prime</p>
        <p className='hidden lg:inline-flex'>Buy Again</p>
        <p className='hidden lg:inline-flex'>Shopper Toolkit</p>
        <p className='hidden lg:inline-flex'>Health & Personal Care</p>
      </div>
    </header>
  )
}

export default Header;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session
    }
  }
}


  // {status === "authenticated" && (
  //             <div className=''>
  //               <p>Hello {session.user.name}</p>
  //               <p className='font-extrabold md:text-sm'>Account & List</p>
  //             </div>

  //           ) (
  //             <div onClick={signIn} className='link'>
  //               <p className='text-xs font-medium'>Sign In</p>
  //               <p className='font-extrabold md:text-sm'>Account & List</p>
  //             </div>
  //           )}