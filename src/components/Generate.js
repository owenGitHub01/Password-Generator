import { low, upp, num, sym } from "./Data"
import Shuffle from "./Shuffle"

function Generate({Lowercase, Uppercase, Numbers, Symbols}, value){
    let displayArray = []
    let displayWord = ''
    const resultTarget = document.getElementById('result-target')

    function one(chosen, num){
        displayArray = []
        console.log(displayArray)
        for(let i=0; i<num; i++){
            let n = Math.floor(Math.random() * chosen.length)
            displayArray.push(chosen[n])
        }
        console.log(`The display array is: ${displayArray}`)
        return displayArray
    }
    function two(chosen1, chosen2, num){
        displayArray = []
        let n1 = 0
        let n2 = 0

        if(num % 2 === 0){
            n1 = value / 2
            n2 = value / 2
        } else {
            n1 = Math.floor(value / 2) + 1
            n2 = Math.floor(value / 2)
        }

        for(let i=0; i<n1; i++){
            let n = Math.floor(Math.random() * chosen1.length)
            displayArray.push(chosen1[n])
        }
        for(let i=0; i<n2; i++){
            let n = Math.floor(Math.random() * chosen2.length)
            displayArray.push(chosen2[n])
        }
    }
    function three(chosen1, chosen2, chosen3, num){
        displayArray = []
        let n1 = 0
        let n2 = 0
        let n3 = 0

        if(num % 3 === 0){
            n1 = num / 3
            n2 = num / 3
            n3 = num / 3
        } else if(num % 3 === 1){
            n1 = Math.floor(num / 3) + 1
            n2 = Math.floor(num / 3)
            n3 = Math.floor(num / 3)
        } else if(num % 3 === 2){
            n1 = Math.floor(num / 3) + 1
            n2 = Math.floor(num / 3) + 1
            n3 = Math.floor(num / 3)
        }

        for(let i=0; i<n1; i++){
            let n = Math.floor(Math.random() * chosen1.length)
            displayArray.push(chosen1[n])
        }
        for(let i=0; i<n2; i++){
            let n = Math.floor(Math.random() * chosen2.length)
            displayArray.push(chosen2[n])
        }
        for(let i=0; i<n3; i++){
            let n = Math.floor(Math.random() * chosen3.length)
            displayArray.push(chosen3[n])
        }
    }
    function four(chosen1, chosen2, chosen3, chosen4, num){
        displayArray = []
        let n1 = 0
        let n2 = 0
        let n3 = 0
        let n4 = 4

        if(num % 4 === 0){
            n1 = num / 4
            n2 = num / 4
            n3 = num / 4
            n4 = num /4
        } else if(num % 4 === 1){
            n1 = Math.floor(num / 4) + 1
            n2 = Math.floor(num / 4)
            n3 = Math.floor(num / 4)
            n4 = Math.floor(num / 4)
        } else if(num % 4 === 2){
            n1 = Math.floor(num / 4) + 1
            n2 = Math.floor(num / 4) + 1
            n3 = Math.floor(num / 4)
            n4 = Math.floor(num / 4)
        } else if(num % 4 === 3){
            n1 = Math.floor(num / 4) + 2
            n2 = Math.floor(num / 4) + 1
            n3 = Math.floor(num / 4)
            n4 = Math.floor(num / 4)
        }

        for(let i=0; i<n1; i++){
            let n = Math.floor(Math.random() * chosen1.length)
            displayArray.push(chosen1[n])
        }
        for(let i=0; i<n2; i++){
            let n = Math.floor(Math.random() * chosen2.length)
            displayArray.push(chosen2[n])
        }
        for(let i=0; i<n3; i++){
            let n = Math.floor(Math.random() * chosen3.length)
            displayArray.push(chosen3[n])
        }
        for(let i=0; i<n4; i++){
            let n = Math.floor(Math.random() * chosen4.length)
            displayArray.push(chosen4[n])
        }
    }

    // Check if sll 4 are checked
    if(Lowercase && Uppercase && Numbers && Symbols){
        four(low, upp, num, sym, value)
    }

    // Check if only 3 are checked
    if(Lowercase && Uppercase && Numbers && !Symbols){
        three(low, upp, num, value)
    }
    if(Lowercase && Uppercase && !Numbers && Symbols){
        three(low, upp, sym, value)
    }
    if(Lowercase && !Uppercase && Numbers && Symbols){
        three(low, num, sym, value)
    }
    if(!Lowercase && Uppercase && Numbers && Symbols){
        three(upp, num, sym, value)
    }

    // Check if only 2 are checked
    if(Lowercase && Uppercase && !Numbers & !Symbols){
        two(low, upp, value)
    }
    if(Lowercase && !Uppercase && Numbers && !Symbols){
        two(low, num, value)
    }
    if(Lowercase && !Uppercase && !Numbers && Symbols){
        two(low, sym, value)
    }
    if(!Lowercase && Uppercase && Numbers && !Symbols){
        two(upp, num, value)
    }
    if(!Lowercase && Uppercase && !Numbers && Symbols){
        two(upp, sym, value)
    }
    if(!Lowercase && !Uppercase && Numbers && Symbols){
        two(num, sym, value)
    }
    // Check if only 1 is ticked
    if(Lowercase && !Uppercase && !Numbers && !Symbols){
        one(low, value)
    }
    if(!Lowercase && Uppercase && !Numbers && !Symbols){
        one(upp, value)
    }
    if(!Lowercase && !Uppercase && Numbers && !Symbols){
        one(num, value)
    }
    if(!Lowercase && !Uppercase && !Numbers && Symbols){
        one(sym, value)
    }
    // Shuffle arra and display it on result
    displayWord = Shuffle(displayArray)
    resultTarget.textContent = displayWord
}

export default Generate