Images = new Mongo.Collection("images");

Images.allow({
    insert: function(userId, doc) {
        if(Meteor.user()){
            
            //so that user doesn't upload image using someone else userId
            doc.createdBy = userId;
            if(userId != doc.createdBy) {
                return false;
            }
            else {
                //correct userId
                return true;
            }
        }
        else {
            //user not logged in
            return false;
        }
        
    },
    remove: function(userId,doc){
        return true;
        
    }
});


