const requestapi = new RequestAPI();

const loader = document.querySelector('.loading');
const resultDiv = document.querySelector('.result');

const business = document.getElementById('business');
const entertainment = document.getElementById('entertainment');
const health = document.getElementById('health');
const science = document.getElementById('science');
const technology = document.getElementById('technology');
const sports = document.getElementById('sports');

const google = document.getElementById('google');
const toi = document.getElementById('toi');
const th = document.getElementById('th');
const bbc = document.getElementById('bbc');
const espn = document.getElementById('espn');

const about = document.getElementById('about');



// When the page loaded
document.addEventListener('DOMContentLoaded', int);

function int(){

    setTimeout(() => {
        
        requestapi.getNews()
        .then(data => {
        const newsList = data.news.articles;
        HTMLTemplate = '';
        newsList.forEach(news => {
            HTMLTemplate += 
            `<div class="col-md-4 mt-3 fade-in-bottom ">
                <div class="card">
                        <img class="img-fluid mb-0" src="${news.urlToImage !== null
                            ? news.urlToImage
                            : "img/placeholder.jpg"}">
                        <div class="card-text p-2">
                            <h5 class="card-title text-primary">${news.title}</h5>
                            <p class="m-0">${news.description}</p>
                            <span class="badge badge-info">Author: ${news.author}</span>
                            <span class="badge badge-warning">Date: ${news.publishedAt.substring(0,10)}</span>

                            <a href="${news.url}" target="_blank" class="btn btn-primary btn-block mt-2">Details</a>
                        </div>
                   
                </div>
            </div>`;
        });
        const resultDiv = document.querySelector('.result');
        resultDiv.innerHTML = HTMLTemplate;

        loader.style.display = "none";

    });

    },1000)

};
      
// daily news
google.addEventListener('click',() => {
    document.querySelector('.heading').textContent = 'Daily News';
    resultDiv.innerHTML = "";

    loader.style.display = "block";

    int();
});




// News by categories

// Business
business.addEventListener('click', (e) => {
    document.querySelector('.heading').textContent = 'Business';
    resultDiv.innerHTML = "";

    const newsName = e.target.firstChild.nextSibling.value;


    loader.style.display = "block";

    setTimeout(() => {
    
        requestapi.getNewsByCategory(newsName)
        .then(data => {
        const newsList = data.news.articles;
        HTMLTemplate = '';
        newsList.forEach(news => {
            HTMLTemplate += 
            `<div class="col-md-4 mt-3 fade-in-bottom">
                <div class="card">
                        <img class="img-fluid mb-0" src="${news.urlToImage !== null
                            ? news.urlToImage
                            : "img/placeholder.jpg"}">
                        <div class="card-text p-2">
                            <h5 class="card-title text-primary">${news.title}</h5>
                            <p class="m-0">${news.description}</p>
                            <span class="badge badge-info">Author: ${news.author}</span>
                            <span class="badge badge-warning">Date: ${news.publishedAt.substring(0,10)}</span>

                            <a href="${news.url}" target="_blank" class="btn btn-primary btn-block mt-2">Details</a>
                        </div>
                   
                </div>
            </div>`;
        });

        const resultDiv = document.querySelector('.result');
        resultDiv.innerHTML = HTMLTemplate;

        loader.style.display = "none";
    });

    },1000)

    e.preventDefault();
});

