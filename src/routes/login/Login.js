/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, {Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Login.scss';

import {connect} from 'react-redux';
import {getCounter, dispatchActions} from '../../selectors/counter';


class Login extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        counter: PropTypes.number.isRequired,
        actions: PropTypes.object.isRequired
    };

    handlePlus() {
        const {actions} = this.props;
        actions.plus();
    }

    handleMinus() {
        const {actions} = this.props;
        actions.minus();
    }

    render() {
        return (
            <div className={s.root}>
                <div className={s.container}>
                    <h1>{this.props.title}</h1>
                    <h1>{this.props.counter}</h1>
                    <div>
                        <button onClick={this.handlePlus.bind(this)}>+</button>
                        <button onClick={this.handleMinus.bind(this)}>-</button>
                    </div>
                </div>
            </div>
        );
    }
}


export default connect(getCounter, dispatchActions)(withStyles(Login, s));
