function paakaupunki() {
    //Haetaan oikeasta teatterista tiedot
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://www.finnkino.fi/xml/Schedule/?area=1014", true);
    xmlhttp.send();

    //Luodaan kenttä jolla esitetään halutut tiedot
    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && 
        xmlhttp.status==200){
        var xmlDoc = xmlhttp.responseXML;
        //Valitaan datasta tagin avulla esitettävä teatter
        var teatteri = xmlDoc.getElementsByTagName("TheatreAndAuditorium");
        //Valitaan datasta tagin avulla esitettevä elokuva
        var elokuva = xmlDoc.getElementsByTagName("Title");
        //Valitaan datasta tagin avulla elokuvan aloitustaika
        var aika = xmlDoc.getElementsByTagName("dttmShowStart");
        //Valitaan datasta tagin avulla posteri kuva elokuvasta
        var kuva = xmlDoc.getElementsByTagName("EventSmallImagePortrait");
        
        //Luodaan table, jonka avulla data esitetään
        var setti = "<table id ='pohja'>"       ;
        //Luodaan tableen hieman selitystä 
        setti += "<tr><td>Aika</td><td>Elokuva</td><td>Posteri</td><td>Teatteri ja sali</td></tr>"
        //Toisto lause, joka käy läpi kaikki tietyllä tagilla olevat datan ja lisää tableen
        for(var i = 0; i < teatteri.length; i++) {
            setti += "<tr><td>" + aika[i].childNodes[0].nodeValue + "</td>" + 
            "<td>" + elokuva[i].childNodes[0].nodeValue + "</td>" + 
            "<td> <img src=" + kuva[i].childNodes[0].nodeValue + "></td>" +
            "<td>" +  teatteri[i].childNodes[0].nodeValue +
            "</td></tr>";
        }       
        //Päättää tablen
        setti += "</table>"
        //Lisää tablen html:ään.
        document.getElementById("pohjataha").innerHTML = setti;   
        

        }
    }

}

function jyvaskyla() {
    //Haetaan oikeasta teatterista tiedot
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://www.finnkino.fi/xml/Schedule/?area=1015", true);
    xmlhttp.send();

    //Luodaan kenttä jolla esitetään halutut tiedot
    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && 
        xmlhttp.status==200){
        var xmlDoc = xmlhttp.responseXML;
        //Valitaan datasta tagin avulla esitettävä teatter
        var teatteri = xmlDoc.getElementsByTagName("TheatreAndAuditorium");
        //Valitaan datasta tagin avulla esitettevä elokuva
        var elokuva = xmlDoc.getElementsByTagName("Title");
        //Valitaan datasta tagin avulla elokuvan aloitustaika
        var aika = xmlDoc.getElementsByTagName("dttmShowStart");
        //Valitaan datasta tagin avulla posteri kuva elokuvasta
        var kuva = xmlDoc.getElementsByTagName("EventSmallImagePortrait");
        
        //Luodaan table, jonka avulla data esitetään
        var setti = "<table id ='pohja'>"       ;
        //Luodaan tableen hieman selitystä 
        setti += "<tr><td>Aika</td><td>Elokuva</td><td>Posteri</td><td>Teatteri ja sali</td></tr>"
        //Toisto lause, joka käy läpi kaikki tietyllä tagilla olevat datan ja lisää tableen
        for(var i = 0; i < teatteri.length; i++) {
            setti += "<tr><td>" + aika[i].childNodes[0].nodeValue + "</td>" + 
            "<td>" + elokuva[i].childNodes[0].nodeValue + "</td>" + 
            "<td> <img src=" + kuva[i].childNodes[0].nodeValue + "></td>" +
            "<td>" +  teatteri[i].childNodes[0].nodeValue +
            "</td></tr>";
        }       
        //Päättää tablen
        setti += "</table>"
        //Lisää tablen html:ään.
        document.getElementById("pohjataha").innerHTML = setti;   
        

        }
    }

}

