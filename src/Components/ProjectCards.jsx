import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { projects } from "../Constants/constants";
import { githubIcon, closeIcon, arrowLeft, arrowRight } from "../assets"; // Import required icons

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const ProjectCard = ({
  index,
  name,
  description,
  image,
  gif,
  source_code_link,
  demo_link,
  playGifOnHover,
  demoImages, // Add this prop to pass demo images
  onOpenDemo, // Add this prop to handle modal open
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Tilt
      options={{
        max: 40,
        scale: 1,
        speed: 450,
      }}
      className="shadow-2xl p-5 rounded-lg sm:w-[300px] w-[100%]"
    >
      <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative">
          <img
            src={isHovered && playGifOnHover ? gif : image}
            alt={name}
            className="w-full h-full md:h-[200px] object-cover rounded-lg relative"
            onContextMenu={(e) => e.preventDefault()} // Disable right-click
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={githubIcon} alt="github" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-3">
          <h3 className="text-white font-bold text-2xl">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] leading-snug">{description}</p>
        </div>

        <div className="mt-2 flex flex-wrap gap-1"></div>

        <div className="mt-3 flex justify-center items-center">
          <button
            className="shadow-md shadow-primary p-2 bg-tertiary rounded-lg flex justify-center"
            onClick={() => onOpenDemo(demoImages)} // Pass the demo images to open modal
          >
            See the Demo
          </button>
        </div>
      </motion.div>
    </Tilt>
  );
};

// Modal Component for full-screen image gallery
const ImageViewerModal = ({ images, currentIndex, onClose, onNext, onPrev }) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      <div className="relative max-w-3xl w-full">
        <button onClick={onClose} className="absolute top-4 right-4 text-white">
          <img src={closeIcon} alt="close" className="w-6 h-6" />
        </button>

        <img
          src={images[currentIndex]}
          alt={`Demo ${currentIndex + 1}`}
          className="w-full h-full object-cover rounded-lg"
          onContextMenu={(e) => e.preventDefault()} // Disable right-click
        />

        <button onClick={onPrev} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white">
          <img src={arrowLeft} alt="previous" className="w-8 h-8" />
        </button>
        <button onClick={onNext} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white">
          <img src={arrowRight} alt="next" className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

const Works = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openDemoModal = (images) => {
    setCurrentImages(images);
    setCurrentIndex(0); // Start from the first image
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImages([]);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % currentImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + currentImages.length) % currentImages.length);
  };

  return (
    <div className="mt-5 flex flex-wrap justify-center gap-4 text-grayscale-50 w-full">
      {projects.map((project, index) => (
        <ProjectCard
          key={`project-${index}`}
          index={index}
          {...project}
          onOpenDemo={openDemoModal} // Pass the modal open handler
        />
      ))}
      {isModalOpen && (
        <ImageViewerModal
          images={currentImages}
          currentIndex={currentIndex}
          onClose={closeModal}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
};

export default Works;
