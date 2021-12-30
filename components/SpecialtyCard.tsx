import { FunctionComponent } from "react";
import { ISpecialty } from "../type";

const SpecialtyCard: FunctionComponent<{ specialty: ISpecialty }> = ({
    specialty: { title, about, Icon },
}) => {
    const createMarkup = () => {
        return {
            __html: about,
        };
    };
    return (
        <div className="flex items-center p-2 space-x-4">
            <Icon className="w-12 h-12 text-green" />
            <div>
                <h5 className="font-bold">{title}</h5>
                <p dangerouslySetInnerHTML={createMarkup()} />
            </div>
        </div>
    );
};

export default SpecialtyCard;
