import { RequireProps, data } from './defaultValue';
import { FaqProps } from './types';

const Faq_C002 = ({
    title = data.title,
    queries = data.queries
}: FaqProps) =>{
    return(
        <section className="py-10 bg-white sm:py-16 lg:py-24">
    <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">{title}</h2>

        <div className="flow-root mt-12 sm:mt-16">
            <div className="divide-y divide-gray--200 -my-9">
               {queries && queries.map((each, idx)=>{
                return(
                    <div key={idx} className="py-9">
                    <p className="text-xl font-semibold text-black">{each.title}</p>
                    <p className="mt-3 text-base text-gray-600">{each.description}</p>
                </div>
                )
               })}
            </div>
        </div>
    </div>
</section>

    )
}

Faq_C002.propRequire= RequireProps
Faq_C002.cname="Faq_C002"

export default Faq_C002