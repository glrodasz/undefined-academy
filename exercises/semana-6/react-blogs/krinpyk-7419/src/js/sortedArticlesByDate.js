  //Crear una funcionalidad para que ordene los artículos por fecha ascendente y descendente

  const sortedArticlesByDate = (articles, typeOrder) =>{
      if (typeOrder ==="Ascending"){
        return articles.sort((articleA, articleB) =>{
            if((articleA.date > articleB.date) > 0){
              return 1
            }else{
              return -1
            }}) 
    }else{
        return articles.sort((articleA, articleB) =>{
            if((articleA.date > articleB.date) > 0){
              return -1
            }else{
              return 1
            }}) 
    }  
  }

export default sortedArticlesByDate