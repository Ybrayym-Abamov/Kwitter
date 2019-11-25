import Home from "./Home";
import Profile from "./Profile";
import NotFound from "./NotFound";
import Users from "./Users";
import Settings from "./Settings";


export default {
  Home: { path: "/", component: Home },
  Profile: { path: "/profile/:username", component: Profile },
  NotFound: { path: "*", component: NotFound },
  Users: { path: "/users", component: Users },
  Settings: { path: "/settings", component: Settings }
};
