import image from "../assets/heroImage.png"
export const HeroImage = ()=>{
    return <div className="hero_image_container">
        <img src={image} alt="image" className="hero_image" />
    </div>
}