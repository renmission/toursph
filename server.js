const mongoose = require('mongoose');
const dotenv = require('dotenv');

// handle unhandledRejection
process.on('uncaughtException', err => {
    console.log('UNCAUGTH EXCEPTIONS! shutting down....');
    console.log(err.name, err.message);
    process.exit(1);
});

dotenv.config({ path: './config.env' });

const app = require('./app');

const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
);

// DB options
const DBOptions = {
    useCreateIndex: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
}

// DB
mongoose
    .connect(DB, DBOptions)
    .then(() => console.log(`DB Connected on ${DB}`));


const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});


// handle unhandledRejection
process.on('unhandledRejection', err => {
    console.log('UNHANDLED REJECTIONS! shutting down....');
    console.log(err.name, err.message);
    server.close(() => process.exit(1));
});