import React, { Component } from 'react'
import { Card, CardContent, CardActions, Button } from '@material-ui/core';
import EiffelTower from '../images/etower.jpg'
import Disney from '../images/disney.png'
import Louvre from '../images/louvre.jpg'

export default class Attractions extends Component {
    render() {
        return (
            <React.Fragment>
                <h1 id="attractions-title">Attractions for families</h1>

                <Card id="attractions-card" style={{width: '100%', margin: '0px auto', borderBottom:'1px solid #e6e6e6'}} elevation={5}>
                <div className="row no-gutters">
                <div className="col-5">
                    <img src={EiffelTower} alt="Eiffel Tower" style={{width:'100%', height:'auto'}}/>
                </div>
                <div className="col-7">
                    <CardContent>
                        <h3 style={{fontFamily:"'Varela', sans-serif"}}>Eiffel Tower</h3>
                        <p style={{fontFamily:"'Varela', sans-serif"}}>The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, with breathtaking views over the entire city. Perfect for families vistng the city</p> 
                        <Button size="small" color="primary" className="add-item-button">
                        Add to itinerary
                        </Button>
                    </CardContent>
                </div>
                </div>
                </Card>

                <Card id="attractions-card" style={{width: '100%', margin: '1.5rem auto', borderBottom:'1px solid #e6e6e6'}} elevation={5}>
                <div className="row no-gutters">
                <div className="col-5">
                    <img src={Disney} alt="Disney Land" style={{width:'100%', height:'auto'}}/>
                </div>
                <div className="col-7">
                    <CardContent>
                        <h3 style={{fontFamily:"'Varela', sans-serif"}}>DisneyLand Paris</h3>
                        <p style={{fontFamily:"'Varela', sans-serif"}}>DisneyLand is an enternainment resort located east of Paris. With a wide plethora of rides and activities, this is a must-see for families visiting Paris!</p> 
                        <Button size="small" color="primary" className="add-item-button">
                        Add to itinerary
                        </Button>
                    </CardContent>
                </div>
                </div>
                </Card>

                <Card id="attractions-card" style={{width: '100%', margin: '1.5rem auto', borderBottom:'1px solid #e6e6e6'}} elevation={5}>
                <div className="row no-gutters">
                <div className="col-5">
                    <img src={Louvre} alt="Louvre" style={{width:'100%', height:'auto'}}/>
                </div>
                <div className="col-7">
                    <CardContent>
                        <h3 style={{fontFamily:"'Varela', sans-serif"}}>Louvre Museum</h3>
                        <p style={{fontFamily:"'Varela', sans-serif"}}>World-famous art museum, with works of art such as Mona Lisa. Appropriate for families.</p> 
                        <Button size="small" color="primary" className="add-item-button">
                        Add to itinerary
                        </Button>
                    </CardContent>
                </div>
                </div>
                </Card>

            </React.Fragment>
        )
    }
}
