// import React from 'react';
// import { MobileStepper, Button } from '@material-ui/core'


// class Carousel extends React.Component {
//     constructor() {
//         super()

//         this.state = {}
//     }

//     render() {
//         return (
//             <React.Fragment>
//                 <div className="offset-1">
//                     <p className="carouseltext h3">Discover your</p>
//                     <p className="h3">perfect program in our schools</p>
//                     <p className="underline"></p>
//                 </div>
//                 <div class="container">
//                     <div class="row">
//                         <div class="col-md-12">
//                             <div class="carousel slide multi-item-carousel" id="theCarousel">
//                                 <div class="carousel-inner">
//                                     <div class="item active">
//                                         <div class="col-xs-4"><a href="#1"><img src="https://source.unsplash.com/300x300/?perth,australia" class="img-responsive" /></a></div>
//                                     </div>
//                                     <div class="item">
//                                         <div class="col-xs-4"><a href="#1"><img src="https://source.unsplash.com/300x300/?fremantle,australia" class="img-responsive" /></a></div>
//                                     </div>
//                                     <div class="item">
//                                         <div class="col-xs-4"><a href="#1"><img src="https://source.unsplash.com/300x300/?west-australia" class="img-responsive" /></a></div>
//                                     </div>
//                                     <div class="item">
//                                         <div class="col-xs-4"><a href="#1"><img src="https://source.unsplash.com/300x300/?perth" class="img-responsive" /></a></div>
//                                     </div>
//                                     <div class="item">
//                                         <div class="col-xs-4"><a href="#1"><img src="https://source.unsplash.com/300x300/?quokka,perth" class="img-responsive" /></a></div>
//                                     </div>
//                                     <div class="item">
//                                         <div class="col-xs-4"><a href="#1"><img src="https://source.unsplash.com/300x300/?margaretriver,australia" class="img-responsive" /></a></div>
//                                     </div>
//                                     {/* <!-- add  more items here --> */}
//                                     {/* <!-- Example item start:  --> */}

//                                     <div class="item">
//                                         <div class="col-xs-4"><a href="#1"><img src="https://source.unsplash.com/300x300/?perth,australia&r=7" class="img-responsive" /></a></div>
//                                     </div>

//                                     {/* <!--  Example item end --> */}
//                                 </div>
//                                 <a class="left carousel-control" href="#theCarousel" data-slide="prev">prev</a>
//                                 <a class="right carousel-control" href="#theCarousel" data-slide="next"><i class="glyphicon glyphicon-chevron-right"></i></a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* <MobileStepper
//                     nextButton = {
//                         <Button></Button>
//                     }
//                 /> */}
//             </React.Fragment>
//         )
//     }
// }

// export default Carousel;


// import React from 'react';
// import ItemsCarousel from 'react-items-carousel';
// import range from 'lodash/range';

// export default class Carousel extends React.Component {

//   componentWillMount() {
//     this.setState({
//       children: [],
//       activeItemIndex: 0,
//     });

//     setTimeout(() => {
//       this.setState({
//         children: createChildren(20),
//       })
//     }, 100);
//   }

//   createChildren = n => range(n).map(i => <div key={i} style={{ height: 200, background: '#333' }}>{i}</div>);

//   changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

//   render() {
//     const {
//       activeItemIndex,
//       children,
//     } = this.state;

//     return (
//       <ItemsCarousel
//         // Placeholder configurations
//         enablePlaceholder
//         numberOfPlaceholderItems={5}
//         minimumPlaceholderTime={1000}
//         placeholderItem={<div style={{ height: 200, background: '#900' }}>Placeholder</div>}

//         // Carousel configurations
//         numberOfCards={3}
//         gutter={12}
//         showSlither={true}
//         firstAndLastGutter={true}
//         freeScrolling={false}

//         // Active item configurations
//         requestToChangeActive={this.changeActiveItem}
//         activeItemIndex={activeItemIndex}
//         activePosition={'center'}

//         chevronWidth={24}
//         rightChevron={'>'}
//         leftChevron={'<'}
//         outsideChevron={false}
//       >
//         {children}
//       </ItemsCarousel>
//     );  
//   }
// }