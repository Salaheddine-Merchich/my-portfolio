import React, {useContext, useState} from "react";
import FadeInView from "../../components/fadeIn/FadeInView";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import {Mail, Phone, Send} from "lucide-react";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  const [formData, setFormData] = useState({name: "", email: "", message: ""});

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  return (
    <section
      className="py-20 px-6 max-w-7xl mx-auto"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <FadeInView className="text-center mb-16">
        <h2
          id="contact-heading"
          className={`text-4xl lg:text-5xl font-bold mb-4 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {contactInfo.title}
        </h2>
        <p
          className={`text-lg max-w-2xl mx-auto ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {contactInfo.subtitle}
        </p>
      </FadeInView>

      <div className="flex flex-col lg:flex-row gap-16">
        <FadeInView variant="left" className="flex-1 space-y-8">
          <div
            className={`p-8 rounded-3xl shadow-xl ${
              isDark
                ? "bg-gray-800/50 border border-gray-700"
                : "bg-white border border-gray-100"
            } backdrop-blur-sm`}
          >
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="contact-name"
                  className={`block text-sm font-bold mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className={`w-full px-4 py-3 rounded-xl outline-none transition-all duration-300 ${
                    isDark
                      ? "bg-gray-700 text-white border-gray-600 focus:border-primary"
                      : "bg-gray-50 text-gray-900 border-gray-200 focus:border-primary focus:bg-white"
                  } border`}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className={`block text-sm font-bold mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  className={`w-full px-4 py-3 rounded-xl outline-none transition-all duration-300 ${
                    isDark
                      ? "bg-gray-700 text-white border-gray-600 focus:border-primary"
                      : "bg-gray-50 text-gray-900 border-gray-200 focus:border-primary focus:bg-white"
                  } border`}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className={`block text-sm font-bold mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="4"
                  placeholder="Tell me about your project..."
                  className={`w-full px-4 py-3 rounded-xl outline-none transition-all duration-300 ${
                    isDark
                      ? "bg-gray-700 text-white border-gray-600 focus:border-primary"
                      : "bg-gray-50 text-gray-900 border-gray-200 focus:border-primary focus:bg-white"
                  } border resize-none`}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-primary/30"
                onClick={() =>
                  (window.location.href = `mailto:${contactInfo.email_address}?subject=Contact from Portfolio&body=${formData.message}`)
                }
              >
                <Send
                  size={20}
                  aria-hidden="true"
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
                Send Message
              </button>
            </form>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            {contactInfo.number && (
              <a
                href={`tel:${contactInfo.number}`}
                className={`flex-1 p-4 rounded-2xl flex items-center gap-4 transition-all duration-300 ${
                  isDark
                    ? "bg-gray-800/30 hover:bg-gray-800"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Phone size={24} />
                </div>
                <div className="min-w-0">
                  <p
                    className={`text-xs font-bold uppercase tracking-wider ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Call Me
                  </p>
                  <p
                    className={`font-bold break-all ${
                      isDark ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    {contactInfo.number}
                  </p>
                </div>
              </a>
            )}
            <a
              href={`mailto:${contactInfo.email_address}`}
              className={`flex-1 p-4 rounded-2xl flex items-center gap-4 transition-all duration-300 ${
                isDark
                  ? "bg-gray-800/30 hover:bg-gray-800"
                  : "bg-gray-50 hover:bg-gray-100"
              }`}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Mail size={24} />
              </div>
              <div className="min-w-0">
                <p
                  className={`text-xs font-bold uppercase tracking-wider ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Email Me
                </p>
                <p
                  className={`font-bold break-all ${
                    isDark ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  {contactInfo.email_address}
                </p>
              </div>
            </a>
          </div>

          <div className="flex justify-center lg:justify-start">
            <SocialMedia />
          </div>
        </FadeInView>

        <FadeInView
          variant="right"
          className="flex-1 hidden lg:flex items-center justify-center"
        >
          <img
            alt="Contact illustration"
            src={
              require("../../assets/images/googleAssistant.svg").default ||
              require("../../assets/images/googleAssistant.svg")
            }
            width="400"
            height="400"
            className="w-full max-w-md drop-shadow-2xl"
            loading="lazy"
            decoding="async"
          />
        </FadeInView>
      </div>
    </section>
  );
}
