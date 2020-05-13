import { connect } from '../../../../../../api/Provider/connect';
import { SmartView as _SmartView } from './SmartView';
import { getBands } from "../../../../../../api/selectors/selectors";

const mapStateToProps = state => ({
  bands: getBands(state)
});

export const SmartView = connect(
  mapStateToProps
)(_SmartView);