function kuopio() {
    //Haetaan oikeasta teatterista tiedot
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://www.finnkino.fi/xml/Schedule/?area=1016", true);
    xmlhttp.send();

    //Luodaan kenttä jolla esitetään halutut tiedot
    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && 
        xmlhttp.status==200){
        var xmlDoc = xmlhttp.responseXML;
        //Valitaan datasta tagin avulla esitettävä teatter
        var teatteri = xmlDoc.getElementsByTagName("TheatreAndAuditorium");
        //Valitaan datasta tagin avulla esitettevä elokuva
        var elokuva = xmlDoc.getElementsByTagName("Title");
        //Valitaan datasta tagin avulla elokuvan aloitustaika
        var aika = xmlDoc.getElementsByTagName("dttmShowStart");
        //Valitaan datasta tagin avulla posteri kuva elokuvasta
        var kuva = xmlDoc.getElementsByTagName("EventSmallImagePortrait");
        
        //Luodaan table, jonka avulla data esitetään
        var setti = "<table id ='pohja'>"       ;
        //Luodaan tableen hieman selitystä 
        setti += "<tr><td>Aika</td><td>Elokuva</td><td>Posteri</td><td>Teatteri ja sali</td></tr>"
        //Toisto lause, joka käy läpi kaikki tietyllä tagilla olevat datan ja lisää tableen
        for(var i = 0; i < teatteri.length; i++) {
            setti += "<tr><td>" + aika[i].childNodes[0].nodeValue + "</td>" + 
            "<td>" + elokuva[i].childNodes[0].nodeValue + "</td>" + 
            "<td> <img src=" + kuva[i].childNodes[0].nodeValue + "></td>" +
            "<td>" +  teatteri[i].childNodes[0].nodeValue +
            "</td></tr>";
        }       
        //Päättää tablen
        setti += "</table>"
        //Lisää tablen html:ään.
        document.getElementById("pohjataha").innerHTML = setti;   
        

        }
    }

}

function lahti() {
    //Haetaan oikeasta teatterista tiedot
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://www.finnkino.fi/xml/Schedule/?area=1017", true);
    xmlhttp.send();

    //Luodaan kenttä jolla esitetään halutut tiedot
    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && 
        xmlhttp.status==200){
        var xmlDoc = xmlhttp.responseXML;
        //Valitaan datasta tagin avulla esitettävä teatter
        var teatteri = xmlDoc.getElementsByTagName("TheatreAndAuditorium");
        //Valitaan datasta tagin avulla esitettevä elokuva
        var elokuva = xmlDoc.getElementsByTagName("Title");
        //Valitaan datasta tagin avulla elokuvan aloitustaika
        var aika = xmlDoc.getElementsByTagName("dttmShowStart");
        //Valitaan datasta tagin avulla posteri kuva elokuvasta
        var kuva = xmlDoc.getElementsByTagName("EventSmallImagePortrait");
        
        //Luodaan table, jonka avulla data esitetään
        var setti = "<table id ='pohja'>"       ;
        //Luodaan tableen hieman selitystä 
        setti += "<tr><td>Aika</td><td>Elokuva</td><td>Posteri</td><td>Teatteri ja sali</td></tr>"
        //Toisto lause, joka käy läpi kaikki tietyllä tagilla olevat datan ja lisää tableen
        for(var i = 0; i < teatteri.length; i++) {
            setti += "<tr><td>" + aika[i].childNodes[0].nodeValue + "</td>" + 
            "<td>" + elokuva[i].childNodes[0].nodeValue + "</td>" + 
            "<td> <img src=" + kuva[i].childNodes[0].nodeValue + "></td>" +
            "<td>" +  teatteri[i].childNodes[0].nodeValue +
            "</td></tr>";
        }       
        //Päättää tablen
        setti += "</table>"
        //Lisää tablen html:ään.
        document.getElementById("pohjataha").innerHTML = setti;   
        

        }
    }

}

