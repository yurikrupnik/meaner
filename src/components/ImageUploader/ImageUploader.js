import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {fetchPayments} from '../../actions/payments';
import Posts from './Posts'

import {getPayments, dispatchActions} from '../../selectors/payments';


class AsyncApp extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {actions} = this.props;
        actions.fetchPayments();
        // dispatch(fetchPayments());
    }

    componentWillReceiveProps(nextProps, a) {
        console.log('nextProps', nextProps);
        console.log('a', a);


        // console.log('2', 2);
        //
        // if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
        //     const {dispatch, selectedSubreddit} = nextProps;
        //     dispatch(fetchPostsIfNeeded(selectedSubreddit));
        // }
    }

    render() {
        const {items, isFetching} = this.props;
        return (
            <div>
                {isFetching && items.length === 0 &&
                <h2>Loading...</h2>
                }
                {!isFetching && items.length === 0 &&
                <h2>Empty.</h2>
                }
                {items.length > 0 &&
                <div style={{opacity: isFetching ? 0.5 : 1}}>
                    <Posts posts={items}/>
                </div>
                }
            </div>
        )
    }
}

// AsyncApp.propTypes = {
//     selectedSubreddit: PropTypes.string.isRequired,
//     posts: PropTypes.array.isRequired,
//     isFetching: PropTypes.bool.isRequired,
//     lastUpdated: PropTypes.number,
//     dispatch: PropTypes.func.isRequireds
// }

export default connect(getPayments, dispatchActions)(AsyncApp)
