import { FunctionComponent } from "react";
import { Category } from "../type";

const ProjectNavItem: FunctionComponent<{ value: Category | "all" }> = ({
    value,
}) => {
    return (
        <li className="capitalize cursor-pointer hover:text-green">{value}</li>
    );
};

export default ProjectNavItem;
