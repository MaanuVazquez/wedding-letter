/* Author: Maanu a.k.a. La Bist */
$(document).ready(() => {

	/* Hacemos las imagenes unselectables & undraggables */
	$('img').on('dragstart', event => { event.preventDefault(); });
	$('img').addClass('unselectable');
	$('img').attr( "unselectable", "on");

	/* Configuramos el flip de la carta */
	$('#carta').flip({
  	trigger: 'manual'
	});

	/* Agregamos la animación de que caiga (bounceInDown) y rotamos la carta 15 grados a la izquierda */
	$('.front').addClass('animated bounceInDown');
	$('#carta').rotate({
    angle: 0,
    animateTo:-15,
    center: ["30%", "0%"],
    duration: 1600
	});

	setTimeout(() => {
		/* Retiramos la animación de caida (bounceInDown) y realizamos el flip */
		$('.front').removeClass('animated bounceInDown');
		$('#carta').flip(true);
		setTimeout(() => {
			/* Hacemos la animación de abrir la tapa */
  		$('#tapa').addClass('abrirTapa');
			setTimeout(() => {
				/* Ponemos la nueva tapa y retiramos la tarjeta de adentro */
	  		$('#tapa').hide();
				$('#tapa-abierta').show();
				$('#tarjetaf').css('position', 'relative');
				$('#tarjetaf').addClass('sacarTarjeta');
				setTimeout(() => {
					$('#tarjetaf').hide();
					$('#tarjeta').show();
					$('#tarjeta').addClass('animated bounceInDown');
				}, 1000);
  		}, 600);
		}, 600);
  }, 1000);

	$('#carta').click(() => {
		if (!clicks) {

		  clicks++;
		} else {
			
		}
	});

	/** Evento de click de la opción de lista de regalos */
	$('#link-regalos').click(event => {
		event.preventDefault();
		$('#tarjeta-transferencia').hide();
		$('#tarjeta-regalos').show();
		$('#tarjeta-regalos').addClass('animated bounceInLeft');
		$('.rotate-regalos').rotate(15);
		setTimeout(() => {
					$('#tarjeta-regalos').removeClass('animated bounceInLeft');
	  }, 1000);
	});

	/** Evento de click de la opción de transferencia */
	$('#link-transferencia').click(event => {
		event.preventDefault();
		$('#tarjeta-regalos').hide();
		$('#tarjeta-transferencia').show();
		$('#tarjeta-transferencia').addClass('animated bounceInLeft');
		$('.rotate-transferencia').rotate(8);
		setTimeout(() => {
					$('#tarjeta-transferencia').removeClass('animated bounceInLeft');
	  }, 1000);
	});

});

/** Clickable animations

	let clicks = 0;

	setTimeout(() => {
		$('.front').removeClass('animated bounceInDown');
		$('#carta').flip(true);
  }, 1000);

	$('#carta').click(() => {
		if (!clicks) {
			$('#tapa').addClass('abrirTapa');
			setTimeout(() => {
				$('#tapa').hide();
				$('#tapa-abierta').show();
		  }, 300);
		  clicks++;
		} else {
			$('#tarjetaf').css('position', 'relative');
			$('#tarjetaf').addClass('sacarTarjeta');
			setTimeout(() => {
				$('#tarjetaf').hide();
				$('#tarjeta').show();
				$('#tarjeta').addClass('animated bounceInDown');
				setTimeout(() => {
					$('#carta').css('cursor', 'auto');
			  }, 1000);
		  }, 1000);
		}
	});

*/