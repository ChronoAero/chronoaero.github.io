"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootStore = void 0;
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var redux_1 = require("redux");
var redux_devtools_extension_1 = require("redux-devtools-extension");
var showcase_reducer_1 = require("./redux/showcase.reducer");
var react_redux_1 = require("react-redux");
var cover_1 = require("./components/cover");
var navbar_1 = require("./components/navbar");
var section_1 = require("./components/section");
var showcase_1 = require("./components/showcase");
var framer_motion_1 = require("framer-motion");
exports.rootStore = (0, redux_1.createStore)(showcase_reducer_1.showcaseReducer, (0, redux_devtools_extension_1.composeWithDevTools)());
var AppRoot = function () {
    return react_1.default.createElement("div", { className: 'overflow-x-hidden' },
        react_1.default.createElement(navbar_1.Navbar, null),
        react_1.default.createElement(cover_1.Cover, null),
        react_1.default.createElement("div", { className: "px-6 py-24 sm:px-24 bg-primary shadow-lg" },
            react_1.default.createElement(section_1.Section, { img: "./view/public/chrono_code.png", alt: "Coding chrono", right: true, id: "aboutme", title: "About Me", desc: [
                    react_1.default.createElement(react_1.default.Fragment, null,
                        "I'm a high school student and simply a ",
                        react_1.default.createElement("del", null, "hacker"),
                        " programmer"),
                    "I've been working and experimenting around the amazing field of programming since junior high school.",
                    "I'm someone with a rather calm and serious nature that helps me to be a better listener when it comes to projects and urges me to try my best on delivering my work output.",
                    "I might not be that really extroverted one, but I'm open to programming discussions. Since you reach me out this way, this means we should understand each other well.",
                    "Looking forward to working together with you."
                ] })),
        react_1.default.createElement("div", { className: "px-6 py-24 sm:px-24 bg-secondary shadow-lg" },
            react_1.default.createElement(section_1.Section, { img: "./view/public/chrono_packages.png", alt: "Chrono carries packages", right: false, id: "prologue", title: "How I Started", desc: [
                    "It started from my interest towards games, and I once wanted to make one myself.",
                    "I, well, accidentally, learnt JavaScript and got my hands into the basics of programming a few years ago. It wasn't something I expected to work with though, at the time, and I started learning about game development instead of more JavaScript. During the process I've learnt more about the basic concepts of programming languages (e.g. types).",
                    "However, then I got somewhat sidetracked to web development due to some stuff related to making bots, but that just expanded the area I can experiment around, and I ended up here."
                ] })),
        react_1.default.createElement("div", { className: "px-6 py-24 sm:px-24 bg-primary shadow-lg" },
            react_1.default.createElement(section_1.Section, { img: "./view/public/chrono_work.png", alt: "Chrono at work", right: true, id: "doing", title: "Currently Working on...", desc: [
                    "Currently, I'm still learning as a high school student. I enjoy learning subjects taught at school. Some even helped me to build my programming logic, especially mathematics, and their science manifestations (physics and chemistry for example).",
                    "Learning is a never ending process, there is still a lot to learn even when you think you have learnt a lot, there is just always something new.",
                    "Same thing happens when I learn to code, there's just stuff related to syntax, algorithm efficiency, and much more, and if you ever work with installed modules, you know what I've mentioned is not the end, and I'm excited to learn more.",
                    "Currently I am learning about web related things (it of course revolves around JavaScript), and sometimes, game development. I'm also excited to learn other fields of programming as well.",
                    "So far, I just enjoy what I do."
                ] })),
        react_1.default.createElement("div", { className: "px-6 py-24 sm:px-24 bg-secondary shadow-lg" },
            react_1.default.createElement(section_1.Section, { img: "./view/public/chrono_git.png", alt: "Chrono managing version control", right: false, id: "plans", title: "Planning on...", desc: [
                    "I just plan to keep learning to code, and I hope I can find an interesting field that I can work on in the future.",
                    "I also wish I actually can collaborate with others on something, to at least understand more about conventions when people work together.",
                    "Also, due to my initial motivation, I'm hoping that I can really finish a game (trust me, I'm trying).",
                ] })),
        react_1.default.createElement("div", { className: "px-6 py-24 sm:px-24 bg-primary shadow-lg" },
            react_1.default.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, x: "-150px" }, whileInView: { opacity: 1, x: "0" }, transition: { type: "spring", duration: 1, stiffness: 500, damping: 25 }, viewport: { once: true }, className: "font-bold text-3xl p-1 py-6 text-subcontrast showcase" }, "Showcase"),
            react_1.default.createElement(react_redux_1.Provider, { store: exports.rootStore },
                react_1.default.createElement(showcase_1.Showcase, null))),
        react_1.default.createElement("div", { className: "px-6 py-24 sm:px-24 bg-secondary shadow-lg" },
            react_1.default.createElement(section_1.Section, { img: "./view/public/chrono_contacts.png", alt: "Chrono holding a letter", right: true, id: "contacts", title: "Want to reach me out?", desc: [
                    "Let me know if you want to work on something together :)",
                    "Here are my contacts:",
                    "{Discord: \"Chrono#9327\", Github: \"ChronoAero\", Email: \"tanjoshua13tj@gmail.com\"}"
                ] })));
};
react_dom_1.default.render(react_1.default.createElement(AppRoot, null), document.getElementById('root'));
