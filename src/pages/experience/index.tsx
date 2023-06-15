import Layout from "../../components/Layout";
import Whatsapp from "../../components/Whatsapp";

import { data } from "../../datas/experience.json";

const Experience = () => {
  return (
    <Layout>
      <div className="flex justify-center py-8 lg:mx-72">
        <div className="max-w-3xl w-full mx-auto">
          {data?.map((experience: any, index: number) => (
            <div key={index} className={`relative flex flex-col my-10`}>
              {index >= 0 && (
                <div className="absolute bg-gray-300 h-full w-px left-8 top-0" />
              )}
              <div
                className={`flex items-center justify-center w-16 h-16 bg-porto-sky-500 rounded-full text-white font-bold text-lg md:absolute md:left-0 md:top-1/2 transform -translate-y-1/2`}
              >
                {index + 1}
              </div>
              <div className={`bg-white p-6 shadow-md rounded-md ml-24`}>
                <h3 className="text-lg font-bold mb-2">{experience.title}</h3>
                <h4 className="text-gray-500 mb-2">{experience.company}</h4>
                <p className="text-gray-600 mb-4">{experience.date}</p>
                <div className="flex flex-row">
                  {experience.description.map((item: any) => {
                    return (
                      <>
                        {item}
                        <br />
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Whatsapp />
    </Layout>
  );
};

export default Experience;
