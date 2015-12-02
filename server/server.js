Meteor.startup(function () {
    if (Images.find().count() == 0) {

        for (var i = 1; i < 23; i++) {
            Images.insert({
                    img_src: "img_" + i + ".jpg",
                    img_alt: "image" + i
                }

            );
        } //end of for insert images
        // count the i

        console.log("startup.js says " + Images.find().count());
    } // end of if have no images
});