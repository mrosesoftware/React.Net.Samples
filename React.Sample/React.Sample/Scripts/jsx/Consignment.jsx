var Consignment = React.createClass({
    getInitialState: function() {
        return { data: this.props.initialData };
    },
    render: function() {
        return(
            <div className="consignment">
                <h2>{this.state.data.Reference}</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Property</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Reference</td>
                            <td>{this.state.data.Reference}</td>
                        </tr>
                        <tr>
                            <td>Customer's Reference</td>
                            <td>{this.state.data.ConsignmentReferenceProvidedByCustomer}</td>
                        </tr>
                        <tr>
                            <td>Date Created</td>
                            <td>{this.state.data.DateCreated}</td>
                        </tr>
                        <tr>
                            <td>Date labels printed</td>
                            <td>{this.state.data.DateLabelsWereFirstPrinted}</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        );
    }
});

var AddressList = React.createClass({
    render: function() {
        var addresses = this.props.data.map(function(address) {
            return (
                <tr>
                    <td>
                        Address {address.AddressType}
                    </td>
                    <td>
                        {address.AddressLine1}
                    </td>
                </tr>
            );            
        });
        return (
            <tr>
                {addresses}
            </tr>
        );
         
    }
        
});