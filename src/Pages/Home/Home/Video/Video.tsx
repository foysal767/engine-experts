import "./Video.css";
const Video = () => {
  return (
    <section className="w-full lg:h-[300px] mb-6 lg:mb-28">
      <h1 className="text-2xl md:text-3xl lg:text-5xl   text-center md:text-start lg:text-start mx-8  my-2 font-bold lg:mb-8 text-[#383232]">
        Our Working Environment
      </h1>
      <video
        className="w-full h-full "
        controlsList="nodownload"
        autoPlay={true}
        muted
        loop
      >
        <source
          className="w-full h-full"
          src="assets/video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default Video;
