import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ status: "", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setFeedback({ status: "error", message: "Please fill in all fields before sending." });
      return;
    }

    setLoading(true);
    setFeedback({ status: "", message: "" });

    try {
      // Primary: Direct transmission to mushfik.cse@gmail.com via FormSubmit AJAX
      const response = await fetch("https://formsubmit.co/ajax/mushfik.cse@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          _replyto: form.email,
          _subject: `Portfolio Message from ${form.name}`,
          message: form.message,
        }),
      });

      const data = await response.json();
      if (response.ok && (data.success === "true" || data.success === true)) {
        setLoading(false);
        setFeedback({
          status: "success",
          message: "Thank you for reaching out! Your message has been sent directly to mushfik.cse@gmail.com.",
        });
        setForm({
          name: "",
          email: "",
          message: "",
        });
        return;
      }
      throw new Error(data.message || "Direct transmission failed");
    } catch (err) {
      // Secondary fallback: EmailJS service
      try {
        await emailjs.send(
          "service_9gvq101",
          "template_49jw5yq",
          {
            from_name: form.name,
            from_email: form.email,
            message: form.message,
          },
          "3lDtCP31mFt_52s7F"
        );
        setLoading(false);
        setFeedback({
          status: "success",
          message: "Thank you for reaching out! Your message has been sent successfully to mushfik.cse@gmail.com.",
        });
        setForm({
          name: "",
          email: "",
          message: "",
        });
      } catch (fallbackErr) {
        setLoading(false);
        console.error("Transmission error:", err, fallbackErr);
        // Final safety net: launch user's mail client directly
        window.location.href = `mailto:mushfik.cse@gmail.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(
          form.name
        )}&body=${encodeURIComponent(
          `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
        )}`;
        setFeedback({
          status: "success",
          message: "Opening your mail client to send directly to mushfik.cse@gmail.com.",
        });
      }
    }
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-[#0e0e14] border border-white/10 p-6 sm:p-8 rounded-2xl shadow-xl"
      >
        <p className={styles.sectionSubText}>Direct Correspondence</p>
        <h3 className={styles.sectionHeadText}>Get In Touch.</h3>

        <div className="mt-6 space-y-3 text-sm text-gray-300">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-gray-400 shrink-0 text-base" />
            <a href="mailto:mushfik.cse@gmail.com" className="hover:text-[#915eff] transition">
              mushfik.cse@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <FaGithub className="text-gray-400 shrink-0 text-base" />
            <a
              href="https://github.com/Mushfik19"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#915eff] transition"
            >
              github.com/Mushfik19
            </a>
          </div>

          <div className="flex items-center gap-3">
            <FaLinkedin className="text-gray-400 shrink-0 text-base" />
            <a
              href="https://www.linkedin.com/in/md-mahfujur-rahman-cse19/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#915eff] transition"
            >
              linkedin.com/in/md-mahfujur-rahman-cse19
            </a>
          </div>
        </div>

        {feedback.message && (
          <div
            className={`mt-6 p-4 rounded-xl text-xs sm:text-sm border ${
              feedback.status === "success"
                ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                : "bg-red-500/10 border-red-500/30 text-red-300"
            }`}
          >
            {feedback.message}
          </div>
        )}

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col gap-5"
        >
          <label className="flex flex-col">
            <span className="text-white text-xs font-mono uppercase tracking-wider mb-2">
              Your Name
            </span>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Full name or organization"
              className="bg-[#151030] py-3.5 px-4 placeholder:text-gray-500 text-white rounded-xl outline-none border border-white/10 focus:border-[#915eff] transition text-sm font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white text-xs font-mono uppercase tracking-wider mb-2">
              Your Email
            </span>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="name@domain.com"
              className="bg-[#151030] py-3.5 px-4 placeholder:text-gray-500 text-white rounded-xl outline-none border border-white/10 focus:border-[#915eff] transition text-sm font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white text-xs font-mono uppercase tracking-wider mb-2">
              Your Message
            </span>
            <textarea
              rows={4}
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Collaboration inquiry, technical question, or project discussion..."
              className="bg-[#151030] py-3.5 px-4 placeholder:text-gray-500 text-white rounded-xl outline-none border border-white/10 focus:border-[#915eff] transition text-sm font-medium resize-none"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-6 rounded-xl bg-white hover:bg-gray-200 text-black font-bold text-sm tracking-wide transition duration-200 shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 mt-2"
          >
            <FaPaperPlane className="text-xs" />
            <span>{loading ? "Sending..." : "Send Message"}</span>
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
