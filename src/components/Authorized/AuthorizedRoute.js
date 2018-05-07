import react from 'react'
import Authorized from "./Authorized";
import {Route,Redirect} from 'react-router-dom'
export default class AuthorizedRoute extends react.Component{
    render(){
        const {render,path,...rest}=this.props
        const redirectPath='/user/login'

        return (
            <Authorized>
                <Route {...rest} render={(props)=>render(props)}></Route>
            </Authorized>
        )
    }
}