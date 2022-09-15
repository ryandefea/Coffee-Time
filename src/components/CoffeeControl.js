import React from "react";
import NewCoffeeForm from "./NewCoffeeForm";
import CoffeeList from "./CoffeeList";
import CoffeeDetail from "./CoffeeDetail";
import EditCoffeeForm from "./EditCoffeeForm";

class CoffeeControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainCoffeeList: [],
      selectedCoffee: null,
      editing: false
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  handleAddingNewCoffeeToList = (newCoffee) => {
    const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffee);
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      formVisibleOnPage: false
    });
  }

//   handleSellingCoffee = () => {
//     if(this.state.selectedCoffee.burlapOfBeans !== 0){
//     const coffeeSold = {
//       name: this.state.selectedCoffee.name,
//       origin: this.state.selectedCoffee.origin,
//       price: this.state.selectedCoffee.price,
//       roast: this.state.selectedCoffee.roast,
//       burlapOfBeans: this.state.selectedCoffee.burlapOfBeans -=1,
//       id: this.state.selectedCoffee.id,
//       key: this.state.selectedCoffee.id
//     };
//     this.setState({selectedCoffee: coffeeSold});
//   }
// }

  handleSellingCoffee = (id) => {
    console.log("made it")
    const coffeeSold = this.state.mainCoffeeList.map((coffee)=>{
      if (coffee.id === id){
        if (coffee.burlapOfBeans > 0){
          return {
            ...coffee,
            burlapOfBeans: coffee.burlapOfBeans - 1,
          };
        } else {
          return coffee;
        }
      }
    })
    this.setState({mainCoffeeList: coffeeSold})
  }

  handleChangingSelectedCoffee = (id) => {
    const selectedCoffee = this.state.mainCoffeeList.filter(coffee => coffee.id === id)[0];
    this.setState({selectedCoffee: selectedCoffee});
  }

  handleEditClick = ()  => {
    console.log("handleEditClick reached!");
    this.setState({editing:true});

  }

  handleEditingCoffeeInList = (coffeeToEdit) => {
    const editedMainCoffeeList = this.state.mainCoffeeList
      .filter(coffee => coffee.id !== this.state.selectedCoffee.id)
      .concat(coffeeToEdit);
    this.setState({
      mainCoffeeList: editedMainCoffeeList,
      editing: false,
      selectedCoffee: null
    })

  }

  handleDeletingCoffee = (id) => {
    const newMainCoffeeList = this.state.mainCoffeeList.filter(ticket => ticket.id !== id);
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      selectedCoffee: null
    });
  }

  handleClick = () => {
    if (this.state.selectedCoffee != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCoffee: null,
        editing: false
      });
    } else {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing ) {
      currentlyVisibleState = <EditCoffeeForm coffee = {this.state.selectedCoffee} onEditCoffee = {this.handleEditingCoffeeInList} />
      buttonText = "Return to Coffee List";
    } else if (this.state.selectedCoffee != null) {
      currentlyVisibleState = 
      <CoffeeDetail 
      coffee = {this.state.selectedCoffee} 
      onClickingDelete = {this.handleDeletingCoffee} 
      onClickingEdit = {this.handleEditClick}
      onClickingSellBag = {this.handleSellingCoffee}/>
      buttonText = "Return to Coffee List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewCoffeeForm onNewCoffeeCreation={this.handleAddingNewCoffeeToList}/>
      buttonText = "Return to Coffee List";
    } else {
      currentlyVisibleState = <CoffeeList coffeeList={this.state.mainCoffeeList}onCoffeeSelection={this.handleChangingSelectedCoffee}/>;
      buttonText = "Add Coffee";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default CoffeeControl;