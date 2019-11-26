import Home from "./Home";
import Profile from "./Profile";
import NotFound from "./NotFound";
import Users from "./Users";
import LiveFeed from "./LiveFeed";
import Register from "./Register";
import UpdateProfile from "./UpdateProfile";
// import CreateNewMessage from "./CreateNewMessage";


export default {
  Home: { path: "/", component: Home },
  Profile: { path: "/profile/:username", component: Profile },
  Users: { path: "/users", component: Users },
  LiveFeed: { path: "/livefeed", component: LiveFeed },
  Register: { path: "/register", component: Register },
  UpdateProfile: { path: "/updateprofile", component: UpdateProfile},
  NotFound: { path: "*", component: NotFound },
  // CreateNewMessage: { path: "/createnewmessage", component: CreateNewMessage }
};
