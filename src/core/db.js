"use strict";

import mongoose from 'mongoose';
import {databaseUrl} from '../config';

mongoose.Promise = require('bluebird');
mongoose.connect(databaseUrl, {});
mongoose.connection.on('error', function (err) {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
});

require('./seed');