function lappeenranta() {
    //Haetaan oikeasta teatterista tiedot
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://www.finnkino.fi/xml/Schedule/?area=1041", true);
    xmlhttp.send();

    //Luodaan kenttä jolla esitetään halutut tiedot
    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && 
        xmlhttp.status==200){
        var xmlDoc = xmlhttp.responseXML;
        //Valitaan datasta tagin avulla esitettävä teatter
        var teatteri = xmlDoc.getElementsByTagName("TheatreAndAuditorium");
        //Valitaan datasta tagin avulla esitettevä elokuva
        var elokuva = xmlDoc.getElementsByTagName("Title");
        //Valitaan datasta tagin avulla elokuvan aloitustaika
        var aika = xmlDoc.getElementsByTagName("dttmShowStart");
        //Valitaan datasta tagin avulla posteri kuva elokuvasta
        var kuva = xmlDoc.getElementsByTagName("EventSmallImagePortrait");
        
        //Luodaan table, jonka avulla data esitetään
        var setti = "<table id ='pohja'>"       ;
        //Luodaan tableen hieman selitystä 
        setti += "<tr><td>Aika</td><td>Elokuva</td><td>Posteri</td><td>Teatteri ja sali</td></tr>"
        //Toisto lause, joka käy läpi kaikki tietyllä tagilla olevat datan ja lisää tableen
        for(var i = 0; i < teatteri.length; i++) {
            setti += "<tr><td>" + aika[i].childNodes[0].nodeValue + "</td>" + 
            "<td>" + elokuva[i].childNodes[0].nodeValue + "</td>" + 
            "<td> <img src=" + kuva[i].childNodes[0].nodeValue + "></td>" +
            "<td>" +  teatteri[i].childNodes[0].nodeValue +
            "</td></tr>";
        }       
        //Päättää tablen
        setti += "</table>"
        //Lisää tablen html:ään.
        document.getElementById("pohjataha").innerHTML = setti;   
        

        }
    }

}

function oulu() {
    //Haetaan oikeasta teatterista tiedot
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://www.finnkino.fi/xml/Schedule/?area=1018", true);
    xmlhttp.send();

    //Luodaan kenttä jolla esitetään halutut tiedot
    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && 
        xmlhttp.status==200){
        var xmlDoc = xmlhttp.responseXML;
        //Valitaan datasta tagin avulla esitettävä teatter
        var teatteri = xmlDoc.getElementsByTagName("TheatreAndAuditorium");
        //Valitaan datasta tagin avulla esitettevä elokuva
        var elokuva = xmlDoc.getElementsByTagName("Title");
        //Valitaan datasta tagin avulla elokuvan aloitustaika
        var aika = xmlDoc.getElementsByTagName("dttmShowStart");
        //Valitaan datasta tagin avulla posteri kuva elokuvasta
        var kuva = xmlDoc.getElementsByTagName("EventSmallImagePortrait");
        
        //Luodaan table, jonka avulla data esitetään
        var setti = "<table id ='pohja'>"       ;
        //Luodaan tableen hieman selitystä 
        setti += "<tr><td>Aika</td><td>Elokuva</td><td>Posteri</td><td>Teatteri ja sali</td></tr>"
        //Toisto lause, joka käy läpi kaikki tietyllä tagilla olevat datan ja lisää tableen
        for(var i = 0; i < teatteri.length; i++) {
            setti += "<tr><td>" + aika[i].childNodes[0].nodeValue + "</td>" + 
            "<td>" + elokuva[i].childNodes[0].nodeValue + "</td>" + 
            "<td> <img src=" + kuva[i].childNodes[0].nodeValue + "></td>" +
            "<td>" +  teatteri[i].childNodes[0].nodeValue +
            "</td></tr>";
        }       
        //Päättää tablen
        setti += "</table>"
        //Lisää tablen html:ään.
        document.getElementById("pohjataha").innerHTML = setti;   
        

        }
    }

}

