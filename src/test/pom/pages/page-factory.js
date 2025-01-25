import LoginPage from "./login.page.js";
import DashboardPage from "./dashboard.page.js";
import BoardPage from "./board.page.js";

const pages = {
    login: new LoginPage(),
    dashboard: new DashboardPage(),
    board: new BoardPage()
}

/**
 * 
 * @param {string} 'login' | 'boards'
 * @returns { LoginPage, BoardsPage } instances
 */
export default function getPage(name) {
    return pages[name.toLowerCase()];
}