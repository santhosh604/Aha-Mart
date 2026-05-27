"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import { House, LayoutGrid, Heart, CircleUserRound } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const isActive = "text-green-500";
  const isInactive = "text-amber-500";
  return (
    <div className="fixed bottom-4 left-0 w-full z-50">
      <nav className="mx-4 border border-amber-200 shadow-xl py-3 px-5 rounded-4xl backdrop-blur-2xl">
        <div className="text-amber-500 flex justify-between">
          <Link href="/" className={`flex flex-col items-center hover:text-green-500 ${pathname === '/' ? isActive : isInactive}`}>
            <House className="w-8 h-8"/>
            <h1 className="font-bold text-sm">Home</h1>
          </Link>
          <Link href="/categoriesPage" className={`flex flex-col items-center hover:text-green-500 ${pathname === '/categoriesPage' ? isActive : isInactive}`}>
            <LayoutGrid className="w-8 h-8" />
            <h1 className="font-bold text-sm">Categories</h1>
          </Link>
          <Link href="/favoritesPage" className={`flex flex-col items-center hover:text-green-500 ${pathname === '/favoritesPage' ? isActive : isInactive}`}>
            <Heart className="w-8 h-8" />
            <h1 className="font-bold text-sm">Favorites</h1>
          </Link>
          <Link href="/profilePage" className={`flex flex-col items-center hover:text-green-500 ${pathname === '/profilePage' ? isActive : isInactive}`}>
            <CircleUserRound className="w-8 h-8 " />
            <h1 className="font-bold text-sm">Profile</h1>
          </Link>
        </div>
      </nav>
    </div>
  );
}