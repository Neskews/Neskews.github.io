import { connect } from "../../../../api/Provider/connect";
import { Small as _Small } from './Small';
import { getIsFetching } from "../../../../api/selectors/selectors";

const mapStateToProps = state => ({
  isFetching: getIsFetching(state)
})

export const Small = connect(mapStateToProps)(_Small)