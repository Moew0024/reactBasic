import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from '../../assets/images/closure.png';
class Home extends React.Component {

    // componentDidMount() {
    //     setTimeout(() => {
    //        this.props.history.push('/todo');
    //     }, 3000)
    // }
    render() {
        return (
            <>
               <div>Hello world from Homepage</div>
               <div>
                   <img src={logo} />
               </div>
            </>
        )
    }
}

export default Color(Home);