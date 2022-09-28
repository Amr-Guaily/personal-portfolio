import cookie from 'cookie';
export default function handler(req, res) {
  const { name, password } = req.body;

  if (req.method === 'POST') {
    if (
      name === process.env.ADMIN_USERNAME &&
      password == process.env.ADMIN_PASSWORD
    ) {
      res.setHeader(
        'set-cookie',
        cookie.serialize('personalSiteToken', process.env.NEXT_PUPLIC_TOKEN, {
          httpOnly: true,
          maxAge: 60 * 60 * 60,
          // Only attached to same site requests
          sameSite: 'strict',
          // Available everywhere within the site
          path: '/',
        })
      );
      res.status(200).json('Success');
    } else {
      res.status(400).json('failure..');
    }
  }
}
