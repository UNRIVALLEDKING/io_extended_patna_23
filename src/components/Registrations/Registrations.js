export default function Registrations() {
  return (
    <section id="register" className="registration">
      <h1 className="mt-10 mb-2 text-center capitalize text-2xl z-[999999]">
        Registration
      </h1>
      <hr className="w-1/2 md:w-1/5 mx-auto" />
      <div
        className="flex flex-row 
      md:mt-[150px]
       flex-wrap z-[999999] md:min-h-[50vh] justify-center items-center"
      >
        {/* <p className="md:w-2/3 w-[90%] text-center md:text-2xl">
          Attention tech enthusiasts and innovators! The countdown is on for the
          highly anticipated Google I/O Extended Patna event, and we&apos;re
          thrilled to announce that registration will be opening soon! Get ready
          to secure your spot and be part of an extraordinary gathering of tech
          minds. Whether you&apos;re a developer, designer, or simply fascinated
          by the latest advancements, this is your chance to join us for a day
          filled with knowledge-sharing, networking, and unforgettable
          experiences. Stay tuned to our website for the official registration
          launch, and be prepared to embark on a tech journey like no other.
          Don&apos;t miss your opportunity to be part of this groundbreaking
          event! 🚀 #GoogleIOExtendedPatna #RegistrationOpeningSoon
          #TechJourneyAwaits
        </p> */}
        <iframe
          id="ts-iframe"
          src="https://www.townscript.com/v2/widget/gdg-patna-io-extended-2023-442230/booking"
          frameborder="0"
          height="600"
          width="80%"
          className="text-white bg-transparent"
        ></iframe>
        <link
          rel="stylesheet"
          href="https://www.townscript.com/static/Bookingflow/css/ts-iframe.style.css"
        ></link>
      </div>
    </section>
  );
}
