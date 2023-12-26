import Circles from "../../components/Circles";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    const serviceId = "service_tqbzcyx";
    const templateId="template_j2cj1e8"
    const publicKey="z5bWbp4XG9k6znIu-"
    const templateParams = {
      from_name:name,
      from_email:email,
      to_name:'Nitish Kumar',
      message:message,
      subject:subject
    }
    emailjs
      .send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )
      .then(
        (response) => {
          console.log("Email Sent Successfully.",response);
          setName('');
          setEmail('');
          setMessage('');
          setSubject('');
        },
        (error) => {
          console.log("Error While Sending Email",error);
        }
      );
  };
  return (
    <div className="h-full mt-14 md:mt-0 bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/*text and form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center md:mb-12"
          >
            Let&apos;s <span className="text-accent"> Connect</span>
          </motion.h2>
          {/**form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                placeholder="name"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <input
              type="text"
              placeholder="subject"
              className="input"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              placeholder="message"
              name="message"
              className="textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let&apos;s talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
