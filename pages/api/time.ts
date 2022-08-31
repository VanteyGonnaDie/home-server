// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { exec } from 'child_process';

type Data = {
  time: string
  request: any
  status: any
}


export default function  handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // exec('echo "test"', (error:any, stdout:any, stderr:any) => {
    exec('cd', (error:any, stdout:any, stderr:any) => {
    let status
    if (error) {
      console.error(`error: ${error.message}`);
      status = error
      return;
    }
    
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      status = stderr
      return;
    }
    status = stdout
    console.log(`stdout:\n${stdout}`);
    res.status(200).json({ time: `${new Date(Date.now())}` , request: req.headers, status: status })
  });
}
