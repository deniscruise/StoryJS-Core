/* Portuguese LANGUAGE
================================================== */
if(typeof VMM != 'undefined') {
	VMM.Language = {
		lang: "pt",
		api: {
			wikipedia: "pt"
		},
		date: {
		    month: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
			month_abbr: ["Jan", "Fev", "Mar", "Abr", "Maio", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
			day: ["Domingo","Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"],
			day_abbr: ["Dom","Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]
		},
		dateformats: {
			year: "yyyy",
			month_short: "mmm",
			month: "mmmm yyyy",
			full_short: "mmm d",
			full: "mmmm d',' yyyy",
			time_short: "h:MM:ss TT",
			time_no_seconds_short: "h:MM TT",
			time_no_seconds_small_date: "h:MM TT'<br/><small>'mmmm d',' yyyy'</small>'",
			full_long: "mmm d',' yyyy 'at' hh:MM TT",
			full_long_small_date: "hh:MM TT'<br/><small>mmm d',' yyyy'</small>'"
		},
		messages: {
			loading_timeline: "A carregar a timeline... ",
			return_to_title: "Voltar ao Título",
			expand_timeline: "Expandir Timeline",
			contract_timeline: "Colapsar Timeline",
			wikipedia: "Wikipedia, A enciclopedia Livre.",
			loading_content: "A carregar o conteúdo",
			loading: "A carregar"
		}
	}
}