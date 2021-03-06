import { Component } from "react";
import  PropTypes  from "prop-types"; // Prototypes are used for validation
export class ProductItem extends Component{
    constructor(props){
        super(props);
     
    }
    render(){
        /* state should not be hardcoded in the component itself 
        let it come from outside
        var elementState = {
            isHidden: true
        };*/
        if(this.props.isHidden){
            return <h1>Product details are not available</h1>;
        }
        return (      
              <li>{this.props.item.id}{this.props.item.name}</li> 
        );
    }
}
ProductItem.prototypes = {
    item:PropTypes.object.isRequired // item is a 'prop' that is used to store data coming from the parent component to the child component.
}
ProductItem.defaultProps={ // default property is used when parent does not give any value then the default value can be used.
    inStock:true
}