import http from 'http';
import { runPaymentDemo } from './workflows/payment-flow';

const PORT = parseInt(process.env.PORT ?? '3000', 10);
const HOST = process.env.HOST ?? '0.0.0.0';

const server = http.createServer((req, res) => {
  const demo = runPaymentDemo('HTTP 演示请求：生成一条支付流');

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ status: 'ok', path: req.url, demo }, null, 2));
});

server.listen(PORT, HOST, () => {
  console.log(`Server listening on http://${HOST}:${PORT}`);
});
