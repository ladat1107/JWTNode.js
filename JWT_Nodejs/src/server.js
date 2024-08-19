import express from 'express';
import bodyParser from 'body-parser';
import configViewEngine from './config/configViewEngine';
import initWebRount from './rounter/web';
import connectDB from './config/connectDB';
import cors from 'cors';


const app = express();

app.use(cors({ credentials: true, origin: true }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));

// Configure view engine

configViewEngine(app);

// Initialize web routes

initWebRount(app);
// connectDB();
let PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;