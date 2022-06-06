import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import { NextApiRequest, NextApiResponse } from "next";

/*
Strategy: 
[ ] User sends credentials
[ ] Attempt to create a new user with credentials and a rash password
[ ] Either create the user or not generate feedback to user weather it fails or not. 
[ ] Place the jsonwebtoken into the cookie to be store in the browser
jsonwebtoken stores - user credentials - name, email, role, etc.
*/

export default async (req: NextApiRequest, res: NextApiResponse) => {};
