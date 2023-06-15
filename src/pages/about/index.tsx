import { motion } from "framer-motion";

import Layout from "../../components/Layout";
import Profile from "../../assets/profile.jpeg";
import { data } from "../../datas/about.json";
import Whatsapp from "../../components/Whatsapp";
import Button from "../../components/Button";

const About = () => {
  return (
    <Layout>
      <main className="container mx-auto px-auto py-8">
        <section className="flex flex-col items-center md:flex-row">
          <div className="lg:ml-20 w-1/4 mb-6 md:mb-0">
            <img
              className="rounded-full border-4 border-white shadow-lg"
              src={Profile}
              alt="Profile"
            />
          </div>
          <div className="w-full md:w-3/4">
            <motion.h2
              className="text-2xl font-bold text-porto-sky-700 mb-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {data.name}
            </motion.h2>
            <p className="text-lg text-porto-sky-700 mb-4 text-center">
              Programming Mentor | Software Engineer | Javascript Developer
            </p>
            <div className="flex justify-center lg:mx-80 lg:gap-x-5 md:gap-x-5 md:justify-start sm:gap-x-5 gap-x-5">
              <Button
                id="linkedin"
                label="LinkedIn"
                type="filled"
                target="_blank"
                to={"https://www.linkedin.com/in/bagasdhityataufiqqi/"}
              />
              <Button
                id="github"
                label="Github"
                type="non-filled"
                target="_blank"
                to={"https://github.com/BagasDhitya"}
              />
            </div>
          </div>
        </section>
        <section className="my-10 lg:ml-20">
          <h2 className="text-2xl font-bold text-porto-sky-700 mb-4">
            About Me
          </h2>
          <motion.p
            className="text-porto-sky-700 text-justify"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {data.about}
          </motion.p>
        </section>
        <section className="lg:ml-20">
          <h2 className="text-2xl font-bold text-porto-sky-700">Tech Stack</h2>
          <div className="flex flex-wrap justify-center items-center m-10 lg:space-x-20 space-x-10">
            {data &&
              data.tech_stack.map((item: any, index: number) => {
                return (
                  <motion.img
                    key={index}
                    className="h-12 mr-4 mb-4"
                    src={item?.uri}
                    whileHover={{ scale: 2 }}
                    transition={{ duration: 0.2 }}
                  />
                );
              })}
          </div>
        </section>
        <footer className="ml-5 lg:ml-20 mt-40 flex justify-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Bagas Dhitya Taufiqqi. All rights
            reserved.
          </p>
        </footer>
        <Whatsapp />
      </main>
    </Layout>
  );
};

export default About;
