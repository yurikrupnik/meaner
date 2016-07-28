import React, {Component, PropTypes} from 'react';
import PaymentApi from '../../../data/api/Payments';
import connect from 'redux';

class Payments extends Component {
    constructor() {
        super();
        this.state = {

        }
    }


    componentWillMount() {

    }
}


export default connect()(Payments)
