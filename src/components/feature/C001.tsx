import { RequireProps, data } from './defaultValue';
import { FeatureProps } from './types';

const C001 = ({
    shortTitle: title = data.shortTitle,
    items = data.items,
}:FeatureProps) => {
    return (
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">{title}</h2>
                </div>

                <div className="px-5 py-8 mt-12 bg-white lg:mt-20 lg:p-16">
                    <div className="grid grid-cols-1 gap-12 lg:gap-16 sm:grid-cols-2">
                        {items && items.map((each, idx)=>{
                            return(
                                <div className="flex items-start" key={idx}>
                            
                            <div className="ml-5">
                                <h3 className="text-lg font-semibold text-black">{each.title}</h3>
                                <p className="mt-4 text-base text-gray-600">{each.description}</p>
                            </div>
                        </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>

    )
}

C001.propRequire = RequireProps

export default C001