import { fetchData } from '../../apiCalls';
import React, { useContext, useEffect, useState } from 'react';
import Show from '../show_card/ShowCard'


const Container = (props) => {
const [isLoading, setIsLoading] = useState(true);
const [shows, setShows] = useState([]);

 useEffect(() => {
  if(props.type === "shows") {
    fetchData(`/years/${props.id}`).then(data => {
      setShows(data.data);
      setIsLoading(false);
      console.log(shows)
      console.log(data)
    }).catch(err => console.log(err))
  }
  }, [props.id])

//  const updateShows = async () => {
//    try {
//     const shows = await fetchData(`/years/${props.id}`);
//     setShows(shows);
//     setIsLoading(false)
//    }
//    catch {
    
//    }
//  }

  //feels weird that the container is doing the fetch. Feels like it should be in a parent component. 

  const showCardComponents = shows.map(show => <Show id={show.id}/>)

  return (
    <div className="ShowContainer"> 
      {isLoading && <p>Loading...</p>}
      {!isLoading && showCardComponents}
    </div>

  )
}

export default Container;