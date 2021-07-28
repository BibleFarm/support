$(document).ready(function (){
	
/*
//Get first five words of of the verse
function getWords(string){
    return string.split(/\s+/).slice(0,5).join(" ");
}

//provide string for getWords function
var str = $('.top_verse').text();

// delete the entire verse
$('.top_verse').text('');
//now write just the first 5 words back to the DOM
$('<span>' + getWords(str) + '...' + '</span>').appendTo('.top_verse');
*/	

// get the first phrase up to any of these: , ; : . ? ! ( )

function getFirstPhrase(string){

return string.split(/[.\,\;\:\.\?\!\(]/).slice(0,1);

}

//provide string for getFirstPhrase function
var str = $('.top_verse').text();

// delete the entire verse
$('.top_verse').text('');
//now write just the first phrase back to the DOM
$('<span>' + getFirstPhrase(str) + '… </span>').appendTo('.top_verse');

// setTimeout(function(){

	function renderIn_modalVerse() {
		$('.selected_bible_verse_fixed_on_mug').html(
			'<span>' + $('.selected_bible_verse_fixed_on_mug').text() + '</span>'
		);
		$(".selected_bible_verse_fixed_on_mug").textfill({maxFontPixels:2000});
	}
	function renderIn_modalReviewOrder() {
		$('.selected_bible_verse_fixed_on_mug_in_modalReviewOrder').html(
			'<span>' + $('.selected_bible_verse_fixed_on_mug_in_modalReviewOrder').text() + '</span>'
		);
		$(".selected_bible_verse_fixed_on_mug_in_modalReviewOrder").textfill({maxFontPixels:2000});
	}
renderIn_modalVerse();
renderIn_modalReviewOrder();

// }, 50);


// BEGIN textStroke. text stroke made by http://jsfiddle.net/KjyYV/ hack, thanks to http://readysetdinosaurs.blogspot.com.ar/2013/05/adding-text-strokes-with-jquery-and-css.html https://github.com/simonausten/jquery-textstroke/blob/master/jquery-textstroke.js
$.fn.textStroke = function(r, colour) {
var rules = [];
var steps = 24;
for (var t=0;t<=(2*Math.PI);t+=(2*Math.PI)/steps){
var x = r*Math.cos(t);
var y = r*Math.sin(t);
x = (Math.abs(x) < 1e-6) ? '0' : x.toString();
y = (Math.abs(y) < 1e-6) ? '0' : y.toString();
rules.push( x + "px " + y + "px 0px " + colour );
}
this.css('textShadow',rules.join());
};
$(function(){
    $('.red').textStroke(7,'black');
    $('.side_l, .side_r, .visit_box, .love_box').textStroke(7,'black');
})
// END textStroke


/*
    var len = $('span').text().length;    
    if(len > 60){
        $('.verse').addClass("justify");
console.log("JUSTIFIED // because // character count is: " + len);
    }
else {
console.log("NOT JUSTIFIED // because // character count is: " + len);
}
*/

// custom CSS for biblical or flowers displayed in other modals
var IsItBiblical = $('.container_showing_selected_picture_little_Left').attr('src');
 if (IsItBiblical.indexOf("B") > -1) {
      console.log("it's biblical or flower. Adding custom classes for flowers");
$('.wrap_container_showing_selected_picture').addClass('customCSSforFlowers_table');
$('img.container_showing_selected_picture').addClass('customCSSforFlowers_cell');
$('.wrap_container_showing_selected_picture_little_Left').addClass('customCSSforFlowers_flex_little_Left');
$('img.container_showing_selected_picture_little_Left').addClass('customCSSforFlowers_item_little_Left');
      console.log("it's biblical or flower. Removing custom classes for scenery");
$('.wrap_container_showing_selected_picture_little_Left').removeClass('customCSSforScenery_flex_little_Left');
$('img.container_showing_selected_picture_little_Left').removeClass('customCSSforScenery_item_little_Left');
 }
var IsItFlowers = $('.container_showing_selected_picture_little_Left').attr('src');
 if (IsItFlowers.indexOf("F") > -1) {
      console.log("it's biblical or flower. Adding custom classes for flowers");
$('.wrap_container_showing_selected_picture').addClass('customCSSforFlowers_table');
$('img.container_showing_selected_picture').addClass('customCSSforFlowers_cell');
$('.wrap_container_showing_selected_picture_little_Left').addClass('customCSSforFlowers_flex_little_Left');
$('img.container_showing_selected_picture_little_Left').addClass('customCSSforFlowers_item_little_Left');
      console.log("it's biblical or flower. Removing custom classes for scenery");
$('.wrap_container_showing_selected_picture_little_Left').removeClass('customCSSforScenery_flex_little_Left');
$('img.container_showing_selected_picture_little_Left').removeClass('customCSSforScenery_item_little_Left');
 }
var IsItScenery = $('.container_showing_selected_picture_little_Left').attr('src');
 if (IsItScenery.indexOf("S") > -1) {
      console.log("it's not a flower. Removing custom classes for flowers");
$('.wrap_container_showing_selected_picture').removeClass('customCSSforFlowers_table');
$('img.container_showing_selected_picture').removeClass('customCSSforFlowers_cell');
$('.wrap_container_showing_selected_picture_little_Left').removeClass('customCSSforFlowers_flex_little_Left');
$('img.container_showing_selected_picture_little_Left').removeClass('customCSSforFlowers_item_little_Left');
      console.log("it's not a flower. Adding custom classes for scenery");
$('.wrap_container_showing_selected_picture_little_Left').addClass('customCSSforScenery_flex_little_Left');
$('img.container_showing_selected_picture_little_Left').addClass('customCSSforScenery_item_little_Left');
 }


///////////////////////////////////////
// BEGIN drag ///////////
///////////////////////////////////////
/*$(function(){
//样式
$("#drag").css({"position":"absolute","top":"100px","left":"100px","border":"1px solid #789","width":"1150px","height":"600px","background":"#988f82","cursor":"move"})
	var dragging = false;
	var iX, iY;
	$("#drag").mousedown(function(e) {
		dragging = true;
		iX = e.clientX - this.offsetLeft;
		iY = e.clientY - this.offsetTop;
		this.setCapture && this.setCapture();
		return false;
	});
	document.onmousemove = function(e) {
		if (dragging) {
			var e = e || window.event;
			var oX = e.clientX - iX;
			var oY = e.clientY - iY;
			$("#drag").css({"left":oX + "px", "top":oY + "px"});
			return false;
		}
	};
	$(document).mouseup(function(e) {
		dragging = false;
		$("#drag")[0].releaseCapture();
		e.cancelBubble = true;
	})
});
*/
///////////////////////////////////////
// END drag ///////////
///////////////////////////////////////

///////////////////////////////////////
// BEGIN UI to render html pages & images ///////////
///////////////////////////////////////
// clear sides
$(".side_l, .side_r").hide();
// define which post I'm creating 
$(".UI_AD_photo > button").on( "click", function() {
var NeededPostToCreate = $(this).text();
$(".input_photo_post").val(NeededPostToCreate);
$(".input_photo_image").val("00" + NeededPostToCreate);
// clear sides
$(".side_l, .side_r").hide();
// show only the one I clicked
$(".AD_L_" + NeededPostToCreate).show("slow");
$(".AD_R_" + NeededPostToCreate).show("slow");
});
// autofill the fields
$(".UI_AD_photo > button, .input_photo_post, .input_photo_date, .input_photo_visit, .input_photo_image").on("click keyup change", function() {
var NeededPost = $(".input_photo_post").val();
var NeededDate = $(".input_photo_date").val();
var NeededVisit = $(".input_photo_visit").val();
var NeededPhoto = $(".input_photo_image").val();
var NeededGrabLocalImage = $(".input_photo_grab_local_image").val("../../../local-farm-photos/" + NeededDate + "-" + NeededVisit + "/" + NeededDate + "-" + NeededVisit + "_" + NeededPhoto + ".jpg");
var NeededHtmlPageName = $(".input_photo_html_page").val(NeededVisit + "-" + NeededPost + ".html");
var NeededImageUrl = $(".input_photo_image_url").val(NeededVisit + "-" + NeededPost + ".png");
var LocalImageToGrab = $(".input_photo_grab_local_image").val();
$(".image_cntainer > img").attr("src", LocalImageToGrab);
$(".visit_number").text(NeededVisit);
});

///////////////////////////////////////
// END UI to render html pages & images ///////////
///////////////////////////////////////










///////////////////////////////////////
// BEGIN populate & create JS for node
///////////////////////////////////////
    $('#SaveHTMLpage').click(function(){
var order_id = $('#order_id').val();
      // fill the show_order_id div
      $('#show_order_id').text(order_id);

        // Save the page's HTML to a file that is automatically downloaded.

        // We make a Blob that contains the data to download.
        var file = new window.Blob([document.documentElement.innerHTML], { type: "text/html" });
        var URL = window.webkitURL || window.URL;

        // This is the URL that will download the data.
        var downloadUrl = URL.createObjectURL(file);

        var a = document.createElement("a");
        // This sets the file name.
        a.download = order_id + ".html";
        a.href = downloadUrl;

        // Actually perform the download.
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });

		////////////////////////////////////
		// BEGIN node JS file 01_10 ///////
		////////////////////////////////////
		// fill the input that will contain the content of the js file to create
		$('#populate_01_10').on('click', function() {
		var idNeeded = $('#order_id').val();
		$('#fname_01_10').val(idNeeded + '_01_10');
		// node JS File to run these 10 images for this verse
		var commentFileTitle = "// node JS File to run these 10 images for this verse\n\n";
		// var to populate initial for Autofill node JS File Content
		var initialRequireFileSystem = "const fsPromises = require('fs').promises;\n\n";
		// common variables for all ads
		var beforeHtmlFileName = "fsPromises.writeFile('";
		var afterHtmlFileName = ".html', '<html>";
		// AD_01 BEGIN
		// Targeting Women with: so I asked him... What's your favourite verse?
		// So, let's modify the DOM for AD_01
		var DOM_modified_for_AD_01 = $('html').html()
		.replace('../this_is_to_gen_pages_to_gen_images_5000x5000.js', '')
		.replace(/\'/g, "\\\'");
		// now proceed to build the code
		var commentBeginAD_01 = "// BEGIN AD_01\n";
		var commentEndAD_01 = "\n// END AD_01\n\n";
		var HtmlFileName_01 = $('#order_id').val() + "-AD_01-" + "S-115";
		var lets_add_the_rest_for_AD_01 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_01 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_01 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 7632, height: 7632}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/local-shop/Create_Pages_And_Images/RedBubble_Square/Pages/" + HtmlFileName_01 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/local-shop/Create_Pages_And_Images/RedBubble_Square/Images/" + HtmlFileName_01 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
		var finishedWithAD_01 = (commentBeginAD_01 + beforeHtmlFileName + HtmlFileName_01 + afterHtmlFileName + DOM_modified_for_AD_01 + lets_add_the_rest_for_AD_01 + commentEndAD_01).replace("</script>\n", "</script>");
		// AD_01 END

		// fill textarea with complete code to render all ads
		$('#fcontent_01_10').val(
		commentFileTitle +
		initialRequireFileSystem +
		finishedWithAD_01
		);
		});


		// BEGIN save js file to later run puppeteer
		(function() {
		    var textFile = null,
		        makeTextFile = function(js) {
		            var data = new Blob([js], {
		                type: 'text/javascript'
		            });

		            if (textFile !== null) {
		                window.URL.revokeObjectURL(textFile);
		            }

		            textFile = window.URL.createObjectURL(data);

		            return textFile;
		        };


		    var create = document.getElementById('create_01_10');
		    var fileContent = document.getElementById("fcontent_01_10");

		    create.addEventListener('click', function() {
		        const fileName = document.getElementById("fname_01_10").value;
		        document.getElementById("downloadlink_01_10").setAttribute("download", fileName);
		        var link = document.getElementById('downloadlink_01_10');
		        link.href = makeTextFile(fileContent.value);
		        // link.style.display = 'block';
		    }, false);
		})();
		////////////////////////////////////
		// END node JS file 01_10 ///////
		////////////////////////////////////

///////////////////////////////////////
// END populate & create JS for node
///////////////////////////////////////

///////////////////////////////////////
// BEGIN doneEditing button
///////////////////////////////////////
$( ".doneEditing" ).on( "click", function() {
// cleanup
$(".design_ui").hide();
$(".movableDiv").css("background", "none").removeClass("active");
console.log("cleaning up");
// wrap the wrapper_to_move_flowers with a tag link, so I can click on it to download
$(".wrapper_to_move_flowers").wrap( "<a download='info.js' id='downloadlink_01_10'></a>" );
console.log("wrap the wrapper_to_move_flowers with a tag link, so I can click on it to download");
// populate
setTimeout(function(){
$("#populate_01_10").trigger({
			type: "click",
			which: 1
		});
console.log("populating");
}, 2000);
// create JS file
setTimeout(function(){
$("#create_01_10").trigger({
			type: "click",
			which: 1
		});
console.log("creating JS file");
}, 4000);
});
///////////////////////////////////////
// END doneEditing button
///////////////////////////////////////



















////////////////////////////////
}); //END the one and only document ready
//////////////////////////////