import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    console.log("~ e", e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="contact  flex flex-col items-center p-4">
      {/* HEADINGS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex flex-col items-center py-9"
      >
        <div className="text-center">
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-yellow">CONTACT ME</span> TO GET STARTED
          </p>
          <div className="flex justify-end my-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>

      {/* FORM & IMAGE */}
      <div className="md:flex md:justify-center gap-16 mt-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 flex justify-center"
        >
          <div className="relative z-0 before:absolute before:-top-10 before:-left-10
          before:w-full before:max-w-[500px] md:before:max-w-[500px] before:h-full before:border-2 before:border-blue before:z-[-1] before:rounded-[20px]">
            <img
              src="assets/contact.png"
              className="z-10 w-full max-w-[200px] md:max-w-[500px]"
              alt="contact"
            />
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 py-9 flex justify-center"
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/wiembelhaj96@gmail.com"
            method="POST"
            className="w-full max-w-[400px]"
          >
            <input
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3"
              type="text"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-red mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}

            <input
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <textarea
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
              name="message"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-red mt-1">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}

            <button
              className="p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500"
              type="submit"
            >
              SEND ME A MESSAGE
            </button>
          </form>
        </motion.div>
      </div>
      
        <div className="text-center ">
  <h2 className="font-playfair font-semibold text-4xl">
  Or you can reach me on WhatsApp  </h2>
  <p className="m-4 mb-10">
    If you prefer a quick chat or need immediate assistance, feel free to reach out to me on WhatsApp! I'm always happy to help and discuss your project ideas.
  </p>
</div>

<div className="md:flex md:justify-center gap-10">
  {/* Left Column */}
  <div className="basis-1/2 flex flex-col justify-center items-center text-center ">
    <p className="mb-5">
      Click the button below to start a conversation:
    </p>
    <a
      href="https://wa.me/20397746" 
      className="p-5 mb-5 bg-yellow font-semibold text-deep-blue hover:bg-red hover:text-white transition duration-500"
    >
      Call me on WhatsApp
    </a>
  </div>

  {/* Right Column */}
  <div className="basis-1/2 flex justify-center ">
    <img
      src="assets/whatsapp-img.png"
      className=" mw-full max-w-[100px] md:max-w-[200px] p-10px" 
      alt="WhatsApp"
    />
  </div>
</div>

        
    </section>
    
  );
};

export default Contact;
