function load_resources() {
    document.getElementById("second_box_rigth").innerHTML = `` 
  let second_box_rigth =  document.getElementById("second_box_rigth") 
     second_box_rigth.innerHTML = load_data() 
     function load_data() {
         return `<h2>All Resources</h2>
         <div class="line"></div>
         <div class="popular_guides">
             <h2>Popular guides</h2>
             <div class="jss3">
                 <a href="#">
                     <div class="jss31">
                         <div class="jss311">
                             <img src="../../Images/resources/8-motorcycle-riding-tips-for-female-bike-riders.webp" alt="">
                         </div>
                         <div class="jss312">
                             <p>Get started with Two Wheeler Insurence</p>
                             <div class="jss3121">
                                 <img src="../../Images/resources/arrow right.png" alt="">
                             </div>
                         </div>
                     </div>
                 </a>
                 <a href="#">
                     <div class="jss31">
                         <div class="jss311">
                             <img src="../../Images/resources/reimbursement-in-health-insurance.webp" alt="">
                         </div>
                         <div class="jss312">
                             <p>Get started with Health Insurence</p>
                             <div class="jss3121">
                                 <img src="../../Images/resources/arrow right.png" alt="">
                             </div>
                         </div>
                     </div>
                 </a>
                 <a href="#">
                     <div class="jss31">
                         <div class="jss311">
                             <img src="../../Images/resources/individual-medical-insurance.webp" alt="">
                         </div>
                         <div class="jss312">
                             <p>Get started with Group Health Insurence</p>
                             <div class="jss3121">
                                 <img src="../../Images/resources/arrow right.png" alt="">
                             </div>
                         </div>
                     </div>
                 </a>
             </div>
             <div class="jss4">
                 <a href="#">
                     <div class="jss41">
                         Explore more guides
                         <div class="jss3121">
                             <img src="../../Images/resources/arrow right.png" alt="">
                         </div>
                     </div>
                 </a>
             </div>
         </div>
         <div class="popular_articles">
             <h2>Popular articles</h2>
             <p class="paragraph1">Read articles on insurance to understand insurance related features, benefits and tips in detail</p>
             <div class="jss3">
                 <a href="#">
                     <div class="jss3111">
                         <div class="jss311">
                             <img src="../../Images/resources/tips-to-reduce-your-two-wheeler-insurance-premium.webp" alt="">
                         </div>
                             <p class="paragraph3">Essential Tips to Reduce Your Two-wheeler Insurance Premium</p>
                         <div class="jss313">
                             <p class="paragraph2">Team Acko</p>
                             <div class="dot"></div>
                             <p class="paragraph2">May 16, 2022</p>
                         </div>
                     </div>
                 </a>
                 <a href="#">
                     <div class="jss3111">
                         <div class="jss311">
                             <img src="../../Images/resources/things-to-know-about-car-insurance-for-beginners.webp" alt="">
                         </div>
                             <p class="paragraph3">5 Things to Know About Car Insurance for Beginners</p>
                         <div class="jss313">
                             <p class="paragraph2">Team Acko</p>
                             <div class="dot"></div>
                             <p class="paragraph2">May 16, 2022</p>
                         </div>
                     </div>
                 </a>
                 <a href="#">
                     <div class="jss3111">
                         <div class="jss311">
                             <img src="../../Images/resources/room-rent-capping-in-health-insurance.webp" alt="">
                         </div>
                             <p class="paragraph3">Room Rent Capping Under Health Insurance Coverage (Room Rent Limit)</p>
                         <div class="jss313">
                             <p class="paragraph2">Team Acko</p>
                             <div class="dot"></div>
                             <p class="paragraph2">May 16, 2022</p>
                         </div>
                     </div>
                 </a>
             </div>
             <div class="jss4">
                 <a href="#">
                     <div class="jss41">
                         Explore more articles
                         <div class="jss3121">
                             <img src="../../Images/resources/arrow right.png" alt="">
                         </div>
                     </div>
                 </a>
             </div>
         </div>
         <div class="popular_ebooks">
             <h2>Popular ebooks</h2>
             <p class="paragraph1">Checkout handy ebooks on insurence</p>
             <div class="jss3">
                 <a href="#">
                     <div class="jss31">
                         <div class="jss311">
                             <img src="../../Images/resources/complete-guide-to-vehicle-insurance.webp" alt="">
                         </div>
                         <div class="jss312">
                             <p>Complete Guide to Car Insurence Policy [E-Book]</p>
                             <div class="jss3121">
                                 <img src="../../Images/resources/arrow right.png" alt="">
                             </div>
                         </div>
                     </div>
                 </a>
                 <a href="#">
                     <div class="jss31">
                         <div class="jss311">
                             <img src="../../Images/resources/car_insurance_add-ons_guides_thumbnail.webp" alt="">
                         </div>
                         <div class="jss312">
                             <p>Car Insurence Add-ons [E-Book]</p>
                             <div class="jss3121">
                                 <img src="../../Images/resources/arrow right.png" alt="">
                             </div>
                         </div>
                     </div>
                 </a>
                 <a href="#">
                     <div class="jss31">
                         <div class="jss311">
                             <img src="../../Images/resources/creating-good-workplace-culture-e-book.webp" alt="">
                         </div>
                         <div class="jss312">
                             <p>Creating a Rewarding Workplace Culture [E-Book]</p>
                             <div class="jss3121">
                                 <img src="../../Images/resources/arrow right.png" alt="">
                             </div>
                         </div>
                     </div>
                 </a>
             </div>
             <div class="jss4">
                 <a href="#">
                     <div class="jss41">
                         Explore more ebooks
                         <div class="jss3121">
                             <img src="../../Images/resources/arrow right.png" alt="">
                         </div>
                     </div>
                 </a>
             </div>
         </div>
         </div>`
     } 

}
function load_guides() {
   document.getElementById("second_box_rigth").innerHTML = ``
   document.getElementById("js").innerHTML = `Guids to make insurence easy`
   let second_box_rigth = document.getElementById("second_box_rigth")
   second_box_rigth.innerHTML = loadguides() 
   all_guides();
   color1();
   function loadguides(){
       return ` <div class="second_box_rigth_top2">
       <div class="jss5"></div>
       <div class="jss6">
           <a href="#" onclick="all_guides()">
               <p id="p51" class="p5">ALL</p>
           </a>
           <a href="#" onclick="car_insurence_guides() ">
               <p id="p52" class="p5">Car Insurence</p>
           </a>
           <a href="#" onclick="color3()">
               <p id="p53" class="p5">Two_Wheeler Insurence</p>
           </a>
           <a href="#" onclick="color4()">
               <p id="p54" class="p5">Group Health Insurence</p>
           </a>
           <a href="#" onclick="color5()">
               <p id="p55" class="p5">Health Insurence</p>
           </a>
       </div>
       <div class="jss7"></div>
   </div>
   <div id ="second_box_rigth_all_guides" class="second_box_rigth_all_guides"> </div>
   <div id ="second_box_rigth_car_insurence_guides" class="second_box_rigth_car_insurence_guides"> </div>`;
   }
}
function load_articles() {
   document.getElementById("second_box_rigth").innerHTML = ``
   document.getElementById("js").innerHTML = `Articles to make insurence easy`
   let second_box_rigth = document.getElementById("second_box_rigth")
   second_box_rigth.innerHTML = loadarticles() 
   function loadarticles() {
       return `<div class="second_box_rigth_top2">
       <div class="jss5"></div>
       <div class="jss6">
           <a href="#" onclick="all_guides()">
               <p id="p51" class="p5">ALL</p>
           </a>
           <a href="#" onclick="car_insurence_guides() ">
               <p id="p52" class="p5">Car Insurence</p>
           </a>
           <a href="#" onclick="color3()">
               <p id="p53" class="p5">Two_Wheeler Insurence</p>
           </a>
           <a href="#" onclick="color4()">
               <p id="p54" class="p5">Group Health Insurence</p>
           </a>
           <a href="#" onclick="color5()">
               <p id="p55" class="p5">Health Insurence</p>
           </a>
       </div>
       <div class="jss7"></div>
   </div>
   <div id ="second_box_rigth_all_guides" class="second_box_rigth_all_guides"> </div>
   <div id ="second_box_rigth_car_insurence_guides" class="second_box_rigth_car_insurence_guides"> </div>`
   }
}
function load_ebooks() {
   document.getElementById("second_box_rigth").innerHTML = ``
   document.getElementById("js").innerHTML = `Ebooks`
   document.getElementById("js1").innerHTML = `Checkout ebooks on insurence`
   let second_box_rigth = document.getElementById("second_box_rigth")
   all_ebooks();
   second_box_rigth.innerHTML = loadebooks() 
   function loadebooks() {
       return `<div class="second_box_rigth_top2">
       <div class="jss5"></div>
       <div class="jss6">
           <a href="#" onclick="all_ebooks()">
               <p id="p51" class="p5">ALL</p>
           </a>
           <a href="#" onclick="car_insurence_guides() ">
               <p id="p52" class="p5">Car Insurence</p>
           </a>
           <a href="#" onclick="color3()">
               <p id="p53" class="p5">Two_Wheeler Insurence</p>
           </a>
           <a href="#" onclick="color4()">
               <p id="p54" class="p5">Group Health Insurence</p>
           </a>
           <a href="#" onclick="color5()">
               <p id="p55" class="p5">Health Insurence</p>
           </a>
       </div>
       <div class="jss7"></div>
   </div>
   <div id ="second_box_rigth_all_ebooks" class="second_box_rigth_all_ebooks"> </div>
   <div id ="second_box_rigth_car_insurence_guides" class="second_box_rigth_car_insurence_guides"> </div>`
   }
}

