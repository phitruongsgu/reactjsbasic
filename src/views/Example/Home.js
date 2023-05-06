import React from "react";
import Color from "../HOC/Color";
import logo from "../../assets/images/Screenshot_13.png";
import { connect } from "react-redux";

class Home extends React.Component {

    componentDidMount(){
        setTimeout(() => {
            this.props.history.push('/todo'); // sau 3 giây, nó tự redirect tới trang todo
        }, 3000)
    }

    handleDeleteUser = (user) => {
        console.log('Check user delete: ', user);
        this.props.deleteUserRedux(user);
    }

    handleCreateUser = () => {
        this.props.addUserRedux();
    }

    render() {
        console.log('Kiểm tra props: ', this.props);
        let listUsers = this.props.dataRedux;
        return (
            <>
            <div>
                Home Component
            </div>
            <p>
                Hello các bạn!!!
            </p>
            <div>
                <img width="400px"  src={logo}/>
            </div>
            <div>
                {listUsers && listUsers.length > 0 && 
                listUsers.map((item,index) => {
                    return (
                        <div key={item.id}>
                            {index + 1} - {item.name} <span onClick={() => this.handleDeleteUser(item)}>X</span>
                        </div>
                    )
                })
                }

                <button onClick={() => this.handleCreateUser()}>Add new user</button>
            </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        deleteUserRedux: (userDelete) => dispatch({type: 'DELETE_USER', payload: userDelete}),
        addUserRedux: () => dispatch({type: 'CREATE_USER'}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));