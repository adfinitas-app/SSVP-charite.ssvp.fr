
function sendData(q) {
    var data = {
        "email": pureField($('#f_email').val()),
        "phone": pureField(getPhone()),
        "language": "fr_FR",
        "event":"scoring_18",
        "quest_1_connaissanceSSVP": q[0],
        "quest_2_partagevaleurs": q[1],
        "quest_3_actionsproximite": q[2],
        "quest_5_don": q[4],
        "optin": getOptin(),
        "nps":q[3]
    };
    makeCorsRequest(data);
}
function sendNPS(q) {
    var data = {
        "woopra": {
            "host": "ssvp.fr",			// Nom du projet dans Woopra.

            /* Variables de configuration de la fiche utilisateur, préfixe : "cv_" */

            "cv_email": pureField($('#f_email').val()),
            "cv_optin": getOptin(),

            /* Variables de l'événement, : préfixe : "ce_" */

            "event": "nps",				// Nom de l'événement à tracker si applicable. Non préfixé.

            "score": q,
        }
    };
    //console.log(data);
    makeCorsRequest(data);
}

/*
 * Debut de la lib
 */

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}
function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
        // XHR for Chrome/Firefox/Opera/Safari.
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
        // XDomainRequest for IE.
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        // CORS not supported.
        xhr = null;
    }
    return xhr;
}
function makeCorsRequest(data) {
    var url = 'https://collector.calicut.adfinitas.io/3bdf94b9-416f-4086-a0ca-77734d52bff9';
    var body = JSON.stringify(data);
    var xhr = createCORSRequest('POST', url);
    if (!xhr) {
        alert('CORS not supported');
        return;
    }
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(body);
}

/*
 * Fin de la lib
 */
function getUTM() {
    var p = extractUrlParams();

    if (p['utm_source'] && p['utm_source'] !== "undefined")
        return p['utm_source'];
    else
        return "";
}

function getPhone() {
    return $('#f_phone').intlTelInput("getNumber");
}

function getPersonnalisationCourte() {
    return getCivilityLong().toUpperCase() + " " + pureField($('#f_lastname').val().toUpperCase());
}

function getPersonnalisation() {
    return getCivilityDear() + " " + getCivilityLong().toUpperCase() + " " + pureField($('#f_lastname').val().toUpperCase());
}

function getList() {
    var data = [];

    return data;
}

function pureField(string) {
    return (string.replace(/'/g, "%27").replace(/"/g, "&quot;"));
}


function getOptin() {
    if ($('#f_optin').is(":checked")) {
        return "NON";
    }
    return "OUI";
}

function getSexe() {
    if ($('#f_female').attr("checked") === "checked")
        return "Femme";
    else
        return 'Homme';
}

function getCivility() {
    if ($('#f_female').attr("checked") === "checked")
        return "Mme";
    else
        return 'M';
}

function getCivilityDear() {
    if ($('#f_female').attr("checked") === "checked")
        return "Chère";
    else
        return 'Cher';
}

function getCivilityLong() {
    if ($('#f_female').attr("checked") === "checked")
        return "Madame";
    else
        return 'Monsieur';
}
