"use client";

import React from 'react'
import { MainNav } from './main-nav'
import { WalletConnect } from './wallet-connect'
import { UserNav } from './user-nav'
import { Button } from '../ui/button'
import { useSearchParams } from 'next/navigation';

const Navbar = () => {
  const searchParams = useSearchParams();
  const address = searchParams.get('address');

  return (
    <div>
        <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-between">
            <div className="container flex h-16 items-center">
                <MainNav />
            </div>
            <div className="mx-10 flex items-center space-x-4">
              {address && <Button className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">Start Buying</Button>}
              <WalletConnect />
              <UserNav />
            </div>
        </header>
    </div>
  )
}

export default Navbar