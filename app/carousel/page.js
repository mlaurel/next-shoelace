"use client";

import Head from "next/head";
import dynamic from "next/dynamic";
import Image from "next/image";

const SlCarousel = dynamic(() => import("@shoelace-style/shoelace/dist/react/carousel"), { ssr: false });
const SlCarouselItem = dynamic(() => import("@shoelace-style/shoelace/dist/react/carousel-item"), { ssr: false });

export default function Carousel() {
    return (
        <main className="flex flex-col items-center justify-between min-h-screen p-24">

            <div className="relative flex place-items-center max-w-[80vw]">
                <SlCarousel pagination mouse-dragging>
                    <SlCarouselItem>
                        <img
                            alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
                            src="https://shoelace.style/assets/examples/carousel/mountains.jpg"
                        />
                    </SlCarouselItem>
                    <SlCarouselItem>
                        <img
                            alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
                            src="https://shoelace.style/assets/examples/carousel/waterfall.jpg"
                        />
                    </SlCarouselItem>
                    <SlCarouselItem>
                        <img
                            alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
                            src="https://shoelace.style/assets/examples/carousel/sunset.jpg"
                        />
                    </SlCarouselItem>
                    <SlCarouselItem>
                        <img
                            alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
                            src="https://shoelace.style/assets/examples/carousel/field.jpg"
                        />
                    </SlCarouselItem>
                    <SlCarouselItem>
                        <img
                            alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
                            src="https://shoelace.style/assets/examples/carousel/valley.jpg"
                        />
                    </SlCarouselItem>
                </SlCarousel>
            </div>

            <div className="grid mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
                <a
                    href="/color"
                    className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Color Picker{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Find in-depth information about Next.js and Shoelace.
                    </p>
                </a>

                <a
                    href="/carousel"
                    className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Carousel{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Learn about Shoelace Carousel component!
                    </p>
                </a>

                <a
                    href="/drawer"
                    className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Drawer{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Explore Shoelace Drawer component.
                    </p>
                </a>

                <a
                    href="/cards"
                    className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Cards{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
                        See how Shoelace Card components fit together.
                    </p>
                </a>
            </div>
        </main>
    );
}
