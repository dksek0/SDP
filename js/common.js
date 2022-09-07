$(document).ready (function () {
  $(document).on('click', '.collapse-item .collapse-head', collapseSlideHandler);
  $(document).on('click', '.dropdown-wrap ul li a', selectOption);
  $(document).on('click', '.input-text', dropdownToggle);
  $(document).on('click', '.filter-item .selected-text', dropdownToggle);
  $(document).on('click', '.select-wrap .selects > button', dropdownToggle);
  $(document).on('click', '.tableSt01 thead th .str .filter', dropdownToggle);
  $(document).on('click', '.article .comment-info .more button', dropdownToggle);
  $(document).on('click', '.input-text input[type="text"] + button', clearInput);
  $(document).on('click', '.tableSt01 .searchBox .searchInput > span button', clearInput);
  $(document).on('click', '#createBtn', openWindowPop);
  $(document).on('click', '.screen .dim-box .btn-wrap a.orientation', toggleRotateScreen);
  $(document).on('click', '.select-box .selected-text', toggleDropdown);
  $(document).on('click', '.select-box .toggle-box ul li a', selectMenu);
  $(document).on('click', '.screen .dim-box .btn-wrap a.zoom', openZoomPopup);
  $(document).on('click', '.zoom-box .close-btn', closePopup);
  $(document).on('click', '.zoom-box a', changeImage);
 
  $('body').click(function(e) {
    if ($(e.target).closest('.input-text.active').length === 0) {
      $('.input-text').removeClass('active')
    }
    if ($(e.target).closest('.filter-item .selected-text.active').length === 0) {
      $('.filter-item .selected-text').removeClass('active')
    }  
    if ($(e.target).closest('.article .comment-info .more > button.active').length === 0) {
      $('.article .comment-info .more > button').removeClass('active')
    }  
    if ($(e.target).closest('.tableSt01 thead th .str .filter.active').length === 0) {
      $('.tableSt01 thead th .str .filter').removeClass('active')
    }  
  });

  $('.right-wrap .check-wrap label').on('click', function () {
    var inputcheck = $(this).parent().find('> input').is(":checked");
    if (inputcheck) {
      $('.group-out').show();
      $('.group-in').hide();
    } else {
      $('.group-out').hide();
      $('.group-in').show();
    }
  });

  $('button[data-pop]').on('click', function () {
    var popClass = $(this).attr('data-pop');
    $('.pop-wrap').show();
    $('.pop-wrap > div').hide();
    $('.pop-wrap > div.' + popClass).show();
  });
  $('button[data-close]').on('click', function () {
    $('.pop-wrap > div').hide();
    $('.pop-wrap').hide();
  });

  $('button.openr').on('click', function () {
    var dataTr = $(this).parents('tr').nextAll('.blues');
    var dataNum = 1;
    var $modalTable = $(this).parents('.tableSt01');
    var dftRow;
    var $target;

    if ($modalTable.hasClass('modal')) {
      dftRow = $(this).parents('tr').find('td').eq(0).attr('dtr-row');
      $target = $('td.' + $(this).attr('data-target'));
    }    
    if ($(this).attr('data-tr') != undefined) {
      dataNum = $(this).attr('data-tr');
    }
    if (!$(this).hasClass('open')) {
      $(this).addClass('open');
      dataTr.each(function (e) {
        if (e < dataNum) {
          $(this).addClass('curr')
        }
      });
      if ($modalTable.hasClass('modal')) {
        var rowSp = Math.ceil($target.attr('rowspan')) + Math.ceil(dataNum);
        $target.attr('rowspan', rowSp);
      }
    } else {
      $(this).removeClass('open');
      dataTr.each(function (e) {
        if (e < dataNum) {
          $(this).removeClass('curr')
        }
      });
      if ($modalTable.hasClass('modal')) {
        var rowSp = Math.ceil($target.attr('rowspan')) - Math.ceil(dataNum);
        $target.attr('rowspan', Math.ceil(rowSp));
      }
    }
  });

  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }

  // table
  var pageSelect = document.querySelectorAll('.infoTable .selects > button');

  pageSelect.forEach(function(ele){
    ele.addEventListener('click', function ($ele) {
      if ($ele.target.parentElement.classList.contains("curr")) {
        $ele.target.parentElement.classList.remove('curr')
      } else {
        $ele.target.parentElement.classList.add('curr')
      }
    });
  })

  var filebtn = document.querySelectorAll('.fileFlus > button');
  var tables = document.querySelectorAll('.tableSt01');

  

  filebtn.forEach(function(ele){
    ele.addEventListener('click', function ($ele) {
      
      if ($ele.target.offsetParent.classList.contains("curr")) {
        $ele.target.offsetParent.classList.remove('curr');
        this.closest('.tableWrap').classList.remove('headOn')
      } else {
        $ele.target.offsetParent.classList.add('curr');
        this.closest('.tableWrap').classList.add('headOn')
      }
    });
  });

  // var txtbtn = document.querySelectorAll('.option > button');

  // txtbtn.forEach(function(ele){
  //   ele.addEventListener('click', function ($ele) {
  //     if ($ele.target.offsetParent.classList.contains("curr")) {
  //       $ele.target.offsetParent.classList.remove('curr')
  //     } else {
  //       $ele.target.offsetParent.classList.add('curr')
  //     }
  //   });
  // });

  var allbtn = document.querySelectorAll('.filter-item .selects > button');

  allbtn.forEach(function(ele){
    ele.addEventListener('click', function ($ele) {
      
      if ($ele.target.offsetParent.classList.contains("curr")) {
        $ele.target.offsetParent.classList.remove('curr');
        this.closest('.tableWrap').classList.remove('titOn')
      } else {
        $ele.target.offsetParent.classList.add('curr');
        this.closest('.tableWrap').classList.add('titOn')
      }
    });
  });

  var searchBar = document.querySelectorAll('.searchInput input');

  searchBar.forEach(function(ele){
    ele.addEventListener('click', function ($ele) {
      
      if ($ele.target.parentElement.parentElement.classList.contains("curr")) {
        $ele.target.parentElement.parentElement.classList.remove('curr');
        tables.forEach(function(e){
          e.classList.remove('headOn')
        })
      } else {
        $ele.target.parentElement.parentElement.classList.add('curr');
        tables.forEach(function(e){
          e.classList.add('headOn')
        })
      }
    });
  });


  var searchBtn = document.querySelectorAll('.searchBox > button');

  searchBtn.forEach(function(ele){
    ele.addEventListener('click', function ($ele) {
      
      if ($ele.target.parentElement.parentElement.classList.contains("curr")) {
        $ele.target.parentElement.parentElement.classList.remove('curr');
        tables.forEach(function(e){
          e.classList.remove('headOn')
        })
      } else {
        $ele.target.parentElement.parentElement.classList.add('curr');
        tables.forEach(function(e){
          e.classList.add('headOn')
        })
      }
    });
  });

  $('.innerTable.with-filter .tableSt01 .scroll').on('scroll', function () {
    $(this).siblings('.absolute').css({marginLeft: 0 - $(this).scrollLeft()});
  });

  $( function() {
    if(! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      $( "#sortable" ).sortable( {
        handle: ".handle",
      });
    }
  } );
})

