import React from 'react';
import DefaultLayout from '../views/layout/Default';
// import VideoPlayer from '../pages/VideoPlayer' ;

class Topping extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toppings: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:4000/toppings')
            .then(response => response.json())
            .then(data => this.setState({ toppings: data }))
            .catch(error => console.error('Error fetching toppings:', error));
    }

    render() {
        // Split the toppings into chunks of 10 for when i keep doing 4000/toppings
        const chunkedToppings = this.state.toppings.reduce((resultArray, item, index) => { 
            const chunkIndex = Math.floor(index / 10)
            if (!resultArray[chunkIndex]) {
                resultArray[chunkIndex] = [] // start a new chunk
            }
            resultArray[chunkIndex].push(item)
            return resultArray
        }, []);

        return (
            <DefaultLayout title={'THE MORE THE BETTER!'}>
                <h1 style={{ background: "white", textAlign: "center" }}>
                    Only for views, but use your imagination. The Impossible is possible here!
                </h1>
                {/* <div> */}
                    {/* <VideoPlayer /> */}
                {/* </div> */}
                {chunkedToppings.map((chunk, index) => (
                    <ul key={index} style={{ listStyleType: "none", padding: 0, margin: 0}}>
                        {chunk.map(topping => (
                            <li key={topping.id} style={{ background: "white", textAlign: "center", display: "flex-box", flexDirection: "column", marginLeft: "60%", marginRight: "10%", padding: "2px", }}>{topping.name}</li>
                        ))}
                    </ul>
                ))}
            </DefaultLayout>
        );
    }
}

export default Topping;


// import React from 'react';
// import DefaultLayout from '../views/layout/Default';
// 
// class Topping extends React.Component {
    // constructor(props) {
        // super(props);
        // this.state = {
            // toppings: []
        // };
    // }
// 
    // componentDidMount() {
        // fetch('http://localhost:4000/toppings')
            // .then(response => response.json())
            // .then(data => this.setState({ toppings: data }))
            // .catch(error => console.error('Error fetching toppings:', error));
    // }
// 
    // render() {
        // return (
            // <DefaultLayout title={'MORE IS BETTER'}>
                {/* <h1>This is only for views, but you can use your imagination for toppings!</h1> */}
                {/* <ul> */}
                    {/* {this.state.toppings.map(topping => ( */}
                        // <li key={topping.id}>{topping.name}</li>
                    // ))}
                {/* </ul> */}
            {/* </DefaultLayout> */}
        // );
    // }
// }
// 
// export default Topping;