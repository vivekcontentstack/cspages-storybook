import { RequireProps, data } from './defaultValue';
import { FeatureProps } from './types';

const C002 = ({
    shortTitle = data.shortTitle,
    title = data.title,
    description = data.description,
    items = data.items,
}:FeatureProps) => {
    return (
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-xl mx-auto text-center">
                    <div className="inline-flex px-4 py-1.5 mx-auto rounded-full bg-gradient-to-r from-fuchsia-600 to-blue-600">
                        <p className="text-xs font-semibold tracking-widest text-white uppercase">{shortTitle}</p>
                    </div>
                    <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">{title}</h2>
                    <p className="mt-4 text-base leading-relaxed text-gray-600">{description}</p>
                </div>

                <div className="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-3 lg:mt-20 lg:gap-x-12">
                   {items && items.slice(0,3).map((each, idx)=>{
                    return(
                        <div key={idx} className="transition-all duration-200 bg-white hover:shadow-xl">
                        <div className="py-10 px-9">
                            
                            <h3 className="mt-8 text-lg font-semibold text-black">{each.title}</h3>
                            <p className="mt-4 text-base text-gray-600">{each.description}</p>
                        </div>
                    </div>
                    )
                   })}

                </div>
            </div>
        </section>

    )
}

C002.propRequire = RequireProps

export default C002