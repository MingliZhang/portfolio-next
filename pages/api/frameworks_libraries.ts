import { NextApiRequest, NextApiResponse } from "next";

import { frameworks_libraries } from "../../data";

export default (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({ frameworks_libraries });
};
