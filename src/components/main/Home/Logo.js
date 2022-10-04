import * as _ from "../../../styles/main/home";

export function BgImg() {
    return <_.BgImg src={require("../../../Assets/bgImg.png")} alt="" />;
}
export function BgStick(){
    return (
        <svg width="600" height="2" viewBox="0 0 600 2" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"marginBottom": "20px"}}>
            <rect width="600" height="2" rx="1" fill="url(#paint0_linear_366_423)"/>
            <defs>
                <linearGradient id="paint0_linear_366_423" x1="600" y1="1.00082" x2="-5.72233e-06" y2="0.99738" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFEBEC"/>
                    <stop offset="1" stop-color="#F57278"/>
                </linearGradient>
            </defs>
        </svg>
    )
}