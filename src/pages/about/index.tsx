import Layout from "../../components/Layout";
import Profile from "../../assets/profile.jpeg";
import { data } from "../../datas/about.json";

const About = () => {
  return (
    <Layout>
      <main className="container mx-auto px-auto py-8">
        <section className="flex flex-col items-center md:flex-row">
          <div className="lg:ml-20 w-1/4 mb-6 md:mb-0">
            <img
              className="rounded-full border-4 border-white shadow-lg animate-pulse"
              src={Profile}
              alt="Profile"
            />
          </div>
          <div className="w-full md:w-3/4">
            <h2 className="text-2xl font-bold text-porto-sky-700 mb-4 text-center">
              Hello, I'm Bagas Dhitya Taufiqqi
            </h2>
          </div>
        </section>
        <section className="my-10 lg:ml-20">
          <h2 className="text-2xl font-bold text-porto-sky-700 mb-4">
            About Me
          </h2>
          <p className="text-porto-sky-700 text-justify">{data.about}</p>
        </section>
        <section className="lg:ml-20">
          <h2 className="text-2xl font-bold text-porto-sky-700">Tech Stack</h2>
          <div className="flex flex-wrap justify-center items-center m-10 lg:space-x-20 space-x-10">
            {data &&
              data.tech_stack.map((item: any) => {
                return <img className="h-12 mr-4 mb-4" src={item?.uri} />;
              })}
          </div>
        </section>

        <footer className="ml-5 lg:ml-20 mt-40 flex justify-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Bagas Dhitya Taufiqqi. All rights
            reserved.
          </p>
        </footer>
      </main>
    </Layout>
  );
};

export default About;
