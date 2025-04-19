import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import certificateCyber from "../assets/Certificate-Cyber.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const Certificates = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      title: "Cybersecurity & Ethical Hacking",
      issuer: "RineX.Ai",
      date: "March 2024",
      imageUrl: certificateCyber,
      description:
        "Covered key security concepts like threat mitigation, securing devices, and foundational network protection.",
    },
  ];

  const openModal = (cert) => {
    setSelectedCert(cert);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedCert(null);
  };

  return (
    <section className="py-20 px-4 md:px-20" id="certificates">
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent text-center"
      >
        Certificates
      </motion.h2>

      <div className="flex justify-center items-center">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 24px rgba(34,197,94,0.3)",
            }}
            className="rounded-2xl shadow-md border hover:shadow-xl transition-all duration-300 w-full max-w-sm"
          >
            <img
              src={cert.imageUrl}
              alt={`${cert.title} certificate`}
              className="w-full h-48 object-cover rounded-t-2xl cursor-pointer"
              onClick={() => openModal(cert)}
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-blue-600 mb-1">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-500">
                <strong>Issuer:</strong> {cert.issuer}
              </p>
              <p className="text-sm text-gray-500 mb-2">
                <strong>Date:</strong> {cert.date}
              </p>
              <p className="text-sm text-gray-500 mb-4">{cert.description}</p>
              <button
                onClick={() => openModal(cert)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm"
              >
                Preview
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Preview */}
      {isOpen && selectedCert && (
        <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4">
            <Dialog.Panel className="bg-white rounded-2xl max-w-4xl w-full p-4 shadow-2xl">
              <img
                src={selectedCert.imageUrl}
                alt="Full Certificate"
                className="w-full h-auto rounded-lg"
              />
              <div className="mt-4 text-right">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Close
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </section>
  );
};

export default Certificates;
