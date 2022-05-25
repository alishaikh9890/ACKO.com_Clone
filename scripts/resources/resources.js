load_resources();
function load_resources() {
    document.getElementById("second_box_rigth").innerHTML = `` 
    document.getElementById("js").innerHTML = `Become an expert on insurence`
    document.getElementById("js1").innerHTML = `Subscribe to get curated insurence content in your box`
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
                         <div  id="jss3131" class="jss312">
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
                         <div  id="jss3131" class="jss312">
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
                         <div id="jss3131" class="jss312">
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
                         <div id="jss3131" class="jss312">
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
                         <div id="jss3131" class="jss312">
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
                         <div id="jss3131" class="jss312">
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
     colora()
}
function load_guides() {
   document.getElementById("second_box_rigth").innerHTML = ``
   document.getElementById("js").innerHTML = `Guids to make insurence easy`
    document.getElementById("js1").innerHTML = `Subscribe to get curated insurence content in your box`
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
           <a href="#" onclick="two_wheeler_insurence_guides()">
               <p id="p53" class="p5">Two_Wheeler Insurence</p>
           </a>
           <a href="#" onclick="group_health_insurence_guides()">
               <p id="p54" class="p5">Group Health Insurence</p>
           </a>
           <a href="#" onclick="health_insurence_guides()">
               <p id="p55" class="p5">Health Insurence</p>
           </a>
       </div>
       <div class="jss7"></div>
   </div>
   <div id ="second_box_rigth_all_guides" class="second_box_rigth_all_guides"> </div>
   <div id ="second_box_rigth_car_insurence_guides" class="second_box_rigth_car_insurence_guides"> </div>
   <div id ="second_box_rigth_two_wheeler_insurence_guides" class="second_box_rigth_two_wheeler_insurence_guides"> </div>
   <div id ="second_box_rigth_group_health_insurence_guides" class="second_box_rigth_group_health_insurence_guides"> </div>
   <div id ="second_box_rigth_health_insurence_guides" class="second_box_rigth_health_insurence_guides"> </div>
   `;
   }
   colorb()
   
}
function all_guides() {
    color1()
    document.getElementById("js").innerHTML = `Guids to make insurence easy`
    document.getElementById("second_box_rigth_two_wheeler_insurence_guides").innerHTML = ``
    document.getElementById("second_box_rigth_all_guides").innerHTML = ``
    document.getElementById("second_box_rigth_car_insurence_guides").innerHTML = ``
    document.getElementById("second_box_rigth_group_health_insurence_guides").innerHTML = ``
    document.getElementById("second_box_rigth_health_insurence_guides").innerHTML = ``
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
                    <p class="p10 jss3121 p10img">
                            <span class="p10"> Read More 
                                 <img src="../../Images/resources/arrow right.png" alt="">
                            </span>                                                    
                    </p>
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
                    <p class="p10 jss3121 p10img">
                            <span class="p10"> Read More 
                                 <img src="../../Images/resources/arrow right.png" alt="">
                            </span>                                                    
                    </p>
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
                    <p class="p10 jss3121 p10img">
                            <span class="p10"> Read More 
                                 <img src="../../Images/resources/arrow right.png" alt="">
                            </span>                                                    
                    </p>
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
                    <p class="p10 jss3121 p10img">
                            <span class="p10"> Read More 
                                 <img src="../../Images/resources/arrow right.png" alt="">
                            </span>                                                    
                    </p>
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
                    <p class="p10 jss3121 p10img">
                            <span class="p10"> Read More 
                                 <img src="../../Images/resources/arrow right.png" alt="">
                            </span>                                                    
                    </p>
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
                    <p class="p10 jss3121 p10img">
                            <span class="p10"> Read More 
                                 <img src="../../Images/resources/arrow right.png" alt="">
                            </span>                                                    
                    </p>
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
                    <p class="p10 jss3121 p10img">
                            <span class="p10"> Read More 
                                 <img src="../../Images/resources/arrow right.png" alt="">
                            </span>                                                    
                    </p>
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
                    <p class="p10 jss3121 p10img">
                            <span class="p10"> Read More 
                                 <img src="../../Images/resources/arrow right.png" alt="">
                            </span>                                                    
                    </p>
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
                    <p class="p10 jss3121 p10img">
                            <span class="p10"> Read More 
                                 <img src="../../Images/resources/arrow right.png" alt="">
                            </span>                                                    
                    </p>
                </div>
            </div>
        </a>
    </div>`
    }
}
function load_articles() {
   document.getElementById("second_box_rigth").innerHTML = ``
   document.getElementById("js1").innerHTML = `Subscribe to get curated insurence content in your box`
   document.getElementById("js").innerHTML = `Articles to make insurence easy`
   let second_box_rigth = document.getElementById("second_box_rigth")
   second_box_rigth.innerHTML = loadarticles() 
   function loadarticles() {
       return `<div class="second_box_rigth_top2">
       <div class="jss5"></div>
       <div class="jss6">
           <a href="#" onclick="all_articles()">
               <p id="p51" class="p5">ALL</p>
           </a>
           <a href="#" onclick="car_insurence_articles() ">
               <p id="p52" class="p5">Car Insurence</p>
           </a>
           <a href="#" onclick="two_wheeler_insurence_articles()">
               <p id="p53" class="p5">Two_Wheeler Insurence</p>
           </a>
           <a href="#" onclick="group_health_insurence_articles()">
               <p id="p54" class="p5">Group Health Insurence</p>
           </a>
           <a href="#" onclick="health_insurence_articles()">
               <p id="p55" class="p5">Health Insurence</p>
           </a>
       </div>
       <div class="jss7"></div>
   </div>
   <div id ="second_box_rigth_all_guides" class="second_box_rigth_all_guides"> </div>
   <div id ="second_box_rigth_car_insurence_guides" class="second_box_rigth_car_insurence_guides"> </div>
   <div id ="second_box_rigth_two_wheeler_insurence_guides" class="second_box_rigth_two_wheeler_insurence_guides"> </div>
   <div id ="second_box_rigth_group_health_insurence_guides" class="second_box_rigth_group_health_insurence_guides"> </div>
   <div id ="second_box_rigth_health_insurence_guides" class="second_box_rigth_health_insurence_guides"> </div>`
   }
   all_articles();
   colorc()
}
function load_ebooks() {
   document.getElementById("second_box_rigth").innerHTML = ``
   document.getElementById("js").innerHTML = `Ebooks`
   document.getElementById("js1").innerHTML = `Checkout ebooks on insurence`
   let second_box_rigth = document.getElementById("second_box_rigth")
   
   second_box_rigth.innerHTML = loadebooks() 
   function loadebooks() {
       return `<div class="second_box_rigth_top2">
       <div class="jss5"></div>
       <div class="jss6">
           <a href="#" onclick="all_ebooks()">
               <p id="p51" class="p5">ALL</p>
           </a>
           <a href="#" onclick="car_insurence_ebooks() ">
               <p id="p52" class="p5">Car Insurence</p>
           </a>
           <a href="#" onclick="two_wheeler_insurence_ebooks()">
               <p id="p53" class="p5">Two_Wheeler Insurence</p>
           </a>
           <a href="#" onclick="group_health_insurence_ebooks()">
               <p id="p54" class="p5">Group Health Insurence</p>
           </a>
           <a href="#" onclick="health_insurence_ebooks()">
               <p id="p55" class="p5">Health Insurence</p>
           </a>
       </div>
       <div class="jss7"></div>
   </div>
   <div id ="second_box_rigth_all_guides" class="second_box_rigth_all_guides"> </div>
   <div id ="second_box_rigth_car_insurence_guides" class="second_box_rigth_car_insurence_guides"> </div>
   <div id ="second_box_rigth_two_wheeler_insurence_guides" class="second_box_rigth_two_wheeler_insurence_guides"> </div>
   <div id ="second_box_rigth_group_health_insurence_guides" class="second_box_rigth_group_health_insurence_guides"> </div>
   <div id ="second_box_rigth_health_insurence_guides" class="second_box_rigth_health_insurence_guides"> </div>`
   }
   all_ebooks();
   colord()
}


