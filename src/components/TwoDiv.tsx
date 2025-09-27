import claim from "../assets/claim-rnd-tax-credits-mobile.webp"
export const TwoDiv=()=>{
    return <div className="TwoDiv">
        <div className="TwoDiv_base">
            
            <img className="hero_image" src={claim} alt="image" />
            
            {/*the text in blue with png */}
            <div className="TwoDiv_png_text_container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634Zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866Zm2.023 6.828a.75.75 0 1 0-1.06-1.06 3.75 3.75 0 0 1-5.304 0 .75.75 0 0 0-1.06 1.06 5.25 5.25 0 0 0 7.424 0Z" clipRule="evenodd" />
                </svg>
                 <div className="TwoDiv_base_text">
                ALL FILING HANDLED
            </div>
            </div>
           
           {/*simple text */}
            <div className="TwoDiv_next_text_content">
                Finta’s experts handle all your filing and compliance needs accurately and on time.
            </div>
        
        
        </div>
        
        <div className="TwoDiv_base_2">
             <img className="hero_image" src={claim} alt="image" />
            
            {/*the text in blue with png */}
            <div className="TwoDiv_png_text_container">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z" clipRule="evenodd" />
               </svg>
                 <div className="TwoDiv_base_text">
                CLAIM R&D TAX CREDITS
            </div>
            </div>
           
           {/*simple text */}
            <div className="TwoDiv_next_text_content">
               Finta’s experts help you maximize R&D tax credits and get money back from the IRS.
            </div>
        
        </div>
    </div>
}
