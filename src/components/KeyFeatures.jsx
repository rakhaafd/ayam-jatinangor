import chefcook from '../assets/Chefcook.json'
import Lottie from 'lottie-react'

const KeyFeatures = () => {
    return (
        <div className='bg-orange-50 py-20' id='about'>
            <div className='flex flex-col lg:flex-row mx-auto max-w-7xl'>
                <div className='lg:w-1/2 flex items-center justify-center'>
                    <Lottie animationData={chefcook} className='w-[500px]' />
                </div>
                <div className='lg:w-1/2 px-6 lg:px-0 flex flex-col space-y-3 lg:space-y-7 justify-center '>
                    <h1 className='text-4xl lg:text-6xl font-bold'>Percaya Kepada <span className='text-red-500'>Kami 💝.</span></h1>
                    <p className='text-gray-700 text-lg'>Masakan kami dibuat oleh chef berpengalaman dengan bahan berkualitas dan bumbu pilihan, menghadirkan cita rasa autentik yang menggugah selera! 🍗🔥</p>
                </div>
            </div>
        </div>
    )
}

export default KeyFeatures