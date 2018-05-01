import React from 'react';

const HomeCard = (props) => {
    return(
        <div className="col-12 col-sm-4" style={{padding: '10px'}}>
            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top rounded mx-auto d-block" style={{paddingTop: '3px',width: '100px', height:'100px'}} src={props.image} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <a className="btn btn-primary" onClick={props.action}>{props.btnlabel}</a>
                </div>
            </div>
        </div>
    );
}

export default HomeCard;