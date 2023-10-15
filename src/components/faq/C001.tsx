import { RequireProps, data } from './defaultValue';
import { FaqProps } from './types';

const C001 = ({
    title = data.title,
    description = data.description,
    contactLink = data.contactLink,
    queries = data.queries
}: FaqProps) => {
    return (
        <section className="py-10 bg-gray-900 sm:py-16 lg:py-24">
            <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-300">{description}</p>
                </div>

                <div className="grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-16 gap-x-20">
                    {queries && queries.map((each, idx) => {
                        return (
                            <div key={idx} className="flex items-start">
                                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                                    <span className="text-lg font-semibold text-white">?</span>
                                </div>
                                <div className="ml-4">
                                    <p className="text-xl font-semibold text-white">{each.title}</p>
                                    <p className="mt-4 text-base text-gray-400">{each.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="flex items-center justify-center mt-12 md:mt-20">
                    <div className="px-8 py-4 text-center bg-gray-800 rounded-full">
                        <p className="text-gray-50">Didn’t find the answer you are looking for? <a href={contactLink} title="" className="text-yellow-300 transition-all duration-200 hover:text-yellow-400 focus:text-yellow-400 hover:underline">Contact our support</a></p>
                    </div>
                </div>
            </div>
        </section>

    )
}

C001.propRequire = RequireProps

export default C001