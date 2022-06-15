import emailjs from "emailjs-com";
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g26i7zl",
        "service_g26i7zl",
        e.target,
        "fa2LsSSnDL2f9uH_4k0Gr"
      )
      .then((res) => {
        console.log(res);
      });
    e.target.reset();
    alert("Mensaje enviado");
  };
  return (
    <div
      className="bg-primary flex h-screen  flex-col gap-5   items-center justify-center"
      id="Contact"
    >
      <div className="flex">
        <h1 className="font-semibold text-white text-4xl">CONTACT</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5 items-center">
          <div className="gap-6 flex flex-col">
            <div className="flex gap-6">
              <div className="">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-42 md:w-72 xl:w-96  bg-[#2B1F46] text-white rounded-lg px-4 py-2"
                  name="firstName"
                />
              </div>
              <div className=" ">
                <input
                  type="email"
                  placeholder="Email Adress"
                  className="w-42 md:w-72 xl:w-96 bg-[#2B1F46] text-white rounded-lg px-4 py-2"
                  name="email"
                />
              </div>
            </div>
            <div>
              <textarea
                className="bg-[#2B1F46] w-full text-white rounded-lg px-4 py-2"
                name=""
                id=""
                placeholder="Your Message"
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#00001F] rounded-full py-4 text-white w-[30%]  shadow-[#EF3234] shadow-md font-light flex justify-center"
          >
            SEND MESSAGE
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
