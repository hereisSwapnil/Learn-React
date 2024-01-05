import { useState, useEffect } from 'react'
import './App.css'
import { useCallback } from 'react';
import { useRef } from 'react';

function App() {

  const passwordRef = useRef(null)

  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);


  const passwordGenerator = useCallback(() => {
    let password_ = ""
    let passwordString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) {
      passwordString += "0123456789";
    } if (characterAllowed) {
      passwordString += "!@#$%^&*()_+[]{}|;:,.<>?/";
    }
    for (let i = 0; i < length; i++) {
      let ch_index = Math.floor(Math.random() * (passwordString.length) + 1);
      password_ += passwordString.charAt(ch_index);
    }
    setPassword(password_)

  }, [length, password, numberAllowed, characterAllowed, setNumberAllowed, setCharacterAllowed])

  useEffect(() => {
    passwordGenerator()
  }, [length, setPassword, numberAllowed, characterAllowed])

  const copyPass = useCallback(() => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  })
  return (
    <>
      <div className='flex flex-col justify-center text-center'>
        <h1 className='my-[60px] text-[32px] text-white'>Password Generator</h1>
        <div className='w-[40%] align-middle mx-auto bg-[#D9D9D990] p-[75px] rounded-[30px]'>
          <input type="text" className='w-full h-[105px] rounded-[20px] bg-[#D9D9D990] text-[32px] focus:outline-none px-[20px]' value={password} ref={passwordRef} readOnly />
          <p className='text-start mt-[20px] font-bold text-[24px]'>Length: {length}</p>
          <input type="range" min={6} value={length} max={20} className='text-start text-[24px] w-full mt-[20px] accent-[#161C3A]' onChange={e => { setLength(e.target.value) }} />
          <label className='cursor-pointer label flex align-middle'>
            <p className='text-start mt-[20px] font-bold text-[24px] mr-[20px]'>Characters:</p>
            <input type="checkbox" className="checkbox checkbox-info mt-[20px] w-[20px]" defaultChecked={characterAllowed} onChange={() => setCharacterAllowed(prev => !prev)} />
          </label>
          <label className='cursor-pointer label flex align-middle'>
            <p className='text-start mt-[20px] font-bold text-[24px] mr-[20px]'>Numbers:</p>
            <input type="checkbox" className="checkbox checkbox-info mt-[20px] w-[20px]" defaultChecked={numberAllowed} onChange={() => setNumberAllowed(prev => !prev)} />
          </label>
          <button className='bg-[#2D657F80] text-[32px] py-[20px] px-[70px] rounded-[20px] text-white font-light mt-[20px]' onClick={copyPass} >COPY</button>
        </div>
      </div>
      {/* <div className='text-center mt-10'>
        <h1 className='mb-10 text-2xl text-white font-bold'>Password Generator</h1>
        <div class="mx-auto max-w-xs flex">
          <input type="text" class="block w-[100vw] rounded-2xl border-gray-300 shadow-sm px-5 py-2 text-black rounded-r-none" value={password} ref={passwordRef} readOnly />
          <button className='block w-full rounded-2xl rounded-l-none border-gray-300 shadow-sm px-5 py-2 text-white bg-blue-600 hover:bg-blue-700' onClick={copyPass}>Copy</button>
        </div>
        <div className='flex text-center justify-center mt-5 gap-4'>
          <div className="form-control">
            <label className="cursor-pointer label">
              <input type="checkbox" className="checkbox checkbox-info" defaultChecked={numberAllowed} onChange={() => setNumberAllowed(prev => !prev)} />
              <span className="label-text ml-5 text-white" >Numbers</span>
            </label>
          </div>
          <div className="form-control">
            <label className="cursor-pointer label">
              <input type="checkbox" className="checkbox checkbox-info" defaultChecked={characterAllowed} onChange={() => setCharacterAllowed(prev => !prev)} />
              <span className="label-text ml-5 text-white" >Characters</span>
            </label>
          </div>
        </div>
        <input type="range" min={6} max={20} value={length} className="range range-info w-[20%] ml-8 mt-8" onChange={e => { setLength(e.target.value) }} />
        <span className="label-text ml-5 text-white" >Length: {length}</span>
      </div> */}
    </>
  )
}

export default App