function all_guides() {
    color1()
    document.getElementById("js").innerHTML = `Guids to make insurence easy`
    document.getElementById("second_box_rigth_all_guides").innerHTML = ``
    let second_box_rigth_all_guides = document.getElementById("second_box_rigth_all_guides")
    second_box_rigth_all_guides.innerHTML = load_all_guides() 
    function load_all_guides() {
        return ` <div class="jss8">
        <h2 class="jss8h2">Popular guides</h2>
        <div class="jss81">
            <a href="#">
                <div class="jss811">
                    <div class="jss8111">
                        <div class="jss31111">
                            <img src="../../Images/resources/8-motorcycle-riding-tips-for-female-bike-riders (1).webp" alt="">
                        </div>
                        
                        <p>Get started with Two Wheeler Insurence</p>
                        <p class="p10 jss3121 p10img">
                            <span class="p10"> Read More 
                                 <img src="../../Images/resources/arrow right.png" alt="">
                            </span>                                                    
                        </p>
                        
                    </div>
                </div>
            </a>
            <div class="jss812">
                <a href="#">
                    <div class="jss812a">
                        <div class="jss812b">
                            <img src="../../Images/resources/reimbursement-in-health-insurance.webp" alt="">
                        </div>
                        <div class="jss812c">
                            <p class="p9">Get started with Health Insurence</p>
                            <p class="p10 jss3121 p10img">
                                <span class="p10"> Read More 
                                     <img src="../../Images/resources/arrow right.png" alt="">
                                </span>                                                    
                            </p>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div class="jss812a">
                        <div class="jss812b">
                            <img src="../../Images/resources/individual-medical-insurance.webp" alt="">
                        </div>
                        <div class="jss812c">
                            <p class="p9">Get started with Health Insurence</p>
                            <p class="p10 jss3121 p10img">
                                <span class="p10"> Read More 
                                     <img src="../../Images/resources/arrow right.png" alt="">
                                </span>                                                    
                            </p>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div class="jss812a">
                        <div class="jss812b">
                            <img src="../../Images/resources/how-to-renew-car-insurance-during-coronavirus-lockdown (1).webp" alt="">
                        </div>
                        <div class="jss812c">
                            <p class="p9">Get started with Health Insurence</p>
                                <p class="p10 jss3121 p10img">
                                    <span class="p10"> Read More 
                                         <img src="../../Images/resources/arrow right.png" alt="">
                                    </span>                                                    
                                </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
    <div class="jss9"></div>
    <div class="jss10"></div>
</div>
<div class="second_box_rigth_end2">
    <h2>All guides</h2>
    <div class="jss3">
        
        <a href="#">
            <div class="jss31">
                <div class="jss311">
                    <img src="../../Images/resources/8-motorcycle-riding-tips-for-female-bike-riders.webp" alt="">
                </div>
                <div class="jss312">
                    <p>Get started with Two Wheeler Insurence</p>
                    <div class="jss3121">
                        <img src="../../Images/resources/arrow right.png" alt="">
                    </div>
                </div>
            </div>
        </a>
        <a href="#">
            <div class="jss31">
                <div class="jss311">
                    <img src="../../Images/resources/reimbursement-in-health-insurance.webp" alt="">
                </div>
                <div class="jss312">
                    <p>Get started with Health Insurence</p>
                    <div class="jss3121">
                        <img src="../../Images/resources/arrow right.png" alt="">
                    </div>
                </div>
            </div>
        </a>
        <a href="#">
            <div class="jss31">
                <div class="jss311">
                    <img src="../../Images/resources/individual-medical-insurance.webp" alt="">
                </div>
                <div class="jss312">
                    <p>Get started with Group Health Insurence</p>
                    <div class="jss3121">
                        <img src="../../Images/resources/arrow right.png" alt="">
                    </div>
                </div>
            </div>
        </a>
        <a href="#">
            <div class="jss31">
                <div class="jss311">
                    <img src="../../Images/resources/how-to-renew-car-insurance-during-coronavirus-lockdown (1).webp" alt="">
                </div>
                <div class="jss312">
                    <p>Get started with Group Health Insurence</p>
                    <div class="jss3121">
                        <img src="../../Images/resources/arrow right.png" alt="">
                    </div>
                </div>
            </div>
        </a>
        <a href="#">
            <div class="jss31">
                <div class="jss311">
                    <img src="../../Images/resources/engine_protection_cover_in_bike_insurance_add-on.webp" alt="">
                </div>
                <div class="jss312">
                    <p>Get started with Group Health Insurence</p>
                    <div class="jss3121">
                        <img src="../../Images/resources/arrow right.png" alt="">
                    </div>
                </div>
            </div>
        </a>
        <a href="#">
            <div class="jss31">
                <div class="jss311">
                    <img src="../../Images/resources/health-insurance-premium-calculator.webp" alt="">
                </div>
                <div class="jss312">
                    <p>Get started with Group Health Insurence</p>
                    <div class="jss3121">
                        <img src="../../Images/resources/arrow right.png" alt="">
                    </div>
                </div>
            </div>
        </a>
        <a href="#">
            <div class="jss31">
                <div class="jss311">
                    <img src="../../Images/resources/top-up-and-super-top-up-health-insurance-plans.webp" alt="">
                </div>
                <div class="jss312">
                    <p>Get started with Group Health Insurence</p>
                    <div class="jss3121">
                        <img src="../../Images/resources/arrow right.png" alt="">
                    </div>
                </div>
            </div>
        </a>
        <a href="#">
            <div class="jss31">
                <div class="jss311">
                    <img src="../../Images/resources/6-Common-Misconceptions-about-Zero-Depreciation-In-Car-Insurance-.webp" alt="">
                </div>
                <div class="jss312">
                    <p>Get started with Group Health Insurence</p>
                    <div class="jss3121">
                        <img src="../../Images/resources/arrow right.png" alt="">
                    </div>
                </div>
            </div>
        </a>
        <a href="#">
            <div class="jss31">
                <div class="jss311">
                    <img src="../../Images/resources/buying-bike-insurance-for-first-time.webp" alt="">
                </div>
                <div class="jss312">
                    <p>Get started with Group Health Insurence</p>
                    <div class="jss3121">
                        <img src="../../Images/resources/arrow right.png" alt="">
                    </div>
                </div>
            </div>
        </a>
    </div>`
    }
}
function all_ebooks() {
    color1();
    document.getElementById("js").innerHTML = `Checkout ebooks on insurence`
    document.getElementById("second_box_rigth_all_ebooks").innerHTML = ``
    let second_box_rigth_all_ebooks = document.getElementById("second_box_rigth_all_ebooks")
    second_box_rigth_all_ebooks.innerHTML = load_all_ebooks() 
    function load_all_ebooks() {
        return ` <div class="jss8">
        <h2 class="jss8h2">Popular guides</h2>
        <div class="jss81">
            <a href="#">
                <div class="jss811">
                    <div class="jss8111">
                        <div class="jss31111">
                            <img src="../../Images/resources/8-motorcycle-riding-tips-for-female-bike-riders (1).webp" alt="">
                        </div>
                        
                        <p>Get started with Two Wheeler Insurence</p>
                        <p class="p10 jss3121 p10img">
                            <span class="p10"> Read More 
                                 <img src="../../Images/resources/arrow right.png" alt="">
                            </span>                                                    
                        </p>
                        
                    </div>
                </div>
            </a>
            <div class="jss812">
                <a href="#">
                    <div class="jss812a">
                        <div class="jss812b">
                            <img src="../../Images/resources/reimbursement-in-health-insurance.webp" alt="">
                        </div>
                        <div class="jss812c">
                            <p class="p9">Get started with Health Insurence</p>
                            <p class="p10 jss3121 p10img">
                                <span class="p10"> Read More 
                                     <img src="../../Images/resources/arrow right.png" alt="">
                                </span>                                                    
                            </p>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div class="jss812a">
                        <div class="jss812b">
                            <img src="../../Images/resources/individual-medical-insurance.webp" alt="">
                        </div>
                        <div class="jss812c">
                            <p class="p9">Get started with Health Insurence</p>
                            <p class="p10 jss3121 p10img">
                                <span class="p10"> Read More 
                                     <img src="../../Images/resources/arrow right.png" alt="">
                                </span>                                                    
                            </p>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div class="jss812a">
                        <div class="jss812b">
                            <img src="../../Images/resources/how-to-renew-car-insurance-during-coronavirus-lockdown (1).webp" alt="">
                        </div>
                        <div class="jss812c">
                            <p class="p9">Get started with Health Insurence</p>
                                <p class="p10 jss3121 p10img">
                                    <span class="p10"> Read More 
                                         <img src="../../Images/resources/arrow right.png" alt="">
                                    </span>                                                    
                                </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
    <div class="jss9"></div>
    <div class="jss10"></div>
</div>
<div class="second_box_rigth_end2">
    <h2>All guides</h2>
    <div class="jss3">
        
        <a href="#">
            <div class="jss31">
                <div class="jss311">
                    <img src="../../Images/resources/8-motorcycle-riding-tips-for-female-bike-riders.webp" alt="">
                </div>
                <div class="jss312">
                    <p>Get started with Two Wheeler Insurence</p>
                    <div class="jss3121">
                        <img src="../../Images/resources/arrow right.png" alt="">
                    </div>
                </div>
            </div>
        </a>
        <a href="#">
            <div class="jss31">
                <div class="jss311">
                    <img src="../../Images/resources/reimbursement-in-health-insurance.webp" alt="">
                </div>
                <div class="jss312">
                    <p>Get started with Health Insurence</p>
                    <div class="jss3121">
                        <img src="../../Images/resources/arrow right.png" alt="">
                    </div>
                </div>
            </div>
        </a>
        <a href="#">
            <div class="jss31">
                <div class="jss311">
                    <img src="../../Images/resources/individual-medical-insurance.webp" alt="">
                </div>
                <div class="jss312">
                    <p>Get started with Group Health Insurence</p>
                    <div class="jss3121">
                        <img src="../../Images/resources/arrow right.png" alt="">
                    </div>
                </div>
            </div>
        </a>
        <a href="#">
            <div class="jss31">
                <div class="jss311">
                    <img src="../../Images/resources/how-to-renew-car-insurance-during-coronavirus-lockdown (1).webp" alt="">
                </div>
                <div class="jss312">
                    <p>Get started with Group Health Insurence</p>
                    <div class="jss3121">
                        <img src="../../Images/resources/arrow right.png" alt="">
                    </div>
                </div>
            </div>
        </a>
        <a href="#">
            <div class="jss31">
                <div class="jss311">
                    <img src="../../Images/resources/engine_protection_cover_in_bike_insurance_add-on.webp" alt="">
                </div>
                <div class="jss312">
                    <p>Get started with Group Health Insurence</p>
                    <div class="jss3121">
                        <img src="../../Images/resources/arrow right.png" alt="">
                    </div>
                </div>
            </div>
        </a>
        <a href="#">
            <div class="jss31">
                <div class="jss311">
                    <img src="../../Images/resources/health-insurance-premium-calculator.webp" alt="">
                </div>
                <div class="jss312">
                    <p>Get started with Group Health Insurence</p>
                    <div class="jss3121">
                        <img src="../../Images/resources/arrow right.png" alt="">
                    </div>
                </div>
            </div>
        </a>
        <a href="#">
            <div class="jss31">
                <div class="jss311">
                    <img src="../../Images/resources/top-up-and-super-top-up-health-insurance-plans.webp" alt="">
                </div>
                <div class="jss312">
                    <p>Get started with Group Health Insurence</p>
                    <div class="jss3121">
                        <img src="../../Images/resources/arrow right.png" alt="">
                    </div>
                </div>
            </div>
        </a>
        <a href="#">
            <div class="jss31">
                <div class="jss311">
                    <img src="../../Images/resources/6-Common-Misconceptions-about-Zero-Depreciation-In-Car-Insurance-.webp" alt="">
                </div>
                <div class="jss312">
                    <p>Get started with Group Health Insurence</p>
                    <div class="jss3121">
                        <img src="../../Images/resources/arrow right.png" alt="">
                    </div>
                </div>
            </div>
        </a>
        <a href="#">
            <div class="jss31">
                <div class="jss311">
                    <img src="../../Images/resources/buying-bike-insurance-for-first-time.webp" alt="">
                </div>
                <div class="jss312">
                    <p>Get started with Group Health Insurence</p>
                    <div class="jss3121">
                        <img src="../../Images/resources/arrow right.png" alt="">
                    </div>
                </div>
            </div>
        </a>
    </div>`
    }
}

