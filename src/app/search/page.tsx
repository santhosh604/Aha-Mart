'use client';

import { Search } from 'lucide-react';
import ShoppingCartView from '@/components/ShoppingCartView';
import BackButton from '@/components/BackButton';
import {useState, useEffect} from 'react';
import SearchPageProducts from '@/components/SearchPageProducts';

export default function SearchPage() {

  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
 
  useEffect(() => {
    let timer = setTimeout(async () => {
        if (search.trim().length < 1) {
           setProducts([])
           return;
        }

        const response = await fetch(`/api/search?q=${search}`);
        const data = await response.json();
        setProducts(data)

    }, 300)
    return () => clearTimeout(timer);

  }, [search])

  return (
    
    <div className="flex flex-col">
        <header className="md:hidden fixed top-0 left-0 w-full flex flex-col px-5 py-3 bg-gray-200 z-50">
            <div className="flex justify-between">
              <BackButton />
              <ShoppingCartView />
            </div>
            <div className=" w-full border border-amber-300 p-3 rounded-lg flex items-center mt-4 gap-2 ">
              <Search className='w-7 h-7 text-amber-400'/>
              <input autoFocus value={search} onChange={(e) => setSearch(e.target.value)} type='search' placeholder='Search for Milk, Eggs and etc..' className='outline-none bg-transparent w-full text-lg'/>
            </div>
          </header>
          <header className="fixed top-0 left-0 w-full px-5 bg-gray-200 z-50 hidden md:flex items-center gap-4 p-4 justify-between">
            <BackButton />
            <div className="w-1/2 border border-amber-300 p-3 rounded-lg flex items-center gap-2">
              <Search className='w-7 h-7 text-amber-400'/>
              <input autoFocus value={search} onChange={(e) => setSearch(e.target.value)} type='search' placeholder='Search for Milk, Eggs and etc..' className='outline-none bg-transparent w-full text-lg'/>
            </div>
            <ShoppingCartView />
          </header>
        <main className='mt-36'>
           <SearchPageProducts products={products} search={search}/>
        </main>
    </div>

  );
}