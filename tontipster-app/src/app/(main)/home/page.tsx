"use client"
import React from 'react';
import Link from "next/link";


export default function Matches() {
  return (
    <main className='flex min-h-screen flex-col text-sm items-start px-4'>
      <div className='w-full h-full'>
        <div
          style={{ backgroundImage: `url(/assets/ronaldo.jpeg)` }}
          className='w-full bg-cover bg-center rounded-lg p-4 my-8'
        >
          <div className='h-52 flex flex-col justify-between'>
            <div className='flex flex-row justify-between items-center'>
              <h3>Tomorrow at 5:30pm</h3>
              <Link href="/bets/open-bets">
                <button className='bg-[#422479] hover:bg-[#422479] text-white font-bold p-2 rounded-lg'>
                  View Open Bets
                </button>
              </Link>
            </div>
            <div>
              <h2 className='text-xl'>Brigton</h2>
              <h2 className='text-xl'>Manchester City</h2>
            </div>
          </div>
        </div>
        <Link href="/home/upcoming-matches">
        <div
          style={{ backgroundImage: `url(/assets/ronaldo.jpeg)` }}
          className='w-full bg-cover bg-center rounded-lg p-4 my-8'
        >
          <div className='flex flex-col justify-between'>
            <div>
              <h2 className='text-xl'>Football</h2>
            </div>
          </div>
        </div>
        </Link>
      </div>
    </main>
  )
}
