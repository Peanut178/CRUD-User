import React from "react";
import ModalUser from "../ModalUser/ModalUser";
import './UserManager.css';
import ModalEditUser from "../ModalEditUser/ModalEditUser"

class UserManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: '',
            isOpenModalUser: false,
            isOpenModalEditUser: false,
            arrUsers: localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [],
            userEdit: {}
        }
    }
    handelAddnewUser = () => {
        this.setState({
            isOpenModalUser: true
        })
    }

    handelEditUser = (user, index) => {
        console.log()
        this.setState({
            isOpenModalEditUser: true,
            userEdit: user,
            index: index

        })
        // console.log(this.state.arrUsers[index])
    }
    toggleModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser
        })
    }
    toggleUserEditModal = () => {
        this.setState({
            isOpenModalEditUser: !this.state.isOpenModalEditUser
        })
    }
    createNewUser = (data) => {

        let copy = { ...this.state }
        copy.arrUsers.push(data)
        localStorage.setItem('users', JSON.stringify(copy.arrUsers));
        this.setState({
            ...copy,
        },
        )
    }
    doEditUser = (data) => {
        let i = this.state.index
        console.log("Save change", data)
        let copy = { ...this.state }
        copy.arrUsers.splice(i, 1, data)
        localStorage.setItem('users', JSON.stringify(copy.arrUsers));
        this.setState({
            ...copy,
        },
        )
    }
    handelDeleteUser = (index) => {
        if (window.confirm("Are you sure you want to delete")) {
            let copy = { ...this.state }
            copy.arrUsers.splice(index, 1)
            localStorage.setItem('users', JSON.stringify(copy.arrUsers));
            this.setState({
                ...copy,
            },
            )
        }

    }

    render() {
        return (
            <div className="users-container">
                <ModalUser
                    openModal={this.state.isOpenModalUser}
                    closeModal={this.toggleModal}
                    createNewUser={this.createNewUser}
                />
                {this.state.isOpenModalEditUser &&
                    <ModalEditUser
                        openModal={this.state.isOpenModalEditUser}
                        closeModal={this.toggleUserEditModal}
                        currentUser={this.state.userEdit}
                        saveChangeUser={this.doEditUser}
                    />
                }

                <div className="title text-center m-4">Manage users</div>
                <div className="my-3 mx-1">
                    <button className="btn btn-primary" onClick={this.handelAddnewUser}>Add new users</button>
                </div>
                <div className="users-table mx-1">
                    <table id="customers">
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <th>Password</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                            {this.state.arrUsers.map((user, index) => {
                                return <tr>
                                    <td>{user.name}</td>
                                    <td>{user.password}</td>
                                    <td>{user.email}</td>
                                    <td><button className="btn btn-primary mx-4" onClick={() => this.handelEditUser(user, index)}>Change User</button>
                                        <button className="btn btn-primary btn-delete" onClick={() => this.handelDeleteUser(index)}>Delete</button></td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}
export default UserManager