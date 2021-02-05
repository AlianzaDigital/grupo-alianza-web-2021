// TRANSITION CARDS RYS END PAGE
// $( '#card-tap-more-01' ).mouseover(function() {
  $( '#card-tap-01' ).mouseover(function() {
    if($("#collapseCardReclutamiento-02").hasClass('show')) {
      $( '#collapseCardReclutamiento-02' ).collapse('hide')
      $( '#card-tap-02' ).removeClass('transition-card-rys-click-back')
      $( '#card-tap-02' ).removeClass('transition-card-rys-hover-more')
      $( '#card-tap-02' ).css({"height": "230px", "padding": "3rem 1.5rem;"})
      $( '#card-tap-02' ).addClass('transition-card-rys-click-back')
    } 
    if($("#collapseCardReclutamiento-03").hasClass('show')) {
      $( '#collapseCardReclutamiento-03' ).collapse('hide')
      $( '#card-tap-03' ).removeClass('transition-card-rys-click-back')
      $( '#card-tap-03' ).removeClass('transition-card-rys-hover-more')
      $( '#card-tap-03' ).css({"height": "230px", "padding": "3rem 1.5rem;"})
      $( '#card-tap-03' ).addClass('transition-card-rys-click-back')
    }
    $( '#collapseCardReclutamiento-01' ).collapse('show')
    setTimeout(function(){ 
      $( '#card-tap-01' ).removeClass('transition-card-rys-click-back')
      $( '#card-tap-01' ).removeClass('transition-card-rys-hover-more')
      $( '#card-tap-01' ).css({"height": "0px", "padding": "0rem"})
    
      $( '#card-tap-01' ).addClass('transition-card-rys-hover-more')
    }, 0);
  })
  $( '#card-tap-back-01' ).click(function() {
    $( '#collapseCardReclutamiento-01' ).collapse('hide')
    setTimeout(function(){ 
      $( '#card-tap-01' ).removeClass('transition-card-rys-click-back')
      $( '#card-tap-01' ).removeClass('transition-card-rys-hover-more')
      $( '#card-tap-01' ).css({"height": "230px", "padding": "3rem 1.5rem;"})
      
      $( '#card-tap-01' ).addClass('transition-card-rys-click-back')
    }, 0);
  })
  
  
  // $( '#card-tap-more-02' ).mouseover(function() {
  $( '#card-tap-02' ).mouseover(function() {
    if($("#collapseCardReclutamiento-01").hasClass('show')) {
      $( '#collapseCardReclutamiento-01' ).collapse('hide')
      $( '#card-tap-01' ).removeClass('transition-card-rys-click-back')
      $( '#card-tap-01' ).removeClass('transition-card-rys-hover-more')
      $( '#card-tap-01' ).css({"height": "230px", "padding": "3rem 1.5rem;"})
      $( '#card-tap-01' ).addClass('transition-card-rys-click-back')
    }
    if($("#collapseCardReclutamiento-03").hasClass('show')) {
      $( '#collapseCardReclutamiento-03' ).collapse('hide')
      $( '#card-tap-03' ).removeClass('transition-card-rys-click-back')
      $( '#card-tap-03' ).removeClass('transition-card-rys-hover-more')
      $( '#card-tap-03' ).css({"height": "230px", "padding": "3rem 1.5rem;"})
      $( '#card-tap-03' ).addClass('transition-card-rys-click-back')
    }
    $( '#collapseCardReclutamiento-02' ).collapse('show')
    setTimeout(function(){ 
      $( '#card-tap-02' ).removeClass('transition-card-rys-click-back')
      $( '#card-tap-02' ).removeClass('transition-card-rys-hover-more')
      $( '#card-tap-02' ).css({"height": "0px", "padding": "0rem"})
    
      $( '#card-tap-02' ).addClass('transition-card-rys-hover-more')
    }, 0);
  })
  $( '#card-tap-back-02' ).click(function() {
    $( '#collapseCardReclutamiento-02' ).collapse('hide')
    setTimeout(function(){ 
      $( '#card-tap-02' ).removeClass('transition-card-rys-click-back')
      $( '#card-tap-02' ).removeClass('transition-card-rys-hover-more')
      $( '#card-tap-02' ).css({"height": "230px", "padding": "3rem 1.5rem;"})
  
      $( '#card-tap-02' ).addClass('transition-card-rys-click-back')
    }, 0);
  })
  
  
  // $( '#card-tap-more-03' ).mouseover(function() {
  $( '#card-tap-03' ).mouseover(function() {
    if($("#collapseCardReclutamiento-01").hasClass('show')) {
      $( '#collapseCardReclutamiento-01' ).collapse('hide')
      $( '#card-tap-01' ).removeClass('transition-card-rys-click-back')
      $( '#card-tap-01' ).removeClass('transition-card-rys-hover-more')
      $( '#card-tap-01' ).css({"height": "230px", "padding": "3rem 1.5rem;"})
      $( '#card-tap-01' ).addClass('transition-card-rys-click-back')
    }
    if($("#collapseCardReclutamiento-02").hasClass('show')) {
      $( '#collapseCardReclutamiento-02' ).collapse('hide')
      $( '#card-tap-02' ).removeClass('transition-card-rys-click-back')
      $( '#card-tap-02' ).removeClass('transition-card-rys-hover-more')
      $( '#card-tap-02' ).css({"height": "230px", "padding": "3rem 1.5rem;"})
      $( '#card-tap-02' ).addClass('transition-card-rys-click-back')
    }
    $( '#collapseCardReclutamiento-03' ).collapse('show')
    setTimeout(function(){ 
      $( '#card-tap-03' ).removeClass('transition-card-rys-click-back')
      $( '#card-tap-03' ).removeClass('transition-card-rys-hover-more')
      $( '#card-tap-03' ).css({"height": "0px", "padding": "0rem"})
    
      $( '#card-tap-03' ).addClass('transition-card-rys-hover-more')
    }, 0);
  })
  $( '#card-tap-back-03' ).click(function() {
    $( '#collapseCardReclutamiento-03' ).collapse('hide')
    setTimeout(function(){ 
      $( '#card-tap-03' ).removeClass('transition-card-rys-click-back')
      $( '#card-tap-03' ).removeClass('transition-card-rys-hover-more')
      $( '#card-tap-03' ).css({"height": "230px", "padding": "3rem 1.5rem;"})
  
      $( '#card-tap-03' ).addClass('transition-card-rys-click-back')
    }, 0);
  })
  
  // $( '#card-tap-more-01' ).mouseover(function() {
