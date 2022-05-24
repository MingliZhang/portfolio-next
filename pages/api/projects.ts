import { NextApiRequest, NextApiResponse } from 'next';

import { projects } from '../../data';

export default (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({ projects });
};
