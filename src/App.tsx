import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('click me')

  return (
    <div className="bg-white">
      <img src={viteLogo} className='p-6' alt='Vite logo' />
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
          Welcome to Voqet, where dreams come true
        </h2>
        <div className="mt-10 flex items-center gap-x-6">
          <button
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => setCount((count) => count + 1)}
            aria-label='increment'
          >
            Count is {count}
          </button>
          <a className="text-sm/6 font-semibold text-gray-900 cursor-pointer"
          onClick={() => {
            fetch('/api/')
              .then((res) => res.json() as Promise<{ name: string }>)
              .then((data) => setName(data.name))
          }}
          aria-label='get name'
        >
          Name from API is <span aria-hidden="true">→</span> {name}
        </a>
        </div>
      </div>
    </div>
  )
}

export default App
