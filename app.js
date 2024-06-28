import * as dotenv from 'dotenv';
dotenv.config();

import logger from './utils/logger.js';

import fs from 'node:fs';

import express from 'express';
import nunjucks from 'nunjucks';

import { fileURLToPath } from 'url';

import { dirname } from 'path';
// eslint-disable-next-line no-unused-vars
import path from 'path';

import  rootRouter from './router/root/rootRouter.js';

const __filename = fileURLToPath(import.meta.url);
// eslint-disable-next-line no-unused-vars
const __dirname = dirname(__filename);

const configData = JSON.parse(fs.readFileSync('./config/siteConfig.json', 'utf-8'));

const app = express();

app.use([
	express.json(),
	express.urlencoded({extended: true}),
	express.static('public'),
	logger
]);

const env = nunjucks.configure([
	"node_modules/bootstrap/dist",
	'views'], {
	express: app,
	autoescape: false,
	watch: true
});

env.addGlobal('configData', configData);

env.addGlobal('currentYear', new Date().getFullYear());

app.set('view engine', 'njk');

app.use('/', rootRouter);

// 404 Error Handler
app.use((req, res, next) => {
	const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
	res.status(404).render('404', { requestedUrl: fullUrl });
});

export default app;