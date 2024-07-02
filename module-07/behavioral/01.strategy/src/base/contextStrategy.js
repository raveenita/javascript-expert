export default class ContextStrategy {
    constructor(databaseStrategy) {
        this.databaseStrategy = databaseStrategy;
    }

    connect() {
        return this.databaseStrategy.connect();
    }

    create(item) {
        return this.databaseStrategy.create(item);
    }

    read(item) {
        return this.databaseStrategy.read(item);
    }
}