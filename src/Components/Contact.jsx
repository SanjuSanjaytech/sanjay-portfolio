    import React, { useState } from "react";
    import emailjs from "emailjs-com";
    import { SendHorizontal, CheckCircle } from "lucide-react";
    import { motion } from "framer-motion";

    const Contact = () => {
    const [formData, setFormData] = useState({
        from_name: "",
        from_email: "",
        message: "",
    });
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);

        const templateParams = {
        from_name: formData.from_name,
        from_email: formData.from_email,
        message: formData.message,
        reply_to: formData.from_email,
        };

        emailjs
        .send(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            templateParams,
            import.meta.env.VITE_PUBLIC_KEY
        )
        .then(() => {
            setIsSending(false);
            setIsSent(true);
            setFormData({ from_name: "", from_email: "", message: "" });
            setTimeout(() => setIsSent(false), 3000); // Reset after 3 seconds
        })
        .catch(() => {
            setIsSending(false);
            alert("Oops! Something Went Wrong. Please Try Again.");
        });
    };

    const buttonVariants = {
        initial: { scale: 1 },
        hover: { 
        scale: 1.05,
        boxShadow: "0 0 20px rgba(59,130,246,0.6)",
        },
        sending: { 
        scale: 0.95,
        backgroundColor: "#60a5fa",
        },
        sent: { 
        scale: 1,
        backgroundColor: "#34d399",
        }
    };

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
        <motion.div 
            className="px-4 w-full max-w-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-4xl text-center font-bold mb-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
            Let's Talk
            </h2>
            <form className="space-y-8" onSubmit={handleSubmit}>
            <motion.div 
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <input
                type="text"
                name="from_name"    
                placeholder="Identity.."
                value={formData.from_name}
                required
                onChange={(e) => setFormData({ ...formData, from_name: e.target.value })}
                className="w-full bg-gray-800/50 border-2 border-blue-500/20 rounded-lg px-4 py-3 text-white transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-blue-500/10 group-hover:border-blue-500/40"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/10 to-transparent rounded-lg blur-xl group-hover:opacity-100 opacity-0 transition-opacity" />
            </motion.div>

            <motion.div 
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <input
                type="email"
                name="from_email"
                placeholder="Email..."
                value={formData.from_email}
                required
                onChange={(e) => setFormData({ ...formData, from_email: e.target.value })}
                className="w-full bg-gray-800/50 border-2 border-blue-500/20 rounded-lg px-4 py-3 text-white transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-blue-500/10 group-hover:border-blue-500/40"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/10 to-transparent rounded-lg blur-xl group-hover:opacity-100 opacity-0 transition-opacity" />
            </motion.div>

            <motion.div 
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <textarea
                name="message"
                rows={5}
                placeholder="Message..."
                value={formData.message}
                required
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-gray-800/50 border-2 border-blue-500/20 rounded-lg px-4 py-3 text-white transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-blue-500/10 group-hover:border-blue-500/40 resize-none"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-pink-500/10 to-transparent rounded-lg blur-xl group-hover:opacity-100 opacity-0 transition-opacity" />
            </motion.div>

            <motion.button
                type="submit"
                variants={buttonVariants}
                initial="initial"
                animate={isSending ? "sending" : isSent ? "sent" : "initial"}
                whileHover={!isSending && !isSent ? "hover" : ""}
                disabled={isSending}
                className="w-full bg-blue-500 cursor-pointer text-white px-6 py-4 rounded-lg font-medium relative overflow-hidden flex items-center justify-center gap-4 disabled:opacity-75"
            >
                <span className="relative z-10">
                {isSending ? (
                    <span className="flex items-center gap-4">
                    Sending
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                        <SendHorizontal />
                    </motion.div>
                    </span>
                ) : isSent ? (
                    <span className="flex items-center gap-4">
                    Sent Successfully
                    <CheckCircle />
                    </span>
                ) : (
                    <span className="flex items-center gap-4">
                    Launch Message
                    <SendHorizontal />
                    </span>
                )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
            </form>
        </motion.div>
        </section>
    );
    };

    export default Contact;