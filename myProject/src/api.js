const Hapi = require('@hapi/hapi');
const server = Hapi.server({
 (   port: 3000,
    host: 'localhost'
});
const routes = require('./routes/todoRoute');
server.route(routes);
const init = async () => {
    await server.start();
    console.log(`Server running ats: ${server.info.uri}`);
};
process.on('unhandledRejection',(err) => {
    console.log(err);
    process.exit(1);
});
init();