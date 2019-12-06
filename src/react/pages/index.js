import Home from "./Home";
import Profile from "./Profile";
import Users from "./Users";
import LiveFeed from "./LiveFeed";
import Register from "./Register";
// import EditProfile from "./EditProfile";
import NotFound from "./NotFound";
// import CreateNewMessage from "./CreateNewMessage";


export default {
  Home: { path: "/", component: Home },
  Profile: { path: "/profile/:username", component: Profile },
  Users: { path: "/users", component: Users },
  LiveFeed: { path: "/livefeed", component: LiveFeed },
  Register: { path: "/register", component: Register },
  // UpdateProfile: { path: "/editprofile", component: EditProfile},
  NotFound: { path: "*", component: NotFound },
  // CreateNewMessage: { path: "/createnewmessage", component: CreateNewMessage }
};
