import { FunctionComponent } from "react";
import ProjectNavItem from "./ProjectNavItem";

const ProjectNavBar: FunctionComponent<{
    handlerFilterCategory: Function;
    active: string;
}> = (props) => {
    return (
        <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none ">
            <ProjectNavItem value="all" {...props} />
            <ProjectNavItem value="next.js" {...props} />
            <ProjectNavItem value="flask" {...props} />
            <ProjectNavItem value="jQuery" {...props} />
            <ProjectNavItem value="express.js" {...props} />
            <ProjectNavItem value="python" {...props} />
            <ProjectNavItem value="c++" {...props} />
            <ProjectNavItem value="matlab" {...props} />
        </div>
    );
};

export default ProjectNavBar;
