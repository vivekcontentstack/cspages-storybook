import { RequireProps, data } from './defaultValue';
import { FaqProps } from './types';

const C002 = ({
    title = data.title,
    description = data.description,
    queries = data.queries,
    contactLink = data.contactLink
}: FaqProps) => {
    return (
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">{title}</h2>
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">{description}</p>
                </div>

                <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                    {
                        queries?.map((each, idx) => {
                            return (
                                <div key={idx} className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
                                    <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
                                        <span className="flex text-lg font-semibold text-black"> {each.title} </span>

                                    </button>

                                    <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                                        <p>{each.description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }


                   
                </div>

                <p className="text-center text-gray-600 textbase mt-9">Didn’t find the answer you are looking for? <a href={contactLink} title="" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Contact our support</a></p>
            </div>
        </section>

    )
}

C002.propRequire = RequireProps

export default C002