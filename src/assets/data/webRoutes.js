import CardMatchPage from "../../components/pages/cardmatchpage/CardMatchPage"
import ConnectFourPage from "../../components/pages/connectfourpage/ConnectFourPage"
import Dashboard from "../../components/pages/dashboard/Dashboard"
import HangManPage from "../../components/pages/hangmanpage/HangManPage"
import RPSPage from "../../components/pages/rpspage/RPSPage"
import SimonSaysPage from "../../components/pages/simonsayspage/SimonSaysPage"
import XOPage from "../../components/pages/xopage/XOPage"

const routes = [
    {
        label: "Dashboard",
        imgSrc: "https://picsum.photos/id/1082/200/200",
        path: "/",
        component: Dashboard,
        inDashboard: false
    },
    {
        label: "X&Os",
        imgSrc: "https://picsum.photos/id/1082/200/200",
        path: "/XOs",
        component: XOPage,
        inDashboard: true
    },
    {
        label: "Rock Paper Scissors",
        imgSrc: "https://picsum.photos/id/1082/200/200",
        path: "/Rock-Paper-Scissors",
        component: RPSPage,
        inDashboard: true
    },
    {
        label: "Connect 4",
        imgSrc: "https://picsum.photos/id/1082/200/200",
        path: "/Connect-4",
        component: ConnectFourPage,
        inDashboard: true
    },
    {
        label: "Simon Says",
        imgSrc: "https://picsum.photos/id/1082/200/200",
        path: "/Simon-Says",
        component: SimonSaysPage,
        inDashboard: true
    },
    {
        label: "Hangman",
        imgSrc: "https://picsum.photos/id/1082/200/200",
        path: "/Hangman",
        component: HangManPage,
        inDashboard: true
    },
    {
        label: "Card Match",
        imgSrc: "https://picsum.photos/id/1082/200/200",
        path: "/Card-Match",
        component: CardMatchPage,
        inDashboard: true
    }
]


export {
    routes
}