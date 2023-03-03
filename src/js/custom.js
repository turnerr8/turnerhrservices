const recruitment = {
    public: "<li>City of Bellingham – Director of Parks & Recreation, Chief of Police, City Attorney, Human Resources Director, Finance Director, Library Director, Fire Chief, Planning Director, Parks & Rec Director</li><li>City of Blaine – City Manager</li><li>City of Lynden – City Administrator, HR Manager, Fire Chief, Police Chief, Planning Director, Public Works Director, Finance Director, Asst Fire Chief</li><li>City of Mt. Vernon – Human Resources Director</li><li>City of Sumas – Public Works Director, Local Disaster Recovery Manager</li><li>Northsound Mental Health Administration – Executive Director</li><li>Northwest Regional Council – Executive Director, Director of Information & Operations, Director of Case Management</li><li>Port of Anacortes – Executive Director</li><li>Skagit County – Human Resources Director</li><li>Skagit 911 – Executive Director</li><li>Skagit Council of Governments – Executive Director</li><li>Snohomish County Fire District 1 – HR Director</li><li>Whatcom Transportation Authority – Finance Director, Human Resources Director, Marketing & Comm Relations Manager</li><li>Whatcom Council of Governments – Executive Director</li><li>Whatcom County – Public Works Director, Planning & Development Services Director, Health Director</li><li>Verdant Health Commission – Finance Director</li>",
    private: "<ul><li>Dermatology Laser Center – Office Manager</li><li>Elements – HR Manager</li><li>Enfield Farms – HR Manager</li><li>IMCO Construction – Human Resources Director</li><li>Northwest Ambulatory Surgery Center – Clinic Director</li><li>Rural Health Enterprise – Chief Executive Officer</li><li>Tidal Vision – Chief Operating Officer, Recruiting & People Manager</li></ul>",
    nonProfit: "<ul><li>Brigid Collins – Executive Director</li><li>Chinook Enterprises – Chief Executive Officer</li><li>Christian Health Care Center – Director of Nursing & Social Services Director</li><li>Dementia Care NW – Executive Director</li><li>Interfaith Community Health Clinic – Executive Director, Medical Director</li><li>Josephine Sunset Home – Executive Director</li><li>Senior Services of Island County – Executive Director, Finance Director</li><li>The Rural Health Collaborative – Contract Services Director, </li></ul>"
}

$(document).ready(function () {

    $("#quotes-carousel").carousel('cycle');
    console.log("carosel  wrok");

    
    //popout
    var openBut = $("#more-link");
    var popOut = $("#popout");

    openBut.click(function() {
        popOut.show();
    });

    popOut.click(function(e){
        console.log(e.target.id);
        if(e.target.id == "popout"){
            console.log("true");
            popOut.hide();
        }
    });

    $("#popout-exit").click(function(){
        popOut.hide();
    })

    //training
    var trainOpen = $("#train-more");
    var trainPop = $("#train-popout");
    trainOpen.click(function(){
        trainPop.show();
    });
    trainPop.click((e)=>{
        if(e.target.id == "train-popout"){
            trainPop.hide();
        }
    })
    $("#train-popout-exit").click(()=>{
        trainPop.hide();
    })

    $("#nav-training").click(()=>{
        trainPop.show();
    });

    $("#training-card-trigger").click(()=>{
        trainPop.show();
    })



    const publicSector=$("#pub-sec");
    const privateSector = $("#priv-sec");
    const nonProfit = $("#non-prof");
    const descriptionBox = $("#desc-box")

    publicSector.click(function(){
        descriptionBox.html(recruitment.public);
        privateSector.removeClass("active");
        nonProfit.removeClass("active");
        publicSector.addClass("active");
    })

    privateSector.click(function(){
        descriptionBox.html(recruitment.private);
        publicSector.removeClass("active");
        nonProfit.removeClass("active")
        privateSector.addClass("active");
    })

    nonProfit.click(function (){
        descriptionBox.html(recruitment.nonProfit);
        publicSector.removeClass("active");
        privateSector.removeClass("active");
        nonProfit.addClass("active");
    })

    descriptionBox.html(recruitment.public);
    
});