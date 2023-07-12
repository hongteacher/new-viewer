import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import styled from 'styled-components'
import axios from 'axios'

const NewsList = ({category}) => {
  const [articles, setAticles] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async() => {
      setLoading(true)
      try{
        const query = category === 'all' ? '' : `&category=${category}`;
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=f34737c157f04020b28f9deba9877cf5`);
        setAticles(response.data.articles)
      } catch(e){
        console.log(e);
      }
      setLoading(false)
    }
    fetchData();
  },[category])

  //대기중일 때 로딩
  if(loading){
    return <NewsListBlock>대기 중...</NewsListBlock>
  }


  //아티클이 없을 때
  if (!articles) {
    return null;
  }

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  )
}

const NewsListBlock = styled.div`
  box-sizing : border-box;
  padding-bottom : 3rem;
  width : 768px;
  height : 500px;
  margin : 2rem auto 0;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }

`;

export default NewsList