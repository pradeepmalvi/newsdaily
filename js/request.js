class RequestAPI{
    async getNews(){
        const url = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=dad7070b5eeb44208ef89a3ae945f818');

        const news = await url.json();

        return{
            news
        }
    }

    async getNewsByCategory(category){
        const url = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=dad7070b5eeb44208ef89a3ae945f818`);

        const news = await url.json();

        return{
            news
        }
    }

    async getNewsByName(name){
        const url = await fetch(`https://newsapi.org/v2/top-headlines?sources=${name}&apiKey=dad7070b5eeb44208ef89a3ae945f818`);

        const news = await url.json();

        return{
            news
        }
    }
}
