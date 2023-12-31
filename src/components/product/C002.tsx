import { RequireProps, data } from './defaultValue';
import { ProductProps } from './types';

const Product_C002 = ({
    title = data.title,
    description = data.description,
    products = data.products
}: ProductProps) => {
    return (
        <section className="bg-white py-20 lg:py-[120px]">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-[70px]">
                            <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                            {title}
                            </h2>
                            <p className="text-base text-body-color">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="rounded-lg border border-[#e7e7e7]">
                    <div className="flex flex-wrap">
                        {products && products.map((each,idx)=>{
                            return(
                                <div key={idx} className="w-full border-b border-[#e7e7e7] px-4 md:w-1/2 md:border-r lg:w-1/3">
                            <div className="mb-10 mt-6">
                                <div className="mb-5 overflow-hidden rounded-md">
                                    <img src="https://demo.tailgrids.com/templates/shopper/build/src/assets/ecom-images/products/products-grids-05/image-01.jpg" alt="product" className="w-full"/>
                                </div>
                                <div>
                                    <span className="mb-2 block text-base font-semibold text-black sm:text-xl md:text-lg 2xl:text-xl">
                                        $59.55
                                    </span>

                                    <h3>
                                        <a href="product-details.html" className="mb-2 block text-xl font-semibold text-black hover:text-primary sm:text-2xl md:text-lg 2xl:text-2xl">
                                            {each.title}
                                        </a>
                                    </h3>
                                    <p className="flex items-center text-base font-medium text-body-color">
                                        <span className="pr-1">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.925 5.975L10.4 5.275L8.34996 0.975C8.19996 0.675 7.79996 0.675 7.64996 0.975L5.59996 5.3L1.09996 5.975C0.77496 6.025 0.64996 6.45 0.89996 6.675L4.17496 10.05L3.39996 14.775C3.34996 15.1 3.67496 15.375 3.97496 15.175L8.04996 12.95L12.1 15.175C12.375 15.325 12.725 15.075 12.65 14.775L11.875 10.05L15.15 6.675C15.35 6.45 15.25 6.025 14.925 5.975Z" fill="#FFA645"></path>
                                            </svg>
                                        </span>
                                        <span className="pr-1">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.925 5.975L10.4 5.275L8.34996 0.975C8.19996 0.675 7.79996 0.675 7.64996 0.975L5.59996 5.3L1.09996 5.975C0.77496 6.025 0.64996 6.45 0.89996 6.675L4.17496 10.05L3.39996 14.775C3.34996 15.1 3.67496 15.375 3.97496 15.175L8.04996 12.95L12.1 15.175C12.375 15.325 12.725 15.075 12.65 14.775L11.875 10.05L15.15 6.675C15.35 6.45 15.25 6.025 14.925 5.975Z" fill="#FFA645"></path>
                                            </svg>
                                        </span>
                                        <span className="pr-1">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.925 5.975L10.4 5.275L8.34996 0.975C8.19996 0.675 7.79996 0.675 7.64996 0.975L5.59996 5.3L1.09996 5.975C0.77496 6.025 0.64996 6.45 0.89996 6.675L4.17496 10.05L3.39996 14.775C3.34996 15.1 3.67496 15.375 3.97496 15.175L8.04996 12.95L12.1 15.175C12.375 15.325 12.725 15.075 12.65 14.775L11.875 10.05L15.15 6.675C15.35 6.45 15.25 6.025 14.925 5.975Z" fill="#FFA645"></path>
                                            </svg>
                                        </span>
                                        <span className="pr-1">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.925 5.975L10.4 5.275L8.34996 0.975C8.19996 0.675 7.79996 0.675 7.64996 0.975L5.59996 5.3L1.09996 5.975C0.77496 6.025 0.64996 6.45 0.89996 6.675L4.17496 10.05L3.39996 14.775C3.34996 15.1 3.67496 15.375 3.97496 15.175L8.04996 12.95L12.1 15.175C12.375 15.325 12.725 15.075 12.65 14.775L11.875 10.05L15.15 6.675C15.35 6.45 15.25 6.025 14.925 5.975Z" fill="#FFA645"></path>
                                            </svg>
                                        </span>
                                        <span className="pr-3">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.925 5.975L10.4 5.275L8.34996 0.975C8.19996 0.675 7.79996 0.675 7.64996 0.975L5.59996 5.3L1.09996 5.975C0.77496 6.025 0.64996 6.45 0.89996 6.675L4.17496 10.05L3.39996 14.775C3.34996 15.1 3.67496 15.375 3.97496 15.175L8.04996 12.95L12.1 15.175C12.375 15.325 12.725 15.075 12.65 14.775L11.875 10.05L15.15 6.675C15.35 6.45 15.25 6.025 14.925 5.975Z" stroke="#FFA645"></path>
                                            </svg>
                                        </span>

                                        115 Reviews
                                    </p>
                                </div>
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

Product_C002.propRequire = RequireProps
Product_C002.cname="Product_C002"

export default Product_C002