import Header from "./components/Header"
import Result from "./components/Result"
import Body from "./components/Body"
import Footer from "./components/Footer"

function App(){
    return (
        <div className="max-w-full w-screen h-screen bg-gradient-to-r from-slate-100 to-slate-300">
            <div className="h-5/6">
                <div className="flex items-center justify-center sm:pt-4 pt-12">
                    <Header/>
                </div>
                <div className="flex items-center justify-center mt-4">
                    <Result />
                </div>
                <div className="flex items-center justify-center mt-6">
                    <Body />
                </div>
            </div>
            <div className="h-1/6 bg-black">
                <Footer />
            </div>
            
        </div>
    )

}

export default App