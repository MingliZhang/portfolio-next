import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../type";

const ProjectCard: FunctionComponent<{ project: IProject }> = ({
    project: {
        name,
        description,
        image_path,
        deployed_url,
        github_url,
        catagory,
        key_techs,
    },
}) => {
    const [showDetail, setShowDetail] = useState(false);
    return (
        <div>
            <img
                src={image_path}
                alt={name}
                className="cursor-pointer"
                onClick={() => setShowDetail(true)}
            />
            <p className="my-2 text-center">{name}</p>

            {showDetail && (
                <div className="absolute top-0 left-0 z-10 grid w-full h-auto md:grid-cols-2 gap-x-12">
                    <img
                        src={image_path}
                        alt={name}
                        className="cursor-pointer"
                    />
                    <div>
                        <a href={github_url}>
                            <AiFillGithub /> <span>Github</span>
                        </a>
                        <a href={deployed_url}>
                            <AiFillProject /> <span>Project</span>
                        </a>
                    </div>
                    <div>
                        <h2>{name}</h2>
                        <h3>{description}</h3>
                        <div>
                            {key_techs.map((tech) => (
                                <span key={tech}>{tech}</span>
                            ))}
                        </div>
                    </div>
                    <button>
                        <MdClose
                            size={30}
                            onClick={() => setShowDetail(false)}
                        />
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProjectCard;
