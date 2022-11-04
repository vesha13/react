import React from "react"
//import './App.css';
import PorojectList from "./ProjectList";
import Toolbar from "./Toolbar";
import projects from "./Projects";

class Portfolio extends React.Component {
  

  constructor(props) {
    super(props);
    this.state = {selected: 'All'};
    this.onSelectedFilter = this.onSelectedFilter.bind(this);
    }
    


     onSelectedFilter =(filter) =>{
      this.setState({selected: filter})
      //return this.state
    }

      onFilteredProjects = (projects) =>{
        if (this.state.selected === "All")
        return projects 
        else return projects.filter(project => project.category === this.state.selected)
      }

    render(){
      const { selected } = this.state;
        return(
            <div>
              <div>
                <Toolbar
                  filters={["All", "Websites", "Flayers", "Business Cards"]}
                  selected={selected}
                  onSelectedFilter={this.onSelectedFilter}/>
             </div>
            <div>
            <PorojectList projects ={this.onFilteredProjects(projects)} />
            </div>
            </div>
        )
    }
     
    
        
}

export default Portfolio