// collapse menu toggle
function collapseSlideHandler () {
  if ($(this).parents('.collapse-item').hasClass('opened')) {
    $(this).parents('.collapse-wrap').find('.collapse-item').removeClass('opened');
  } else {
    $(this).parents('.collapse-wrap').find('.collapse-item').removeClass('opened');
    $(this).parents('.collapse-item').addClass('opened');
  }
}

// dropdown text select
function selectOption () {
  var selectBox = $(this).parents('.dropdown-wrap').siblings('.selected-text');
  var curText = $(this).text();

  if($(this).parents('.dropdown-wrap').siblings('.selected-text').attr('data-name') == 'Num') {
    if ( curText === "All" ) {
      $(this).parents('.tableWrap').siblings('.comment-wrap').find('#issueNo').val('');
    } else {
      $(this).parents('.tableWrap').siblings('.comment-wrap').find('#issueNo').val(curText);
    }
  }
  selectBox.find('span').text(curText);
  selectBox.removeClass('active');
}

// event list toggle
function dropdownToggle () {
  $(this).toggleClass('active');
}

// Report and Guide input clear
function clearInput () {
  $(this).prev('input').val('')
}

function openWindowPop () {
  var options = 'top=10, left=10, width=1080, height=862, status=no, menubar=no, toolbar=no';
  window.open('../popup.html','popup', options);
}

// screen zoom popup
var screenIndex = 0;

var openZoomPopup = function () {
  var zoomBoxImg = $('.zoom-box .img-box');
  screenIndex = $(this).parents('.screen').index();
  var selectedImg = $(this).parents('.dim-box').siblings('a').children('.img-box').css('background-image');
  $('.zoom-wrap').addClass('opened');
  $('body').addClass('popup-opened');
  zoomBoxImg.css('background-image', selectedImg)
}

var changeImage = function () {
  var zoomBoxImg = $('.zoom-box .img-box');
  if ($(this).hasClass('prev-btn')) {
    zoomBoxImg.css('background-image', $('.screen').eq(screenIndex - 1).find('.img-box').css('background-image'))
    screenIndex--;
  } else {
    zoomBoxImg.css('background-image', $('.screen').eq(screenIndex + 1).find('.img-box').css('background-image'))
    screenIndex++;
  }
}

// toggle screen rotate
var toggleRotateScreen = function () {
  $(this).parents('.screen').toggleClass('rotated')
}

// input select
var toggleDropdown = function () {
  $(this).toggleClass('active');
}

var selectMenu = function () {
  var selectedTxt = $(this).html();
  $(this).parents('.toggle-box').siblings('.selected-text').removeClass('active').children('span').html(selectedTxt);
}

// close popup
var closePopup = function () {
  $('.zoom-wrap').removeClass('opened');
  $('body').removeClass('non-scroll popup-opened');
}