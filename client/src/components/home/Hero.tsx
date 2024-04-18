const Hero = () => {
    return (
        <div className="w-full relative">
            <img
                src="/hero.jpg"
                alt=""
                className="rounded-3xl w-full h-60 object-cover"
            />
            <h2 className="absolute text-6xl top-14 left-12 text-white dark:text-black font-extrabold">
                Read Our Blogs
            </h2>
        </div>
    );
};

export default Hero;
