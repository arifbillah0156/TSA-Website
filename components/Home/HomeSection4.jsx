import SplitText from "../Others/SplitText";

export default function HomeSection4() {

  return (
    <div className="w-full mx-auto mt-6 p-3 rounded-lg shadow-md">
      {/* Heading */}
      <div className="w-full text-center">
        <SplitText text="Explore Our Campus Location" className="text-2xl lg:text-4xl font-bold text-lc text-center mb-4 abril-fatface-regular" />
      </div>
      <div className="w-full">
        <div className="max-w-5xl mx-auto">
          <p className="w-full border-b-4 border-lc mb-6"></p>
        </div>
      </div>
      {/*  */}
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d456.068875695221!2d90.4298811180031!3d23.870072434215963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c59d58db6255%3A0xfba02c8ab99477f1!2zVGF3cWEgU2hpc2h1IEFjYWRlbXkg4Kak4Ka-4KaV4KaT4Kef4Ka-IOCmtuCmv-CmtuCngSDgpo_gppXgpr7gpqHgp4fgpq7gpr8!5e0!3m2!1sen!2sbd!4v1765687288882!5m2!1sen!2sbd" className="w-full rounded-lg" height="400" loading="lazy" ></iframe>
    </div>
  );
}
