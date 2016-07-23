"use strict";

import Payment from '../api/payment/payment.model';
import faker from 'faker';

class ThingC {
    constructor(index) {
        this.name = faker.name.findName();
        this.info = faker.lorem.sentences();
        this.avatar = faker.image.avatar();
        this.image = faker.image.image();
        this.index = index;
    }
}

let Things = [];
for (let i = 0; i < 40; i++) {
    Things.push(new ThingC(i));
}

const createSeedByModel = (model, seed) => {
    return model.create(seed);
};

export default Payment.find({}).remove()
    .then(() => Payment.create(Things));
