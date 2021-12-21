import ProjectNavItem from "./ProjectNavItem";

const ProjectNavBar = () => {
    return (
        <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none ">
            <ProjectNavItem value="all" />
            <ProjectNavItem value="react" />
            <ProjectNavItem value="node" />
            <ProjectNavItem value="firebase" />
            <ProjectNavItem value="jquery" />
            <ProjectNavItem value="css" />
            <ProjectNavItem value="heroku" />
        </div>
    );
};

export default ProjectNavBar;
