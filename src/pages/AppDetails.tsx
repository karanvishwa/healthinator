import { useEffect } from "react"
import { HeaderNavigations } from "../components/HeaderNavigations"

import '../styles/AppDetails.css'
import { CustomButton } from "../components/CustomButton";
function AppDetails() {


    useEffect(() => {
        // setTimeout(()=>navigate("/fifth"),8000)
    }, []);


    return (
        <>
            <div className='nav-bar'>
                <HeaderNavigations />
                <div className='join'>
                    <CustomButton label={"Home"} scale={1}></CustomButton>
                </div>
            </div>
            <div className="data" style={{ fontSize: '25px', fontFamily: 'Roboto,san-serif', paddingLeft: '70px', paddingBottom: '50px', color: 'white' }}>
                <h1 style={{ color: '#0A2540' }}>🩺 Welcome to Healthinator</h1><br />

                <h3 style={{ color: '#0a401a' }}>🌟 What is Healthinator? </h3><br />

                <p className="text-details">Healthinator is an intelligent online tool designed to help you understand your health better. By answering a set of simple, guided questions about your symptoms, lifestyle, and medical history. Healthinator generates a personalized health report that gives you clarity about your current condition.</p> <br /><br />

                <h3 style={{ color: '#0a401a' }}>⚡ How It Works </h3> <br />

                <p className="text-details">Answer a few quick questions – symptoms, lifestyle, medical history.<br />

                    Our system analyzes your responses – using medical knowledge and smart logic.<br />

                    Get your instant health report – with possible conditions, severity, and recommendations.</p><br /><br />

                <h3 style={{ color: '#1ea764' }}>✅ What You’ll Get</h3><br />

                <p className="text-details">A clear summary of your symptoms.<br />

                    Possible health conditions and their severity levels.<br />

                    Actionable recommendations – from self-care tips to when to consult a doctor.<br />

                    Option to download or share your health report.</p><br /><br />

                <h3 style={{ color: '#1ea764' }}>👨‍⚕️ Why Use Healthinator?</h3><br />

                <p className="text-details">Quick & Easy → Get results in minutes, no waiting rooms.<br />

                    Accessible Anywhere → Works on phone, tablet, or computer.<br />

                    Preventive Focus → Spot issues early before they become serious.<br />

                    Completely Private → Your data stays secure and confidential.</p><br /><br />

                <h3 style={{ color: '#1fab68' }}>📌 Important Note</h3><br />

                <p className="text-details">Healthinator is not a replacement for a doctor. It is designed to guide you with first-level insights and help you decide whether you need professional care.</p><br /><br />

                <h3 style={{ color: '#26d480' }}>🚀 Get Started Today</h3><br />

                <p className="text-details">Take control of your health in just a few clicks.</p><br />
                <br />
                <div className="start-button">
                    <CustomButton label={"Start"} navigateTo="/second" scale={1.5} />
                </div>
            </div>

        </>
    )
}

export default AppDetails
