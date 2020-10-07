import React from 'react';
import Chirp from './Chirp'
import AddChirp from './AddChirp'

/*
function Nav(props){
    return (
        <nav classname="navbar">
            <h1 className='text-primary'>The Chirper</h1>
            <button>View Chirps</button>
            <button>Add Chrip</button>
        </nav>
    )
}
*/
class Nav extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showingChirps : false
        }
        this.handleViewChirpsClick = this.handleViewChirpsClick.bind(this)
        this.handleAddChirpClick = this.handleAddChirpClick.bind(this)
    }
    
    handleViewChirpsClick(event){
        this.setState({
            showingChirps: true
        })
    }

    handleAddChirpClick(event){
        this.setState({
            showingChirps: false
        })
    }

    render(){
        if (this.state.showingChirps){
            return (
                <React.Fragment>
                    <h1 className='text-primary'>The Chirper</h1>
                    <button onClick={this.handleViewChirpsClick}>View Chirps</button>
                    <button onClick={this.handleAddChirpClick}>Add Chrip</button>
                    <Chirp usr='billy joel' text='this is a test chirp' />
                    <Chirp usr='stanley stupid' text='the second chirp test' />
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <h1 className='text-primary'>The Chirper</h1>
                    <button onClick={this.handleViewChirpsClick}>View Chirps</button>
                    <button onClick={this.handleAddChirpClick}>Add Chrip</button>
                    <AddChirp />
                </React.Fragment>
                
            )
        }
        
    }
}


export default Nav