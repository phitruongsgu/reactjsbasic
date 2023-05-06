import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
    state = {
        name: 'Trường',
        quequan: 'TP.HCM',

        arrJobs: [
            {id:'job1', title:'Developers', salary:'1000'},
            {id:'job2', title:'Testers', salary:'600'},
            {id:'job3', title:'Project Manager', salary:'900'}
        ]
    }

    xuLyThayDoiTen(event) {
        this.setState({ name: event.target.value })
    }

    handleClickButton = () => {
        alert('Click me')
    }



    addNewJob = (job) => {
        console.log('kiểm tra job từ cha: ', job)
        this.setState({
            //... là copy lại array ở trên
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteOneJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJobs
        })
    }

    componentDidUpdate(preProps, preState){
        console.log('Run componentDidUpdate: ', 'prev state: ', preState, ' current state: ', this.state);
    }

    componentDidMount(){ // dùng gọi API
        console.log('Run componentDidMount');
    }

    render() {
        let name = 'Trường';
        return (
            <React.Fragment>
                <div className="first">{console.log("Tên tôi:", name)} Xin chào Component, tôi tên {name}</div>
                <div className="second">{this.state.name} | {this.state['quequan']}</div>

                <div>
                    <input value={this.state.name} type="text" onChange={(event) => this.xuLyThayDoiTen(event)} />
                </div>

                <div className="third">
                    <button onClick={() => this.handleClickButton()}>Click me</button>
                </div>

                <div>
                    <AddComponent addNewJob={this.addNewJob}/>
                </div>

                
                <ChildComponent arrJobs={this.state.arrJobs} deleteOneJob={this.deleteOneJob}/>
            </React.Fragment>
        )
    }
}

export default MyComponent;