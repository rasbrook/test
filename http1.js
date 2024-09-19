const http=require('http')

const server=http.createServer((req, res)=>{
    if(req.url==='/'){
        res.end('<h1>My G</h1><a href="/about">About</a>')
    }
    else if(req.url==='/about'){
        res.end('<h1>This is the about page of my node website</h1><a href="/about/ourclient">our client</a>')

    }
    else if(req.url==='/about/ourclient'){
        res.end('<a href="/">Home</a>')
    }
    else if(req.url==='/service'){
        res.end('This is the service page')

    }
    res.end(`<h1>Ooops!</h1>
        <p>Broken URL</p>`)
})


server.listen(5000)