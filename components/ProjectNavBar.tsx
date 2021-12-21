import ProjectNavItem from "./ProjectNavItem";

const ProjectNavBar = () => {
    return (
        <div>
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
