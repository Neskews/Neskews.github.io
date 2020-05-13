import { Header } from './Header';
import { connect } from "../../api/Provider/connect";
import {
  goToLogin
} from "../../api/reducers/process/actionCreators";
import { getError } from "../../api/selectors/status/status";

const mapStateToProps = state => ({
  error: getError(state)
});

export const mapDispatchToProps = dispatch => ({
  onGoToLogin: () => dispatch(goToLogin()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);