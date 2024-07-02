export default class MongoDBStrategy {
    #instance;
    constructor(connectionString) {
        const { pathname: dbName } = new URL(connectionString);
        this.connectionString = connectionString.replace(dbName, '');
        this.db = dbName.replace(/\W/, '');

        this.collection = 'warriors';
    }

    async connect() {
        const client = new MongoDB.MongoClient(this.connectionString, {
            useUnifiedTopology: true
        });

        await client.connect();

        const db = client.db('heroes').collection(this.collection);
    }

    create(item) {
        return this.#instance.insertOne(item);
    }

    read(item) {
        return this.#instance.find(item).toArray();
    }
}

module.exports = MongoDBStrategy;