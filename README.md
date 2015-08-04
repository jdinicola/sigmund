# Sigmund

Simple theme originally created for my wife's blog running on Ghost.

## Demo

You can see the live demo [here](http://anacristinaruiz.com)

## Download

Clone the repo:
````
git clone https://github.com/jdinicola/sigmund.git
````

Or download from [releases page](https://github.com/jdinicola/sigmund/releases) as a zip file or 

## Installation and configuration

1. Install dependencies:
    ````
    npm install
    ````

2. Edit `gulpfile.js` and change the path for the build directory ( recommended the `content/themes` folder for your Ghost installation):
    ```` javascript
    var build_dir = '/path/to/build/dir';
    ````

3. Build the theme:
    ````
    gulp build
    ````

4. Start Ghost (or restart if it was running) and select **Sigmund** theme from settings

5. Go to build directory and change `custom/partials` files to match your info:
    * `comments.hbs` - Comments system code (Facebook comments by default)
    * `copyright.hbs` - Copyright info. Thanks for not deleting the theme attribution ;)
    * `index-meta.hbs` - Additional meta tags for home page
    * `post-meta.hbs` - Additional meta tags for post page
    * `social.hbs` - Social icons for drawer and footer (TIP: Sigmund uses Font Awesome icons)

> Note: you can modify all the `.hbs` files if you need it

## LESS

* **Sigmund** was build using LESS, so if you want to change the theme styles, you have to compile LESS files and build it again.
    ````
    gulp build
    ````

* Watch theme source files changes as you modifiy them:
    ````
    gulp watch
    ````

> Note: You don't have to restart Ghost to see the changes, just refresh your browser

## Credits

* normalize.less by Markus Reiter [https://github.com/reitermarkus/normalize.less](https://github.com/reitermarkus/normalize.less)
* Font awesome [https://github.com/FortAwesome/Font-Awesome](https://github.com/FortAwesome/Font-Awesome)

## License

The MIT License (MIT)

Copyright (c) 2014 Julio Di Nicola [http://juliodinicola.es](http://juliodinicola.es)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
