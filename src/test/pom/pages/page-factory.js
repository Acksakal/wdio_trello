import LoginPage from "./login.page.js";
import HomePage from "./home.page.js";
import BoardPage from "./board.page.js";
import LandingPage from "./landing.page.js";
import ProfilePage from "./profile.page.js";

const pages = {
    landing: new LandingPage(),
    login: new LoginPage(),
    profile: new ProfilePage(),
    home: new HomePage(),
    board: new BoardPage(),
}

/**
 * 
 * @param {string} 'login' | 'board'
 * @returns { LoginPage, BoardsPage } instances
 */
export default function getPage(name) {
    return pages[name.toLowerCase()];
}