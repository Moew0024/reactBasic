import { render } from '@testing-library/react';
import React from 'react'; 
import './Demo.scss'
class ChildComponent extends React.Component {
    

    // state = {
    //     name: '',
    //     channel: 'tranhalinh'
    // }

    // handleOnChangeName = (event) => {
    //     this.setState({
    //         name: event.target.value
    //     });
    // }
    
    // handleClickButton = () => {
    //     alert('click me');
    // }
    /** jsx => return block*/
    // state = {
    //     firstName: '',
    //     lastName: ''
    // }
    // handleChangeFirstName = (event) => {
    //     this.setState({
    //         firstName: event.target.value
    //     })
    // }
    // handleChangeLastName = (event) => {
    //     this.setState({
    //         lastName: event.target.value
    //     })
    // }
    // handleSubmit =  (event) => {
    //     event.preventDefault();
    //     //alert('click me');
    //     console.log('check data', this.state);
    // }
    state = {
        showJob: false
    }

    handleShowHide = () => {
        this.setState({
            showJob: !this.state.showJob
        })
    }

    handleOnclickDelete = (job) => {
        this.props.deleteAJob(job);
    }
    render() {
        let { arrJobs } = this.props;
        let { showJob } = this.state;
        //let check = showJob === true ? 'showJob = true' : 'showJob = false';
        // return (
        //     // <>
        //     // <div className='first'>
        //     //     <input value={this.state.name} type='text'
        //     //         onChange={(event) => this.handleOnChangeName(event)} />
        //     //     My name is {this.state['name']}
        //     // </div>
        //     // <div className='second'>
        //     //     My youtube channel : {this.state.channel}
        //     // </div>
        //     // <div className='third'>
        //     //     <button onClick={() =>  this.handleClickButton() }>CLick me</button>
        //     // </div>
        //     // </>
        // )
        return (
            <>
                {showJob ===false ? 
                <div><button className='btn-show' onClick={() => {
                    this.handleShowHide();
                }}>Show</button></div>
                :
                  <>
                      <div className='job-lists'>
                    {
                        arrJobs.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.title} - {item.salary}
                                     <></> <span onClick={() => this.handleOnclickDelete(item)}>X</span>
                                </div>
                            )
                        })
                    }
                      </div>
                      <div><button onClick={() => {this.handleShowHide()}}>Hide</button></div>
                  </>
                }
            </>
        )
    }
}

// const ChildComponent = (props) => {
//     let { name, age, address, arrJobs } = props;
//     return (
//         <>
//             <div>Child Component name : {name} - {age} - {address}</div>
//             <div className='job-lists'>
//                 {
//                     arrJobs.map((item, index) => {
//                         return (
//                             <div key={item.id}>
//                                 {item.title} - {item.salary}
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </>
//     )
// }


export default ChildComponent;