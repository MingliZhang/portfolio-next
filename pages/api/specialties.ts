import { NextApiRequest, NextApiResponse } from "next";

import { specialties } from "../../data";

export default (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({ specialties });
};
