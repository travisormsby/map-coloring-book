# Map Coloring Book 

You can use the code in this repo to make a map-based color-by-numbers web application like the <a href="https://travisormsby.github.io/map-coloring-book/index.html">Minnesota Census Coloring Book</a>.

## Step 1: Create Map
The Python and JavaScript code in this repo assume that you are creating maps in ArcGIS Pro. You can create them in other software that is capable of exporting to .svg format, but you'll probably need to rewrite most of the Python and at least some of the JavaScript.

It is best to use a fairly generalized map. Depending on the scale and extent of the map, there will likely be little need for geometry with many vertices, and reducing the number of points will make your map load much more quickly. This project additionally assumes polygon geometry in your map, since that makes the most sense for a "coloring book" application.

After you have set up the number of classes and breakpoints for your map, choose a grayscale color ramp that goes from white (low values) to black (high values).  You'll be able to choose a Color Brewer color ramp later, but for now your map must be grayscale. The reason for this restriction is that you are going to be exporting the file in .svg format, which doesn't retain any of the attribute information. You only get the hexcode values for the colors used to fill the polygons. Many color ramps can't be accurately sorted by their hexcode values, so there's no way to ensure the proper ordering of categories. The grayscale ramp, however, can be sorted by hexcode, so we used that as a proxy for an ordering of the actual values.

Export the map in a .svg format to the img folder.

## Step 2: Parse the .svg file
The .svg file exported from Pro doesn't have all the information we need. Using the Jupyter Notebook, run the image through svgParse() function. You can see an example in the 3rd cell of the Notebook. This will add additional information to the .svg file, as well as create a small .json file with additional data like the class break values that can't easily be stored in the .svg file itself. 

This is the stage where you can choose a color ramp. The code makes available all the ramps from [Color Brewer 2](https://colorbrewer2.org/). You can either look at that site or at the corresponding color ramps inside your GIS software to see how they look. Be aware that the Color Brewer ramps have differing maximum numbers of classes. If your exported .svg map uses 10 classes and you choose a color ramp with a max of 8 classes, your map will be displayed in the original grayscale instead.

## Step 3: Rinse and repeat
Complete the first 2 steps for each map that you want to add to your coloring book collection. 

## Step 4: Consolidate json
When you've exported all the maps and parsed them, you're ready to consolidate the separate .json files into a single file. Run the code in the last cell of the Notebook, which will create a single file called map_data.json. This is the file that is served up when the page is loaded. You no longer need the separate .json files for each .svg.

## Step 5: Style and Personalize
If the first 4 steps worked correctly, you should now have a coloring book that looks identical to the Minnesota Census Coloring Book, but with your own maps. You will probably want to change some of the HTML content to be relevant for your project, as well as change some HTML and CSS to personalize the look of your coloring book.  Good luck and have fun!
