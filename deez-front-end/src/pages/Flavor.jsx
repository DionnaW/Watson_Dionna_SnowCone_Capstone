import React from 'react';
import DefaultLayout from '../views/layout/Default';

class Flavor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toppings: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:4000/flavors')
            .then(response => response.json())
            .then(data => this.setState({ toppings: data }))
            .catch(error => console.error('Error fetching flavors:', error));
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
            <DefaultLayout title={'WHAT IS YOUR FAVORITE FLAVOR?'}>
                <h1>Regular, Sugar Free, & Dye Free!</h1>
                <table className="flavor-table">
                    <tbody>
                        {Array.from({ length: 10 }, (_, rowIndex) => (
                            <tr key={rowIndex}>
                                {Array.from({ length: 5 }, (_, colIndex) => (
                                    <td key={colIndex}>{words[rowIndex * 5 + colIndex]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <style jsx>{`
                    .flavor-table {
                        border-collapse: collapse;
                        width: 100%;
                    }
                    .flavor-table td {
                        border: 1px solid #ddd;
                        padding: 8px;
                        text-align: center;
                    }
                    .flavor-table td:hover {
                        background-color: #f2f2f2;
                    }
                `}</style>
            </DefaultLayout>
        );
    }
}

export default Flavor;