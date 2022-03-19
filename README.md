# jQuery serialselect - A label inside the select

## About jQuery serialselect
For some (very specific) UX cases, there is a need for inserting the label inside the select, this lightweight plugin will do it in only a few lines of code. Note that jQuery serialselect is shared for inspirational and development purpose.


## Demonstration
See the [project page](https://github.meunierkevin.com/jquery-serialselect/) for a demonstration.


## Compatibility
jQuery serialselect has been tested in: IE, Edge, Chrome (mobile included), Firefox (mobile included), and Safari (mobile included).


## Self-Hosted
[Download](https://github.com/kevinmeunier/jquery-serialselect/archive/master.zip) and save one of two available files to include serialselect to your page, either the [development](https://github.com/kevinmeunier/jquery-serialselect/blob/main/dist/jquery.serialselect.js) or the [minified](https://github.com/kevinmeunier/jquery-serialselect/blob/main/dist/jquery.serialselect.min.js) version. Also, you can visit the [project page](https://github.meunierkevin.com/jquery-serialselect/) to copy what you need.
```HTML
<script src="jquery.serialselect.min.js"></script>
<link href="jquery.serialselect.css" rel="stylesheet">
```
Due to the lightweight CSS code, it's recommended to copy/paste the CSS code into your general stylesheet.

Make sure [jQuery](http://jquery.com) is properly loaded before using jQuery serialselect. 


## Basic Usage
The basic usage of serialselect is pretty easy, just start using jQuery serialselect by calling it after page load.
```HTML
<span class="js-serialselect">
  <label class="sub-term">European country: </label>
  <select class="sub-select">
    <option>Belgium</option>
    <option>France</option>
    <option>Germany</option>
  </select>
</span>
```
```JS
$(document).ready(function(){
  // jquery.serialselect initialisation
  $('.js-serialselect').serialselect();
});
```

  
## Configuration Parameters
The following configurations is available by default:

Name               | Type       | Default                             | Description
------------------ | ---------- | ----------------------------------- | -----------
termClass          | *string*   | *'sub-term'*                        | The class name for the select label
valueClass         | *string*   | *'sub-value'*                       | The class name for the select value


## Bugs / Feature request
Please [report](http://github.com/kevinmeunier/jquery-serialselect/issues) bugs and feel free to [ask](http://github.com/kevinmeunier/jquery-serialselect/issues) for new features directly on GitHub.


## License
jQuery serialselect is licensed under [MIT](http://www.opensource.org/licenses/mit-license.php) license.
