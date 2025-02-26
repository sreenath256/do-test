import ContactForm from "../../components/home/designs/ContactForm";
import FadeUp from "../../components/motions/fadeUp";
import Head from "next/head";
import DynamicWorkwithUs from "../../components/home/designs/workWithUs"

import { LogoDO } from "../../../public/images";

export const metadata = {
  title: "Your Digital Marketing Solutions begins: Contact Do Studio",
  description:
    "Get in touch with Do Studio: We specialize in SEO, social media marketing, website development more. Contact us for a free consultation.",
  metadataBase: new URL("https://dostudio.co.in"), // Set the base domain
  keywords:
    "Branding agency in calicut, Digital Marketing Agency in Calicut, Digital marketing services in Calicut, web development company in calicut, digital marketing agency in kozhikode",
  openGraph: {
    title: "Your Digital Marketing Solutions begins: Contact Do Studio",
    description:
      "Get in touch with Do Studio: We specialize in SEO, social media marketing, website development more. Contact us for a free consultation.",
    url: `https://dostudio.co.in/services`,

    type: "article",
  },
};

const Contact = () => {
  return (
    <>
      <main className="min-h-screen w-full bg-white">
        <div className="w-11/12 xl:w-10/12 mx-auto pt-32 py-20">
          <div className="bg-white relative" >
            <img
              className=" w-60 xl:h-full xl:w-full absolute top-[50%] left-[50%] -translate-x-[50%] object-contain -translate-y-[50%] opacity-5 z-10"
              src={LogoDO.src}
              alt=""
            />
            <DynamicWorkwithUs />
          </div>
          <div className="space-y-5">
            <FadeUp duration={0.3} delay={0.1}>
              <h1 className="text-5xl font-medium">Reach Out to Our Team.</h1>
            </FadeUp>
            {/* <FadeUp duration={0.3} delay={0.2}>
              <p className="text-base xl:text-xl font-light">
                You can send us an email or simply fill out the enquiry form and
                we will get back to you as soon as possible.
              </p>
            </FadeUp> */}
          </div>
          {/*  */}
          <div className="flex flex-col-reverse md:flex-row xl:gap-x-32 gap-y-10 pt-10 xl:pt-20 h-full">

            {/* address */}
            <div className="md:basis-1/2 flex flex-col gap-5 xl:gap-10 font-light text-base xl:text-2xl">
              <FadeUp duration={0.3} delay={0.3}>
                <div className="flex flex-col">
                  <a
                    className="hover:underline w-fit"
                    href="mailto:info@dostudio.co.in"
                    target="_blank"
                  >
                    info@dostudio.co.in
                  </a>
                  <a
                    className="hover:underline w-fit"
                    href="tel:+919995055541"
                    target="_blank"
                  >
                    +91 9995055541
                  </a>
                  <a
                    className="hover:underline w-fit"
                    href="tel:+919746155541"
                    target="_blank"
                  >
                    +91 9746155541
                  </a>
                </div>
              </FadeUp>
              <FadeUp duration={0.3} delay={0.4}>
                <div>
                  <p>
                    1st Floor, Ramaswami Complex,
                    <br />
                    Cherooty Rd, Behind Basics,
                    <br />
                    Kozhikode, Kerala,
                    <br />
                    India - 673001
                  </p>
                </div>
              </FadeUp>
            </div>
            {/* form */}
            <section className=' w-full  text-center '>


            </section>

          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
