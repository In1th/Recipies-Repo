import express from 'express';
import morgan from "morgan";
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

app.use(morgan('dev'));
const PORT = process.env.PORT || 80;
const HOST = process.env.ORIGIN || "localhost";

app.use('', (req, res, next) => {
    const proxyTo = req.url.replace('/p6', '');
    console.log(proxyTo, `http://${HOST}:3000${proxyTo}`);
    return createProxyMiddleware({
        target: `http://${HOST}:3000${proxyTo}`,
        changeOrigin: true
    })(req, res, next);
})

app.listen(PORT, () => {
    console.log(`Proxy running on http://${HOST}:${PORT}`);
});