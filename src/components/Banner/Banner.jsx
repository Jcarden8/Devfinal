import React, { useEffect, useState } from "react";
import "./Banner.css";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

const Banner = () => {
  const [mainArticle, setMainArticle] = useState({});
  const [otherArticles, setOtherArticles] = useState([]);

    //get data when the banner loads
    useEffect(() => {
      //create a variable to reference the articles
      const articleRef = collection(db, "Articles");

      //get articles from db

      getDocs(articleRef).then((res) => {
      //   console.log(res.docs[0].data());

      const articles = res.docs.map(item => ({
          ...item.data(),
          id: item.id, 
      }));

      // console.log("Articles", articles);

      setMainArticle(articles[0]);
      setOtherArticles(articles.splice(1))
      });
  }, []);

  return <div className="banner-container">
    <div classname="main-article-container" 
    style={{backgroundImage:'url(${mainArticle?.imageURL})'}}>

    </div>
  </div>;
};

export default Banner;