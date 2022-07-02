import {connect} from "react-redux";
import TestComponent from "./TestComponent";
import {AppDispatch, RootState} from "../../app/store";

const mapStateToProps = (state: RootState) => {
    return {
        home: state.home,
    }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        // authThunk: (message: any) => dispatch(index()),
    }
}

const TestContainer = connect(mapStateToProps, mapDispatchToProps)(TestComponent)

export default TestContainer