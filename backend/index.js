import app from './app.js';
import connectDatabase from './config/database.js';
const PORT = process.env.PORT || 5000;

// UncaughtException Error and server shut down
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    process.exit(1);
});

// Database connection
connectDatabase()

const server = app.listen(PORT, ( err)=>{
    if(err) console.log(err)
    console.log(`Yeah! Server is running at port: ${PORT}`)
})

// Unhandled Promise Rejection and server shutdown
process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
    server.close(() => {
        process.exit(1);
    });
});