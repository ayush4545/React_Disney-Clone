import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Recommended from './Recommended'
import NewDisney from './NewDisney'
import Originals from './Originals'
import Trending from './Trending'

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase"
import { setMovies } from "../features/movie/movieSlice"
import { selectUserName } from "../features/users/userSlice"
function Home() {
    const dispatch = useDispatch();
    const username = useSelector(selectUserName)

    let recommends = []
    let newDisneys = []
    let originals = []
    let trending = []

    useEffect(() => {
        db.collection('movies').onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                switch (doc.data().type) {
                    case 'recommend':
                        recommends = [...recommends, { id: doc.id, ...doc.data() }]
                       
                        break;
                    case 'new':
                        newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }]
 
                        break;
                    case 'original':
                        originals = [...originals, { id: doc.id, ...doc.data() }]
                     
                        break;
                    case 'trending':
                        trending = [...trending, { id: doc.id, ...doc.data() }]
                        
                        break;
                }
            });
       

        dispatch(
            setMovies({
                recommend: recommends,
                newDisney: newDisneys,
                original: originals,
                trending: trending
            })
            );
        });
    }, [username]);
    
    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Recommended movies={recommends}/>
            <NewDisney />
            <Originals />
            <Trending />
        </Container>
    )
}


const Container = styled.div`
  position:relative;
  min-height:calc(100vh-250px);
  overflow-x:hidden;
  overflow-y:hidden;
  display:block;
  top:10.5vh;
  padding:0 calc(3.5vw + 5px);

  &:before{
     background:url("/images/home-background.png");
     background-position:fixed;
     background-repeat:no-repeat;
     background-size:cover;
     background-origin:center center;
     content:"";
     position:absolute;
     inset:0px;
     opacity:1;
     z-index:-1;

  }
`
export default Home
