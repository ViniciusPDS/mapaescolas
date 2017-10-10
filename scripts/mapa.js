var mymap;
var sesi, meson, leandro, senai, angelo, palioto, educativa, marinalva, palhacinho, rosa, sonia, crista, ivone, retiro, marianina;

function inicializarMapa() {
	mymap = L.map('mapid').setView([-22.82, -47.27], 13);
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/\
    	licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    	maxZoom: 18,
   		id: 'mapbox.streets',
    	accessToken: 'pk.eyJ1IjoidmluaXBzIiwiYSI6ImNqN3l6cnBsejYzZ3UzM3Q2ZzZkczVrZDEifQ.NF5MQolzk07OW_tHRDvMWg'
	}).addTo(mymap);
}

function inicializarMarcadores() {
	sesi = L.marker([-22.8068534, -47.218501]).addTo(mymap);
	sesi.bindPopup("<b>Sesi 341 Centro Educacional.</b><br>\
	Endereço: R. Amazonas, 99 - Jardim Nova Veneza, Sumaré - SP, 13177-060<br>Telefone: (19) 3838-9710");

	meson = L.marker([-22.8210305, -47.2703668]).addTo(mymap);
	meson.bindPopup("<b>Colégio Méson.</b><br>\
		Endereço: R. Dezesseis de Dezembro, 279 - Centro, Sumaré - SP, 13170-018<br>Telefone: (19) 3883-1550");

	leandro = L.marker([-22.8284349, -47.2664738]).addTo(mymap);
	leandro.bindPopup("<b>Escola Municipal Dr. Leandro Franceschini.</b><br>\
		Endereço: R. Geraldo de Souza, 157/221 - Jardim Sao Carlos, Sumaré - SP, 13170-232<br>Telefone: (19) 3873-1574");

	senai = L.marker([-22.834085, -47.263166]).addTo(mymap);
	senai.bindPopup("<b>Escola Senai Celso Charuri</b><br>\
		Endereço: Av. Rebouças, 3965 - Jardim Sao Carlos, Sumaré - SP, 13170-023<br>Telefone: (19) 3828-9450");

	angelo = L.marker([-22.8072698, -47.2234512]).addTo(mymap);
	angelo.bindPopup("<b>E.E.Ângelo Campo Dall'Orto.</b><br>\
		Endereço: Av. São Paulo, 466 - Nova Veneza, Sumaré - SP, 13177-160<br>Telefone: (19) 3864-1023");

	palioto = L.marker([-22.832514, -47.2630722]).addTo(mymap);
	palioto.bindPopup("<b>E.M.E.F. Antônio Palioto.</b><br>\
		Endereço: R. Domingos Franklin Nogueira, 85 - Jardim Sao Carlos, Sumaré - SP, 13170-243<br>Telefone: (19) 3838-0483");

	educativa = L.marker([-22.825996, -47.264007]).addTo(mymap);
	educativa.bindPopup("<b>Escola Integrada Educativa.</b><br>\
		Endereço: R. Dom Barreto, 336 - Centro, Sumaré - SP, 13170-004<br>Telefone: (19) 3873-5587");

	marinalva = L.marker([-22.8152663, -47.2365887]).addTo(mymap);
	marinalva.bindPopup("<b>Marinalva Gimenes Colossal da Cunha</b><br>\
		Endereço: R. Antônio Menuzzo, S/N - Parque Jatobá, Sumaré - SP, 13175-642<br>Telefone: (19) 3873-4110");

	palhacinho = L.marker([-22.8063799, -47.2204179]).addTo(mymap);
	palhacinho.bindPopup("<b>E.M Palhacinho Dengoso.</b><br>\
		Endereço: R. Santa Catarina, 200 - Jardim Nova Veneza (Nova Veneza), Sumaré - SP, 13177-120<br>Telefone: (19) 3854-3100");

	rosa = L.marker([-22.8104115, -47.2295846]).addTo(mymap);
	rosa.bindPopup("<b>Escola Estadual Maria Rosa Carolino dos Santos.</b><br>\
		Endereço: Av. da Amizade, 4050 - Parque Silva Azevedo, Sumaré - SP, 13175-688<br>Telefone: (19) 3873-1911");

	sonia = L.marker([-22.8043125, -47.1992071]).addTo(mymap);
	sonia.bindPopup("<b>Sonia Maria Maschio Baptista Profa</b><br>\
		Endereço: R. Adélia Belonci Tomazin, 222 - Jardim Amelia, Sumaré - SP, 13175-680<br>Telefone: (19) 3832-2212");

	crista = L.marker([-22.808663, -47.2261798]).addTo(mymap);
	crista.bindPopup("<b>Escola Cristã de Sumaré.</b><br>\
		Endereço: R. Guaporé, 200 - Jardim Nova Veneza, Sumaré - SP, 13177-210<br>Telefone: (19) 3043-7582");

	ivone = L.marker([-22.8425441, -47.195995]).addTo(mymap);
	ivone.bindPopup("<b>Escola Estadual Professora Maria Ivone Martins Rosa.</b><br>\
		Endereço: R. Luciano Ramos Aiala, 589 - Jardim Denadai, Sumaré - SP, 13181-460<br>Telefone: (19) 3854-3699");

	retiro = L.marker([-22.8501075, -47.1869495]).addTo(mymap);
	retiro.bindPopup("<b>Escola Municipal Jardim Bom Retiro.</b><br>\
		Endereço: R. Maria Conceição da Rocha Ferraz, 537 - Jardim Bom Retiro, Sumaré - SP, 13181-655<br>Telefone: (19) 3864-2052");

	marianina = L.marker([-22.7976469, -47.2045961]).addTo(mymap);
	marianina.bindPopup("<b>Escola Estadual Marianina de Rosis Moraes.</b><br>\
		Endereço: Rua Nossa Senhora Aparecida, 279 - Parque Florelly, Sumaré - SP, 13178-201<br>Telefone: (19) 3854-3677");
}

