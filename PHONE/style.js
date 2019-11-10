/*DROPDOWN*/
/* Cliquer sur le bouton fait apparaitre les sous-parties */
	function myFunction() {
	  document.getElementById("myDropdown").classList.toggle("show");
	}

	/* Fermer le dropdown pour un autre click */
	window.onclick = function(event) {
	  if (!event.target.matches('.dropbouton')) {
	    var dropdowns = document.getElementsByClassName("dropdown-content");
	    var i;
	    for (i = 0; i < dropdowns.length; i++) {
	      var openDropdown = dropdowns[i];
	      if (openDropdown.classList.contains('show')) {
	        openDropdown.classList.remove('show');
	      }
	    }
	  }
	}

/*NAVIGATION*/
	function openNav() {
	  document.getElementById("mySidenav").style.width = "250px";
	  document.getElementById("bloc").style.marginLeft = "250px";
	}

	function closeNav() {
	  document.getElementById("mySidenav").style.width = "0";
	  document.getElementById("bloc").style.marginLeft= "0";
	}

/*ANIMATION*/
	document.addEventListener('scroll',() => {
			let scrollValueOfPage  = document.documentElement.scrollTop;
	        if(scrollValueOfPage >= minScrollValue2) {
	            titre2 = document.querySelector("#text2")
	            sousTire = document.querySelector("#sous-texte")
	            img = document.querySelector("#img1")
	            titre2.classList.add("moreOpacity")
	            sousTire.classList.add("moreOpacity")
	            img.classList.add("moreOpacity")
	            titre2.style.transition = "1s";
	            minScrollValue2 = scrollValueOfPage;
	        }
	    }
	);

