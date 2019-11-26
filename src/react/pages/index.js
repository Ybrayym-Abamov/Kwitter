import Home from "./Home";
import Profile from "./Profile";
import NotFound from "./NotFound";
import Users from "./Users";
import Settings from "./Settings";
import Register from "./Register";
// import CreateNewMessage from "./CreateNewMessage";


export default {
  Home: { path: "/", component: Home },
  Profile: { path: "/profile/:username", component: Profile },
  Users: { path: "/users", component: Users },
  Settings: { path: "/settings", component: Settings },
  Register: { path: "/register", component: Register },
  NotFound: { path: "*", component: NotFound },
  // CreateNewMessage: { path: "/createnewmessage", component: CreateNewMessage }
};
