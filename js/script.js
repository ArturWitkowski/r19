var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');


$('#search').click(searchCountries);

function showErrorInfo () {
	alert("No country found.");
}

function searchCountries() {
	var countryName = $('#country-name').val();
	if(!countryName.length) countryName = 'Poland';
	$.ajax({
		url: url + countryName,
		method: 'GET',
		success: showCountriesList,
		error: showErrorInfo
	});
}

function showCountriesList(resp) { 
	countriesList.empty();
	resp.forEach(function(item) {
		$('<li>').html(item.name + "<ul><li>Capital: " + item.capital + " </li><li>Region: " + item.region + " </li><li>Population: " + item.population + " </li><li>Area: " + item.area + " </li></ul><br>").appendTo(countriesList); 
	})
}

$(document).ready(function() {
	
	$('#search').click(searchCountries());
	
});