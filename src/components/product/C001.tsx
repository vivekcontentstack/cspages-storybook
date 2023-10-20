import { RequireProps, data } from './defaultValue';
import { ProductProps } from './types';

const Product_C001 = ({
  title = data.title,
  description = data.description,
  products = data.products
}: ProductProps) => {
  return (
    <section className="bg-[#fafafa] pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
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

        <div>
          <div className="relative flex justify-center">
            <div className="relative w-full pb-16">
              <div className="snap mx-auto flex h-auto w-full max-w-[300px] flex-wrap overflow-hidden transition-all xs:max-w-[400px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px]" x-ref="carousel">
                {products && products.map((each, idx) => {
                  return (
                    <div key={idx} className="mx-auto h-full min-w-[300px] px-4 xs:min-w-[368px] sm:min-w-[510px] md:min-w-[350px] lg:min-w-[465px] xl:min-w-[370px] 2xl:min-w-[430px] p-4">
                      <div className="overflow-hidden rounded-lg border border-[#e7e7e7] bg-white">
                        <div>
                          <img src="https://demo.tailgrids.com/templates/shopper/build/src/assets/ecom-images/products/product-carousel-05/image-01.jpg" alt="product" className="w-full" />
                        </div>
                        <div className="p-6">
                          <a href="product-details.html" className="mb-4 block text-lg font-semibold text-black hover:text-primary xs:text-xl lg:text-lg xl:text-xl">
                            {each.title}
                          </a>
                          <p className="text-base font-medium text-body-color">
                            {each.description}
                          </p>
                        </div>
                        <div className="flex justify-between border-t border-[#e7e7e7]">
                          <div className="flex items-center py-4 px-3 xs:px-4 lg:px-3 xl:px-4">
                            <span className="mr-[2px]">
                              <svg className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 lg:h-3 lg:w-3 xl:h-5 xl:w-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.6562 7.46875L12.9999 6.59375L10.4375 1.21875C10.25 0.84375 9.74995 0.84375 9.56245 1.21875L6.99995 6.625L1.37495 7.46875C0.9687 7.53125 0.81245 8.0625 1.12495 8.34375L5.2187 12.5625L4.24995 18.4688C4.18745 18.875 4.5937 19.2188 4.9687 18.9688L10.0624 16.1875L15.1249 18.9688C15.4687 19.1562 15.9062 18.8438 15.8124 18.4688L14.8437 12.5625L18.9374 8.34375C19.1874 8.0625 19.0624 7.53125 18.6562 7.46875Z" fill="#FFA645"></path>
                              </svg>
                            </span>
                            <span className="mr-[2px]">
                              <svg className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 lg:h-3 lg:w-3 xl:h-5 xl:w-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.6562 7.46875L12.9999 6.59375L10.4375 1.21875C10.25 0.84375 9.74995 0.84375 9.56245 1.21875L6.99995 6.625L1.37495 7.46875C0.9687 7.53125 0.81245 8.0625 1.12495 8.34375L5.2187 12.5625L4.24995 18.4688C4.18745 18.875 4.5937 19.2188 4.9687 18.9688L10.0624 16.1875L15.1249 18.9688C15.4687 19.1562 15.9062 18.8438 15.8124 18.4688L14.8437 12.5625L18.9374 8.34375C19.1874 8.0625 19.0624 7.53125 18.6562 7.46875Z" fill="#FFA645"></path>
                              </svg>
                            </span>
                            <span className="mr-[2px]">
                              <svg className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 lg:h-3 lg:w-3 xl:h-5 xl:w-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.6562 7.46875L12.9999 6.59375L10.4375 1.21875C10.25 0.84375 9.74995 0.84375 9.56245 1.21875L6.99995 6.625L1.37495 7.46875C0.9687 7.53125 0.81245 8.0625 1.12495 8.34375L5.2187 12.5625L4.24995 18.4688C4.18745 18.875 4.5937 19.2188 4.9687 18.9688L10.0624 16.1875L15.1249 18.9688C15.4687 19.1562 15.9062 18.8438 15.8124 18.4688L14.8437 12.5625L18.9374 8.34375C19.1874 8.0625 19.0624 7.53125 18.6562 7.46875Z" fill="#FFA645"></path>
                              </svg>
                            </span>
                            <span className="mr-[2px]">
                              <svg className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 lg:h-3 lg:w-3 xl:h-5 xl:w-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.6562 7.46875L12.9999 6.59375L10.4375 1.21875C10.25 0.84375 9.74995 0.84375 9.56245 1.21875L6.99995 6.625L1.37495 7.46875C0.9687 7.53125 0.81245 8.0625 1.12495 8.34375L5.2187 12.5625L4.24995 18.4688C4.18745 18.875 4.5937 19.2188 4.9687 18.9688L10.0624 16.1875L15.1249 18.9688C15.4687 19.1562 15.9062 18.8438 15.8124 18.4688L14.8437 12.5625L18.9374 8.34375C19.1874 8.0625 19.0624 7.53125 18.6562 7.46875Z" fill="#FFA645"></path>
                              </svg>
                            </span>
                            <span className="mr-[2px]">
                              <svg className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 lg:h-3 lg:w-3 xl:h-5 xl:w-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.6562 7.46875L12.9999 6.59375L10.4375 1.21875C10.25 0.84375 9.74995 0.84375 9.56245 1.21875L6.99995 6.625L1.37495 7.46875C0.9687 7.53125 0.81245 8.0625 1.12495 8.34375L5.2187 12.5625L4.24995 18.4688C4.18745 18.875 4.5937 19.2188 4.9687 18.9688L10.0624 16.1875L15.1249 18.9688C15.4687 19.1562 15.9062 18.8438 15.8124 18.4688L14.8437 12.5625L18.9374 8.34375C19.1874 8.0625 19.0624 7.53125 18.6562 7.46875Z" fill="#FFA645"></path>
                              </svg>
                            </span>

                            <span className="pl-2 text-sm font-semibold text-body-color">
                              (55) Reviews
                            </span>
                          </div>
                          <div className="border-l border-[#e7e7e7] py-4 px-3 xs:px-4 lg:px-3 xl:px-4">
                            <span className="text-base font-semibold text-black">
                              $299
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Product_C001.propRequire = RequireProps

export default Product_C001