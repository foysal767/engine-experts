import "./Video.css";
const Video = () => {
  return (
    <section className="w-full lg:h-[300px] mb-6 lg:mb-28">
      <h1 className="text-2xl lg:text-5xl font-semibold font-poppins text-center mb-2 lg:mb-12 text-[#383232]">
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
