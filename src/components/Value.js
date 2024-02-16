function Value({value, onChange}){
    
    return (
            <div className='text-center pt-4 '>
                <p className='pr-4 text-2xl'>Value: <output>{value}</output></p>
                <input className="w-48" type='range' max={18} min={6} value={value} onChange={onChange}/>
            </div>
    )
}
export default Value