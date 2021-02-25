const app = require('express')();
const PORT = process.env.PORT || 5000;

const expressConfig = require('./config/express');
const dataBase = require('./config/mongoose');
const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');

expressConfig(app);
dataBase(app);
routes(app);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}..`));