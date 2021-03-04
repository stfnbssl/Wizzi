/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\tau_express\.wizzi\src\site\controllers\homeNoView.js.ittf
    utc time: Thu, 04 Mar 2021 19:31:00 GMT
*/
'use strict';
import { Router } from 'express';
import { sendHtml } from '../../utils/response.js';
import { buildPage, navUl } from '../noviews/htmlCommon.js';
export class HomeNoViewController {
    path = '/';
    router = Router();
    initialize(initValues) {
        this.router.get(`/`, this.home);
        this.router.get(`/about`, this.about);
        this.router.get(`/support`, this.support);
    }
    home(request, response) {
        let ctx = {
            name: 'Stefi'
        };
        sendHtml(response, buildPage(html_index, ctx))
    }
    about(request, response) {
        let ctx = {};
        sendHtml(response, buildPage(html_about, ctx))
    }
    support(request, response) {
        let ctx = {};
        sendHtml(response, buildPage(html_support, ctx))
    }
}
const mainMenu = {
    items: [
        {
            text: "Home", 
            href: "/"
        }, 
        {
            text: "About", 
            href: "/about"
        }, 
        {
            text: "Support", 
            href: "/support"
        }, 
        {
            text: "GitHub", 
            href: "https://github.com/stfnbssl/wizzi/blob/master/packages/wizzi-cli/dist"
        }
    ]
};
function html_index(ctx) {
    var __html = [];
    __html.push('<header>');
    __html.push('<h1>');
    __html.push("Hello " +  ctx.name );
    __html.push('</h1>');
    __html.push('</header>');
    __html.push();
    navUl(__html, mainMenu)
    __html.push();
    __html.push('<article>');
    __html.push('<p>');
    __html.push("I am a brand new express server generated by Wizzi.");
    __html.push('</p>');
    __html.push('<h3>');
    __html.push("Static files");
    __html.push('</h3>');
    __html.push('<p>');
    __html.push("It seems that the 'useStaticFiles' flag was set to 'true' in the generation context object (wzCtx).");
    __html.push('</p>');
    __html.push('<p>');
    __html.push("If it is so you may visit");
    __html.push('</p>');
    __html.push('<p>');
    __html.push('<a href="' + "static/pure.html" + '">');
    __html.push("A pure html document served by the 'express.static' middleware.");
    __html.push('</a>');
    __html.push('</p>');
    __html.push('<p>');
    __html.push('<a href="' + "static/wizzi.html" + '">');
    __html.push("A Wizzi pre-generated html document served by the 'express.static' middleware.");
    __html.push('</a>');
    __html.push('</p>');
    __html.push('<h3>');
    __html.push("Static ittf files");
    __html.push('</h3>');
    __html.push('<p>');
    __html.push("It seems that the 'useStaticIttf' flag was set to 'true' in the generation context object (wzCtx).");
    __html.push('</p>');
    __html.push('<p>');
    __html.push("If it is so you may visit");
    __html.push('</p>');
    __html.push('<p>');
    __html.push('<a href="' + "ittf/wizzi.html.ittf" + '">');
    __html.push("A Wizzi html document generated on the fly and served by the  'ittfStatic' middleware.");
    __html.push('</a>');
    __html.push('</p>');
    __html.push('<h3>');
    __html.push("Webpack apps");
    __html.push('</h3>');
    __html.push('<p>');
    __html.push("It seems that the 'useWebpackApp' flag was set to 'true' in the generation context object (wzCtx).");
    __html.push('</p>');
    __html.push('<p>');
    __html.push("If it is so you may visit");
    __html.push('</p>');
    __html.push('<p>');
    __html.push('<a href="' + "ittf/hello.webpack.html.ittf" + '">');
    __html.push("An hello world page generated by a js bunde served by the 'WebpackAppMiddleware' using the (in memory) 'webpack-dev-middleware' middleware.");
    __html.push('</a>');
    __html.push('</p>');
    __html.push('<p>');
    __html.push('<a href="' + "ittf/blog.webpack.html.ittf" + '">');
    __html.push("A blog single page app generated by a js bunde served by the 'WebpackAppMiddleware' using the (in memory) 'webpack-dev-middleware' middleware.");
    __html.push('</a>');
    __html.push('</p>');
    __html.push('</article>');
    html_footer(__html)
    return __html.join('');
}
function html_about(ctx) {
    var __html = [];
    __html.push('<header>');
    __html.push('<h1>');
    __html.push("About");
    __html.push('</h1>');
    __html.push('</header>');
    __html.push();
    navUl(__html, mainMenu)
    __html.push();
    __html.push('<article>');
    __html.push('<p>');
    __html.push("This is my playground");
    __html.push('</p>');
    __html.push('</article>');
    html_footer(__html)
    return __html.join('');
}
function html_support(ctx) {
    var __html = [];
    __html.push('<header>');
    __html.push('<h1>');
    __html.push("Support");
    __html.push('</h1>');
    __html.push('</header>');
    __html.push();
    navUl(__html, mainMenu)
    __html.push();
    __html.push('<article>');
    __html.push('<p>');
    __html.push("Ask me");
    __html.push('</p>');
    __html.push('</article>');
    html_footer(__html)
    return __html.join('');
}
function html_footer(__html, ctx) {
    __html.push('<footer>');
    __html.push("I am a footer");
    __html.push('</footer>');
}
