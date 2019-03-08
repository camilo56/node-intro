const {showPostsForCurrentUser, showUserProfile} = require("./app");

module.exports = () =>{
    console.log("I'm exerciseOne: -----")
    showUserProfile(1, info => console.log("showUserProfile", info));
    showPostsForCurrentUser(1, info => console.log("showPostsForCurrentUser", info));
}
