import Authenticated from "@/Layouts/Authenticated/Index";
import Flickity from "react-flickity-component";
import { Head } from "@inertiajs/inertia-react";
import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";
import { useEffect, useRef } from "react";

export default function Dashboard({auth, featuredMovies, movies}) {
    const flickityRef = useRef(null);
    const flickityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };

    useEffect(() => {
        if (flickityRef.current) {
            flickityRef.current.on("ready", function () {
                console.log("flickity is ready");
            });
        }
    }, [flickityRef]);

    return (
        <Authenticated auth={auth}>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
                <title>Dashboard</title>
            </Head>
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">
                    Featured Movies
                </div>
                <Flickity
                    className="gap-[30px]"
                    options={flickityOptions}
                    disableImagesLoaded={false}
                    reloadOnUpdate
                    static
                    flickityRef={(c) => (flickityRef.current = c)}
                >
                    {featuredMovies.map((featuredMovies) => (
                        <FeaturedMovie
                            key={featuredMovies.id}
                            slug={featuredMovies.slug}
                            name={featuredMovies.name}
                            category={featuredMovies.category}
                            thumbnail={featuredMovies.thumbnail}
                            // rating={1}
                            rating={featuredMovies.rating}
                        />
                    ))}
                </Flickity>
            </div>
            <div className="mt-[50px]">
                <div className="font-semibold text-[22px] text-black mb-4">
                    Browse
                </div>
                <Flickity
                    className="gap-[30px]"
                    options={flickityOptions}
                    disableImagesLoaded={false}
                    reloadOnUpdate
                    static
                    flickityRef={(c) => (flickityRef.current = c)}
                >
                    {movies.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            slug={movie.slug}
                            name={movie.name}
                            category={movie.category}
                            thumbnail={movie.thumbnail}
                        />
                    ))}
                </Flickity>
            </div>
        </Authenticated>
    );
}
