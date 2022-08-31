import React, { useContext } from "react";
import Input from "./Input";
import Output from "./Output";
import SwapButton from "./SwapButton";


const SwapCard = () => {
  const handleSubmit = () => {

  };
  
  return (
    <div className="flex justify-center">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <div className="p-6">
          <div className="flex justify-left">
            <h5 className="text-gray-900 text-xl font-medium mb-2">Dogen Swap</h5>            
          </div>
          <div className="flex justify-left">
            <p className="text-gray-700 text-base mb-4">Trade tokens in an instant</p>
          </div>
          <hr/>
          <br/>
          <Input/>
          <br/>
          <SwapButton/>
          <br/>
          <Output/>
          <button type="button" className=" inline-block px-6 py-2.5 bg-[#AF2DAA] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-pink-700 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-800 active:shadow-lg transition duration-150 ease-in-out">Swap</button>
        </div>
      </div>
    </div>
  )
}

export default SwapCard