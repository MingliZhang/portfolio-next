import { languages, frameworks_libraries } from "../data";
import Bar from "../components/Bar";
const Resume = () => {
    return (
        <div className="px-6 py-2 overflow-y-auto" style={{ height: "65vh" }}>
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h5 className="my-3 text-2xl font-bold">Education</h5>
                    <div>
                        <h5 className="my-2 text-xl font-bold">
                            Computer Science and Mathematics
                        </h5>
                        <p className="font-semibold">
                            UNC-Chapel Hill (2018-present)
                        </p>
                        <p className="my-3">
                            I am currently persuing computer science (BS) and
                            mathematics(BS) degree. Planning on persuing a
                            Master's degree in computer science.
                        </p>
                    </div>
                </div>
                <div>
                    <h5 className="my-3 text-2xl font-bold">
                        Current position
                    </h5>
                    <div>
                        <h5 className="my-2 text-xl font-bold">
                            Software Enginner
                        </h5>
                        <p className="font-semibold">Cymantix (2021-present)</p>
                        <p className="my-3">
                            I am currently persuing computer science (BS) and
                            mathematics(BS) degree. Planning on persuing a
                            Master's degree in computer science.
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 ">
                <div className="">
                    <h5 className="my-3 text-2xl font-bold ">
                        Major Languages
                    </h5>
                    <div className="my-2">
                        {languages.map((language) => (
                            <Bar data={language} key={language.name} />
                        ))}
                    </div>
                </div>
                <div className="">
                    <h5 className="my-3 text-2xl font-bold ">
                        Major Frameworks and Libraries
                    </h5>
                    <div className="my-2">
                        {frameworks_libraries.map((framework_library) => (
                            <Bar
                                data={framework_library}
                                key={framework_library.name}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
