import React from 'react';
import DefaultLayout from '../views/layout/Default';

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
            <DefaultLayout title={'MORE IS BETTER'}>
                <h1>This is only for views, but you can use your imagination for toppings!</h1>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <video controls>
                        <source src="src/images/toppings video - Made with Clipchamp.gif" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                {chunkedToppings.map((chunk, index) => (
                    <table key={index}>
                        <thead>
                            <tr>
                                <th colSpan="2">Table {index + 1}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {chunk.map(topping => (
                                <tr key={topping.id}>
                                    <td>{topping.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
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