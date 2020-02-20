import React from 'react';
import Nav from './Navbar';
import Body from './Body';
import Carousel from './Carousel';
import Lowerbody from './Lowerbody';


class Home extends React.Component {
    constructor() {
        super()

        this.state = {}
    }

    render(){
        return(
            <React.Fragment>
                <Nav/>
                <Body/>
                {/* <Carousel/> */}
                <Lowerbody/>
            </React.Fragment>
        )
    }
}

export default Home;