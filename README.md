# Pol
[![](http://ikacc.ir/github-assets/pol-header-v1.0.png)](https://github.com/IKAcc/Pol)

Pol (Farsi: پل, "Bridge") is a new way for your audience to share contents of your site. You - as a Content Manager (CM) - point out to the most important part of your content, then Pol will transform it to a shareable link using javaScript and CSS so anyone could share it on your targeted social network.

Pol is created by [Javid Izadfar](https://twitter.com/JavidIzadfar "Javid Izadfar at Twitter") and [Setareh Karimi](https://twitter.com/setarekarimi "Setareh Karimi at Twitter") at [IKA Computing Club](http://ikacc.ir/) as a [free and open-source tool](../master/LICENSE); so feel free to use and modify it as you need.

Pol will look great, using [Gorbeh](https://github.com/IKAcc/Gorbeh-Icons) for media icons and [RangeBrand](https://github.com/IKAcc/RangeBrand) for official media colors.

## License
Pol files are licensed under the MIT License:
* https://opensource.org/licenses/mit-license.html

## Contributing
We support and encourage any kind of contribution by anyone. Please read through [contributing guidelines](../master/CONTRIBUTING.md). In these guidelines, directions to asking for a new media, reporting a bug and other notes are fully explained.

## Supporting Media
Pol currently supports the following social networks:
* Telegram
* Twitter

## Usage
To use Pol on your site or blog, follow these steps:

1) Download Pol’s [latest release](../zipball/master).

2) Add Pol folder to your preferred directory on your project.

3) Add Pol.js to your HTML file:
```html
<!-- Pol js -->
    <script src="js/pol.js"></script>
```
  or
```html
<!-- Pol min.js -->
    <script src="js/pol.min.js"></script>
```

4) Add Pol.css to your HTML file (Optional):
```html
<!-- Pol css -->
  <link href="css/pol.css" rel="stylesheet">
```
  or
```html
<!-- Pol min.css -->
    <link href="css/pol.min.css" rel="stylesheet">
```

5) Initiate Pol in your custom js file:
```javascript
$('body').pol()
```
see [Options](#Options) for more initialization options.

6) Implement a Pol, using `data-pol-media` and name your preferred media:
```html
<span data-pol-media="twitter"> .... </span>
```
## Options
| Option        | Default value          | Functionality          |
| ------------- |:----------------------:| :----------------------|
| url           | current page's URL     | Includes a link to the source |
| target        | _blank                 | How should Pol's link behave when is clicked |
| author        | none                   | Your official account(s) on targeted media. do NOT include "@". Separate accounts using ",". |
| hashtags      | none                   | Hashtags. do NOT include "#". Separate accounts using ",". |

## Creators
* ![](https://avatars3.githubusercontent.com/u/14288838?v=3&s=16) Javid Izadfar
  * Email: Javid.Izadfar@ikacc.ir
  * Twitter: [twitter.com/JavidIzadfar](http://twitter.com/JavidIzadfar)
  * Github: [github.com/Javid-Izadfar](http://github.com/Javid-Izadfar)
* ![](https://avatars3.githubusercontent.com/u/13146837?v=3&s=16) Setareh Karimi
  * Email: Setareh.Karimi@ikacc.ir
  * Twitter: [twitter.com/setarekarimi](http://twitter.com/setarekarimi)
  * Github: [github.com/setarek](http://github.com/setarek)

[![IKA Computing Club](http://ikacc.ir/github-assets/ika-footer.png)](http://ikacc.ir)
