import { GetServerSideProps, GetStaticProps } from "next";
import SpecialtyCard from "../components/SpecialtyCard";
import { specialties } from "../data";
const Index = () => {
    return (
        <div
            className="flex flex-col flex-grow px-6 pt-1 overflow-y-auto"
            style={{ height: "65vh" }}
        >
            <h5 className="my-3 font-medium">
                I am currently a senior undergraduate student pursuing a
                computer science(BS) and mathematics(BS) degree, planning on
                pursuing a masters dgree in computer science next year.
            </h5>
            <div
                className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
                style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
            >
                <h6 className="my-3 text-xl font-bold tracking-wide">
                    What I Offer
                </h6>
                <div className="grid gap-6 lg:grid-cols-2">
                    {specialties.map((specialty) => (
                        <div className="bg-gray-200 rounded-lg lg:col-span-1 dark:bg-dark-200">
                            <SpecialtyCard specialty={specialty} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Index;

// export const getStaticProps = async (context: GetStaticProps) => {
//     const res = await fetch("http://localhost:3000/api/services");
//     const data = await res.json();

//     return {
//         props: {
//             services: data.services,
//         },
//     };
// };
