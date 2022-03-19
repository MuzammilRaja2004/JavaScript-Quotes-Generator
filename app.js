let realData = '';
    let quotesData = '';
    let quotes = document.getElementById('quotes')
    let author = document.getElementById('author')
    let newQuotes = document.getElementById('newQuotes')
    let tweetMe = document.getElementById('tweetMe')

    const getNewQuotes = () => { 
        let rnum = Math.floor(Math.random() * 50)
        quotesData = realData[rnum]
        quotes.innerText = `${quotesData.text}`
        quotesData.author == null ?(author.innerText = 'Unknown') : (author.innerText = `${quotesData.author}`)
        // author.innerText = `${quotesData.author}`
     }

    const tweetNow = () => {
        let tweetUrl = `https://twitter.com/intent/tweet?text=${quotesData.text} - ${quotesData.author}`
        window.open(tweetUrl, '_blank')
    }

    const getQuotes = async () => {
    const api = 'https://type.fit/api/quotes';
        try{
            let data = await fetch(api)
            realData = await data.json();
            getNewQuotes()
        }
        catch(error){}
    }
    tweetMe.addEventListener('click', tweetNow)
    newQuotes.addEventListener('click', getNewQuotes)
    getQuotes();