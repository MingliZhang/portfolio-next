import Link from "next/link";
import { FunctionComponent } from "react";

const Navitem: FunctionComponent<{
    activeItem: string;
    setActiveItem: Function;
    name: string;
    route: string;
}> = ({ activeItem, setActiveItem, name, route }) => {
    return activeItem !== name ? (
        <Link href={route}>
            <a>
                <span
                    onClick={() => setActiveItem(name)}
                    className="hover:text-green"
                >
                    {name}
                </span>
            </a>
        </Link>
    ) : null;
};

export default Navitem;
