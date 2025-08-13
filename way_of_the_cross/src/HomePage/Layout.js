
import ZoomSDK from "../utils/ZoomSdkElement";
import LocationComponent from "./LocationComponent";
import React from 'react';

export default function Layout(){
    
    const scriptures =[
        {
        belief:" We believe in one Lord, one Faith, and one Baptism.",
        script:"Ephesians 4:5",
    },{
        belief:"Our Blessed Hope lies in Christ Jesus our LORD who has given us the victory over death and hell. Therefore, standing firm on His promise, we anticipate the second coming of Jesus Christ- that great day or resurrection which shall surely come. On that deay, the dead in Christ shall righteousnessfirst. Then, we which are alive and remain i will be changed, and caught up together with them in the air. And so shall we forever be with our LORD and Savior Jesus Christ.",
        script:"John 14:3\n I Corinthians 15:51-58;\n Thessaloeoams 4:15-17;",
    },{
        belief:"We believe that the Holy Bible is the Word of God. It is true. It contains the keys to inherting eternal life, and it reveals the mystery of our faith",
        script:"John 5:39",
    },{
        belief:" We believe in the oneness of God, who was the Father in creation, the Sun in redeption, and today, He is the Holy Ghost in the Church. ",
        script:"I Timothy 3:16",
    },{
        belief:"We believe that Jesus is God, for in Christ all of the fullness of the Deity lives in bodily form. we proclaim LORD Jesus Christ si the name of God That was given to this generation as the only name whereby the people of this grace dispensation of time can be saved.",
        script:"Colossians 2:9; Acts 4:12.",
    },{
        belief:" We accept God's plan of salvation of baptism by water and spirit. Jesus Christ, who was our perfect example, through sinless, was baptized go fulfill righteousness.",
        script:" John 3:5\n Acts 8:37",
    },{
        belief:"We believe that the Word of God must be proclaimed throughout the entire world. according to God's commandment.",
        script:"Matthew 28:19; Mark 16:15\n Roamns 10:18",
    }
   ]

   const card = (belief) => {
    const verses = belief.script.split(';').map(v => v.trim()).filter(v => v.length > 0);
    
    return (
      <div style={{ display: "flex", flexDirection: "column", height: "400px", border: "1px solid #ccc", padding: "0 10px 10px 10px" }}>
        <div>
          <h4 style={{marginTop:"5px"}}>{belief.belief}</h4>
        </div>
        <div style={{ marginTop: "auto", whiteSpace: "pre-wrap" }}>
        <p style={{textAlign:"center"}}>
          {verses.map((verse, i) => (
            <React.Fragment key={i}>
              {verse}
              {i !== verses.length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
      </div>
      </div>
    );
  };

    return(
        <div className="">

            <div className="ImgDiv"/>

            <div className="welcome" style={{top:25,width:"100%"}}>
                <h1>Welcome </h1>
                <h1> To</h1>
                <h1 className="cross" > The Cross </h1>
                <h4>"The Church where the love of God abides" I Corinthians 13:13</h4>
            </div>


            
            <section className="webEdge" >
                <div>
                    <h1 style={{textAlign:"center"}}>The Way of the Cross Tabernacle of Christ Church, Inc</h1>
                    <h2 style={{textAlign:"center"}}> Heart of Harlem's Apostolic Church </h2>
                </div>

                <div>
                    <h2 style={{textAlign:"center"}}>
                        Worship With Us In Person & Virtually
                        Every Sunday @ 11:30am
                    </h2>
                   
                </div>

               <ZoomSDK/>

                <div>
                <p style={{textAlign:"center"}}>
                    We are a ministry founded on biblical principles. We servce in the spirit of excellence with integrity and compassion for our community,
                    nation and our world. We desire to establish a reputation for reaching the lost and broken, to minister and serve them with the utmost level of dignity and respect.
                    We must minister to the needs of all people by sharing th elove of Christ with everyone
                </p>
                </div>

                <div
                style={{
                    display: "flex",
                    overflowX: "auto",
                    gap: "20px",
                    padding: "10px",
                    scrollSnapType: "x mandatory"
                }}
                >
                {scriptures.map((belief, index) => (
                    <div
                    key={index}
                    style={{
                        flex: "0 0 33.33%", // Shows ~3 cards per screen
                        minWidth: "300px",  // Optional fixed width
                        scrollSnapAlign: "start",
                        border: "1px solid #ccc",
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', 
                        borderRadius: "8px",
                        padding: "10px",
                        backgroundColor: "#fff",
                    }}
                    >
                    {card(belief)}
                    </div>
                ))}
                </div>
            
                <div>
                    <h4 style={{textAlign:"center"}}>
                        Brief History About Us
                    </h4>
                    <p>
                        The Way of the Cross Tabernacle of Christ Church, Inc. was founded in 1959 by our founding father and mother the Late Apolstle James P. Pitt & Effie D. Pitt 
                        with ten dedicated memebers. On June 13th 1962 the church was incorporated. After preacing, teaching, and miracles being performed in the Bronx, NY the 
                        church moved to its current space 124-126 W 136th street in the heart of Harlem, NY in 1977. The mortgage was burned in 1982 on this location. After Years of service and blessings through the 
                        the anoited vessels our founding mother the late Effie D. Pitt passed from her earthly labor to eternal rest on March 20th 1999. 8 Years later, on May 17th 2007 our 
                        founding father and Pastor of 47 years received his eternal rest from labor to rests.  
                    </p>
                    <p>
                        After the passing our founder and pastor a son of the ministry Elder Reynaldo Andino was appointed interim Pastor in 2007 until being installed officially as the second pastor of
                        The Way of the Cross Tabernacle of Christ in May 2010 along with his wife leading Lasdy Mother Doris Andino.
                    </p>
                </div>

                <LocationComponent/>
            </section>
            
       </div>
    )
}