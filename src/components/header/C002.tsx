import React from "react";
import { RequireProps, data } from './defaultValue';
import { HeaderProps } from "./types";

function C002({ features = data.features, logoSrc = data.logoSrc }: HeaderProps) {
    const [isOpened, setOpen] = React.useState(false)
    return (
        <header className="pb-6 bg-white lg:pb-0">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                {/* <!-- lg+ --> */}
                <nav className="flex items-center justify-between h-16 lg:h-20">
                    <div className="flex-shrink-0">
                        <a href="#" title="" className="flex">
                            <img className="w-auto h-8 lg:h-10" src={logoSrc} alt="" />
                        </a>
                    </div>

                    <button onClick={()=> setOpen(!isOpened)} type="button" className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                       
                       {!isOpened? <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                        </svg>
                       : <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>}
                    </button>

                    <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
                    {features.map((eachFeature, idx) => {
                                return (<a key={idx} href={eachFeature.href} title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> {eachFeature.title} </a>) 
                    })}
                    </div>

                    <a href="#" title="" className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700" role="button"> Get started now </a>
                </nav>

                {/* <!-- xs to lg --> */}
                {isOpened && <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
                    <div className="flow-root">
                        <div className="flex flex-col px-6 -my-2 space-y-1">
                        {features.map((eachFeature, idx) => {
                                return (
                                    <a href={eachFeature.href} title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> {eachFeature.title} </a>
                                    ) 
                    })}
                        </div>
                    </div>

                    <div className="px-6 mt-6">
                        <a href="#" title="" className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md tems-center hover:bg-blue-700 focus:bg-blue-700" role="button"> Get started now </a>
                    </div>
                </nav>}
            </div>
        </header>
    )
}

C002.propRequire= RequireProps

export default C002