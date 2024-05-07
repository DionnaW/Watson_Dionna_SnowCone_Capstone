import React from 'react';
import DefaultLayout from '../views/layout/Default';
import Collage from '../pages/Collage';

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
        // Split the toppings into chunks of 10 
        const chunkedToppings = this.state.toppings.reduce((resultArray, item, index) => { 
            const chunkIndex = Math.floor(index / 10)
            if (!resultArray[chunkIndex]) {
                resultArray[chunkIndex] = [] // start a new chunk when a table gets 10 toppings
            }
            resultArray[chunkIndex].push(item)
            return resultArray
        }, []);

        return (
            <DefaultLayout title={'THE MORE THE BETTER!'}>
                <h1 style={{ background: "white", textAlign: "center" }}>
                    Only for views, but use your imagination. The Impossible is possible here!
                </h1>
                <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8'}}>
                    <Collage />
                </div>
                {chunkedToppings.map((chunk, index) => (
                    <ul key={index} style={{ listStyleType: "none", padding: 0, margin: 0}}>
                        {chunk.map(topping => (
                            <li key={topping.id} style={{ background: "white", textAlign: "center", display: "flex-box", flexDirection: "column", margin: "0 auto", marginRight: '40%', marginLeft: '40%', padding: "2px" }}>{topping.name}</li>
                        ))}
                    </ul>
                ))}
            </DefaultLayout>
        );
    }
}

export default Topping;
