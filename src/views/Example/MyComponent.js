import React from 'react'; 
import ChildComponent from './ChildComponent'
import AddComponent from './AddComponent';
class MyComponent extends React.Component {
    

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
    state = {
        firstName: '',
        lastName: '',
        arrJobs: [
            { id: 'abcJob1', title: 'developer', salary: '500$'},
            { id: 'abcJob2', title: 'tester', salary: '400$'},
            { id: 'abcJob3', title: 'Project manager', salary: '1000$'}
        ]
    }
    
    addNewJob = (job) => { 
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currentJobs
        })
    }
    render() {
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
            <AddComponent 
            addNewJob = {this.addNewJob}
            />
                <ChildComponent
                    arrJobs = {this.state.arrJobs}
                    deleteAJob = {this.deleteAJob}
                />
            </>
        )
    }
}

export default MyComponent;