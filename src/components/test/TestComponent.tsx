import React, {useEffect} from 'react';
import {useAppDispatch} from "../../hooks";
import "./Test.scss"
import AppButton from "../../templates/app-button/AppButton";

const TestComponent: React.FC<any> = (props) => {

    return (
        <div className="box-long">
            <AppButton type="button" className="primary">
                dfsdf
            </AppButton>
        </div>
    )
}

export default TestComponent