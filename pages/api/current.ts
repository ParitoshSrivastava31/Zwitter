import serverAuth from "@/libs/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'GET') {
        return res.status(405).end();
    }

    try{
        const user = await serverAuth(req,res);

       return res.status(200).json(user);

    } catch(err) {
        console.log(err);
        return res.status(500).end();
    }
}