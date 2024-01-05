import React from 'react'

function HomePage() {
    return (
        <>
            <div class="bg-indigo-600 px-4 py-3 text-white">
                <p class="text-center text-sm font-medium">
                    Love Alpine JS?
                    <a href="#" class="inline-block underline">Check out this new course!</a>
                </p>
            </div>
            <section>
                <div class="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                        <div class="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
                            <div class="max-w-md mx-auto text-center lg:text-left">
                                <header>
                                    <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">Watches</h2>

                                    <p class="mt-4 text-gray-500">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                                        rerum quam amet provident nulla error!
                                    </p>
                                </header>

                                <a
                                    href="#"
                                    class="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
                                >
                                    Shop All
                                </a>
                            </div>
                        </div>

                        <div class="lg:col-span-2 lg:py-8">
                            <ul class="grid grid-cols-2 gap-4">
                                <li>
                                    <a href="#" class="block group">
                                        <img
                                            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
                                            alt=""
                                            class="object-cover w-full rounded aspect-square"
                                        />

                                        <div class="mt-3">
                                            <h3
                                                class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                                            >
                                                Simple Watch
                                            </h3>

                                            <p class="mt-1 text-sm text-gray-700">$150</p>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" class="block group">
                                        <img
                                            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
                                            alt=""
                                            class="object-cover w-full rounded aspect-square"
                                        />

                                        <div class="mt-3">
                                            <h3
                                                class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                                            >
                                                Simple Watch
                                            </h3>

                                            <p class="mt-1 text-sm text-gray-700">$150</p>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section class="bg-white">
                <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
                    <div class="mx-auto max-w-3xl text-center">
                        <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
                            Trusted by eCommerce Businesses
                        </h2>

                        <p class="mt-4 text-gray-500 sm:text-xl">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores
                            laborum labore provident impedit esse recusandae facere libero harum
                            sequi.
                        </p>
                    </div>

                    <div class="mt-8 sm:mt-12">
                        <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            <div
                                class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
                            >
                                <dt class="order-last text-lg font-medium text-gray-500">
                                    Total Sales
                                </dt>

                                <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">
                                    $4.8m
                                </dd>
                            </div>

                            <div
                                class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
                            >
                                <dt class="order-last text-lg font-medium text-gray-500">
                                    Official Addons
                                </dt>

                                <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">24</dd>
                            </div>

                            <div
                                class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
                            >
                                <dt class="order-last text-lg font-medium text-gray-500">
                                    Total Addons
                                </dt>

                                <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">86</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage