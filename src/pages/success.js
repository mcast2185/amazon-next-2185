import { useRouter } from 'next/router';
import Header from '../components/Header';
import { CheckCircle2 } from 'lucide-react';
import { getSession } from 'next-auth/react';



const Success = () => {
  const router = useRouter();

  return (
    <div className='bg-gray-100 h-screen'>
      <Header/>

      <main className='max-w-screen-lg mx-auto'>
        <div className='flex flex-col p-10 bg-white'>
          <div className='flex items-center space-x-2 mb-5'>
            <CheckCircle2 className='text-white h-[24.5px] bg-green-500 rounded-full' />
            <h1 className='text-3xl'>
              Thank you, your order has been confirmed!
            </h1>
          </div>
          <p className='text-gray-700 text-sm'>
            Thank you for shopping with us. We'll send a confirmation once your 
            item has shipped, if you would like to check the status of your 
            order(s) please press the link below.
          </p>
          <button 
            onClick={() => router.push("/orders")}
            className='button mt-8'
          >
            Go to my orders
          </button>
        </div>
      </main>
    </div>
  )
}

export default Success;


export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session
    }
  };
};