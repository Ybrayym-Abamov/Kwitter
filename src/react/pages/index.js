import Home from "./Home";
import Profile from "./Profile";
import NotFound from "./NotFound";
import Users from "./Users";
import Settings from "./Settings";
// import CreateNewMessage from "./CreateNewMessage";


export default {
  Home: { path: "/", component: Home },
  Profile: { path: "/profile/:username", component: Profile },
  NotFound: { path: "*", component: NotFound },
  Users: { path: "/users", component: Users },
  Settings: { path: "/settings", component: Settings },
  // CreateNewMessage: { path: "/createnewmessage", component: CreateNewMessage }
};
