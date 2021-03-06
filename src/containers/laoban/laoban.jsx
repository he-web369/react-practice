/*
老板主界面路由容器组件
 */
import React,{Component} from 'react'
import {connect} from 'react-redux'


import {getUserList} from '../../redux/actions'
import UserList from '../../components/user-list/user-list'

class LaoBan extends Component{

    componentDidMount() {
        this.props.getUserList('dashen')
    }
    render(){
        const {userList}=this.props
        return (
            <div>
                <UserList userList={userList}/>
            </div>
        )
    }
}
export default connect(
    state=>({userList:state.userList}),
    {getUserList}
)(LaoBan)