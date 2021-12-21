import { FunctionComponent } from "react";
import { Category } from "../type";

const ProjectNavItem: FunctionComponent<{ value: Category | "all" }> = ({
    value,
}) => {
    return <li>{value}</li>;
};

export default ProjectNavItem;
