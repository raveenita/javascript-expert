import ContextStrategy from "./src/base/contextStrategy";
import MongoDBStrategy from "./src/base/strategies/mongoDb.strategy";
import PostGresStrategy from "./src/base/strategies/postgres.strategy";

const data = [
    {
        name: 'John',
        type: 'transaction'
    },
    {
        name: 'Jane',
        type: 'activityLog',
    }
];

const postgresConnectionString = 'postgres://user:password@host:5432/postgresDB';
const postgreContext = new ContextStrategy(postgresConnectionString);

postgreContext.connect();

await postgreContext.create(data[0]);
await postgreContext.read(data[0]);

const mongoDBConnectionString = 'mongodb://user:password@host:27017/heroes';
const mongoDBContext = new ContextStrategy(mongoDBConnectionString);

await mongoDBContext.connect();
await mongoDBContext.create(data[1]).name;

contextTypes = {
    transaction: postgreContext,
    activilyLog: mongoDBContext
}

for(const {type, name} of data) {
    const context = contextTypes[type];
    await context.create({ name: name + Date.now() });
}