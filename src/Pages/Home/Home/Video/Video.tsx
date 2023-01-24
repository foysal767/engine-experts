import './Video.css';
const Video = () => {
    return (
<<<<<<< HEAD
      <section className="w-full lg:h-[300px] mt-36">
        <h1 className="text-5xl font-semibold text-center mb-12">
=======
      <section className="w-full lg:h-[300px] lg:mb-32">
        <h1 className="text-5xl font-semibold text-center lg:mb-12">
>>>>>>> 8d652c9372d1031012412378664552c3f1b10361
          Our Working Environment
        </h1>
        <video
          className="w-full h-full "
          controlsList="nodownload"
          autoPlay={true}
          muted
          loop
        >
          <source className='w-full h-full' src="assets/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
    );
};

export default Video;