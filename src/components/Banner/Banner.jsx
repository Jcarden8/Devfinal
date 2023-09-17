import React, {useEffect} from 'react';
import "./Banner.css";
import {getDocs, collection, getFirestore} from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

const Banner = () => {

    //get data when the banner loads
    useEffect(() =>{
        //create a variable to reference the articles
        const articleRef = collection(db, "Articles");

        //get articles from the database

        getDocs(articleRef),then(res => {
          console.log(res);  
        });
    }, []);


    return <div>Banner</div>
};

export default Banner;