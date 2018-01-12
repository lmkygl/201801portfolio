(function(){

    // navi a 밑줄 효과
    
    var navi_Link_Event = $('[data-ui="navi_Link"]');

    function navi_Effect(e){
        var naviEvnet_target =$(e.target);
        var naviEvnet_type = e.type;
        var naviEvent_line = naviEvnet_target.find('.underline');
       
        if(naviEvnet_type === 'mouseenter'){
            naviEvent_line.animate({width:"100%"}, .3);
        }
        else if(naviEvnet_type === 'mouseleave'){
           naviEvent_line.animate({width:0}, .3); 
       }    
    
    }
    
    // product 클릭시 
    
    var product_Link = $('[data-ui-side="product_Link"]');
    var side_menu = $('[data-ui-side="side_menu"]');
    var side_menu_close = $('[data-ui="sidemenu_close"]');
    
    function productClick_Effect(e){
        TweenMax.to(side_menu, .4, {left:0});
    }

    function sideMenuClose_Effect(){
        TweenMax.to(side_menu, .4, {left:"-800px"});
    }
    
    
    
    var sideMenu_Index = $('[data-side-ui="findDetail"]');

    function SideMenuDetailImg_Effect(e){
        
        var sideMenu_Detail_target = $(e.target);
        var sideMenu_Detail_type = e.type;
        var side_menu_detail = $('[data-side-ui="side_menu_area"]');
        var sideMenu_Detail_target_line = sideMenu_Detail_target.find('.underline');
        var sideMenu_Detail_target_Index = sideMenu_Detail_target.index();

        var datil_layout0 = $('.datail_layout0');
        var datil_layout1 = $('.datail_layout1');
        var datil_layout2 = $('.datail_layout2');
        var datil_layout3 = $('.datail_layout3');
        var datil_all = $('.side_menu_inner_detail');

    //   console.log(sideMenu_Detail_target);
    //   console.log(sideMenu_Detail_target_Index);
        
        if(sideMenu_Detail_type === 'mouseover'){
            TweenMax.to(side_menu_detail, .5, {width:'100%'});
            
            if (e.target.nodeName === 'LI') {
                targetNode = e.target;

                if(sideMenu_Detail_target_Index == 0) {
                    sideMenu_Detail_target_line.animate({width:"100%"}, .3);
                    TweenMax.to(datil_layout0, .5,  {opacity:1});
                }
                else{
                    TweenMax.to(datil_layout0, .3, {opacity:0});
                }
        
                if(sideMenu_Detail_target_Index == 1) {
                    sideMenu_Detail_target_line.animate({width:"100%"}, .3);
                    TweenMax.to(datil_layout1, .5, {opacity:1});
                }
                else{
                    TweenMax.to(datil_layout1, .3, {left:0, opacity:0});
                }

                if(sideMenu_Detail_target_Index == 2) {
                    sideMenu_Detail_target_line.animate({width:"100%"}, .3);
                    TweenMax.to(datil_layout2, .5, {opacity:1});
                }
                else{
                    TweenMax.to(datil_layout2, .3, {opacity:0});
                }
                if(sideMenu_Detail_target_Index == 3) {
                    sideMenu_Detail_target_line.animate({width:"100%"}, .3);
                    TweenMax.to(datil_layout3, .5, {opacity:1});
                }
                else{
                    TweenMax.to(datil_layout3, .3, {opacity:0});
                }
               
               
               
            } else {
                targetNode = e.target.parentNode
            }
          
        }
        else if(sideMenu_Detail_type === 'mouseout'){
            sideMenu_Detail_target_line.animate({width:0}, .3);
           // TweenMax.to(side_menu_detail, .5, {width:0});
           // TweenMax.to(datil_all, .3, {left:0, opacity:0});
        }

    }


    // back 누르고 다시 product버튼 클릭시 사이드메뉴 디테일 없어짐 구현

    var backBtn = $('[data-side-ui="beginAfresh"]');
    
    function backBtn_Effect(e){
        var backBtn_target = $(e.target);
        var backBtn_type = e.type;

        var sideMenu_detail_Area = $('[data-side-ui="side_menu_area"]');
        if(backBtn_type === 'click'){
            sideMenu_detail_Area.animate({width:0}, .3);
        }
    }

    backBtn.on('click', backBtn_Effect);



    var sidenav_width = $('[data-side-ui="side_nav"]');
    
    function sidenavArea_Effect(e){
        var sidenav_width_taget = $(e.target);
        var sidenav_width_taget_type = e.type;
        console.log(sidenav_width_taget);
        sidenav_width_taget.css('background-color','gray');
        var side_menu_detail_area = $('[data-side-ui="side_menu_area"]');

        if(sidenav_width_taget_type === 'mouseout'){
            side_menu_detail_area.animate({width:0}, .3); 
        }
    
    }
    //sidenav_width.on('mouseout',sidenavArea_Effect);
    
    
    sideMenu_Index.on('mouseover mouseout', SideMenuDetailImg_Effect);
    navi_Link_Event.on('mouseenter mouseleave', navi_Effect);
    product_Link.on('click', productClick_Effect);
    side_menu_close.on('click', sideMenuClose_Effect);
  
  
  
  
  
  
  
    //  sideMenu_detail.on('mouseenter mouseleave', sideMenuDetail_Effect);

// sidemenu a 마우스오버시 디테일 상품 보여줌

var sideMenu_detail = $('[data-side-ui="side_menu_detail_product"]'); //side의 a
// a마우스오버시 넓어질 영역

function sideMenuDetail_Effect(e){
    

    var sideMenu_detail_target =$(e.target);
    var sideMenu_detail_type = e.type;        
   // var side_menu_inner_detail = $('[data-side-ui="side_menu_area"]');
   
   //  console.log(sideMenu_detail_target);
   //  console.log(sideMenu_detail_type);
   
    if(sideMenu_detail_type === 'mouseenter'){
        TweenMax.to(side_menu_detail, .5, {width:'100%'});
    }
    else if(sideMenu_detail_type === 'mouseleave'){
        TweenMax.to(side_menu_detail, 1, {width:0,});
   }    
}
   


   

}());
