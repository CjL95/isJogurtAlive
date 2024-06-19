import React, {useState, useContext, useEffect} from 'react';
import { AppContext } from '../App';

export const Home = () : React.JSX.Element =>{
    const {status} = React.useContext(AppContext);

    useEffect(()=>{
        // This will be replaced by the fetch call to the API
        /*fetch("/api/status")
            .then(response => response.json())
            .then(data => setStatus(data.status))*/
    }, [])

    const determineColors = () =>{
        return status === 'DEAD' ? 'dead' : 'live';
    }

    return(
        <main className={`container-fluid ${determineColors()}`}>
            <section className="row jogText">
                <figure className="col-8 offset-2">
                    <h1 className="jogStatus">Right Now, Jogurt is...</h1>
                    <p>{status}</p>
                </figure>
            </section>
        </main>
    )
}