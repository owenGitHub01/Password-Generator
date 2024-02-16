import { useState } from "react"
import Shuffle from "./Shuffle"

function Result(){

    return (
        <div className="flex w-5/6 h-12 outline outline-2 rounded sm:w-1/3">
            <h1 id="result-target" className="text-left sm:w-5/6 w-5/6 pl-2 mt-auto mb-auto text-xl sm:text-2xl">Password Generator</h1>
            <button onClick={() => {navigator.clipboard.writeText(document.getElementById('result-target').textContent)}} id="result-copy" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded h-4/5 mb-auto mt-auto sm:w-16">Copy</button>
        </div>
    )
}

export default Result