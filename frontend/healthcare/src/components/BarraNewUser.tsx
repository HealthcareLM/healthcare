
export default function BarraNewUser() {
  return (
    <header className="flex justify-between items-center py-5 px-6 border-b border-slateBorder flex-col md:flex-row ">
        <a className="flex my-4 md:my-0 cursor-pointer" href="/">
            <img className='w-7 mr-1' src="./logo.svg" alt="logo" />
            <h2 className='text-primary font-medium text-3xl'>Healthi</h2>
        </a>
        <div className="flex items-center gap-3 md:mr-5 flex-col md:flex-row">
            <a className="text-center text-base font-medium hidden md:flex hover:underline cursor-pointer">Go Pro</a>
            <div className="flex gap-[10px] flex-col md:flex-row">
              <a href="/login" className="text-center text-base font-medium text-primary px-5 py-[14px] hover:underline">Login</a>
              <a href="/signup" className="text-base font-medium text-white px-[75px] py-[14px] bg-primary rounded-md hover:bg-cyan-800">Register</a>
            </div>
        </div>
    </header>
  )
}
