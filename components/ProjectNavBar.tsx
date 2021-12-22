import { FunctionComponent } from "react";
import ProjectNavItem from "./ProjectNavItem";

const ProjectNavBar: FunctionComponent<{
    handlerFilterCategory: Function;
    active: string;
}> = (props) => {
    return (
        <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none ">
            <ProjectNavItem value="all" {...props} />
            <ProjectNavItem value="react" {...props} />
            <ProjectNavItem value="node" {...props} />
            <ProjectNavItem value="firebase" {...props} />
            <ProjectNavItem value="jquery" {...props} />
            <ProjectNavItem value="css" {...props} />
            <ProjectNavItem value="heroku" {...props} />
        </div>
    );
};

export default ProjectNavBar;
