import { useRef, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = ({ isDark }) => {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        setFormData({ name: "", email: "", message: "" });
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      })
      .catch(() => alert("Something went wrong. Please try again."));
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Contact Me
          </h2>

          {success && (
            <div className="text-green-400 text-center mb-4">
              ✅ Your message was successfully sent!
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            {["name", "email", "message"].map((field, index) => (
              field !== "message" ? (
                <input
                  key={index}
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  required
                  value={formData[field]}
                  onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                  placeholder={field === "name" ? "Your Name" : "Email Address"}
                  className={`w-full ${isDark ? "bg-white/5 border-white/10 text-white" : "bg-white border-gray-300 text-gray-800"} border rounded px-4 py-3`}
                />
              ) : (
                <textarea
                  key={index}
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your Message"
                  className={`w-full ${isDark ? "bg-white/5 border-white/10 text-white" : "bg-white border-gray-300 text-gray-800"} border rounded px-4 py-3`}
                />
              )
            ))}

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium hover:shadow-lg transition"
            >
              Send
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
