import React from "react";
import './Demo.scss'

class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }
    handleShowHide = (status) => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnClickDelete = (job) => {
        console.log('DATA JOB: ', job)
        this.props.deleteOneJob(job)
    }

    render() {
        let {arrJobs} = this.props;
        let {showJobs} = this.state;
        let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
        console.log('>>> Kiểm tra điều kiện: ' , check)
        console.log("Kiểu dữ liệu của props", this.props);
        return (
            <React.Fragment>
                {showJobs === false ?
                    <div>
                        <button style={{color:'red'}} onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className="job-lists">
                            {
                                arrJobs.map((item, index) => {
                                    return(
                                        <div key={item.id}>{item.title} - {item.salary} &nbsp; <span onClick={() => this.handleOnClickDelete(item)}>X</span></div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }

            </React.Fragment>
        )
    }
}

// const ChildComponent = (props) => {
//     let {name, age, arrJobs} = props;
//     console.log("Kiểu dữ liệu của props", props);
//     return (
//         <React.Fragment>
//             <h1>Component Con : {name} {age}</h1>

//             <div className="job-lists">
//                 {
//                     arrJobs.map((item, index) => {
//                         if(+item.salary >= 900){
//                             return(
//                                 <div key={item.id}>{item.title} - {item.salary} $</div>
//                             )
//                         }
//                     })
//                 }
//             </div>

//         </React.Fragment>
//     )    
// }

export default ChildComponent;