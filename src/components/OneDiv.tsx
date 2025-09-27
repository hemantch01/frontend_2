import founderPic from "../assets/cofounder pic.webp"
export const OneDiv = ()=>{
    return <div className="OneDiv">
    <div className="align_them">
    <div className="OneDiv_text">
    “Finta filed our taxes and claimed $17,016 in credits.”
    </div>
    <div className="OneDiv_text">
    The process was easy with responsive support!”
    </div>
    {/*profile */}
    <div className="profile_section">
        <img src={founderPic} alt="founderPic" className="founder_pic" />
        <div className="profile_section_text">
            <div className="profile_section_text_n">Alex Danilowicz</div>
            <div className="profile_section_text_n2">Co-founder at Magic Patterns</div>
        </div>
    </div>
    </div>
    </div>
}   