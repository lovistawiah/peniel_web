"use client";
import Autoplay from "embla-carousel-autoplay";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRef } from "react";
import Image from "next/image";
import { Calendar, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const AutoCarousel = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));

  const eventsData = {
    ongoing: "Ongoing",
    past: "Past",
    upcoming: "Upcoming",
  };

  const sectionVariants = {
    hidden: { opacity: 0.5, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
  const opacityVariants = {
    hidden: { opacity: 0.5, y: 50 },
    visible: {
      opacity: 0.7,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
  const rightVariants = {
    hidden: { opacity: 0.2, x: -50 },
    visible: {
      opacity: 0.7,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-[73%] md:w-[87%] flex justify-center"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="w-full">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="h-[475px] w-[100%] relative">
                <Image
                  className="w-full h-full object-fill brightness-50"
                  src="/banner.png"
                  width={200}
                  height={200}
                  alt="banner"
                />
                <motion.section
                  className="w-[90%] md:w-fit h-fit shadow-[0px_3px_8px_rgba(0,0,0,0.5)] bg-slate-900 rounded-lg border mt-2 absolute items-start bottom-4 left-[5%] md:left-[3%] flex flex-col justify-start text-white gap-1 p-[3px] md:pt-7 md:gap-3"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                  variants={sectionVariants}
                >
                  <motion.p
                    variants={rightVariants}
                    className={`place-self-end md:place-self-start pr-2 text-sm md:text-base leading-normal italic opacity-50 ${
                      eventsData.ongoing === "Ongoing"
                        ? "text-[#72FF06]"
                        : eventsData.past === "Past"
                        ? "text-gray-600"
                        : "text-yellow-500"
                    } `}
                  >
                    ongoing event
                  </motion.p>
                  <motion.h3
                    variants={opacityVariants}
                    className="text-2xl md:text-5xl font-bold leading-normal"
                  >
                    My Year of Holy Spirit
                  </motion.h3>
                  <motion.p
                    variants={opacityVariants}
                    className="flex items-center gap-[2px] text-sm md:text-lg"
                  >
                    <MapPin />
                    <motion.span variants={opacityVariants}>
                      {" "}
                      Adjacent to White Daisy School
                    </motion.span>
                  </motion.p>
                  <motion.div
                    variants={opacityVariants}
                    className="flex text-sm md:text-lg font-light justify-between md:justify-around w-full"
                  >
                    <motion.p
                      variants={opacityVariants}
                      className="flex items-center gap-[3px]"
                    >
                      <Calendar />
                      <motion.span variants={opacityVariants}>
                        1<sup>st</sup> Jan, 2025
                      </motion.span>
                    </motion.p>
                    <motion.p
                      variants={opacityVariants}
                      className="flex items-center gap-[3px]"
                    >
                      <Clock />
                      <span>6:00 pm</span>
                    </motion.p>
                  </motion.div>
                  <motion.div
                    variants={opacityVariants}
                    className="w-[100%] bottom-1 h-fit rounded-[7] text-start p-[3px] text-sm md:text-lg"
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Beatae, sit.
                  </motion.div>
                </motion.section>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default AutoCarousel;
