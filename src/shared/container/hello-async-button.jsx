import { connect } from 'react-redux';

import { sayHelloAsync } from '../action/hello';
import Button from '../component/button';

const mapStateToProps = () => ({
    label: 'Say hello async and send 1234',
});

const mapDispatchToProps = dispatch => ({
    handleClick: () => { dispatch(sayHelloAsync(1234)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
