import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import InvidualPage from '../../components/pages/individual/Individual.page.antdesign.jsx';
import BaseLayoutContainer from '../baseLayout/Base.layout.container.jsx';


class IndividualContainer extends BaseLayoutContainer {
    render() {
        return (
            <InvidualPage
                {...this.props}
                uuid={this.stateProps ? this.stateProps.uuid : null}
            />
        );
    }
}

IndividualContainer.propTypes = {};

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(IndividualContainer);