function pori() {
    //Haetaan oikeasta teatterista tiedot
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://www.finnkino.fi/xml/Schedule/?area=1019", true);
    xmlhttp.send();

    //Luodaan kenttä jolla esitetään halutut tiedot
    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && 
        xmlhttp.status==200){
        var xmlDoc = xmlhttp.responseXML;
        //Valitaan datasta tagin avulla esitettävä teatter
        var teatteri = xmlDoc.getElementsByTagName("TheatreAndAuditorium");
        //Valitaan datasta tagin avulla esitettevä elokuva
        var elokuva = xmlDoc.getElementsByTagName("Title");
        //Valitaan datasta tagin avulla elokuvan aloitustaika
        var aika = xmlDoc.getElementsByTagName("dttmShowStart");
        //Valitaan datasta tagin avulla posteri kuva elokuvasta
        var kuva = xmlDoc.getElementsByTagName("EventSmallImagePortrait");
        
        //Luodaan table, jonka avulla data esitetään
        var setti = "<table id ='pohja'>"       ;
        //Luodaan tableen hieman selitystä 
        setti += "<tr><td>Aika</td><td>Elokuva</td><td>Posteri</td><td>Teatteri ja sali</td></tr>"
        //Toisto lause, joka käy läpi kaikki tietyllä tagilla olevat datan ja lisää tableen
        for(var i = 0; i < teatteri.length; i++) {
            setti += "<tr><td>" + aika[i].childNodes[0].nodeValue + "</td>" + 
            "<td>" + elokuva[i].childNodes[0].nodeValue + "</td>" + 
            "<td> <img src=" + kuva[i].childNodes[0].nodeValue + "></td>" +
            "<td>" +  teatteri[i].childNodes[0].nodeValue +
            "</td></tr>";
        }       
        //Päättää tablen
        setti += "</table>"
        //Lisää tablen html:ään.
        document.getElementById("pohjataha").innerHTML = setti;   
        

        }
    }

}

function tampere() {
    //Haetaan oikeasta teatterista tiedot
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://www.finnkino.fi/xml/Schedule/?area=1021", true);
    xmlhttp.send();

    //Luodaan kenttä jolla esitetään halutut tiedot
    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && 
        xmlhttp.status==200){
        var xmlDoc = xmlhttp.responseXML;
        //Valitaan datasta tagin avulla esitettävä teatter
        var teatteri = xmlDoc.getElementsByTagName("TheatreAndAuditorium");
        //Valitaan datasta tagin avulla esitettevä elokuva
        var elokuva = xmlDoc.getElementsByTagName("Title");
        //Valitaan datasta tagin avulla elokuvan aloitustaika
        var aika = xmlDoc.getElementsByTagName("dttmShowStart");
        //Valitaan datasta tagin avulla posteri kuva elokuvasta
        var kuva = xmlDoc.getElementsByTagName("EventSmallImagePortrait");
        
        //Luodaan table, jonka avulla data esitetään
        var setti = "<table id ='pohja'>"       ;
        //Luodaan tableen hieman selitystä 
        setti += "<tr><td>Aika</td><td>Elokuva</td><td>Posteri</td><td>Teatteri ja sali</td></tr>"
        //Toisto lause, joka käy läpi kaikki tietyllä tagilla olevat datan ja lisää tableen
        for(var i = 0; i < teatteri.length; i++) {
            setti += "<tr><td>" + aika[i].childNodes[0].nodeValue + "</td>" + 
            "<td>" + elokuva[i].childNodes[0].nodeValue + "</td>" + 
            "<td> <img src=" + kuva[i].childNodes[0].nodeValue + "></td>" +
            "<td>" +  teatteri[i].childNodes[0].nodeValue +
            "</td></tr>";
        }       
        //Päättää tablen
        setti += "</table>"
        //Lisää tablen html:ään.
        document.getElementById("pohjataha").innerHTML = setti;   
        

        }
    }

}