$( '#card-tap-01' ).mouseover(function() {
  $( '#collapseCardReclutamiento-01' ).collapse('show')
  setTimeout(function(){ 
    $( '#card-tap-01' ).removeClass('transition-card-rys-click-back')
    $( '#card-tap-01' ).removeClass('transition-card-rys-hover-more')
    $( '#card-tap-01' ).css({"height": "0px", "padding": "0rem"})
  
    $( '#card-tap-01' ).addClass('transition-card-rys-hover-more')
  }, 0);
})
$( '#collapseCardReclutamiento-01' ).mouseout(function() {
  $( '#collapseCardReclutamiento-01' ).collapse('hide')
  setTimeout(function(){ 
    $( '#card-tap-01' ).removeClass('transition-card-rys-click-back')
    $( '#card-tap-01' ).removeClass('transition-card-rys-hover-more')
    $( '#card-tap-01' ).css({"height": "230px", "padding": "3rem 1.5rem;"})
    
    $( '#card-tap-01' ).addClass('transition-card-rys-click-back')
  }, 250);
})


// $( '#card-tap-more-02' ).mouseover(function() {
$( '#card-tap-02' ).mouseover(function() {
  $( '#collapseCardReclutamiento-02' ).collapse('show')
  setTimeout(function(){ 
    $( '#card-tap-02' ).removeClass('transition-card-rys-click-back')
    $( '#card-tap-02' ).removeClass('transition-card-rys-hover-more')
    $( '#card-tap-02' ).css({"height": "0px", "padding": "0rem"})
  
    $( '#card-tap-02' ).addClass('transition-card-rys-hover-more')
  }, );
})
$( '#collapseCardReclutamiento-02' ).mouseout(function() {
  $( '#collapseCardReclutamiento-02' ).collapse('hide')
  setTimeout(function(){ 
    $( '#card-tap-02' ).removeClass('transition-card-rys-click-back')
    $( '#card-tap-02' ).removeClass('transition-card-rys-hover-more')
    $( '#card-tap-02' ).css({"height": "230px", "padding": "3rem 1.5rem;"})

    $( '#card-tap-02' ).addClass('transition-card-rys-click-back')
  }, 250);
})


