
export default function BarraNewUser() {
  return (
    <header className="flex justify-between items-center py-5 px-6 border-b border-slateBorder">
        <div className="flex">
            <img className='w-7 mr-1' src="./logo.svg" alt="logo" />
            <h2 className='text-primary font-medium text-3xl'>Healthi</h2>
        </div>
        <div className="flex items-center gap-3 mr-5">
            <a href="text-base font-medium">Go Pro</a>
            <div className="flex gap-[10px]">
            <a href="/login" className="text-base font-medium text-primary px-5 py-[14px] hover:underline">Login</a>
            <a href="/signup" className="text-base font-medium text-white px-[75px] py-[14px] bg-primary rounded-md hover:bg-cyan-800">Register</a>
            </div>
        </div>
    </header>
  )
}