function all_articles() {
    color1()
    document.getElementById("js").innerHTML = `Guids to make insurence easy`
    document.getElementById("second_box_rigth_two_wheeler_insurence_guides").innerHTML = ``
    document.getElementById("second_box_rigth_all_guides").innerHTML = ``
    document.getElementById("second_box_rigth_car_insurence_guides").innerHTML = ``
    document.getElementById("second_box_rigth_group_health_insurence_guides").innerHTML = ``
    document.getElementById("second_box_rigth_health_insurence_guides").innerHTML = ``
    let second_box_rigth_all_guides = document.getElementById("second_box_rigth_all_guides")
    second_box_rigth_all_guides.innerHTML = load_all_guides() 
    function load_all_guides() {
        return `<div class="jss8">
        <h2 class="jss8h2">Popular articles</h2>
        <div class="jss81">
            <a href="#">
                <div class="jss811">
                    <div class="jss8111">
                        <div class="jss31111">
                            <img src="../../Images/resources/can-you-have-two-insurance-policies-on-the-same-car.webp" alt="">
                        </div>
                        
                        <p>Can You Have Two Insurance Policies on the Same Car?</p>
                        <div  class="p10 jss3121 p10img">
                        <span class="p10"  id="p14">
                            <p class="paragraph2">Team Acko</p>
                            <div id="dot" class="dot"></div>
                            <p class="paragraph2">May 16, 2022</p>
                            </span>    
                        </div>
                        
                    </div>
                </div>
            </a>
            <div class="jss812">                
                <a href="#">
                    <div class="jss812a">
                        <div class="jss812b">
                            <img src="../../Images/resources/is-puc-certificate-mandatory-for-car-insurance.webp" alt="">
                        </div>
                        
                        <div class="jss812c">
                            <p class="p9">Is a PUC certificate mandatory for vehicle insurance?</p>
                                <div  class="p10 jss3121 p10img">
                                <span class="p10"  id="p14">
                                    <p class="paragraph2">Team Acko</p>
                                    <div id="dot" class="dot"></div>
                                    <p class="paragraph2">May 16, 2022</p>
                                    </span>    
                                </div>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div class="jss812a">
                        <div class="jss812b">
                            <img src="../../Images/resources/cooling-off-period-in-health-insurance.webp" alt="">
                        </div>
                        
                        <div class="jss812c">
                            <p class="p9">Importance of cooling-off period in health insurance</p>
                                <div  class="p10 jss3121 p10img">
                                <span class="p10"  id="p14">
                                    <p class="paragraph2">Team Acko</p>
                                    <div id="dot" class="dot"></div>
                                    <p class="paragraph2">May 16, 2022</p>
                                    </span>    
                                </div>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div class="jss812a">
                        <div class="jss812b">
                            <img src="../../Images/resources/dental-insurance.webp" alt="">
                        </div>
                        
                        <div class="jss812c">
                            <p class="p9">Understanding dental insurance in India: Cover, benefits, and claims</p>
                                <div  class="p10 jss3121 p10img">
                                <span class="p10"  id="p14">
                                    <p class="paragraph2">Team Acko</p>
                                    <div id="dot" class="dot"></div>
                                    <p class="paragraph2">May 16, 2022</p>
                                    </span>    
                                </div>
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
    <h2>All articles</h2>
    <div class="jss3">
    <a href="#">
        <div class="jss3111">
            <div class="jss311">
                <img src="../../Images/resources/can-you-have-two-insurance-policies-on-the-same-car.webp" alt="">
            </div>
                <p class="paragraph3">Can You Have Two Insurance Policies on the Same Car?</p>
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
                <img src="../../Images/resources/is-puc-certificate-mandatory-for-car-insurance.webp" alt="">
            </div>
                <p class="paragraph3">Is a PUC certificate mandatory for vehicle insurance?</p>
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
                <img src="../../Images/resources/cooling-off-period-in-health-insurance.webp" alt="">
            </div>
                <p class="paragraph3">Importance of cooling-off period in health insurance</p>
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
                <img src="../../Images/resources/dental-insurance.webp" alt="">
            </div>
                <p class="paragraph3">Understanding dental insurance in India: Cover, benefits, and claims</p>
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
                <img src="../../Images/resources/does-your-health-insurance-cover-brain-surgery.webp" alt="">
            </div>
                <p class="paragraph3">Does health insurance cover brain surgery?</p>
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
                <img src="../../Images/resources/tips-to-save-on-health-insurance-premium.webp" alt="">
            </div>
                <p class="paragraph3">10 tips to save on health insurance premium</p>
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
                <img src="../../Images/resources/does-your-health-insurance-cover-robotic-surgery.webp" alt="">
            </div>
                <p class="paragraph3">Does your health insurance cover robotic surgery?</p>
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
                <img src="../../Images/resources/claim-car-insurance-for-damages-beyond-repair.webp" alt="">
            </div>
                <p class="paragraph3">Is it possible to claim car insurance for damages beyond repair?</p>
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
                <img src="../../Images/resources/mistakes-to-avoid-while-buying-a-maternity-insurance-policy.webp" alt="">
            </div>
                <p class="paragraph3">5 mistakes to avoid while buying a maternity insurance policy</p>
            <div class="jss313">
                <p class="paragraph2">Team Acko</p>
                <div class="dot"></div>
                <p class="paragraph2">May 16, 2022</p>
            </div>
        </div>
    </a>
</div>`
    }
}
function all_ebooks() {
    color1()
    document.getElementById("js").innerHTML = `Guids to make insurence easy`
    document.getElementById("second_box_rigth_two_wheeler_insurence_guides").innerHTML = ``
    document.getElementById("second_box_rigth_all_guides").innerHTML = ``
    document.getElementById("second_box_rigth_car_insurence_guides").innerHTML = ``
    document.getElementById("second_box_rigth_group_health_insurence_guides").innerHTML = ``
    document.getElementById("second_box_rigth_health_insurence_guides").innerHTML = ``
    let second_box_rigth_all_guides = document.getElementById("second_box_rigth_all_guides")
    second_box_rigth_all_guides.innerHTML = load_all_ebooks() 
    function load_all_ebooks() {
        return ` <div class="jss8">
        <h2 class="jss8h2">Popular ebooks</h2>
        <div class="jss81">
            <a href="#">
                <div class="jss811">
                    <div class="jss8111">
                        <div class="jss31111">
                            <img src="../../Images/resources/complete-guide-to-vehicle-insurance.webp" alt="">
                        </div>
                        
                        <p>Complete Guide to Car Insurance Policy [E-Book]</p>
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
                            <img src="../../Images/resources/car_insurance_add-ons_guides_thumbnail.webp" alt="">
                        </div>
                        <div class="jss812c">
                            <p class="p9">Car Insurance Add-ons [E-Book]</p>
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
                            <img src="../../Images/resources/creating-good-workplace-culture-e-book.webp" alt="">
                        </div>
                        <div class="jss812c">
                            <p class="p9">Creating a Rewarding Workplace Culture [E-book]</p>
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
                            <img src="../../Images/resources/introducing-acko-health-ebook-cover-1200-550.webp" alt="">
                        </div>
                        <div class="jss812c">
                            <p class="p9">Introducing ACKO Health [E-Book]</p>
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
    <h2>All ebooks</h2>
    <div class="jss3">
        
        <a href="#">
            <div class="jss31">
                <div id="jss311" class="jss311">
                    <img src="../../Images/resources/complete-guide-to-vehicle-insurance.webp" alt="">
                </div>
                <div id = "jss312" class="jss312">
                    <p>Complete Guide to Car Insurance Policy [E-Book]</p>
                    <p class="p10 jss3121 p10img">
                            <span class="p10"> Read More 
                                 <img src="../../Images/resources/arrow right.png" alt="">
                            </span>                                                    
                        </p>
                </div>
            </div>
        </a>
        <a href="#">
            <div class="jss31">
                <div id="jss311" class="jss311">
                    <img src="../../Images/resources/car_insurance_add-ons_guides_thumbnail.webp" alt="">
                </div>
                <div class="jss312">
                    <p>Car Insurance Add-ons [E-Book]</p>
                    <p class="p10 jss3121 p10img">
                            <span class="p10"> Read More 
                                 <img src="../../Images/resources/arrow right.png" alt="">
                            </span>                                                    
                        </p>
                </div>
            </div>
        </a>
        <a href="#">
            <div class="jss31">
                <div id="jss311" class="jss311">
                    <img src="../../Images/resources/creating-good-workplace-culture-e-book.webp" alt="">
                </div>
                <div class="jss312">
                    <p>Creating a Rewarding Workplace Culture [E-book]</p>
                    <p class="p10 jss3121 p10img">
                            <span class="p10"> Read More 
                                 <img src="../../Images/resources/arrow right.png" alt="">
                            </span>                                                    
                    </p>
                </div>
            </div>
        </a>
        <a href="#">
            <div class="jss31">
                <div id="jss311" class="jss311">
                    <img src="../../Images/resources/introducing-acko-health-ebook-cover-1200-550.webp" alt="">
                </div>
                <div class="jss312">
                    <p>Introducing ACKO Health [E-Book]</p>
                    <p class="p10 jss3121 p10img">
                            <span class="p10"> Read More 
                                 <img src="../../Images/resources/arrow right.png" alt="">
                            </span>                                                    
                    </p>
                </div>
            </div>
        </a>
        <a href="#">
            <div class="jss31">
                <div id="jss311" class="jss311">
                    <img src="../../Images/resources/power-to-personalise-e-book.webp" alt="">
                </div>
                <div class="jss312">
                    <p>Power to Personalise [E-Book]</p>
                    <p class="p10 jss3121 p10img">
                            <span class="p10"> Read More 
                                 <img src="../../Images/resources/arrow right.png" alt="">
                            </span>                                                    
                    </p>
                </div>
            </div>
        </a>
        <a href="#">
            <div class="jss31">
                <div id="jss311" class="jss311">
                    <img src="../../Images/resources/getting-started-with-bike-insurance-ebook-cover.webp" alt="">
                </div>
                <div class="jss312">
                    <p>Getting Started with Bike Insurance [E-book]</p>
                    <p class="p10 jss3121 p10img">
                            <span class="p10"> Read More 
                                 <img src="../../Images/resources/arrow right.png" alt="">
                            </span>                                                    
                    </p>
                </div>
            </div>
        </a>
        <a href="#">
            <div class="jss31">
                <div id="jss311" class="jss311">
                    <img src="../../Images/resources/vehical-Insurance-terminologies-ebook-cover-1200-550.webp" alt="">
                </div>
                <div class="jss312">
                    <p>Decoding Vehicle Insurance Terminologies [E-Book]</p>
                    <p class="p10 jss3121 p10img">
                            <span class="p10"> Read More 
                                 <img src="../../Images/resources/arrow right.png" alt="">
                            </span>                                                    
                    </p>
                </div>
            </div>
        </a>
        <a href="#">
            <div class="jss31">
                <div id="jss311" class="jss311">
                    <img src="../../Images/resources/mental-health-in-cities.webp" alt="">
                </div>
                <div class="jss312">
                    <p>Mental health in cities and why It needs attention [E-book]</p>
                    <p class="p10 jss3121 p10img">
                            <span class="p10"> Read More 
                                 <img src="../../Images/resources/arrow right.png" alt="">
                            </span>                                                    
                    </p>
                </div>
            </div>
        </a>
        <a href="#">
            <div class="jss31">
                <div id="jss311" class="jss311">
                    <img src="../../Images/resources/how-to-select-health-insurance.webp" alt="">
                </div>
                <div class="jss312">
                    <p>How to select health insurance</p>
                    <p class="p10 jss3121 p10img">
                            <span class="p10"> Read More 
                                 <img src="../../Images/resources/arrow right.png" alt="">
                            </span>                                                    
                    </p>
                </div>
            </div>
        </a>
    </div>`
    }
}
function car_insurence_guides() {
    color2()
    document.getElementById("js").innerHTML = `Guids on Car Insurence`
    document.getElementById("second_box_rigth_two_wheeler_insurence_guides").innerHTML = ``
    document.getElementById("second_box_rigth_all_guides").innerHTML = ``
    document.getElementById("second_box_rigth_car_insurence_guides").innerHTML = ``
    document.getElementById("second_box_rigth_group_health_insurence_guides").innerHTML = ``
    document.getElementById("second_box_rigth_health_insurence_guides").innerHTML = ``
    let second_box_rigth_car_insurence_guides = document.getElementById("second_box_rigth_car_insurence_guides")
    second_box_rigth_car_insurence_guides.innerHTML = load_car_insurence_guides()
    function load_car_insurence_guides () {
        return `
        <h2  class="jss8h2">All guides on Car Insurence</h2>
        <div class="jss3">
            
            <a href="#">
                <div class="jss31">
                    <div class="jss311">
                        <img src="../../Images/resources/how-to-renew-car-insurance-during-coronavirus-lockdown.webp" alt="">
                    </div>
                    <div class="jss312">
                        <p>Get started with Two Wheeler Insurence</p>
                        <p class="p10 jss3121 p10img">
                            <span class="p10"> Read More 
                                 <img src="../../Images/resources/arrow right.png" alt="">
                            </span>                                                    
                    </p>
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
                        <p class="p10 jss3121 p10img">
                            <span class="p10"> Read More 
                                 <img src="../../Images/resources/arrow right.png" alt="">
                            </span>                                                    
                    </p>
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
                        <p class="p10 jss3121 p10img">
                            <span class="p10"> Read More 
                                 <img src="../../Images/resources/arrow right.png" alt="">
                            </span>                                                    
                    </p>
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
                        <p class="p10 jss3121 p10img">
                            <span class="p10"> Read More 
                                 <img src="../../Images/resources/arrow right.png" alt="">
                            </span>                                                    
                    </p>
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
                        <p class="p10 jss3121 p10img">
                            <span class="p10"> Read More 
                                 <img src="../../Images/resources/arrow right.png" alt="">
                            </span>                                                    
                    </p>
                    </div>
                </div>
            </a>
           
        </div>`
    }
}
function car_insurence_articles() {
    color2()
    document.getElementById("js").innerHTML = `Guids on Car Insurence`
    document.getElementById("second_box_rigth_two_wheeler_insurence_guides").innerHTML = ``
    document.getElementById("second_box_rigth_all_guides").innerHTML = ``
    document.getElementById("second_box_rigth_car_insurence_guides").innerHTML = ``
    document.getElementById("second_box_rigth_group_health_insurence_guides").innerHTML = ``
    document.getElementById("second_box_rigth_health_insurence_guides").innerHTML = ``
    let second_box_rigth_car_insurence_guides = document.getElementById("second_box_rigth_car_insurence_guides")
    second_box_rigth_car_insurence_guides.innerHTML = load_car_insurence_guides()
    function load_car_insurence_guides () {
        return `<h2 class="jss8h2">All articles</h2>
        <div class="jss3">
        <a href="#">
            <div class="jss3111">
                <div class="jss311">
                    <img src="../../Images/resources/can-you-have-two-insurance-policies-on-the-same-car.webp" alt="">
                </div>
                    <p class="paragraph3">Can You Have Two Insurance Policies on the Same Car?</p>
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
                    <img src="../../Images/resources/is-puc-certificate-mandatory-for-car-insurance.webp" alt="">
                </div>
                    <p class="paragraph3">Is a PUC certificate mandatory for vehicle insurance?</p>
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
                    <img src="../../Images/resources/claim-car-insurance-for-damages-beyond-repair.webp" alt="">
                </div>
                    <p class="paragraph3">Is it possible to claim car insurance for damages beyond repair?</p>
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
                    <img src="../../Images/resources/ideal-car-insurance-coverage-for-city-drivers.webp" alt="">
                </div>
                    <p class="paragraph3">Ideal car insurance coverage for city drivers</p>
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
                    <img src="../../Images/resources/is-switching-car-insurance-after-an-accident-a-good-idea.webp" alt="">
                </div>
                    <p class="paragraph3">Is switching car insurance after an accident a good idea?</p>
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
                    <img src="../../Images/resources/autonomous-vehicle-insurance.webp" alt="">
                </div>
                    <p class="paragraph3">Autonomous vehicle insurance: Self-driving cars and insurance</p>
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
                    <img src="../../Images/resources/car-insurance-accessories-add-on-covers.webp" alt="">
                </div>
                    <p class="paragraph3">Accessories Cover for Car Insurance inindia</p>
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
                    <img src="../../Images/resources/does-car-insurance-premium-change-according-to-different-regions.webp" alt="">
                </div>
                    <p class="paragraph3">Does car insurance premium change according to different regions?</p>
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
                    <img src="../../Images/resources/difference-between-comprehensive-and-own-damage-insurance.webp" alt="">
                </div>
                    <p class="paragraph3">Difference between Comprehensive and Own Damage (OD) car insurance</p>
                <div class="jss313">
                    <p class="paragraph2">Team Acko</p>
                    <div class="dot"></div>
                    <p class="paragraph2">May 16, 2022</p>
                </div>
            </div>
        </a>
    </div>`
    }
}
function car_insurence_ebooks() {
    color2()
    document.getElementById("js").innerHTML = `Guids on Car Insurence`
    document.getElementById("second_box_rigth_two_wheeler_insurence_guides").innerHTML = ``
    document.getElementById("second_box_rigth_all_guides").innerHTML = ``
    document.getElementById("second_box_rigth_car_insurence_guides").innerHTML = ``
    document.getElementById("second_box_rigth_group_health_insurence_guides").innerHTML = ``
    document.getElementById("second_box_rigth_health_insurence_guides").innerHTML = ``
    let second_box_rigth_car_insurence_guides = document.getElementById("second_box_rigth_car_insurence_guides")
    second_box_rigth_car_insurence_guides.innerHTML = load_car_insurence_guides()
    function load_car_insurence_guides () {
        return `<h2 class="jss8h2">All ebooks</h2>
        <div class="jss3">
            
            <a href="#">
                <div class="jss31">
                    <div id="jss311" class="jss311">
                        <img src="../../Images/resources/complete-guide-to-vehicle-insurance.webp" alt="">
                    </div>
                    <div id = "jss312" class="jss312">
                        <p>Complete Guide to Car Insurance Policy [E-Book]</p>
                        <p class="p10 jss3121 p10img">
                                <span class="p10"> Read More 
                                     <img src="../../Images/resources/arrow right.png" alt="">
                                </span>                                                    
                            </p>
                    </div>
                </div>
            </a>
            <a href="#">
                <div class="jss31">
                    <div id="jss311" class="jss311">
                        <img src="../../Images/resources/car_insurance_add-ons_guides_thumbnail.webp" alt="">
                    </div>
                    <div class="jss312">
                        <p>Car Insurance Add-ons [E-Book]</p>
                        <p class="p10 jss3121 p10img">
                                <span class="p10"> Read More 
                                     <img src="../../Images/resources/arrow right.png" alt="">
                                </span>                                                    
                            </p>
                    </div>
                </div>
            </a>
            <a href="#">
                <div class="jss31">
                    <div id="jss311" class="jss311">
                        <img src="../../Images/resources/vehical-Insurance-terminologies-ebook-cover-1200-550.webp" alt="">
                    </div>
                    <div class="jss312">
                        <p>Decoding Vehicle Insurance Terminologies [E-Book]</p>
                        <p class="p10 jss3121 p10img">
                                <span class="p10"> Read More 
                                     <img src="../../Images/resources/arrow right.png" alt="">
                                </span>                                                    
                        </p>
                    </div>
                </div>
            </a>       
        </div>`
    }
}
function two_wheeler_insurence_guides() {
    color3()
    document.getElementById("js").innerHTML = `Guids on Car Insurence`
    document.getElementById("second_box_rigth_two_wheeler_insurence_guides").innerHTML = ``
    document.getElementById("second_box_rigth_all_guides").innerHTML = ``
    document.getElementById("second_box_rigth_car_insurence_guides").innerHTML = ``
    document.getElementById("second_box_rigth_group_health_insurence_guides").innerHTML = ``
    document.getElementById("second_box_rigth_health_insurence_guides").innerHTML = ``
    let second_box_rigth_two_wheeler_insurence_guides = document.getElementById("second_box_rigth_two_wheeler_insurence_guides")
    second_box_rigth_two_wheeler_insurence_guides.innerHTML = load_two_wheeler_insurence()
    function load_two_wheeler_insurence () {
        return ` <h2 class="jss8h2">All guides on Two-wheeler Insurance</h2>
        <div class="jss3">
            
            <a href="#">
                <div class="jss31">
                    <div class="jss311">
                        <img src="../../Images/resources/8-motorcycle-riding-tips-for-female-bike-riders.webp" alt="">
                    </div>
                    <div class="jss312">
                        <p>Get started with Two Wheeler Insurence</p>
                        <p class="p10 jss3121 p10img">
                            <span class="p10"> Read More 
                                 <img src="../../Images/resources/arrow right.png" alt="">
                            </span>                                                    
                    </p>
                    </div>
                </div>
            </a>
            <a href="#">
                <div class="jss31">
                    <div class="jss311">
                        <img src="../../Images/resources/engine_protection_cover_in_bike_insurance_add-on.webp" alt="">
                    </div>
                    <div class="jss312">
                        <p>Get started with Health Insurence</p>
                        <p class="p10 jss3121 p10img">
                            <span class="p10"> Read More 
                                 <img src="../../Images/resources/arrow right.png" alt="">
                            </span>                                                    
                    </p>
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
                        <p class="p10 jss3121 p10img">
                            <span class="p10"> Read More 
                                 <img src="../../Images/resources/arrow right.png" alt="">
                            </span>                                                    
                    </p>
                    </div>
                </div>
            </a>
            <a href="#">
                <div class="jss31">
                    <div class="jss311">
                        <img src="../../Images/resources/effective-tips-for-funding-a-two-wheeler-purchase.webp" alt="">
                    </div>
                    <div class="jss312">
                        <p>Get started with Group Health Insurence</p>
                        <p class="p10 jss3121 p10img">
                            <span class="p10"> Read More 
                                 <img src="../../Images/resources/arrow right.png" alt="">
                            </span>                                                    
                    </p>
                    </div>
                </div>
            </a>       
        </div>`
    }
}
function two_wheeler_insurence_articles() {
    color3()
    document.getElementById("js").innerHTML = `Guids on Car Insurence`
    document.getElementById("second_box_rigth_two_wheeler_insurence_guides").innerHTML = ``
    document.getElementById("second_box_rigth_all_guides").innerHTML = ``
    document.getElementById("second_box_rigth_car_insurence_guides").innerHTML = ``
    document.getElementById("second_box_rigth_group_health_insurence_guides").innerHTML = ``
    document.getElementById("second_box_rigth_health_insurence_guides").innerHTML = ``
    let second_box_rigth_two_wheeler_insurence_guides = document.getElementById("second_box_rigth_two_wheeler_insurence_guides")
    second_box_rigth_two_wheeler_insurence_guides.innerHTML = load_two_wheeler_insurence()
    function load_two_wheeler_insurence () {
        return `<h2 class="jss8h2">All articles</h2>
        <div class="jss3">
        <a href="#">
            <div class="jss3111">
                <div class="jss311">
                    <img src="../../Images/resources/motorbike-insurance-for-food-delivery-bikes.webp" alt="">
                </div>
                    <p class="paragraph3">Motorbike insurance for food delivery bikes in India</p>
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
                    <img src="../../Images/resources/complete-guide-to-find-best-bike-insurance-quotes.webp" alt="">
                </div>
                    <p class="paragraph3">Complete guide to finding the best bike insurance quotes</p>
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
                    <img src="../../Images/resources/things-to-consider-before-switching-bike-insurance.webp" alt="">
                </div>
                    <p class="paragraph3">5 Things to consider before switching bike insurance</p>
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
                    <img src="../../Images/resources/guide-to-understand-imported-bike-insurance.webp" alt="">
                </div>
                    <p class="paragraph3">Guide to understand imported bike insurance</p>
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
                    <img src="../../Images/resources/fake-bike-insurance.webp" alt="">
                </div>
                    <p class="paragraph3">Fake bike insurance and ways to avoid buying it</p>
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
                    <img src="../../Images/resources/bike-insurance-in-digilocker.webp" alt="">
                </div>
                    <p class="paragraph3">All You Need to Know About Bike Insurance in Digilocker</p>
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
                    <img src="../../Images/resources/best-time-to-renew-bike-insurance.webp" alt="">
                </div>
                    <p class="paragraph3">When is the Best Time to Renew your Bike Insurance?</p>
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
                    <img src="../../Images/resources/does-high-premium-mean-high-bike-insurance-coverage.webp" alt="">
                </div>
                    <p class="paragraph3">Does High Premium Mean High Bike Insurance Coverage?</p>
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
                    <img src="../../Images/resources/how-do-you-negotiate-with-the-insurer-about-bike-insurance-claim-settlement.webp" alt="">
                </div>
                    <p class="paragraph3">How do you negotiate with the insurer about bike insurance claim settlement?</p>
                <div class="jss313">
                    <p class="paragraph2">Team Acko</p>
                    <div class="dot"></div>
                    <p class="paragraph2">May 16, 2022</p>
                </div>
            </div>
        </a>
    </div>`
    }
}
function two_wheeler_insurence_ebooks() {
    color3()
    document.getElementById("js").innerHTML = `Guids on Car Insurence`
    document.getElementById("second_box_rigth_two_wheeler_insurence_guides").innerHTML = ``
    document.getElementById("second_box_rigth_all_guides").innerHTML = ``
    document.getElementById("second_box_rigth_car_insurence_guides").innerHTML = ``
    document.getElementById("second_box_rigth_group_health_insurence_guides").innerHTML = ``
    document.getElementById("second_box_rigth_health_insurence_guides").innerHTML = ``
    let second_box_rigth_two_wheeler_insurence_guides = document.getElementById("second_box_rigth_two_wheeler_insurence_guides")
    second_box_rigth_two_wheeler_insurence_guides.innerHTML = load_two_wheeler_insurence()
    function load_two_wheeler_insurence () {
        return `<h2 class="jss8h2">All ebooks on Two-wheeler Insurance</h2>
        <div class="jss3">
            <a href="#">
                <div class="jss31">
                    <div id="jss311" class="jss311">
                        <img src="../../Images/resources/getting-started-with-bike-insurance-ebook-cover.webp" alt="">
                    </div>
                    <div class="jss312">
                        <p>Getting Started with Bike Insurance [E-book]</p>
                        <p class="p10 jss3121 p10img">
                                <span class="p10"> Read More 
                                     <img src="../../Images/resources/arrow right.png" alt="">
                                </span>                                                    
                        </p>
                    </div>
                </div>
            </a>       
        </div>`
    }
}
function group_health_insurence_guides() {
    color4()
    document.getElementById("js").innerHTML = `Guids on Car Insurence`
    document.getElementById("second_box_rigth_two_wheeler_insurence_guides").innerHTML = ``
    document.getElementById("second_box_rigth_all_guides").innerHTML = ``
    document.getElementById("second_box_rigth_car_insurence_guides").innerHTML = ``
    document.getElementById("second_box_rigth_group_health_insurence_guides").innerHTML = ``
    document.getElementById("second_box_rigth_health_insurence_guides").innerHTML = ``
    let second_box_rigth_group_health_insurence_guides = document.getElementById("second_box_rigth_group_health_insurence_guides")
    second_box_rigth_group_health_insurence_guides.innerHTML = load_group_health_insurence()
    function load_group_health_insurence () {
        return ` <h2 class="jss8h2">All guides on Group Health Insurance</h2>
        <div class="jss3">
            
            <a href="#">
                <div class="jss31">
                    <div class="jss311">
                        <img src="../../Images/resources/individual-medical-insurance.webp" alt="">
                    </div>
                    <div class="jss312">
                        <p>Get started with Two Wheeler Insurence</p>
                        <p class="p10 jss3121 p10img">
                            <span class="p10"> Read More 
                                 <img src="../../Images/resources/arrow right.png" alt="">
                            </span>                                                    
                    </p>
                    </div>
                </div>
            </a>
            <a href="#">
                <div class="jss31">
                    <div class="jss311">
                        <img src="../../Images/resources/top-up-and-super-top-up-health-insurance-plans.webp" alt="">
                    </div>
                    <div class="jss312">
                        <p>Get started with Health Insurence</p>
                        <p class="p10 jss3121 p10img">
                            <span class="p10"> Read More 
                                 <img src="../../Images/resources/arrow right.png" alt="">
                            </span>                                                    
                    </p>
                    </div>
                </div>
            </a>     
        </div>`
    }
}
function group_health_insurence_articles() {
    color4()
    document.getElementById("js").innerHTML = `Guids on Car Insurence`
    document.getElementById("second_box_rigth_two_wheeler_insurence_guides").innerHTML = ``
    document.getElementById("second_box_rigth_all_guides").innerHTML = ``
    document.getElementById("second_box_rigth_car_insurence_guides").innerHTML = ``
    document.getElementById("second_box_rigth_group_health_insurence_guides").innerHTML = ``
    document.getElementById("second_box_rigth_health_insurence_guides").innerHTML = ``
    let second_box_rigth_group_health_insurence_guides = document.getElementById("second_box_rigth_group_health_insurence_guides")
    second_box_rigth_group_health_insurence_guides.innerHTML = load_group_health_insurence()
    function load_group_health_insurence () {
        return `<h2 class="jss8h2">All articles</h2>
        <div class="jss3">
        <a href="#">
            <div class="jss3111">
                <div class="jss311">
                    <img src="../../Images/resources/how-to-switch-from-group-health-insurance-to-individual-health-insurance.webp" alt="">
                </div>
                    <p class="paragraph3">How to switch from Group Health Insurance to Individual Health Insurance</p>
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
                    <img src="../../Images/resources/how-to-evaluate-your-group-medical-cover.webp" alt="">
                </div>
                    <p class="paragraph3">How to Evaluate your Group Medical Cover?</p>
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
                    <img src="../../Images/resources/10-gmc-features-before-insuring-their-employees.webp" alt="">
                </div>
                    <p class="paragraph3">10 GMC features employers should consider before insuring their employees</p>
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
                    <img src="../../Images/resources/top-reasons-why-employees-dont-utilise-the-gmc.webp" alt="">
                </div>
                    <p class="paragraph3">6 reasons why your employees are not using the GMC and what to do about it</p>
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
                    <img src="../../Images/resources/covid-19-and-employees-mental-health.webp" alt="">
                </div>
                    <p class="paragraph3">COVID-19 and mental health: Ways to help your team</p>
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
                    <img src="../../Images/resources/how-to-ensure-your-employees-transition-back-to-the-workplace-safely-and-smoothly.webp" alt="">
                </div>
                    <p class="paragraph3">How to ensure your employees transition back to the workplace safely and smoothly</p>
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
                    <img src="../../Images/resources/how-technological-innovation-is-disrupting-group-medical-cover-for-good.webp" alt="">
                </div>
                    <p class="paragraph3">How technological innovation is disrupting Group Medical Cover (GMC) for good</p>
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
                    <img src="../../Images/resources/group-medical-coverage-and-group-personal-accident-insurance-policy.webp" alt="">
                </div>
                    <p class="paragraph3">Difference Between GMC and GPA Insurance Policy</p>
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
                    <img src="../../Images/resources/how-offering-preventive-healthcare-for-employees-can-save-future-costs.webp" alt="">
                </div>
                    <p class="paragraph3">How Offering Preventive Healthcare for Employees Can Save Future Costs</p>
                <div class="jss313">
                    <p class="paragraph2">Team Acko</p>
                    <div class="dot"></div>
                    <p class="paragraph2">May 16, 2022</p>
                </div>
            </div>
        </a>
    </div>`
    }
}
function group_health_insurence_ebooks() {
    color4()
    document.getElementById("js").innerHTML = `Guids on Car Insurence`
    document.getElementById("second_box_rigth_two_wheeler_insurence_guides").innerHTML = ``
    document.getElementById("second_box_rigth_all_guides").innerHTML = ``
    document.getElementById("second_box_rigth_car_insurence_guides").innerHTML = ``
    document.getElementById("second_box_rigth_group_health_insurence_guides").innerHTML = ``
    document.getElementById("second_box_rigth_health_insurence_guides").innerHTML = ``
    let second_box_rigth_group_health_insurence_guides = document.getElementById("second_box_rigth_group_health_insurence_guides")
    second_box_rigth_group_health_insurence_guides.innerHTML = load_group_health_insurence()
    function load_group_health_insurence () {
        return `<h2 class="jss8h2">All ebooks on Group Health Insurance</h2>
        <div class="jss3">
            
            <a href="#">
                <div class="jss31">
                    <div id="jss311" class="jss311">
                        <img src="../../Images/resources/creating-good-workplace-culture-e-book.webp" alt="">
                    </div>
                    <div id = "jss312" class="jss312">
                        <p>Creating a Rewarding Workplace Culture [E-book]</p>
                        <p class="p10 jss3121 p10img">
                                <span class="p10"> Read More 
                                     <img src="../../Images/resources/arrow right.png" alt="">
                                </span>                                                    
                            </p>
                    </div>
                </div>
            </a>
            <a href="#">
                <div class="jss31">
                    <div id="jss311" class="jss311">
                        <img src="../../Images/resources/introducing-acko-health-ebook-cover-1200-550.webp" alt="">
                    </div>
                    <div id = "jss312" class="jss312">
                        <p>Introducing ACKO Health [E-Book]</p>
                        <p class="p10 jss3121 p10img">
                                <span class="p10"> Read More 
                                     <img src="../../Images/resources/arrow right.png" alt="">
                                </span>                                                    
                            </p>
                    </div>
                </div>
            </a>
            <a href="#">
                <div class="jss31">
                    <div id="jss311" class="jss311">
                        <img src="../../Images/resources/power-to-personalise-e-book.webp" alt="">
                    </div>
                    <div class="jss312">
                        <p>Power to Personalise [E-Book]</p>
                        <p class="p10 jss3121 p10img">
                                <span class="p10"> Read More 
                                     <img src="../../Images/resources/arrow right.png" alt="">
                                </span>                                                    
                            </p>
                    </div>
                </div>
            </a>
            <a href="#">
                <div class="jss31">
                    <div id="jss311" class="jss311">
                        <img src="../../Images/resources/mental-health-in-cities.webp" alt="">
                    </div>
                    <div class="jss312">
                        <p>Mental health in cities and why It needs attention [E-book]</p>
                        <p class="p10 jss3121 p10img">
                                <span class="p10"> Read More 
                                     <img src="../../Images/resources/arrow right.png" alt="">
                                </span>                                                    
                        </p>
                    </div>
                </div>
            </a>       
        </div`
    }
}
function health_insurence_guides() {
    color5()
    document.getElementById("js").innerHTML = `Guids on Car Insurence`
    document.getElementById("second_box_rigth_health_insurence_guides").innerHTML = ``
    document.getElementById("second_box_rigth_group_health_insurence_guides").innerHTML = ``
    document.getElementById("second_box_rigth_two_wheeler_insurence_guides").innerHTML = ``
    document.getElementById("second_box_rigth_all_guides").innerHTML = ``
    document.getElementById("second_box_rigth_car_insurence_guides").innerHTML = ``
    let second_box_rigth_health_insurence_guides = document.getElementById("second_box_rigth_health_insurence_guides")
    second_box_rigth_health_insurence_guides.innerHTML = load_health_insurence()
    function load_health_insurence () {
        return `<h2 class="jss8h2">All guides on Health Insurance</h2>
        <div class="jss3">
            
            <a href="#">
                <div class="jss31">
                    <div class="jss311">
                        <img src="../../Images/resources/reimbursement-in-health-insurance.webp" alt="">
                    </div>
                    <div class="jss312">
                        <p>Get started with Two Wheeler Insurence</p>
                        <p class="p10 jss3121 p10img">
                            <span class="p10"> Read More 
                                 <img src="../../Images/resources/arrow right.png" alt="">
                            </span>                                                    
                    </p>
                    </div>
                </div>
            </a>
            <a href="#">
                <div class="jss31">
                    <div class="jss311">
                        <img src="../../Images/resources/health-insurance-premium-calculator.webp" alt="">
                    </div>
                    <div class="jss312">
                        <p>Get started with Health Insurence</p>
                        <p class="p10 jss3121 p10img">
                            <span class="p10"> Read More 
                                 <img src="../../Images/resources/arrow right.png" alt="">
                            </span>                                                    
                    </p>
                    </div>
                </div>
            </a>     
            <a href="#">
                <div class="jss31">
                    <div class="jss311">
                        <img src="../../Images/resources/Group_10259.webp" alt="">
                    </div>
                    <div class="jss312">
                        <p>Get started with Health Insurence</p>
                        <p class="p10 jss3121 p10img">
                            <span class="p10"> Read More 
                                 <img src="../../Images/resources/arrow right.png" alt="">
                            </span>                                                    
                    </p>
                    </div>
                </div>
            </a>     
            <a href="#">
                <div class="jss31">
                    <div class="jss311">
                        <img src="../../Images/resources/top-up-super-top-up-plans-in-health-insurance.webp" alt="">
                    </div>
                    <div class="jss312">
                        <p>Get started with Health Insurence</p>
                        <p class="p10 jss3121 p10img">
                            <span class="p10"> Read More 
                                 <img src="../../Images/resources/arrow right.png" alt="">
                            </span>                                                    
                    </p>
                    </div>
                </div>
            </a>     
            <a href="#">
                <div class="jss31">
                    <div class="jss311">
                        <img src="../../Images/resources/corona-kavach-insurance-policy.webp" alt="">
                    </div>
                    <div class="jss312">
                        <p>Get started with Health Insurence</p>
                        <p class="p10 jss3121 p10img">
                            <span class="p10"> Read More 
                                 <img src="../../Images/resources/arrow right.png" alt="">
                            </span>                                                    
                    </p>
                    </div>
                </div>
            </a>     
        </div>`
    }
}
function health_insurence_articles() {
    color5()
    document.getElementById("js").innerHTML = `Guids on Car Insurence`
    document.getElementById("second_box_rigth_health_insurence_guides").innerHTML = ``
    document.getElementById("second_box_rigth_group_health_insurence_guides").innerHTML = ``
    document.getElementById("second_box_rigth_two_wheeler_insurence_guides").innerHTML = ``
    document.getElementById("second_box_rigth_all_guides").innerHTML = ``
    document.getElementById("second_box_rigth_car_insurence_guides").innerHTML = ``
    let second_box_rigth_health_insurence_guides = document.getElementById("second_box_rigth_health_insurence_guides")
    second_box_rigth_health_insurence_guides.innerHTML = load_health_insurence()
    function load_health_insurence () {
        return `<h2 class="jss8h2">All articles</h2>
        <div class="jss3">
        <a href="#">
            <div class="jss3111">
                <div class="jss311">
                    <img src="../../Images/resources/cooling-off-period-in-health-insurance.webp" alt="">
                </div>
                    <p class="paragraph3">Importance of cooling-off period in health insurance</p>
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
                    <img src="../../Images/resources/dental-insurance.webp" alt="">
                </div>
                    <p class="paragraph3">Understanding dental insurance in India: Cover, benefits, and claims</p>
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
                    <img src="../../Images/resources/does-your-health-insurance-cover-brain-surgery.webp" alt="">
                </div>
                    <p class="paragraph3">Does health insurance cover brain surgery?</p>
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
                    <img src="../../Images/resources/tips-to-save-on-health-insurance-premium.webp" alt="">
                </div>
                    <p class="paragraph3">10 tips to save on health insurance premium</p>
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
                    <img src="../../Images/resources/does-your-health-insurance-cover-robotic-surgery.webp" alt="">
                </div>
                    <p class="paragraph3">Does your health insurance cover robotic surgery?</p>
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
                    <img src="../../Images/resources/mistakes-to-avoid-while-buying-a-maternity-insurance-policy.webp" alt="">
                </div>
                    <p class="paragraph3">5 mistakes to avoid while buying a maternity insurance policy</p>
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
                    <img src="../../Images/resources/does-health-insurance-that-cover-ivf-and-infertility-treatment.webp" alt="">
                </div>
                    <p class="paragraph3">Does health insurance cover infertility treatment?</p>
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
                    <img src="../../Images/resources/does-health-insurance-cover-bariatric-surgery.webp" alt="">
                </div>
                    <p class="paragraph3">Does health insurance cover Bariatric Surgery?</p>
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
                    <img src="../../Images/resources/does-health-insurance-cover-ent-treatments.webp" alt="">
                </div>
                    <p class="paragraph3">ENT Insurance: Problems, Treatments, And Cover</p>
                <div class="jss313">
                    <p class="paragraph2">Team Acko</p>
                    <div class="dot"></div>
                    <p class="paragraph2">May 16, 2022</p>
                </div>
            </div>
        </a>
    </div>`
    }
}
function health_insurence_ebooks() {
    color5()
    document.getElementById("js").innerHTML = `Guids on Car Insurence`
    document.getElementById("second_box_rigth_health_insurence_guides").innerHTML = ``
    document.getElementById("second_box_rigth_group_health_insurence_guides").innerHTML = ``
    document.getElementById("second_box_rigth_two_wheeler_insurence_guides").innerHTML = ``
    document.getElementById("second_box_rigth_all_guides").innerHTML = ``
    document.getElementById("second_box_rigth_car_insurence_guides").innerHTML = ``
    let second_box_rigth_health_insurence_guides = document.getElementById("second_box_rigth_health_insurence_guides")
    second_box_rigth_health_insurence_guides.innerHTML = load_health_insurence()
    function load_health_insurence () {
        return `<h2 class="jss8h2">All ebooks on Health Insurance</h2>
        <div class="jss3">
            
            <a href="#">
                <div class="jss31">
                    <div id="jss311" class="jss311">
                        <img src="../../Images/resources/how-to-select-health-insurance.webp" alt="">
                    </div>
                    <div id = "jss312" class="jss312">
                        <p>How to select health insurance</p>
                        <p class="p10 jss3121 p10img">
                                <span class="p10"> Read More 
                                     <img src="../../Images/resources/arrow right.png" alt="">
                                </span>                                                    
                            </p>
                    </div>
                </div>
            </a>
            <a href="#">
                <div class="jss31">
                    <div id="jss311" class="jss311">
                        <img src="../../Images/resources/how-to-save-on-health-insurance.webp" alt="">
                    </div>
                    <div class="jss312">
                        <p>Smart ways to save health insurance premium [E-book]</p>
                        <p class="p10 jss3121 p10img">
                                <span class="p10"> Read More 
                                     <img src="../../Images/resources/arrow right.png" alt="">
                                </span>                                                    
                            </p>
                    </div>
                </div>
            </a>
            <a href="#">
                <div class="jss31">
                    <div id="jss311" class="jss311">
                        <img src="../../Images/resources/cashless-reimbursement-ebook-cover.webp" alt="">
                    </div>
                    <div class="jss312">
                        <p>Cashless vs Reimbursement Claims [E-Book]</p>
                        <p class="p10 jss3121 p10img">
                                <span class="p10"> Read More 
                                     <img src="../../Images/resources/arrow right.png" alt="">
                                </span>                                                    
                        </p>
                    </div>
                </div>
            </a>       
        </div`
    }
}
function color1() {
console.log(document.getElementById("p51"))
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
function colora() {
    document.getElementById("jss21").style.background = "rgb(241, 243, 248)"
    document.getElementById("jss21").style.color = "rgb(124, 71, 225))"

    document.getElementById("jss22").style.background = ""
    document.getElementById("jss22").style.color = ""

    document.getElementById("jss23").style.background = ""
    document.getElementById("jss23").style.color = ""

    document.getElementById("jss24").style.background = ""
    document.getElementById("jss24").style.color = ""
}
function colorb() {
    document.getElementById("jss21").style.background = ""
    document.getElementById("jss21").style.color = ""

    document.getElementById("jss22").style.background = "rgb(241, 243, 248)"
    document.getElementById("jss22").style.color = "rgb(124, 71, 225))"

    document.getElementById("jss23").style.background = ""
    document.getElementById("jss23").style.color = ""

    document.getElementById("jss24").style.background = ""
    document.getElementById("jss24").style.color = ""
}
function colorc() {
    document.getElementById("jss21").style.background = ""
    document.getElementById("jss21").style.color = ""

    document.getElementById("jss22").style.background = ""
    document.getElementById("jss22").style.color = ""

    document.getElementById("jss23").style.background = "rgb(241, 243, 248)"
    document.getElementById("jss23").style.color = "rgb(124, 71, 225))"

    document.getElementById("jss24").style.background = ""
    document.getElementById("jss24").style.color = ""
}
function colord() {
    document.getElementById("jss21").style.background = ""
    document.getElementById("jss21").style.color = ""

    document.getElementById("jss22").style.background = ""
    document.getElementById("jss22").style.color = ""

    document.getElementById("jss23").style.background = ""
    document.getElementById("jss23").style.color = ""

    document.getElementById("jss24").style.background = "rgb(241, 243, 248)"
    document.getElementById("jss24").style.color = "rgb(124, 71, 225))"
}
