import React from 'react'
import Navbar from './../../components/Navbar/Navbar'
import Card from './../../components/Cards/Developers/Card'
import img1 from './../../images/developers/pawan.jpg'

const Developers = () => {

    const developers = [
        {
            name:"Pawankumar Jaiswal",
            email:"pawankumarrajeshlal.j19@iiits.in",
            img:img1,
            facebook:"https://www.facebook.com/pawanjaiswal0843/",
            instagram:"https://www.instagram.com/pawan_jaiswal_08/",
            linkdin:""
        }
    ]
    
    return (
        <>
            <Navbar/>
            <div className="bada">
                <section>
                    <div className="container">
                        <Card {...developers[0]}/>
                        <Card/>
                        <Card/>
                    </div>
                    <div className="container">
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </section>
            </div>
        </>
        
    )
}

export default Developers;
