
import React from 'react'; 
import ReactDOM from 'react-dom'; 

function ArrayAccessThrouProps(props) { 
    console.log(props);
	const list = props.menuitems; 
    const updatedList = list.map((listItems)=>{ 
        return( <li key={listItems.toString()}> 
                    {listItems} 
                </li>);  
    });   
    return( <ul>{updatedList}</ul> ); 
} 
const menuItems = [1,2,3,4,5]; 

function App() 
{ 
	return( 
			<div> 
				<ArrayAccessThrouProps menuitems = {menuItems} />
			</div> 
		); 
} 

ReactDOM.render(<App />, document.getElementById("root")); 