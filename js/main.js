jQuery(document).ready(function( $ ) {

  $('#myTab a').click(function(e) {
    e.preventDefault()
    $(this).tab('show')
  });

});

var _award_text = document.getElementsByClassName('award_text');
var _award_img = document.getElementsByClassName('award_img');
var _arrow = document.getElementsByClassName('arrow');

for(var i=0;i<_award_text.length;i++){
	_award_text[i].aa = i;	
	_award_text[i].isClose = 1;
	_award_text[i].onclick=function(){
		if(this.isClose = (this.isClose==1?0:1)){  //1
			_award_img[this.aa].style.width='0%';
			_arrow[this.aa].classList.remove('arrow2');
		}else{
			_award_img[this.aa].style.width='80%';
			_arrow[this.aa].classList.add('arrow2');
		}
		// console.log(this.aa,this.isClose);
		
		
	}
}
  
