
export default function CalendarPatient(){

  return (
    <div className="w-full bg-white rounded-lg px-4 py-3">
    <div className="px-4 flex items-center justify-between space-between">
      <button aria-label="calendar backward" className="focus:text-gray-400 hover:text-gray-400 text-gray-800 ">
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="15 6 9 12 15 18" />
        </svg>
      </button>

      <span className="text-lg font-mediu text-black flex text-center">November 2020</span>
      
      <button aria-label="calendar forward" className="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 "> 
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler  icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="9 6 15 12 9 18" />
          </svg>
      </button>
    </div>
    
    <div className="flex items-center justify-between pt-3 overflow-x-auto">
        <table className="w-full">
            <thead>
                <tr>
                    <th>
                        <div className="w-full flex justify-center">
                            <p className="text-xs font-medium text-center text-[#878787] ">Mon</p>
                        </div>
                    </th>
                    <th>
                        <div className="w-full flex justify-center">
                            <p className="text-xs font-medium text-center text-[#878787] ">Tue</p>
                        </div>
                    </th>
                    <th>
                        <div className="w-full flex justify-center">
                            <p className="text-xs font-medium text-center text-[#878787] ">Wed</p>
                        </div>
                    </th>
                    <th>
                        <div className="w-full flex justify-center">
                            <p className="text-xs font-medium text-center text-[#878787] ">Thu</p>
                        </div>
                    </th>
                    <th>
                        <div className="w-full flex justify-center">
                            <p className="text-xs font-medium text-center text-[#878787] ">Fri</p>
                        </div>
                    </th>
                    <th>
                        <div className="w-full flex justify-center">
                            <p className="text-xs font-medium text-center text-[#878787] ">Sat</p>
                        </div>
                    </th>
                    <th>
                        <div className="w-full flex justify-center">
                            <p className="text-xs font-medium text-center text-[#878787] ">Sun</p>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="pt-6">
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                    </td>
                    <td className="pt-6">
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                    </td>
                    <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                    </td>
                    <td className="pt-6">
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-xs text-black font-medium">1</p>
                        </div>
                    </td>
                    <td className="pt-6">
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-xs text-black font-medium">2</p>
                        </div>
                    </td>
                    <td className="pt-6">
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-xs text-black font-medium">3</p>
                        </div>
                    </td>
                    <td className="pt-6">
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-xs text-black font-medium">4</p>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-xs text-black font-medium">5</p>
                        </div>
                    </td>
                    <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-xs text-black font-medium">6</p>
                        </div>
                    </td>
                    <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-xs text-black font-medium">7</p>
                        </div>
                    </td>
                    <td>
                        <div className="w-full h-full">
                            <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                                <p className="hover:bg-cyan-600 text-xs w-8 h-8 flex items-center justify-center font-medium text-white bg-primary rounded-full">8</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-xs text-black font-medium">9</p>
                        </div>
                    </td>
                    <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-xs text-black font-medium">10</p>
                        </div>
                    </td>
                    <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-xs text-black font-medium">11</p>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-xs text-black font-medium">12</p>
                        </div>
                    </td>
                    <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-xs text-black font-medium">13</p>
                        </div>
                    </td>
                    <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-xs text-black font-medium">14</p>
                        </div>
                    </td>
                    <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-xs text-black font-medium">15</p>
                        </div>
                    </td>
                    <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-xs text-black font-medium">16</p>
                        </div>
                    </td>
                    <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-xs text-black font-medium">17</p>
                        </div>
                    </td>
                    <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-xs text-black font-medium">18</p>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-xs text-black font-medium">19</p>
                        </div>
                    </td>
                    <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-xs text-black font-medium">20</p>
                        </div>
                    </td>
                    <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-xs text-black font-medium">21</p>
                        </div>
                    </td>
                    <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-xs text-black font-medium">22</p>
                        </div>
                    </td>
                    <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-xs text-black font-medium">23</p>
                        </div>
                    </td>
                    <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-xs text-black font-medium">24</p>
                        </div>
                    </td>
                    <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-xs text-black font-medium">25</p>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-xs text-black font-medium">26</p>
                        </div>
                    </td>
                    <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-xs text-black font-medium">27</p>
                        </div>
                    </td>
                    <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-xs text-black font-medium">28</p>
                        </div>
                    </td>
                    <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-xs text-black font-medium">29</p>
                        </div>
                    </td>
                    <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-xs text-black font-medium">30</p>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
  )
}