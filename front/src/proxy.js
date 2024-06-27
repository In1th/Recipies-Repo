
export default {
  name: 'proxy',
  async handle({ event, resolve }) {
    const { request, response } = event;
    if (request.url.startsWith('/p6')) {
      const targetUrl = `http://localhost:3000${request.url.replace('/p6', '')}`;
      const res = await fetch(targetUrl);
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.write(res.body);
      response.end();
    } else {
      await resolve();
    }
  }
};