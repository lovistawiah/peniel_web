import Image from "next/image";

const LandingPage = () => {
  return (
    <section className="bg-[#EEEEEE]w-full h-[90vh] relative flex items-center justify-center">
      <Image
        src="/banner.png"
        width={200}
        height={200}
        alt="my year of Holy Spirit"
        className="w-full h-full object-cover"
      />
      <div className=" h-[100px] w-[80%] absolute bottom-8 bg-[#D9D2D2] rounded-[7px] md:w-[400px] hidden"></div>
    </section>
  );
};

export default LandingPage;
