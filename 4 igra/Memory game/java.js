$(()=>{

var body=$('body');
var navbarlevels=`
					<nav class="navbar navbar-inverse">
					<div class="container-fluid">
                    <div class="navbar-header">
                    <a class="navbar-brand" href="#">Memory Game</a>
                    </div>
                    <ul class="nav navbar-nav">
                    <li><a href="#">Level 1</a></li>
                    <li><a href="#">Level 2</a></li>
                    <li><a href="#">Level 3</a></li>
                    <li><a href="#">Level 4</a></li>
                    </ul>
                    </div>
                    </nav>	
                 `;/////////end of creating navbar

body.append(navbarlevels);
var nav=document.querySelector('ul');
var li=document.querySelectorAll('li');
////var for levels
var level1=0;
var level2=0;
var level3=0;
var level4=0;
///make border
function makeborders(){
for(let i=0;i<li.length;i++){
body.append('<div class="container"><div class="box box'+[i]+'""></div></div>');

}	
}
makeborders();
var border=document.querySelectorAll('.box');
//////all borders for levels


//////add event listener for all navlinks
for(let i=0;i<li.length;i++){
	li[i].addEventListener('click',checkthis);
}
function checkthis(e){
	if(this==li[0]){
	setTimeout(function anim(){
	$(border[0]).css({display:''});
	$(border[1]).css({display:'none'});
	$(border[2]).css({display:'none'});
	$(border[3]).css({display:'none'});
	},2000);
		function checklev1(){
			if(level1==0){
				setTimeout(makethem,2000);
				howmuchbox=16;
				level1++;

			}	
		}
		checklev1();
		
	}if(this==li[1]){
    setTimeout(function anim(){
	$(border[0]).css({display:'none'});
	$(border[1]).css({display:''});
	$(border[2]).css({display:'none'});
	$(border[3]).css({display:'none'});
	},2000);	
		function checklev2(){
			if(level2==0){
				setTimeout(makethem,2000);
				howmuchbox=24;
				$(border[1]).css({width:'600px'})
				level2++;
				
			}	
		}
	checklev2();	
	}if(this==li[2]){
	setTimeout(function anim(){
	$(border[0]).css({display:'none'});
	$(border[1]).css({display:'none'});
	$(border[2]).css({display:''});
	$(border[3]).css({display:'none'});
	},2000);
	function checklev3(){
		if(level3==0){
		$(border[2]).css({width:'800px',marginLeft:'-100px'});	
		setTimeout(makethem,2000);
		howmuchbox=32;
		level3++;
			}	
		}	
	checklev3();	
	}if(this==li[3]){
	setTimeout(function anim(){
	$(border[0]).css({display:'none'});
	$(border[1]).css({display:'none'});
	$(border[2]).css({display:'none'});
	$(border[3]).css({display:''});
	},2000);
	function checklev4(){
		if(level4==0){

	
		$(border[3]).css({width:'1000px',marginLeft:'-200px'});
		setTimeout(makethem,2000);
		howmuchbox=50;
		level4++;
		}	
		}	
	checklev4();	
	}
	brojevi=[];
	thisisnumber();
}////////end of levels

var howmuchbox;///////var for how much box we will have
var dontbroke=0;
var dontbroke1=0;
var dontbroke2=0;
var dontbroke3=0;
///////////inserting first time boxexs in game
function thisisnumber(){
	if(howmuchbox==16){
		for (let i = 0; i < howmuchbox; i++) {
			if(dontbroke==8){
				dontbroke=0;
			}
			dontbroke++;
			brojevi.push(dontbroke);
		}
	}if(howmuchbox==24){
		for (let i = 0; i < howmuchbox; i++) {
			if(dontbroke==12){
				dontbroke=0;
			}
			dontbroke++;
			brojevi.push(dontbroke);
		}
	}if(howmuchbox==32){
		for (let i = 0; i < howmuchbox; i++) {
			if(dontbroke==16){
				dontbroke=0;
			}
			dontbroke++;
			brojevi.push(dontbroke);
		}
	}if(howmuchbox==50){
		for (let i = 0; i < howmuchbox; i++) {
			if(dontbroke==25){
				dontbroke=0;
			}
			dontbroke++;
			brojevi.push(dontbroke);
		}
	}

	}
////end of for loop for brojevi
var brojevi=new Array();///arrrayy

 //// arrey for colors
 var boje=['#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080', '#ffffff', '#000000'];
function makethem(){/////making boxex

	if(howmuchbox==16){
	for(let i=0;i<howmuchbox;i++){
	let rand=Math.floor(Math.random()*brojevi.length);	
	$(border[0]).append('<div class="front">'+brojevi[rand]+'</div>');
	brojevi.splice(rand,1);
	console.log(brojevi);
}
	}if(howmuchbox==24){
	for(let i=0;i<howmuchbox;i++){
	let rand=Math.floor(Math.random()*brojevi.length);	
	$(border[1]).append('<div class="front">'+brojevi[rand]+'</div>');
	brojevi.splice(rand,1);
	console.log(brojevi);
}
	}if(howmuchbox==32){
	for(let i=0;i<howmuchbox;i++){
	let rand=Math.floor(Math.random()*brojevi.length);	
	$(border[2]).append('<div class="front">'+brojevi[rand]+'</div>');
	brojevi.splice(rand,1);
	console.log(brojevi);
}
	}if(howmuchbox==50){
	for(let i=0;i<howmuchbox;i++){
	let rand=Math.floor(Math.random()*brojevi.length);	
	$(border[3]).append('<div class="front">'+brojevi[rand]+'</div>');
	brojevi.splice(rand,1);
	console.log(brojevi);
}
	}////end of leve4

var xx=$('.front');
front=xx;
joke();
return ;	
}/////////////end of function
var ll=[];
var front;
var click=0;
var pos;
var pos1;
////////////////ending game animation
function joke(){
$(front).on('click',function ewe(){
function stop(){
		clearInterval(xandy);
		setTimeout(stop,8000);
	}	
	stop();
	let rand=Math.floor(Math.random()*boje.length);
	var xandy=setInterval(()=>{
	var position=$(ll[0]).position();
	var position1=$(ll[1]).position();
	pos=position;
	pos1=position1;
	return;
	},500);
	

	var formore=$(this);
	$(this).css({transform: 'perspective(900px) rotateZ(220deg)',background:boje[rand] });
	setTimeout(function moreanime(){
	let rand=Math.floor(Math.random()*boje.length);	
	$(formore).css({transform: 'perspective(900px) rotateX(220deg)',background:boje[rand],});	
	setTimeout(function final(){
	let rand=Math.floor(Math.random()*boje.length);	
	$(formore).css({transform: 'perspective(900px) rotateY(0deg)',background:boje[rand],fontSize:'75px',});	
    },1200);
	},1300);


ll.push($(this));
click++;




	if(click===2){
		$(front).off();
		setTimeout(checkfinal,2000);
	}	

	///////last function
    function checkfinal(){
	if(pos.left===pos1.left && pos.top===pos1.top ){
		function mustbehere(){
		setTimeout(reset,2300);	
		}
		mustbehere();
	}if(ll[0].text()===ll[1].text()){
		function checking(){
		if(pos.left!==pos1.left && pos.top!==pos1.top ){
			setTimeout(function donttouch(){
				$(ll[0]).css({pointerEvents:'none',});
				$(ll[1]).css({pointerEvents:'none',});
				joke();
				click=0;
				ll=[];
			},2300);
		}

		}
		checking();
		
	}else{
		function stophere(){
		setTimeout(reset,2300);	
		}
		stophere();
	}
		
}


/////reset function
	function reset(){
	var rand1=Math.floor(Math.random()*boje.length);
	$(ll[0]).css({transform: 'perspective(900px) rotateY(180deg)',background:boje[rand1],fontSize:'0px',});	
	$(ll[1]).css({fontSize:'0px',transform: 'perspective(900px) rotateY(180deg)',background:boje[rand1],fontSize:'0px',});
	
	click=0;
	ll=[];
	joke();

	
	
}////end of reset

})



}////end of event function 


//asdasdadadaasda


})///////////end of main function