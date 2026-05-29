'use client';

import { Search } from 'lucide-react';
import { MapPinHouse } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import ShoppingCartView from './ShoppingCartView';
import {useRouter} from 'next/navigation';

export default function Header() {
  const router = useRouter();

  const handleSearch = () => {
    router.push('/search');
  }

  return (
    <header className="fixed top-0 left-0 w-full flex flex-col px-5 md:px-10 pt-3 bg-gray-100 md:bg-white md:border md:border-gray-300 md:pb-4 z-50">
      <div className="flex justify-between md:items-center">
        <div className='hidden md:block'>
          <h1 className='text-2xl font-bold text-amber-500'>Aha Mart</h1>
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-gray-600'>Location</p>
          <div className='flex flex-row gap-2 items-center'>
            <MapPinHouse className='w-6 h-6 text-amber-400' />
            <h1 className='text-md'>Hyd, 500072</h1>
            <ChevronDown className='w-6' />
          </div>
        </div>
        <div onClick={handleSearch} className=" hidden md:flex w-full border border-amber-300 p-3 rounded-lg shadow-md items-center gap-2 md:w-1/2">
          <Search className='w-7 h-7 text-amber-400'/>
          <input type='search' placeholder='Search for Milk, Eggs and etc..' className='outline-none bg-transparent w-full text-lg'/>
        </div>
        <ShoppingCartView />
      </div>
      <div onClick={handleSearch} className=" w-full border border-amber-300 p-3 rounded-lg flex items-center mt-4 gap-2 md:w-1/2 md:hidden">
        <Search className='w-7 h-7 text-amber-400'/>
        <input  type='search' placeholder='Search for Milk, Eggs and etc..' className='outline-none bg-transparent w-full text-lg'/>
      </div>
    </header>
  );
}


/*
   <header className="md:hidden fixed top-0 left-0 w-full flex flex-col px-5 py-3 bg-gray-200 z-50">
            <div className="flex justify-between">
              <BackButton />
              <ShoppingCartView />
            </div>
            <div className=" w-full border border-amber-300 p-3 rounded-lg flex items-center mt-4 gap-2 ">
              <Search className='w-7 h-7 text-amber-400'/>
              <input value={search} onChange={(e) => setSearch(e.target.value)} autoFocus type='search' placeholder='Search for Milk, Eggs and etc..' className='outline-none bg-transparent w-full text-lg'/>
            </div>
          </header>
          <header className="fixed top-0 left-0 w-full px-5 bg-gray-200 z-50 hidden md:flex items-center gap-4 p-4 justify-between">
            <BackButton />
            <div className="w-1/2 border border-amber-300 p-3 rounded-lg flex items-center gap-2">
              <Search className='w-7 h-7 text-amber-400'/>
              <input value={search} onChange={(e) => setSearch(e.target.value)} autoFocus type='search' placeholder='Search for Milk, Eggs and etc..' className='outline-none bg-transparent w-full text-lg'/>
            </div>
            <ShoppingCartView />
          </header>
*/