'use client'
import Link from "next/link";
import { faClockFour,faArrowCircleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const bets = [
  {
    id: 1,
    game: "Patriots vs. Bills",
    odds: "1.5",
    amount: "$100",
    potentialWinnings: "$200",
    description: "This is a test bet",
    expiryDate: "2023-05-01",
  },
  {
    id: 2,
    game: "Packers vs. Bears",
    odds: "1.5",
    amount: "$100",
    potentialWinnings: "$200",
    description: "This is a test bet",
    expiryDate: "2023-05-01",
  },
  {
    id: 3,
    game: "Cowboys vs. Eagles",
    odds: "1.5",
    amount: "$100",
    potentialWinnings: "$200",
    description: "This is a test bet",
    expiryDate: "2023-05-01",
  }
]


export default function Bet() {
  return (
    <main className="bg-black text-white px-4">
      <div className="flex flex-row items-center justify-between font-bold p-2 w-full rounded-lg mt-6">
        <h2 className='text-lg font-semibold text-gray-400'>Open Bets</h2>
      </div>
      <div className='flex-grow overflow-y-auto mt-4 mb-20'>
        {bets.map((bet, index)=>(
          <div key={index} className='border border-gray-800 bg-[#1F2937] rounded-lg p-4 mb-2 w-full'>
            <div className='flex justify-between items-center mb-2'>
              <div className='flex items-left'>
                <span className='font-bold'>{bet.game}</span>
              </div>
              <button className='bg-black hover:bg-[#422479] text-white font-bold py-1 px-2 text-sm rounded-lg'>
                Place Bet
              </button>
            </div>
            <div className='flex items-center justify-between text-[#D5B3FB] mb-1'>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faClockFour} />
                <p className="ml-1">{bet.expiryDate}</p>
              </div>
              <div>
                <p>{`Odds: ${bet.odds}`}</p>
              </div>
            </div>
            <div className='flex items-center justify-between text-sm'>
              <div>
                <p className="text-[#7F8793]">{`Stake: ${bet.amount}`}</p>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon color="#4AD77E" icon={faArrowCircleRight} />
                <p className="text-[#4AD77E] ml-1">{`Potential win: ${bet.potentialWinnings}`}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="fixed bottom-0 left-0 right-0 px-4 pb-6 pt-1 bg-black">
      </div>
    </main>
  )
}