import React from  'react'

export default class Authorized extends React.Component{
    render(){
        const {children,noMatch=null}=this.props
        const childrenRender = typeof children === 'undefined' ? null : children
        return childrenRender
    }
}