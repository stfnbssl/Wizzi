const express = require('express');
const parseUrl = require('parseurl');
const api = require('./api');

const app = express();
const port = 3000;
const packiPath = '/packi/';
const defaultOwner = 'stfnbssl';
const defaultContext = {
    wzConfigBaseUrl: 'http://127.0.0.1:5500/docs'
}

app.get('/', (req, res) => {
    // console.log(req);
    api.getPackiGeneration(defaultOwner, 'html.starter', api.getDefaultContext()).then(result => {
        res.writeHead(200, {
            'Content-Type': result.contentType, 
            'Content-Length': result.contentLength
        })
        res.end(result.content);
    }).catch(err => {
        console.log('err', err.toString());
        return res.send(err.toString()) 
    })
})

app.use(function (req, res, next) {
    /*
    console.log('baseUrl:', req.baseUrl);
    console.log('originalUrl:', req.originalUrl);
    console.log('params:', req.params);
    console.log('query:', req.query);
    */
    const parsedUrl = parseUrl(req);
    const pathname = parsedUrl.pathname;
    console.log('request: pathname', pathname);
    if (pathname.startsWith(packiPath)) {
        const packiName = pathname.substring(packiPath.length);
        console.log('request: packiName', packiName, 'context', req.query.context);
        api.getPackiContext(defaultOwner, req.query.context, api.getDefaultContext()).then(resultContext => {
            console.log('resultContext:', Object.keys(resultContext));
            api.getPackiGeneration(defaultOwner, packiName, resultContext).then(result => {
                console.log('before send:', result.contentType, result.contentLength);
                res.status(200);
                res.set('Content-Type', result.contentType);
                res.set('Content-Length', result.contentLength);
                console.log('after writeHead:');
                res.send(result.content);
                console.log('after send:');
            }).catch(err => {
                console.log('err', err);
                return res.send(err.toString()) 
            })
        }).catch(err => {
            console.log('err', err);
            return res.send(err.toString()) 
        })
    }
    else
        next();
});

api.start(defaultOwner, defaultContext, function(err) {
    if (err) throw err;
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })
})