// Entertainment
entertainment.addEventListener('click', (e) => {
    document.querySelector('.heading').textContent = 'Entertainment';
    resultDiv.innerHTML = "";

    const newsName = e.target.firstChild.nextSibling.value;


    loader.style.display = "block";

    setTimeout(() => {
    
        requestapi.getNewsByCategory(newsName)
        .then(data => {
        const newsList = data.news.articles;
        HTMLTemplate = '';
        newsList.forEach(news => {
            HTMLTemplate += 
            `<div class="col-md-4 mt-3 fade-in-bottom">
                <div class="card">
                        <img class="img-fluid mb-0" src="${news.urlToImage !== null
                            ? news.urlToImage
                            : "img/placeholder.jpg"}">
                        <div class="card-text p-2">
                            <h5 class="card-title text-primary">${news.title}</h5>
                            <p class="m-0">${news.description}</p>
                            <span class="badge badge-info">Author: ${news.author}</span>
                            <span class="badge badge-warning">Date: ${news.publishedAt.substring(0,10)}</span>

                            <a href="${news.url}" target="_blank" class="btn btn-primary btn-block mt-2">Details</a>
                        </div>
                   
                </div>
            </div>`;
        });

        const resultDiv = document.querySelector('.result');
        resultDiv.innerHTML = HTMLTemplate;

        loader.style.display = "none";
    });

    },1000)

    e.preventDefault();
});


// Health
health.addEventListener('click', (e) => {
    document.querySelector('.heading').textContent = 'Health';
    resultDiv.innerHTML = "";

    const newsName = e.target.firstChild.nextSibling.value;


    loader.style.display = "block";

    setTimeout(() => {
    
        requestapi.getNewsByCategory(newsName)
        .then(data => {
        const newsList = data.news.articles;
        HTMLTemplate = '';
        newsList.forEach(news => {
            HTMLTemplate += 
            `<div class="col-md-4 mt-3 fade-in-bottom">
                <div class="card">
                        <img class="img-fluid mb-0" src="${news.urlToImage !== null
                            ? news.urlToImage
                            : "img/placeholder.jpg"}">
                        <div class="card-text p-2">
                            <h5 class="card-title text-primary">${news.title}</h5>
                            <p class="m-0">${news.description}</p>
                            <span class="badge badge-info">Author: ${news.author}</span>
                            <span class="badge badge-warning">Date: ${news.publishedAt.substring(0,10)}</span>

                            <a href="${news.url}" target="_blank" class="btn btn-primary btn-block mt-2">Details</a>
                        </div>
                   
                </div>
            </div>`;
        });

        const resultDiv = document.querySelector('.result');
        resultDiv.innerHTML = HTMLTemplate;

        loader.style.display = "none";
    });

    },1000)

    e.preventDefault();
});


// Science
science.addEventListener('click', (e) => {
    document.querySelector('.heading').textContent = 'Science';
    resultDiv.innerHTML = "";

    const newsName = e.target.firstChild.nextSibling.value;


    loader.style.display = "block";

    setTimeout(() => {
    
        requestapi.getNewsByCategory(newsName)
        .then(data => {
        const newsList = data.news.articles;
        HTMLTemplate = '';
        newsList.forEach(news => {
            HTMLTemplate += 
            `<div class="col-md-4 mt-3 fade-in-bottom">
                <div class="card">
                        <img class="img-fluid mb-0" src="${news.urlToImage !== null
                            ? news.urlToImage
                            : "img/placeholder.jpg"}">
                        <div class="card-text p-2">
                            <h5 class="card-title text-primary">${news.title}</h5>
                            <p class="m-0">${news.description}</p>
                            <span class="badge badge-info">Author: ${news.author}</span>
                            <span class="badge badge-warning">Date: ${news.publishedAt.substring(0,10)}</span>

                            <a href="${news.url}" target="_blank" class="btn btn-primary btn-block mt-2">Details</a>
                        </div>
                   
                </div>
            </div>`;
        });

        const resultDiv = document.querySelector('.result');
        resultDiv.innerHTML = HTMLTemplate;

        loader.style.display = "none";
    });

    },1000)

    e.preventDefault();
});


