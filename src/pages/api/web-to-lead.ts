import { NextApiHandler } from 'next';

const whitelist = ['getstatements.com', 'getstatements.vercel.app'];

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    let accessible = false;

    for (const whitelistedOrigin of whitelist) {
      if (new RegExp(whitelistedOrigin, 'gi').test(req.headers.referer || '') || new RegExp(whitelistedOrigin, 'gi').test(req.headers.origin || '')) {
        accessible = true;
        continue;
      }
    }

    if (!accessible) return res.status(406).send(req.headers.referer || '');

    let oid = process.env.OID!;
    let retURL = process.env.RETURL!;

    try {
      let b = typeof req.body === 'object' ? req.body : JSON.parse(req.body);

      const r = await fetch('https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8', {
        body: new URLSearchParams({ ...b.data, oid, retURL, debug: 1 }).toString(),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        method: 'POST',
      });
      return res.status(201).send(await r.text());
    } catch (err) {
      console.log(err);
      return res.status(400).send((err as any).message + '\n\nbody:\n\n' + req.body);
    }
  } catch {
    return res.status(406).send(null);
  }
};

export default handler;
