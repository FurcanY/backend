var express=require("express");
var router=express.Router();
var ctrlVenues=require("../controllers/VenueController");
var ctrlComments=require("../controllers/CommentContoller");


router
.route("/venues")
.get(ctrlVenues.listVenues)
.post(ctrlVenues.addVenue);

router
.route("/venues/:venueid")
.get(ctrlVenues.getVenue)
.put(ctrlVenues.updateVenue)
.delete(ctrlVenues.deleteVenue);
router
.route("/venues/:venueid/comments")
.post(ctrlComments.addComment);

router
.route("/venues/:venueid/comments/:commentid")
.get(ctrlComments.getComments)
.put(ctrlComments.updateComments)
.delete(ctrlComments.deleteComments);

module.exports=router;