// Technology
technology.addEventListener('click', (e) => {
    document.querySelector('.heading').textContent = 'Technology';
    resultDiv.innerHTML = "";

    const newsName = e.target.firstChild.nextSibling.value;


    loader.style.display = "block";

    setTimeout(() => {
    
        requestapi.getNewsByCategory(newsName)
        .then(data => {
        const newsList = data.news.articles;
        HTMLTemplate = '';
        newsList.forEach(news => {
            HTMLTemplate += 
            `<div class="col-md-4 mt-3 fade-in-bottom">
                <div class="card">
                        <img class="img-fluid mb-0" src="${news.urlToImage !== null
                            ? news.urlToImage
                            : "img/placeholder.jpg"}">
                        <div class="card-text p-2">
                            <h5 class="card-title text-primary">${news.title}</h5>
                            <p class="m-0">${news.description}</p>
                            <span class="badge badge-info">Author: ${news.author}</span>
                            <span class="badge badge-warning">Date: ${news.publishedAt.substring(0,10)}</span>

                            <a href="${news.url}" target="_blank" class="btn btn-primary btn-block mt-2">Details</a>
                        </div>
                   
                </div>
            </div>`;
        });

        const resultDiv = document.querySelector('.result');
        resultDiv.innerHTML = HTMLTemplate;

        loader.style.display = "none";
    });

    },1000)

    e.preventDefault();
});


// Sports
sports.addEventListener('click', (e) => {
    document.querySelector('.heading').textContent = 'Sports';
    resultDiv.innerHTML = "";

    const newsName = e.target.firstChild.nextSibling.value;


    loader.style.display = "block";

    setTimeout(() => {
    
        requestapi.getNewsByCategory(newsName)
        .then(data => {
        const newsList = data.news.articles;
        HTMLTemplate = '';
        newsList.forEach(news => {
            HTMLTemplate += 
            `<div class="col-md-4 mt-3 fade-in-bottom">
                <div class="card">
                        <img class="img-fluid mb-0" src="${news.urlToImage !== null
                            ? news.urlToImage
                            : "img/placeholder.jpg"}">
                        <div class="card-text p-2">
                            <h5 class="card-title text-primary">${news.title}</h5>
                            <p class="m-0">${news.description}</p>
                            <span class="badge badge-info">Author: ${news.author}</span>
                            <span class="badge badge-warning">Date: ${news.publishedAt.substring(0,10)}</span>

                            <a href="${news.url}" target="_blank" class="btn btn-primary btn-block mt-2">Details</a>
                        </div>
                   
                </div>
            </div>`;
        });

        const resultDiv = document.querySelector('.result');
        resultDiv.innerHTML = HTMLTemplate;

        loader.style.display = "none";
    });

    },1000)

    e.preventDefault();
});



// Other news sources
// Times of india
toi.addEventListener('click', (e) => {
        document.querySelector('.heading').textContent = 'Times of India';
        resultDiv.innerHTML = "";

        const newsName = e.target.firstChild.nextSibling.value;

        loader.style.display = "block";

        setTimeout(() => {
        
            requestapi.getNewsByName(newsName)
            .then(data => {
            const newsList = data.news.articles;
            HTMLTemplate = '';
            newsList.forEach(news => {
                HTMLTemplate += 
                `<div class="col-md-4 mt-3 fade-in-bottom">
                    <div class="card">
                            <img class="img-fluid mb-0" src="${news !== null ? news.urlToImage:''}">
                            <div class="card-text p-2">
                                <h5 class="card-title text-primary">${news.title}</h5>
                                <p class="m-0">${news.description}</p>
                                <span class="badge badge-info">Author: ${news.author}</span>
                                <span class="badge badge-warning">Date: ${news.publishedAt.substring(0,10)}</span>
    
                                <a href="${news.url}" target="_blank" class="btn btn-primary btn-block mt-2">Details</a>
                            </div>
                       
                    </div>
                </div>`;
            });

            const resultDiv = document.querySelector('.result');
            resultDiv.innerHTML = HTMLTemplate;
    
            loader.style.display = "none";
        });
    
        },1000)

        e.preventDefault();
});
    
