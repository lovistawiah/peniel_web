import { Mail, MapPin, Phone, SendHorizonal } from "lucide-react";

const Contact = () => {
  return (
    <section className="flex flex-col items-center gap-[49px] px-5 bg-white">
      <div className="w-full text-center">
        <h2 className="text-2xl font-bold leading-normal text-center">
          Contact <span className="text-[#FDC944] text-3xl">Us</span>
        </h2>
        <p className="opacity-70 text-center leading-normal ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fugiat
          fugit blanditiis corrupti deserunt natus cupiditate, adipisci libero
          et amet!
        </p>
      </div>
      <div className="w-[90%] flex flex-col gap-[26px] h-fit bg-[#D9D2D2] py-3 px-3">
        {/* first and last name */}
        <div className="w-full flex flex-col md:flex-row md:gap-[5%] gap-[26px] justify-between">
          <input
            type="text"
            name="firstName"
            id="first name"
            className="h-12 w-full md:w-[45%] rounded-[7px] text-base leading-normal bg-white border border-slate-900 px-2"
            placeholder="First Name"
          />
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="h-12 w-full md:w-[45%] rounded-[7px] text-base leading-normal bg-white border border-slate-900 px-2"
            placeholder="Last Name"
          />
        </div>
        {/* email */}
        <input
          type="email"
          name="email"
          id="email"
          className="h-12 w-full rounded-[7px] text-base leading-normal bg-white border border-slate-900 px-2"
          placeholder="Email"
        />
        <textarea
          name="message"
          id=""
          cols={30}
          rows={10}
          className="resize-none px-2 py-2 text-base leading-normal "
          placeholder="Enter message..."
        ></textarea>
        <button className="w-[200px] md:w-[300px] h-fit p-3 bg-[#FDC944] font-semibold flex text-white justify-center place-self-center rounded-md">
          Send
          <span>
            <SendHorizonal />
          </span>
        </button>
      </div>
      {/* more info */}
      <div className="w-[90%] py-3 px-5 flex flex-col gap-5 md:flex-row md:gap-11 items-center md:items-start ">
        <div className="w-[300px] h-fit bg-[#003A5E] text-white p-3 rounded-[20px] shadow flex flex-col items-center gap-1">
          <h3 className="flex justify-center items-center gap-1 font-bold text-2xl leading-normal">
            <Phone className="text-4xl" />
            <span>
              <span>+(233)</span> <span>243</span> <span>343</span>{" "}
              <span>446</span>
            </span>
          </h3>
          <p className="text-center opacity-70 text-base leading-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, animi.
          </p>
        </div>

        <div className="w-[300px] h-fit bg-[#FDC944] text-white p-3 rounded-[20px] shadow flex flex-col items-center gap-1">
          <h3 className="flex justify-center items-center gap-1 font-bold text-2xl leading-normal">
            <MapPin className="text-4xl" />
            <span>
              <span>+(233)</span> <span>243</span> <span>343</span>{" "}
              <span>446</span>
            </span>
          </h3>
          <p className="text-center opacity-70 text-base leading-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, animi.
          </p>
        </div>

        <div className="w-[300px] h-fit bg-[#0971B2] text-white p-3 rounded-[20px] shadow flex flex-col items-center gap-1">
          <h3 className="flex justify-center items-center gap-1 font-bold text-2xl leading-normal">
            <Mail className="text-4xl" />
            <span className="leading-[25px]">
              penielhouseministryint
              <span>
                <br />
                @gmail.com
              </span>
            </span>
          </h3>
          <p className="text-center opacity-70 text-base leading-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, animi.
          </p>
        </div>
      </div>
      {/* map */}
      <div className="w-[90%] h-[400px] place-self-center">
        <iframe
          title="Location of Peniel House Ministries International"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.7004595929807!2d-0.10817969999999999!3d5.6111811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf85007de828f7%3A0x8ab443be98a647b9!2sPeniel%20House%20Ministries%20International!5e0!3m2!1sen!2sgh!4v1740128851061!5m2!1sen!2sgh"
          style={{ border: 0 }}
          className="w-full h-full rounded-lg"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
