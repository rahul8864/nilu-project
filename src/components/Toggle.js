import React from "react";
import './Toggle.css'
const Toggle = () => {
  return(
    
    <div class="App">
    <div class="header">
       <div id="name">
        <a href="#index.js">Student's Test</a>
        <div className="searchBox">
        <input type="text" className="inputBox" placeholder="Search among tests..."/>
        <span><i class="fa-solid fa-magnifying-glass"></i></span>
        </div>
        <span className="two"><i class="fa-solid fa-user"></i></span>
    </div>
       
    </div>
    <input type="checkbox" id="openSidebarMenu"/>
    <label for="openSidebarMenu" class="sidebarIconToggle">
        <div className="spinner top"></div>
        <div className="spinner middle"></div>
        <div className="spinner bottom"></div>
    </label>
    <div id="sidebarMenu">
        <ul className="menu">
            <li><a href="https://www.researchgate.net/figure/Intellectual-complexity-of-questions-in-each-exam-Question-difficulty-assesses-the_fig5_235667115">Intellectual</a></li>
            <li><a href="https://in.indeed.com/career-advice/finding-a-job/best-jobs-for-college-students">Career</a></li>
            <li><a href="https://in.pinterest.com/ebuva/student-humour/">Funny</a></li>
            <li><a href="https://www.marketingweek.com/content-for-real-men/">For men</a></li>
            <li><a href="https://blog.influenceandco.com/international-womens-day-content">For Women</a></li>
            <li><a href="https://www.verywellmind.com/family-love-how-to-create-it-and-sustain-it-5193643">Love and family</a></li>
            <li><a href="https://in.mashable.com/tech/10343/youtubes-new-kids-content-policy-is-a-step-in-the-right-direction-but-its-not-a-cure-all">For children</a></li>
            <li><a href="https://custom-writing.org/blog/best-health-medical-research-topics">Health</a></li>
            <li><a href="#index.js">Contacts</a></li>
            <li><a href="https://www.entrepreneur.com/article/200220">For copyright holders</a></li>
            <li><a href="#index.js">Terms of use</a></li>
            <li><a href="#index.js">Privacy</a></li>
        </ul>
    </div>
    
    </div>

    
  )
}
export default Toggle;