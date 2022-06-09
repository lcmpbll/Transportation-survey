//UI 
$(document).ready(function() {
	$("form#transportation_survey").submit(function(event) {
		event.preventDefault();
		$("#work-responses").show();
		$("#fun-responses").show();
		$("input:checkbox[name=fun-transportation]:checked").each(function(){
			const workTransportationMode = $(this).val();
			$("#fun-responses").append(funTransportationMode + "<br>");
		});
		$("input:checkbox[name=work-transportation]:checked").each(function() {
				const workTransportationMode = $(this).val();
				$("#work-responses").append(workTransportationMode + "<br>");
		});
		$('#transportation_survey').hide();
	});
});