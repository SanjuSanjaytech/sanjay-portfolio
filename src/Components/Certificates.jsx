import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog } from "@headlessui/react";
import certificateCyber from "../assets/Certificate-Cyber.jpg";
import { FaShieldAlt, FaCertificate } from "react-icons/fa";

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
        "Mastered key security concepts including threat mitigation, device security, and network protection. Gained hands-on experience with penetration testing tools and vulnerability assessment methodologies.",
      skills: [
        "Threat Analysis",
        "Network Security",
        "Penetration Testing",
        "Vulnerability Assessment"
      ]
    }
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
    <section className="py-20 px-4 md:px-8 lg:px-20 relative" id="certificates">
      {/* Background matching your theme */}
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center mb-2">
            <FaCertificate className="text-3xl text-cyan-400 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Certifications
            </h2>
          </div>
          <p className="text-gray-400">
            Formal recognition of my specialized knowledge and skills
          </p>
        </motion.div>

        {/* Certificate Card */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="w-full max-w-2xl bg-gray-900/50 rounded-xl border border-gray-800 overflow-hidden backdrop-blur-sm"
          >
            <div className="p-1 bg-gradient-to-r from-cyan-500/20 to-blue-600/20">
              <div className="flex items-center px-4 py-2 bg-gray-900/80">
                <FaShieldAlt className="text-cyan-400 mr-2" />
                <span className="font-medium text-gray-300">Professional Certification</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 p-6">
              {/* Certificate Image */}
              <div 
                className="relative group cursor-pointer"
                onClick={() => openModal(certificates[0])}
              >
                <img
                  src={certificates[0].imageUrl}
                  alt="Cybersecurity Certificate"
                  className="w-full h-auto rounded-lg border border-gray-700/50 group-hover:border-cyan-400/50 transition-all"
                />
                <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                  <span className="bg-gray-900/90 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                    Click to enlarge
                  </span>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-100">{certificates[0].title}</h3>
                  <div className="flex items-center text-gray-400 mt-1 text-sm">
                    <span>Issued by {certificates[0].issuer}</span>
                    <span className="mx-2">•</span>
                    <span>{certificates[0].date}</span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm">{certificates[0].description}</p>

                {/* Skills Gained */}
                <div>
                  <h4 className="font-medium text-gray-200 mb-2 text-sm">Skills Validated:</h4>
                  <div className="flex flex-wrap gap-2">
                    {certificates[0].skills.map((skill, index) => (
                      <span 
                        key={index}
                        className="px-2.5 py-1 bg-gray-800 text-cyan-400 rounded-full text-xs font-medium border border-cyan-400/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {isOpen && (
          <Dialog 
            open={isOpen} 
            onClose={closeModal} 
            as="div"
            className="fixed inset-0 z-50 overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />

            <div className="fixed inset-0 flex items-center justify-center p-4">
              <Dialog.Panel
                as={motion.div}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-gray-900 border border-gray-800 rounded-xl max-w-4xl w-full mx-auto overflow-hidden shadow-2xl"
              >
                <div className="p-4 bg-gray-800/50 border-b border-gray-700 flex justify-between items-center">
                  <Dialog.Title className="font-medium text-gray-100">
                    {selectedCert?.title}
                  </Dialog.Title>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="p-6 max-h-[80vh] overflow-y-auto">
                  <img
                    src={selectedCert?.imageUrl}
                    alt="Certificate Full View"
                    className="w-full h-auto rounded-lg border border-gray-700"
                  />
                </div>
              </Dialog.Panel>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;