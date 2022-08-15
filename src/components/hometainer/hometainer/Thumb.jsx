import React from 'react'

function Thumb() {
  return (
 
    <div class="container th">
           <div class="row">
               <div class="col-md-4">
                  <section 
                        style={{marginLeft: "30px", borderLeft: "1px solid lightgray",
                        height: "250px", id:"i"}}>
                        <span style={{color: "white", display: "flex", webkitBoxAlign: "center",
                        alignItems: "center", webkitBoxBack: "center", justifyContent: "center",
                        width: "30px", height: "30px", backgroundColor: "rgb(0, 107, 255)", borderRadius: "50%",}}>1.</span>
                        <h3 style={{paddingLeft: "20px", marginBottom: "20px", fontSize: "1rem", lineHeight: "1.6",
                        fontWeight: "700"}}>Create simple rules</h3>
                        <p style={{paddingLeft: "20px", fontSize: "1.125rem", lineHeight: "1.6",
                        fontWeight: "500",}}>Let Calendly know your availability preferences and it'll do the work for you.</p>
                  </section>
               </div>
               <div class="col-md-4">
                  <section style={{marginLeft: "30px", borderLeft: "1px solid lightgray", height: "250px", id: "i"}}>
                        <span style={{color: "white", display: "flex", webkitBoxAlign: "center", alignItems: "center",
                        webkitBoxPack: "center", justifyContent: "center", width: "30px", height: "30px",
                        backgroundColor: "rgb(0, 107, 255)", borderRadius: "50%",}}>2.</span>
                        <h3 style={{paddingLeft: "20px", marginBottom: "20px", fontSize: "1rem",lineHeight: "1.6",
                        fontWeight: "700"}}>Share your link</h3>
                        <p style={{paddingLeft: "20px", fontSize: "1.125rem",lineHeight: "1.6", fontWeight: "500",}}>
                        Send guests your Calendly link or embed it on your website.</p>
                 </section>
              </div> 
              <div class="col-md-4">
                        <section style={{marginLeft: "30px", borderLeft: "1px solid lightgray", height:"250px", id:"i"}}>
                            <span style={{color: "white", display: "flex", webkitBoxAlign: "center", justifyContent: "center", width: "30px", height: "30px", 
                            backgroundColor: "rgb(0, 107, 255)", borderRadius: "50", }}>3.</span>
                            <h3 style={{paddingLeft: "20px", marginBottom: "20px", fontSize: "1rem",}}>Get booked</h3>
                            <p style={{paddingLeft: "20px", fontSize: "1.125rem", lineHeight: "1.6",fontWeight: 500}}>They pick a time and the event is added to your calendar.</p>

                        </section>
             </div>
         </div>
  </div>
 
  )
}

export default Thumb;