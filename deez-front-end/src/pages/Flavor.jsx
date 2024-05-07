import React from 'react';
import DefaultLayout from '../views/layout/Default';

class Flavor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flavors: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:4000/flavors')
            .then(response => response.json())
            .then(data => this.setState({ flavors: data }))
            .catch(error => console.error('Error fetching flavors:', error));
    }

    render() {
        return (
            <DefaultLayout title={'WHAT IS YOUR FAVORITE FLAVOR?'}>
               <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h1>Regular, Sugar Free, & Dye Free!</h1>
                </div> 
                <table className="flavor-table">
                    <tbody>
                        {this.state.flavors.map((flavor, index) => (
                            <tr key={index}>
                                <td>{flavor.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <style jsx>{`
                    .flavor-table {
                        border-collapse: collapse;
                        width: 100%;
                        margin-top: 10px;
                        overflow-y: auto;
                        max-height: 400px;
                    }
                    .flavor-table caption {
                        font-size: 18px;
                        font-weight: bold;
                        margin-bottom: 10px;
                    }
                    .flavor-table td {
                        border: 1px solid #ddd;
                        padding: 8px;
                        text-align: center;
                        background-color: white;
                    }
                    .flavor-table td:hover {
                        background-color: orange;
                    }
                    
                `}</style>
            </DefaultLayout>
        );
    }
}

export default Flavor;

