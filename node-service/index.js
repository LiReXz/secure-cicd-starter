const http = require('node:http');

function createApp() {
	return http.createServer((req, res) => {
		if (req.url === '/' && req.method === 'GET') {
			res.writeHead(200, { 'Content-Type': 'application/json' });
			res.end(JSON.stringify({ status: 'Secure Node Service Running' }));
			return;
		}

		res.writeHead(404, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify({ error: 'Not Found' }));
	});
}

if (require.main === module) {
	const port = Number(process.env.PORT) || 3000;
	createApp().listen(port, () => {
		// eslint-disable-next-line no-console
		console.log(`Node service listening on port ${port}`);
	});
}

module.exports = { createApp };
