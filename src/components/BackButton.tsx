'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function BackButton() {
    const router = useRouter();
    
    return (
        <button onClick={() => router.back()} className="flex items-center text-amber-500 hover:text-amber-600 border border-gray-100 rounded-full w-max py-3 px-2 shadow-md ">
            <ArrowLeft className="mr-2 w-8 h-8" />
        </button>
    )
}