function selecionarEscola() {
	var opcao = document.getElementById('escolas').selectedIndex;
	switch(opcao) {
		case 1:
			mymap.setView([-22.8210305, -47.2703668], 16);
			meson.openPopup();
		break;
		case 2:
			mymap.setView([-22.8072698, -47.2234512], 16);
			angelo.openPopup();
		break;
		case 3:
			mymap.setView([-22.832514, -47.2630722], 16);
			palioto.openPopup();
		break;
		case 4:
			mymap.setView([-22.8063799, -47.2204179], 16);
			palhacinho.openPopup();
		break;
		case 5:
			mymap.setView([-22.808663, -47.2261798], 16);
			crista.openPopup();
		break;
		case 6:
			mymap.setView([-22.7976469, -47.2045961], 16);
			marianina.openPopup();
		break;
		case 7:
			mymap.setView([-22.8104115, -47.2295846], 16);
			rosa.openPopup();
		break;
		case 8:
			mymap.setView([-22.8425441, -47.195995], 16);
			ivone.openPopup();
		break;
		case 9:
			mymap.setView([-22.825996, -47.264007], 16);
			educativa.openPopup();
		break;
		case 10:
			mymap.setView([-22.8284349, -47.2664738], 16);
			leandro.openPopup();
		break;
		case 11:
			mymap.setView([-22.8501075, -47.1869495], 16);
			retiro.openPopup();
		break;
		case 12:
			mymap.setView([-22.834085, -47.263166], 16);
			senai.openPopup();
		break;
		case 13:
			mymap.setView([-22.8152663, -47.2365887], 16);
			marinalva.openPopup();
		break;
		case 14:
			mymap.setView([-22.8068534, -47.218501], 16);
			sesi.openPopup();
		break;
		case 15:
			mymap.setView([-22.8043125, -47.1992071], 16);
			sonia.openPopup();
		break;

	}
}