import React, { useState } from "react";
import vg from "../assets/vg.png";
import { motion } from "framer-motion";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { toast } from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);

  // Animations
  const animations = {
    form: {
      initial: { x: 100, opacity: 0 }, // px instead of %
      whileInView: { x: 0, opacity: 1 },
      transition: { duration: 0.7 },
    },
    button: {
      initial: { y: -30, opacity: 0 },
      whileInView: { y: 0, opacity: 1 },
      transition: { delay: 0.3, duration: 0.6 },
    },
  };

  // Submit handler
  const submitHandler = async (e) => {
    e.preventDefault();
    setDisableBtn(true);

    try {
      await addDoc(collection(db, "contact"), { name, email, message });
      toast.success("Message Sent ✅");

      setName("");
      setEmail("");
      setMessage("");
      setDisableBtn(false);
    } catch (error) {
      toast.error("Error ❌");
      console.log(error);
      setDisableBtn(false);
    }
  };

  return (
    <div id="contact" className="container py-5 overflow-hidden">
      <div className="row align-items-center">
        {/* Image (Left) */}
        <motion.div
          className="col-lg-6 col-md-5 col-12 text-center mb-4 mb-md-0"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={vg}
            alt="Contact"
            className="img-fluid rounded-4 shadow-sm"
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </motion.div>

        {/* Form (Right) */}
        <motion.div
          className="col-lg-6 col-md-7 col-12"
          initial={animations.form.initial}
          whileInView={animations.form.whileInView}
          transition={animations.form.transition}
        >
          <div className="card shadow-lg border-0 p-4 rounded-4">
            <h2 className="fw-bold mb-4 text-center text-primary">
              Contact Me
            </h2>
            <form onSubmit={submitHandler}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg rounded-3"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control form-control-lg rounded-3"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  rows="4"
                  className="form-control form-control-lg rounded-3"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={disableBtn}
                className={`btn btn-primary w-100 py-2 rounded-3 shadow-sm ${
                  disableBtn ? "disabled" : ""
                }`}
                initial={animations.button.initial}
                whileInView={animations.button.whileInView}
                transition={animations.button.transition}
              >
                {disableBtn ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
