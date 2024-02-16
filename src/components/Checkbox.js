
import { useState } from "react";

export default function Checkbox({click}) {
    const [conditions, setConditions] = useState({
      Lowercase: true,
      Uppercase: true,
      Numbers: true,
      Symbols: true,
    });
  
    function handleChange(key) {
      setConditions((prev) => ({ ...prev, [key]: !prev[key] }));
    }
   
    function onSubmit(event) {
      event.preventDefault();
      click(conditions)
    }
    
    return (
        <div>
            <div>
                <form className="sm:flex sm:justify-center sm:items-center sm:pt-4">
                    {Object.entries(conditions).map(([key, value]) => (
                    <div key={key} className="flex mt-2 sm:pl-4 sm:pr-4 sm:pb-4">
                        <p className="text-xl pr-2 pl-2">{key}:</p>
                        <input
                        className="w-4"
                        checked={conditions[key]}
                        onChange={() => handleChange(key)}
                        type="checkbox"
                        />
                    </div>
                    ))}
                </form>
            </div>
            <div className="w-full flex justify-center items-center mt-4">
                <button onClick={onSubmit} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Generate</button>
            </div>
        </div>        
    );
  }