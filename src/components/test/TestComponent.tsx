import React, {useEffect} from 'react';
import {useAppDispatch} from "../../hooks";

const TestComponent: React.FC<any> = (props) => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        console.log(props.auth)
    }, [props.auth])

    useEffect(() => {
        console.log(props)
    }, [])


    return (
        <div>
            <button onClick={props.authThunk}>Aboba</button>
        </div>
    )
}

export default TestComponent