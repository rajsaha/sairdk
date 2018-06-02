//Variables holding the values for Gallery Image title and the accompanying text

// var image_1_title = "Image 1";
// var image_2_title = "Image 2";
// var image_3_title = "Image 3";
// var image_4_title = "Image 4";
// var image_5_title = "Image 5";
// var image_6_title = "Image 6";
// var image_7_title = "Image 7";
// var image_8_title = "Image 8";
// var image_9_title = "Image 9";
//
// var image_1_text = "Text pertaining to image 1";
// var image_2_text = "Text pertaining to image 2";
// var image_3_text = "Text pertaining to image 3";
// var image_4_text = "Text pertaining to image 4";
// var image_5_text = "Text pertaining to image 5";
// var image_6_text = "Text pertaining to image 6";
// var image_7_text = "Text pertaining to image 7";
// var image_8_text = "Text pertaining to image 8";
// var image_9_text = "Text pertaining to image 9";

//Please note that the gallery holds 9 images as of now. If more need be added,
//simply change the value of the 'count' variable and add another case to the
//switch-case block. For example, if you need to add an additional image to the
//gallery (which is currently holding 9), change the count to 10. Then
//add 'case 10: $("#gallery-image").attr("src", "images/gallery/" + count + ".jpg");
              //$("#gallery-image-title").text("Image 10");
              //$("#gallery-image-text").text("Text pertaining to Image 10");
              //break;'
//You will also need to change the condition of the if-statements
//for the left and right buttons. If there are 10 images in the gallery,
//simply change the condition of the right-button (#right-btn) to
//  if(count > 10)
//For the left button (#left-btn), no change in the condition is needed.
//However, you will need to change the statement following immediately after the
//condition to count = 10;

$(document).ready(function() {
    var count = 1;

    $("#left-btn").click(function() {
        count--;
        if (count <= 0) {
            count = 28;
            $("#gallery-image").attr("src", "images/gallery/" + count + ".jpg");
            // $("#gallery-image-title").text(image_9_title);
            // $("#gallery-image-text").text(image_9_text);
        } else {
            // switch (count) {
            //   case 10:
            //       $("#gallery-image").attr("src", "images/gallery/" + count + ".jpg");
            //       $("#gallery-image-title").text(image_9_title);
            //       $("#gallery-image-text").text(image_9_text);
            //       break;
            //     case 9:
            //         $("#gallery-image").attr("src", "images/gallery/" + count + ".jpg");
            //         $("#gallery-image-title").text(image_9_title);
            //         $("#gallery-image-text").text(image_9_text);
            //         break;
            //     case 8:
            //         $("#gallery-image").attr("src", "images/gallery/" + count + ".jpg");
            //         $("#gallery-image-title").text(image_8_title);
            //         $("#gallery-image-text").text(image_8_text);
            //         break;
            //     case 7:
            //         $("#gallery-image").attr("src", "images/gallery/" + count + ".jpg");
            //         $("#gallery-image-title").text(image_7_title);
            //         $("#gallery-image-text").text(image_7_text);
            //         break;
            //     case 6:
            //         $("#gallery-image").attr("src", "images/gallery/" + count + ".jpg");
            //         $("#gallery-image-title").text(image_6_title);
            //         $("#gallery-image-text").text(image_6_text);
            //         break;
            //     case 5:
            //         $("#gallery-image").attr("src", "images/gallery/" + count + ".jpg");
            //         $("#gallery-image-title").text(image_5_title);
            //         $("#gallery-image-text").text(image_5_text);
            //         break;
            //     case 4:
            //         $("#gallery-image").attr("src", "images/gallery/" + count + ".jpg");
            //         $("#gallery-image-title").text(image_4_title);
            //         $("#gallery-image-text").text(image_4_text);
            //         break;
            //     case 3:
            //         $("#gallery-image").attr("src", "images/gallery/" + count + ".jpg");
            //         $("#gallery-image-title").text(image_3_title);
            //         $("#gallery-image-text").text(image_3_text);
            //         break;
            //     case 2:
            //         $("#gallery-image").attr("src", "images/gallery/" + count + ".jpg");
            //         $("#gallery-image-title").text(image_2_title);
            //         $("#gallery-image-text").text(image_2_text);
            //         break;
            //     case 1:
            //         $("#gallery-image").attr("src", "images/gallery/" + count + ".jpg");
            //         $("#gallery-image-title").text(image_1_title);
            //         $("#gallery-image-text").text(image_1_text);
            //         break;
            //     default:
            //         $("#gallery-image").attr("src", "images/gallery/" + count + ".jpg");
            //         $("#gallery-image-title").text(image_1_title);
            //         $("#gallery-image-text").text(image_1_text);
            //         break;
            // }
            
            $("#gallery-image").attr("src", "images/gallery/" + count + ".jpg");
        }
    });

    $("#right-btn").click(function() {
        count++;
        if (count > 28) {
            count = 1;
            $("#gallery-image").attr("src", "images/gallery/" + count + ".jpg");
            // $("#gallery-image-title").text("Image 1");
            // $("#gallery-image-text").text("Text pertaining to Image 1");
        } else {
            // switch (count) {
            //     case 9:
            //         $("#gallery-image").attr("src", "images/gallery/" + count + ".jpg");
            //         $("#gallery-image-title").text("Image 9");
            //         $("#gallery-image-text").text("Text pertaining to Image 9");
            //         break;
            //     case 8:
            //         $("#gallery-image").attr("src", "images/gallery/" + count + ".jpg");
            //         $("#gallery-image-title").text("Image 8");
            //         $("#gallery-image-text").text("Text pertaining to Image 8");
            //         break;
            //     case 7:
            //         $("#gallery-image").attr("src", "images/gallery/" + count + ".jpg");
            //         $("#gallery-image-title").text("Image 7");
            //         $("#gallery-image-text").text("Text pertaining to Image 7");
            //         break;
            //     case 6:
            //         $("#gallery-image").attr("src", "images/gallery/" + count + ".jpg");
            //         $("#gallery-image-title").text("Image 6");
            //         $("#gallery-image-text").text("Text pertaining to Image 6");
            //         break;
            //     case 5:
            //         $("#gallery-image").attr("src", "images/gallery/" + count + ".jpg");
            //         $("#gallery-image-title").text("Image 5");
            //         $("#gallery-image-text").text("Text pertaining to Image 5");
            //         break;
            //     case 4:
            //         $("#gallery-image").attr("src", "images/gallery/" + count + ".jpg");
            //         $("#gallery-image-title").text("Image 4");
            //         $("#gallery-image-text").text("Text pertaining to Image 4");
            //         break;
            //     case 3:
            //         $("#gallery-image").attr("src", "images/gallery/" + count + ".jpg");
            //         $("#gallery-image-title").text("Image 3");
            //         $("#gallery-image-text").text("Text pertaining to Image 3");
            //         break;
            //     case 2:
            //         $("#gallery-image").attr("src", "images/gallery/" + count + ".jpg");
            //         $("#gallery-image-title").text("Image 2");
            //         $("#gallery-image-text").text("Text pertaining to Image 2");
            //         break;
            //     case 1:
            //         $("#gallery-image").attr("src", "images/gallery/" + count + ".jpg");
            //         $("#gallery-image-title").text("Image 1");
            //         $("#gallery-image-text").text("Text pertaining to Image 1");
            //         break;
            //     default:
            //         $("#gallery-image").attr("src", "images/gallery/" + count + ".jpg");
            //         $("#gallery-image-title").text("Image 9");
            //         break;
            // }

            $("#gallery-image").attr("src", "images/gallery/" + count + ".jpg");
        }
    });
});