function turku() {
    //Haetaan oikeasta teatterista tiedot
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://www.finnkino.fi/xml/Schedule/?area=1022", true);
    xmlhttp.send();

    //Luodaan kenttä jolla esitetään halutut tiedot
    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && 
        xmlhttp.status==200){
        var xmlDoc = xmlhttp.responseXML;
        //Valitaan datasta tagin avulla esitettävä teatter
        var teatteri = xmlDoc.getElementsByTagName("TheatreAndAuditorium");
        //Valitaan datasta tagin avulla esitettevä elokuva
        var elokuva = xmlDoc.getElementsByTagName("Title");
        //Valitaan datasta tagin avulla elokuvan aloitustaika
        var aika = xmlDoc.getElementsByTagName("dttmShowStart");
        //Valitaan datasta tagin avulla posteri kuva elokuvasta
        var kuva = xmlDoc.getElementsByTagName("EventSmallImagePortrait");
        
        //Luodaan table, jonka avulla data esitetään
        var setti = "<table id ='pohja'>"       ;
        //Luodaan tableen hieman selitystä 
        setti += "<tr><td>Aika</td><td>Elokuva</td><td>Posteri</td><td>Teatteri ja sali</td></tr>"
        //Toisto lause, joka käy läpi kaikki tietyllä tagilla olevat datan ja lisää tableen
        for(var i = 0; i < teatteri.length; i++) {
            setti += "<tr><td>" + aika[i].childNodes[0].nodeValue + "</td>" + 
            "<td>" + elokuva[i].childNodes[0].nodeValue + "</td>" + 
            "<td> <img src=" + kuva[i].childNodes[0].nodeValue + "></td>" +
            "<td>" +  teatteri[i].childNodes[0].nodeValue +
            "</td></tr>";
        }       
        //Päättää tablen
        setti += "</table>"
        //Lisää tablen html:ään.
        document.getElementById("pohjataha").innerHTML = setti;   
        

        }
    }

}


function raisio() {
    //Haetaan oikeasta teatterista tiedot
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://www.finnkino.fi/xml/Schedule/?area=1046", true);
    xmlhttp.send();

    //Luodaan kenttä jolla esitetään halutut tiedot
    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && 
        xmlhttp.status==200){
        var xmlDoc = xmlhttp.responseXML;
        //Valitaan datasta tagin avulla esitettävä teatter
        var teatteri = xmlDoc.getElementsByTagName("TheatreAndAuditorium");
        //Valitaan datasta tagin avulla esitettevä elokuva
        var elokuva = xmlDoc.getElementsByTagName("Title");
        //Valitaan datasta tagin avulla elokuvan aloitustaika
        var aika = xmlDoc.getElementsByTagName("dttmShowStart");
        //Valitaan datasta tagin avulla posteri kuva elokuvasta
        var kuva = xmlDoc.getElementsByTagName("EventSmallImagePortrait");
        
        //Luodaan table, jonka avulla data esitetään
        var setti = "<table id ='pohja'>"       ;
        //Luodaan tableen hieman selitystä 
        setti += "<tr><td>Aika</td><td>Elokuva</td><td>Posteri</td><td>Teatteri ja sali</td></tr>"
        //Toisto lause, joka käy läpi kaikki tietyllä tagilla olevat datan ja lisää tableen
        for(var i = 0; i < teatteri.length; i++) {
            setti += "<tr><td>" + aika[i].childNodes[0].nodeValue + "</td>" + 
            "<td>" + elokuva[i].childNodes[0].nodeValue + "</td>" + 
            "<td> <img src=" + kuva[i].childNodes[0].nodeValue + "></td>" +
            "<td>" +  teatteri[i].childNodes[0].nodeValue +
            "</td></tr>";
        }       
        //Päättää tablen
        setti += "</table>"
        //Lisää tablen html:ään.
        document.getElementById("pohjataha").innerHTML = setti;   
        

        }
    }

}

