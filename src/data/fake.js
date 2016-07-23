import faker from 'faker';
import {range} from 'lodash';

class FakeDataWithIndex {
    constructor(index) {
        this.name = faker.name.findName();
        this.info = faker.lorem.sentences();
        this.avatar = faker.image.avatar();
        this.image = faker.image.image();
        this.id = index;
    }
}

export function createNewFaker(v, i) {
    return new FakeDataWithIndex(i);
}

export const createSeedByModel = (model) => {
    const seed = Array.from(range(0, 100), createNewFaker) || [];
    model && model.create(seed);
};


export default FakeDataWithIndex;
