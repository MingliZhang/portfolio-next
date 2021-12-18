import { GetServerSideProps, GetStaticProps } from "next";
// import { services } from "../data";
const index = () => {
    return (
        <div>
            <h5></h5>
        </div>
    );
};

export default index;

// export const getStaticProps = async (context: GetStaticProps) => {
//     const res = await fetch("http://localhost:3000/api/services");
//     const data = await res.json();

//     return {
//         props: {
//             services: data.services,
//         },
//     };
// };
