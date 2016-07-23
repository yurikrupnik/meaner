"use strict";

import Payment from '../api/payment/payment.model';
import {map, range, fill} from 'lodash';
import {createSeedByModel} from '../data/fake';

export default Payment.find({}).remove()
    .then(() => createSeedByModel(Payment));
