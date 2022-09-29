import Axios from "axios";


const getNews = (url: string) => {
    const news:any = Axios.get(url).then((response) => {
        let newsArray = response.data.articles
        return [11,1,13,3,4,14,10,7].map(x=>newsArray[x]);
    });
    
    return news
}

export default getNews