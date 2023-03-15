import React from 'react'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import CardBox from './CardBox'
import PiChart from '../components/Charts/Pichart'
import LineChart from '../components/Charts/LineChart'

const CardBoxContent =[
    {
        id:1,
        title:'Revenue',
        amount: '21,827.13',
        percent: 11.4
    },
    {
        id:2,
        title:'Orders',
        amount: '1,758',
        percent: -3.2
    },
    {
        id:3,
        title:'Purchase',
        amount: '7,249.13',
        percent: 5.4
    },
]

const SalesDashboard = () => {
  return (
    <div className='relative h-full flex flex-auto flex-col px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8'>
        <div className='flex flex-col gap-4 h-full'>
            <div className='lg:flex items-center justify-between mb-4 gap-3'>
                <div className='mb-4 lg:mb-0 dark:text-gray-100'>
                    <h3>Sales Overview</h3>
                    <p className='text-gray-500 text-sm dark:text-gray-300'>View your current sales and summary</p>
                </div>
                <div className='flex flex-col lg:flex-row gap lg:items-center gap-3'>
                    <span className='flex w-full relative'>
                        <input className='input h-9 focus:ring-indigo-600 focus-within:ring-indigo-600 focus-within:border-indigo-600 focus:border-indigo-600  focus:outline-none' type='date' />
                        {/* <div className='text-gray-500 input-suffix-end'>
                            <CalendarTodayIcon fontSize='small'/>
                        </div> */}
                    </span>
                    <button className='px-3 py-2 bg-white border border-gray-300 dark:border-gray-700 dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 text-gray-600 dark:text-gray-100 rounded-md h-9'>
                        <span className=' flex items-center'>
                            <FilterAltOutlinedIcon fontSize='small'/>
                            <p className='font-semibold	text-sm'>Filter</p>
                        </span>
                    </button>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {CardBoxContent.map((content)=>(
                    <CardBox key={content.id} title={content.title} percent={content.percent} amount={content.amount}/>
                ))}
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                   <div className='card-content col-span-2'>
                        <div className='p-5'>
                            <div className='flex justify-between items-center'>
                                    <h5 className='text-xl font-semibold'>Sales Report</h5>
                                    <button className='px-3 py-2 bg-white border border-gray-300 dark:border-gray-700 dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 text-gray-600 dark:text-gray-100 rounded-md h-9 items-center flex justify-center'>
                                        <p className='font-semibold text-sm'>Export Report</p>
                                    </button>
                            </div>
                            <div>
                                <LineChart/>
                            </div>
                        </div>
                   </div>
                   <div className='card-content'>
                        <div className='p-5'>
                            <h4>Categories</h4>
                            <div className='mt-6'>
                                <PiChart/>
                            </div>
                        </div>
                   </div>
            </div>
        </div>
    </div>
  )
}

export default SalesDashboard