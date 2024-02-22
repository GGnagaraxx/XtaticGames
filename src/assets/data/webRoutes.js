import Dashboard from "../../components/pages/dashboard/Dashboard"
import RPSPage from "../../components/pages/rpspage/RPSPage"
import XOPage from "../../components/pages/xopage/XOPage"

const routes = [
    {
        label: "Dashboard",
        imgSrc: "",
        path: "/XtaticGames/",
        component: Dashboard,
        inDashboard: false
    },
    {
        label: "X&Os",
        imgSrc: "",
        path: "/XOs",
        component: XOPage,
        inDashboard: true
    },
    {
        label: "Rock Paper Scissors",
        imgSrc: "https://picsum.photos/200/200",
        path: "/Rock-Paper-Scissors",
        component: RPSPage,
        inDashboard: true
    }
]


export {
    routes
}