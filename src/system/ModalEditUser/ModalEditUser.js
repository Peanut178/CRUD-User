import React, { Component } from "react";
import { Modal, ModalBody, ModalHeader, Button, ModalFooter } from 'reactstrap';
class ModalEditUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            email: ''
        }
    }

    componentDidMount() {
       this.setState({
           name : this.props.currentUser.name,
           password: this.props.currentUser.password,
           email: this.props.currentUser.email
       })
    }

    handleChange = (even, id) => {
        let copyState = { ...this.state }
        copyState[id] = even.target.value;
        this.setState({
            ...copyState,
        },
        )
    }

    checkValidate = () => {
        let isValid = true;
        let regex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
        let arrInput = ["name", "email", "password"];
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                alert("Missing input: " + arrInput[i])
                isValid = false;
                break;
            }
            else if (arrInput[i] === "email") {
                if (!regex.test(this.state[arrInput[i]])) {
                    alert("Validate Email!")
                    isValid = false;
                    break;
                }

            }
        }

        return isValid;
    }
    handleSaveUser = () => {
        let isValid = this.checkValidate();

        if (isValid) {
            this.props.saveChangeUser(this.state)
            this.setState({
                name: '',
                password: '',
                email: ''
            })
        }

    }

    render() {
       
        return (
            <Modal
                isOpen={this.props.openModal}
                scrollable
                toggle={this.props.closeModal}
            >
                <ModalHeader toggle={this.props.closeModal}>
                    Login
                </ModalHeader>
                <ModalBody>
                    <div className="container mb-4">
                        <div className="row">
                            <div className="col-6 form-group mb-3">
                                <label>Name</label>
                                <input type="name" className="form-control" onChange={(even) => { this.handleChange(even, "name") }}
                                    value={this.state.name}
                                />
                            </div>
                            <div className="col-6 form-group mb-3">
                                <label>Password</label>
                                <input type="password" className="form-control" onChange={(even) => { this.handleChange(even, "password") }}
                                    value={this.state.password}
                                />
                            </div>
                            <div className="col-12 form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" onChange={(even) => { this.handleChange(even, "email") }}
                                    value={this.state.email}
                                />
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        onClick={this.handleSaveUser}
                    >
                        Save changes
                    </Button>
                    {' '}
                    <Button onClick={this.props.closeModal}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        )
    }
}
export default ModalEditUser