// $( '#card-tap-more-03' ).mouseover(function() {
$( '#card-tap-03' ).mouseover(function() {
  $( '#collapseCardReclutamiento-03' ).collapse('show')
  setTimeout(function(){ 
    $( '#card-tap-03' ).removeClass('transition-card-rys-click-back')
    $( '#card-tap-03' ).removeClass('transition-card-rys-hover-more')
    $( '#card-tap-03' ).css({"height": "0px", "padding": "0rem"})
  
    $( '#card-tap-03' ).addClass('transition-card-rys-hover-more')
  }, );
})
$( '#collapseCardReclutamiento-03' ).mouseout(function() {
  $( '#collapseCardReclutamiento-03' ).collapse('hide')
  setTimeout(function(){ 
    $( '#card-tap-03' ).removeClass('transition-card-rys-click-back')
    $( '#card-tap-03' ).removeClass('transition-card-rys-hover-more')
    $( '#card-tap-03' ).css({"height": "230px", "padding": "3rem 1.5rem;"})

    $( '#card-tap-03' ).addClass('transition-card-rys-click-back')
  }, 250);
})


// $( '#card-tap-more-01' ).mouseover(function() {
  $( '#card-tap-01' ).mouseover(function() {
    $( '#collapseCardReclutamiento-01' ).collapse('show')
    $( '#card-tap-01' ).removeClass('transition-card-rys-click-back transition-card-rys-hover-more')
    $( '#card-tap-01' ).css({"height": "0px", "padding": "0rem"})
    setTimeout(function(){ 
      $( '#card-tap-01' ).addClass('transition-card-rys-hover-more d-none')
    }, 0);
  })
  $( '#collapseCardReclutamiento-01' ).mouseleave(function() {
    $( '#card-tap-01' ).removeClass('transition-card-rys-click-back transition-card-rys-hover-more')
    $( '#collapseCardReclutamiento-01' ).collapse('hide')
    $( '#card-tap-01' ).css({"height": "230px", "padding": "3rem 1.5rem;"})
    setTimeout(function(){ 
      $( '#card-tap-01' ).addClass('transition-card-rys-click-back')
      $( '#card-tap-01' ).removeClass('d-none')
    }, 250);
  })
  
  
  // $( '#card-tap-more-02' ).mouseover(function() {
  $( '#card-tap-02' ).mouseover(function() {
    $( '#collapseCardReclutamiento-02' ).collapse('show')
    $( '#card-tap-02' ).removeClass('transition-card-rys-click-back transition-card-rys-hover-more')
    $( '#card-tap-02' ).css({"height": "0px", "padding": "0rem"})
    setTimeout(function(){ 
      $( '#card-tap-02' ).addClass('transition-card-rys-hover-more d-none')
    }, 0);
  })
  $( '#collapseCardReclutamiento-02' ).mouseleave(function() {
    $( '#collapseCardReclutamiento-02' ).collapse('hide')
    $( '#card-tap-02' ).removeClass('transition-card-rys-click-back transition-card-rys-hover-more')
    $( '#card-tap-02' ).css({"height": "230px", "padding": "3rem 1.5rem;"})
    setTimeout(function(){ 
      $( '#card-tap-02' ).addClass('transition-card-rys-click-back')
      $( '#card-tap-02' ).removeClass('d-none')
    }, 250);
  })
  
  
  // $( '#card-tap-more-03' ).mouseover(function() {
  $( '#card-tap-03' ).mouseover(function() {
    $( '#collapseCardReclutamiento-03' ).collapse('show')
    $( '#card-tap-03' ).removeClass('transition-card-rys-click-back transition-card-rys-hover-more')
    $( '#card-tap-03' ).css({"height": "0px", "padding": "0rem"})
    setTimeout(function(){ 
      $( '#card-tap-03' ).addClass('transition-card-rys-hover-more d-none')
    }, 0);
  })
  $( '#collapseCardReclutamiento-03' ).mouseleave(function() {
    $( '#collapseCardReclutamiento-03' ).collapse('hide')
    $( '#card-tap-03' ).removeClass('transition-card-rys-click-back transition-card-rys-hover-more')
    $( '#card-tap-03' ).css({"height": "230px", "padding": "3rem 1.5rem;"})
    setTimeout(function(){ 
      $( '#card-tap-03' ).addClass('transition-card-rys-click-back')
      $( '#card-tap-03' ).removeClass('d-none')
    }, 250);
  })