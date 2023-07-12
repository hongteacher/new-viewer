import Categories from 'components/Categories'
import NewsList from 'components/NewsList'
import React, { useCallback, useState } from 'react'
import styled from 'styled-components'


const App = () => {
  const [category, setCategory] = useState("all")
  const onSelect = useCallback((category) => setCategory(category), [])

  return (
    <>
      <HeaderLogo>
        <img src="./img/news_logo.png" alt="" />
      </HeaderLogo>

      <Categories
        category={category}
        onSelect={onSelect}
      />
      <NewsList category={category} />
    </>
  )
}

const HeaderLogo = styled.h1`
  display : flex;
  justify-content : center;
  img{width : 20%}
`;

export default App

// 759f765c3bd54a35b59cba41247cc1e4
//'https://newsapi.org/v2/top-headlines?country=kr&apiKey=759f765c3bd54a35b59cba41247cc1e4'