// The Hindu   
th.addEventListener('click', (e) => {

    document.querySelector('.heading').textContent = 'The Hindu';
    resultDiv.innerHTML = "";

    const newsName = e.target.firstChild.nextSibling.value;


    loader.style.display = "block";

    setTimeout(() => {
    
        requestapi.getNewsByName(newsName)
        .then(data => {
        const newsList = data.news.articles;
        HTMLTemplate = '';
        newsList.forEach(news => {
            HTMLTemplate += 
            `<div class="col-md-4 mt-3 fade-in-bottom">
                <div class="card">
                        <img class="img-fluid mb-0" src="${news !== null ? news.urlToImage:''}">
                        <div class="card-text p-2">
                            <h5 class="card-title text-primary">${news.title}</h5>
                            <p class="m-0">${news.description}</p>
                            <span class="badge badge-info">Author: ${news.author}</span>
                            <span class="badge badge-warning">Date: ${news.publishedAt.substring(0,10)}</span>

                            <a href="${news.url}" target="_blank" class="btn btn-primary btn-block mt-2">Details</a>
                        </div>
                   
                </div>
            </div>`;
        });

        const resultDiv = document.querySelector('.result');
        resultDiv.innerHTML = HTMLTemplate;

        loader.style.display = "none";
    });

    },1000)

    e.preventDefault();
});


// BBC news
bbc.addEventListener('click', (e) => {
    document.querySelector('.heading').textContent = 'BBC News';
    resultDiv.innerHTML = "";

    const newsName = e.target.firstChild.nextSibling.value;


    loader.style.display = "block";

    setTimeout(() => {
    
        requestapi.getNewsByName(newsName)
        .then(data => {
        const newsList = data.news.articles;
        HTMLTemplate = '';
        newsList.forEach(news => {
            HTMLTemplate += 
            `<div class="col-md-4 mt-3 fade-in-bottom">
                <div class="card">
                        <img class="img-fluid mb-0" src="${news !== null ? news.urlToImage:''}">
                        <div class="card-text p-2">
                            <h5 class="card-title text-primary">${news.title}</h5>
                            <p class="m-0">${news.description}</p>
                            <span class="badge badge-info">Author: ${news.author}</span>
                            <span class="badge badge-warning">Date: ${news.publishedAt.substring(0,10)}</span>

                            <a href="${news.url}" target="_blank" class="btn btn-primary btn-block mt-2">Details</a>
                        </div>
                   
                </div>
            </div>`;
        });

        const resultDiv = document.querySelector('.result');
        resultDiv.innerHTML = HTMLTemplate;

        loader.style.display = "none";
    });

    },1000)

    e.preventDefault();
});
    

// ESPN
espn.addEventListener('click', (e) => {
    document.querySelector('.heading').textContent = 'ESPN';
    resultDiv.innerHTML = "";

    const newsName = e.target.firstChild.nextSibling.value;


    loader.style.display = "block";

    setTimeout(() => {
    
        requestapi.getNewsByName(newsName)
        .then(data => {
        const newsList = data.news.articles;
        HTMLTemplate = '';
        newsList.forEach(news => {
            HTMLTemplate += 
            `<div class="col-md-4 mt-3 fade-in-bottom">
                <div class="card">
                        <img class="img-fluid mb-0" src="${news !== null ? news.urlToImage:''}">
                        <div class="card-text p-2">
                            <h5 class="card-title text-primary">${news.title}</h5>
                            <p class="m-0">${news.description}</p>
                            <span class="badge badge-info">Author: ${news.author}</span>
                            <span class="badge badge-warning">Date: ${news.publishedAt.substring(0,10)}</span>

                            <a href="${news.url}" target="_blank" class="btn btn-primary btn-block mt-2">Details</a>
                        </div>
                   
                </div>
            </div>`;
        });

        const resultDiv = document.querySelector('.result');
        resultDiv.innerHTML = HTMLTemplate;

        loader.style.display = "none";
    });

    },1000)

    e.preventDefault();
});

