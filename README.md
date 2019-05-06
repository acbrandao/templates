# Starter Templates
This folder has an assorted collection of starter HTML/JS and other pages (mostly web pages or node javascript pages). 
This is my go to place when I'm starting a new project or new application from scratch, there's
plenty of these located on the web, but this is just my nice little location for all the web pages
that I'm interested in.

## Installation

Simlply clone this folder, or click on the file you're interested in and just copy it to your working direcotry.

```
git clone git@github.com:acbrandao/templates.git
```

## Usage

As described above clone the **this** repositry first into the folder you are working in.

This create a *templates* folder in the same directory where you issues the git clone.
Next just copy the **individual** template(s) you need to from the /templates folder into the folder you want to use like:

```
cp templates/index.html .
```
or maybe you want to start a basic a VUE page named vue.php
```
cp templates/vuejs.html vue.php
```

or a reload script as idnex.html
```
cp templates/vuereload.html index.html
```

Now you have the index.html ready to go , repeat as needed for each template. 
Using this technique keeps the original templates unchanged and allows you to re-use them as often as needed.


## Description of each
| Directroy                   | Description   | Dependencies  |
| :-------------------------- |:------------- | -----:|
| index.html  | A plain HTML5 document  | HTML  |
| vuejs       | A plain VUE JS startign page  document     |  HTML5, VUeJS (via CDN)  |
| bootstrap   | A plain Bootstrap 4 starter page   document     |  HTML5, Bootstrap 4  (via CDN)  |
| jquery      | A plain Jquery 3 starter page   document     |  HTML5, Jquery 3   (via CDN)  |
| nodejs_http2      | A plain http-server in node, server most text/plain html page   documents     | nodejs, JS )  |

hotrealod.js and hotrealod.php are helper scripts when developing applications where the UI is changing quickly, and as a developer aid to more quickly show pages.
	 
## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License
This code  is licensed under the MIT license. See https://opensource.org/licenses/MIT  for details.
