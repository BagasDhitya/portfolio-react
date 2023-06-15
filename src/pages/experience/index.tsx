import Layout from "../../components/Layout"

import { data } from "../../datas/experience.json"

const Experience = () => {
    return (
        <Layout>
            <div className="flex justify-center py-8">
                <h2 className="text-3xl font-bold">Working Experience</h2>
                <div className="max-w-3xl w-full mx-auto">
                    {data?.map((experience: any, index: number) => (
                        <div
                            key={index}
                            className={`relative flex flex-col ${index % 2 === 0 ? 'from-right-animation' : 'from-left-animation'
                                } my-10`}
                        >
                            <div className="flex items-center justify-center w-16 h-16 bg-porto-sky-500 rounded-full text-white font-bold text-lg md:absolute md:left-0 md:top-1/2 transform -translate-y-1/2">
                                {index + 1}
                            </div>
                            <div
                                className={`bg-white p-6 shadow-md rounded-md ${index % 2 === 0 ? 'md:ml-16' : 'md:mr-16'
                                    }`}
                            >
                                <h3 className="text-lg font-bold mb-2">{experience.title}</h3>
                                <h4 className="text-gray-500 mb-2">{experience.company}</h4>
                                <p className="text-gray-600 mb-4">{experience.date}</p>
                                <p className="text-gray-700">{experience.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </Layout>
    )
}

export default Experience