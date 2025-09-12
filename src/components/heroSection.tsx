export const HeroSection= ()=>{
    return <div>
        {/*capTable */}     
        <div className="cap_table_basics">
            Cap table basics
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="right_arrow">
        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        </div>
        {/*main section */}
        <div className="hero_main_heading">
           <div>Magically simplify</div> 
           <div>accounting and taxes</div>
        </div>
        {/*anotehr one */}
        <div className="hero_automated">
        <div>Automated bookkeeping, effortless tax filing,</div>
        <div>real‑time insights. Set up in 10 mins. Back to building by 5:00pm.</div>
        </div>
        {/*two buttons */}
        <div className="hero_buttons">
             <button className="nav_button">Get started</button>
              <button className="nav_button_second">pricing  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="right_arrow">
        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg></button>
        </div>
    </div>
}