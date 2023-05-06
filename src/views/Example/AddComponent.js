import React from "react";

class AddComponent extends React.Component{

    state = {
        title: '',
        salary: '',
    }
    handleChangeTitleJob = (event) => {
        this.setState({
            title:event.target.value
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary:event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault() // k tải lại website
        if(!this.state.title || !this.state.salary){
            alert('Vui lòng nhập đủ!')
            return;
        }
        console.log('Kiểm tra dữ liệu input', this.state)
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title: '',
            salary: ''
        })
    }
    render(){
        return(
            <form>
                <label htmlFor="fname">Title Job:</label><br/>
                <input type="text" value={this.state.title} onChange={(event) => this.handleChangeTitleJob(event)}/><br/>
                <label htmlFor="lname">salary:</label><br/>
                <input type="text" value={this.state.salary} onChange={(event) => this.handleChangeSalary(event)}/>  
                <br/><br/>
                <input type="submit" onClick={(event) => this.handleSubmit(event)}/>
            </form> 
        )
    }
}

export default AddComponent;