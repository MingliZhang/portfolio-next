import { FunctionComponent } from "react";
import { Category } from "../type";

const ProjectNavItem: FunctionComponent<{
    value: Category | "all";
    handlerFilterCategory: Function;
    active: string;
}> = ({ value, handlerFilterCategory, active }) => {
    let classes = "capitalize cursor-pointer hover:text-green";
    if (active === value) classes += " text-green";
    return (
        <li className={classes} onClick={() => handlerFilterCategory(value)}>
            {value}
        </li>
    );
};

export default ProjectNavItem;
