class RequestAPI {
  async getNews() {
    const url = await fetch(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=44777051b4b0429fb1be37670c300ec7"
    );

    const news = await url.json();

    return {
      news
    };
  }

  async getNewsByCategory(category) {
    const url = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=44777051b4b0429fb1be37670c300ec7`
    );

    const news = await url.json();

    return {
      news
    };
  }

  async getNewsByName(name) {
    const url = await fetch(
      `https://newsapi.org/v2/top-headlines?sources=${name}&apiKey=44777051b4b0429fb1be37670c300ec7`
    );

    const news = await url.json();

    return {
      news
    };
  }
}
