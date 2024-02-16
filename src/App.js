import Header from "./components/Header"
import Result from "./components/Result"
import Body from "./components/Body"

function App(){
    return (
        <div className="max-w-full w-screen h-screen">
            <div className="flex items-center justify-center">
                <Header/>
            </div>
            <div className="flex items-center justify-center mt-4">
                <Result />
            </div>
            <div className="flex items-center justify-center mt-6">
                <Body />
            </div>
        </div>
    )

}

export default App