function car_insurence_guides() {
    color2()
    document.getElementById("js").innerHTML = `Guids on Car Insurence`
    document.getElementById("second_box_rigth_all_guides").innerHTML = ``
    let second_box_rigth_car_insurence_guides = document.getElementById("second_box_rigth_car_insurence_guides")
    second_box_rigth_car_insurence_guides.innerHTML = load_car_insurence_guides()
    function load_car_insurence_guides () {
        return `
        <h2>All guides on Car Insurence</h2>
        <div class="jss3">
            
            <a href="#">
                <div class="jss31">
                    <div class="jss311">
                        <img src="../../Images/resources/how-to-renew-car-insurance-during-coronavirus-lockdown.webp" alt="">
                    </div>
                    <div class="jss312">
                        <p>Get started with Two Wheeler Insurence</p>
                        <div class="jss3121">
                            <img src="../../Images/resources/arrow right.png" alt="">
                        </div>
                    </div>
                </div>
            </a>
            <a href="#">
                <div class="jss31">
                    <div class="jss311">
                        <img src="../../Images/resources/6-Common-Misconceptions-about-Zero-Depreciation-In-Car-Insurance-.webp" alt="">
                    </div>
                    <div class="jss312">
                        <p>Get started with Health Insurence</p>
                        <div class="jss3121">
                            <img src="../../Images/resources/arrow right.png" alt="">
                        </div>
                    </div>
                </div>
            </a>
            <a href="#">
                <div class="jss31">
                    <div class="jss311">
                        <img src="../../Images/resources/roadside-assistance-in-car-insurance.webp" alt="">
                    </div>
                    <div class="jss312">
                        <p>Get started with Group Health Insurence</p>
                        <div class="jss3121">
                            <img src="../../Images/resources/arrow right.png" alt="">
                        </div>
                    </div>
                </div>
            </a>
            <a href="#">
                <div class="jss31">
                    <div class="jss311">
                        <img src="../../Images/resources/car-insurance-with-budgeted-premiums.webp" alt="">
                    </div>
                    <div class="jss312">
                        <p>Get started with Group Health Insurence</p>
                        <div class="jss3121">
                            <img src="../../Images/resources/arrow right.png" alt="">
                        </div>
                    </div>
                </div>
            </a>
            <a href="#">
                <div class="jss31">
                    <div class="jss311">
                        <img src="../../Images/resources/car-insurance-claim-for-cyclone-damages.webp" alt="">
                    </div>
                    <div class="jss312">
                        <p>Get started with Group Health Insurence</p>
                        <div class="jss3121">
                            <img src="../../Images/resources/arrow right.png" alt="">
                        </div>
                    </div>
                </div>
            </a>
           
        </div>`
    }
}
function color1() {

    document.getElementById("p51").style.color = "rgb(124, 71, 225)"
    document.getElementById("p51").style.borderBottom = "2px solid rgb(94, 39, 201)"

    document.getElementById("p52").style.color = ""
    document.getElementById("p52").style.borderBottom = ""

    document.getElementById("p53").style.color = ""
    document.getElementById("p53").style.borderBottom = ""

    document.getElementById("p54").style.color = ""
    document.getElementById("p54").style.borderBottom = ""

    document.getElementById("p55").style.color = ""
    document.getElementById("p55").style.borderBottom = ""


}
function color2() {
    document.getElementById("p51").style.color = ""
    document.getElementById("p51").style.borderBottom = ""

    document.getElementById("p52").style.color = "rgb(124, 71, 225)"
    document.getElementById("p52").style.borderBottom = "2px solid rgb(94, 39, 201)"

    document.getElementById("p53").style.color = ""
    document.getElementById("p53").style.borderBottom = ""

    document.getElementById("p54").style.color = ""
    document.getElementById("p54").style.borderBottom = ""

    document.getElementById("p55").style.color = ""
    document.getElementById("p55").style.borderBottom = ""
}
function color3() {
    document.getElementById("p51").style.color = ""
    document.getElementById("p51").style.borderBottom = ""

    document.getElementById("p52").style.color = ""
    document.getElementById("p52").style.borderBottom = ""

    document.getElementById("p53").style.color = "rgb(124, 71, 225)"
    document.getElementById("p53").style.borderBottom = "2px solid rgb(94, 39, 201)"

    document.getElementById("p54").style.color = ""
    document.getElementById("p54").style.borderBottom = ""

    document.getElementById("p55").style.color = ""
    document.getElementById("p55").style.borderBottom = ""
}
function color4() {
    document.getElementById("p51").style.color = ""
    document.getElementById("p51").style.borderBottom = ""

    document.getElementById("p52").style.color = ""
    document.getElementById("p52").style.borderBottom = ""

    document.getElementById("p53").style.color = ""
    document.getElementById("p53").style.borderBottom = ""

    document.getElementById("p54").style.color = "rgb(124, 71, 225)"
    document.getElementById("p54").style.borderBottom = "2px solid rgb(94, 39, 201)"

    document.getElementById("p55").style.color = ""
    document.getElementById("p55").style.borderBottom = ""
}
function color5() {
    document.getElementById("p51").style.color = ""
    document.getElementById("p51").style.borderBottom = ""

    document.getElementById("p52").style.color = ""
    document.getElementById("p52").style.borderBottom = ""

    document.getElementById("p53").style.color = ""
    document.getElementById("p53").style.borderBottom = ""

    document.getElementById("p54").style.color = ""
    document.getElementById("p54").style.borderBottom = ""

    document.getElementById("p55").style.color = "rgb(124, 71, 225)"
    document.getElementById("p55").style.borderBottom = "2px solid rgb(94, 39, 201)"
}
