			$(document).ready(function() {

				$('#img-get').hover(function() {
        			$(this).css('cursor','pointer');
    			});

				$('.clear').hover(function() {
        			$(this).css('cursor','pointer');
    			});

    			$(".clear").click(function(){
						<!-- Resultado -->		
						$(".result-post").hide();  			
						$(".clear").hide();

				});
				
				$("#img-get").click(function(){
					var request = $.get("http://" + location.host + "/test/");

					//$(".load").show();					
					//$(".load").show();

					$(".load").show();
					
					request.success(function(result) {

  								$(".load").delay("fast").fadeOut();

								$(".result-post").show();  			
								
								setTimeout(
  									function() 
  									{


										<!-- Resultado -->		
										$(".result-post").html("<pre><code>" + result + "</pre></code>");  			

										$(".clear").show();

		  							},500);

					});

					request.error(function(jqXHR, textStatus, errorThrown) {
						
						if (textStatus == 'timeout')
							$(".result-post").html("<pre><code>Servidor não respondeu: " +  errorThrown + "</pre></code>");  			

						if (textStatus == 'error')
							$(".result-post").html("<pre><code>Ocorreu um erro: " +  errorThrown + "</pre></code>");  			
					});

				});

			});
