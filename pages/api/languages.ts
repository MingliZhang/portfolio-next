import { NextApiRequest, NextApiResponse } from "next";

import { languages } from "../../data";

export default (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({ languages });
};
