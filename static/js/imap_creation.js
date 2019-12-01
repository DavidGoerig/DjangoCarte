      $(document).ready(function(e) {
          let i;
// Create a connection to the file.
          var Connect = new XMLHttpRequest();
          // Define which file to open and
          // send the request.
          Connect.open("GET", "/static/imap/map_config/" + $("#imap_id").text() +"/infos.xml", false);
          Connect.setRequestHeader("Content-Type", "text/xml");
          Connect.send(null);
          var xml = Connect.responseText,
              xmlDoc = $.parseXML( xml ),
              $xml = $( xmlDoc );

          var a = document.getElementById("svgObject"); // Get the SVG document inside the Object tag
          var svgDoc = a.contentDocument;
	// Get one of the SVG items by ID;
	// Set the colour to something else

          // LEGENDE
          $("#b1").css("background-color","#0000ff");
          $("#b2").css("background-color","#00ffff");
          $("#b3").css("background-color","#00ff80");
          $("#b4").css("background-color","#bfff00");
          $("#b5").css("background-color","#ffbf00");
          $("#b6").css("background-color","#ff8000");
          $("#b7").css("background-color","#ff0000");
          $("#b8").css("background-color","#ff0000");
          $("#b9").css("background-color","#800000");
          $("#b10").css("background-color","yellow");
          
          // Get all street name
          var street_names = find_street_name();

          
          function find_street_name() {
              var x, i;
              let attr = [];
              x = $xml.find( "h18" ).find("piet")[0].childNodes;
              for (i = 0; i< x.length; i++) {
                  if (x[i].nodeName !== "#text")
                      attr.push(x[i].nodeName)
              }
              return attr;
          }
          /*
          INFORMATION PART!
           */
          function write_in_info(item) {
              var $tofind = $xml.find( "nbrLamp" ).find(item.id);
              $('#nblamp').empty().text($tofind.text());
              $tofind = $xml.find( "p1" ).find(item.id);
              $('#p1').empty().text($tofind.text());
              $tofind = $xml.find( "p2" ).find(item.id);
              $('#p2').empty().text($tofind.text());
              var $tofind1 = $xml.find( "h18" ).find("piet").find(item.id);
              var $tofind2 = $xml.find( "h18" ).find("car").find(item.id);
              $('#nb18').empty().text($tofind1.text() + " / "+$tofind2.text());

              $tofind1 = $xml.find( "h19" ).find("piet").find(item.id);
              $tofind2 = $xml.find( "h19" ).find("car").find(item.id);
              $('#nb19').empty().text($tofind1.text() + " / "+$tofind2.text());

              $tofind1 = $xml.find( "h20" ).find("piet").find(item.id);
              $tofind2 = $xml.find( "h20" ).find("car").find(item.id);
              $('#nb20').empty().text($tofind1.text() + " / "+$tofind2.text());

              $tofind1 = $xml.find( "h21" ).find("piet").find(item.id);
              $tofind2 = $xml.find( "h21" ).find("car").find(item.id);
              $('#nb21').empty().text($tofind1.text() + " / "+$tofind2.text());

              $tofind1 = $xml.find( "h22" ).find("piet").find(item.id);
              $tofind2 = $xml.find( "h22" ).find("car").find(item.id);
              $('#nb22').empty().text($tofind1.text() + " / "+$tofind2.text());

              $tofind1 = $xml.find( "h23" ).find("piet").find(item.id);
              $tofind2 = $xml.find( "h23" ).find("car").find(item.id);
              $('#nb23').empty().text($tofind1.text() + " / "+$tofind2.text());

              $tofind1 = $xml.find( "h0" ).find("piet").find(item.id);
              $tofind2 = $xml.find( "h0" ).find("car").find(item.id);
              $('#nb0').empty().text($tofind1.text() + " / "+$tofind2.text());

              $tofind1 = $xml.find( "h1" ).find("piet").find(item.id);
              $tofind2 = $xml.find( "h1" ).find("car").find(item.id);
              $('#nb1').empty().text($tofind1.text() + " / "+$tofind2.text());

              $tofind1 = $xml.find( "h2" ).find("piet").find(item.id);
              $tofind2 = $xml.find( "h2" ).find("car").find(item.id);
              $('#nb2').empty().text($tofind1.text() + " / "+$tofind2.text());

              $tofind1 = $xml.find( "h3" ).find("piet").find(item.id);
              $tofind2 = $xml.find( "h3" ).find("car").find(item.id);
              $('#nb3').empty().text($tofind1.text() + " / "+$tofind2.text());

              $tofind1 = $xml.find( "h4" ).find("piet").find(item.id);
              $tofind2 = $xml.find( "h4" ).find("car").find(item.id);
              $('#nb4').empty().text($tofind1.text() + " / "+$tofind2.text());

              $tofind1 = $xml.find( "h5" ).find("piet").find(item.id);
              $tofind2 = $xml.find( "h5" ).find("car").find(item.id);
              $('#nb5').empty().text($tofind1.text() + " / "+$tofind2.text());

              $tofind1 = $xml.find( "h6" ).find("piet").find(item.id);
              $tofind2 = $xml.find( "h6" ).find("car").find(item.id);
              $('#nb6').empty().text($tofind1.text() + " / "+$tofind2.text());

              $tofind1 = $xml.find( "h7" ).find("piet").find(item.id);
              $tofind2 = $xml.find( "h7" ).find("car").find(item.id);
              $('#nb7').empty().text($tofind1.text() + " / "+$tofind2.text());
          }

          for (i in street_names) {
              $(svgDoc.getElementById(street_names[i])).click(function(e) {
                  $('#make_economy_lamp').val(this.id);
                  $('#make_economy_led').val(this.id);
                  write_in_info(this)
               });
          }
          /*
          COLOR PART!
           */

          function fill_strokes(item) {
              var pietorcar = $( "#pietorcar" ).val();
              for (i in street_names) {
                var to_test = Number($xml.find(item.id).find(pietorcar).find(street_names[i]).text());
                var find_col = find_color(to_test);
                $(svgDoc.getElementById(street_names[i])).css({ stroke: find_col });
              }
          }

          function find_color(number_car_or_piet) {
              switch (true) {
                  case number_car_or_piet < 0:
                      return "#8000ff";
                  case number_car_or_piet >= 0 && number_car_or_piet <= 10:
                      return "#0000ff";
                  case number_car_or_piet > 10 && number_car_or_piet <= 20:
                      return "#00ffff";
                  case number_car_or_piet > 20 && number_car_or_piet <= 30:
                      return "#00ff80";
                  case number_car_or_piet > 30 && number_car_or_piet <= 40:
                      return "#bfff00";
                  case number_car_or_piet > 40 && number_car_or_piet <= 50:
                      return "#ffff00";
                  case number_car_or_piet > 50 && number_car_or_piet <= 60:
                      return "#ffbf00";
                  case number_car_or_piet > 60 && number_car_or_piet <= 70:
                      return "#ff8000";
                  case number_car_or_piet > 70 && number_car_or_piet <= 80:
                      return "#ff0000";
                  case number_car_or_piet > 80 && number_car_or_piet <= 90:
                      return "#800000";
                  case number_car_or_piet > 90:
                      return "#4d0000";
                  default:
                      return "#ff0000";
              }
          }
          $('#h18').click(function(e) {
            fill_strokes(this)
          });
          $('#h19').click(function(e) {
              fill_strokes(this)
          });
          $('#h20').click(function(e) {
              fill_strokes(this)
          });
          $('#h21').click(function(e) {
              fill_strokes(this)
          });
          $('#h22').click(function(e) {
              fill_strokes(this)
          });
          $('#h23').click(function(e) {
              fill_strokes(this)
          });
          $('#h0').click(function(e) {
              fill_strokes(this)
          });
          $('#h1').click(function(e) {
              fill_strokes(this)
          });
          $('#h2').click(function(e) {
              fill_strokes(this)
          });
          $('#h3').click(function(e) {
              fill_strokes(this)
          });
          $('#h4').click(function(e) {
              fill_strokes(this)
          });
          $('#h5').click(function(e) {
              fill_strokes(this)
          });
          $('#h6').click(function(e) {
              fill_strokes(this)
          });
          $('#h7').click(function(e) {
              fill_strokes(this)
          });

      // PARTIE ECONOMIE
          var street_array_led = [];
          var street_array_lamp = [];

          // CONSTANTES
          var cout_lamp = 800;
          var eco_lamp = 50;
            var certif_gain = 30;

          function calc_nbr_lamp(){
              return street_array_lamp.length * 20 + street_array_led.length *20;
          }

          function fill_all_eco_part() {
              //remplir les rues
              var list_street = create_list();
              $('#chosen_street').empty().html(list_street);
              var nbr_lamp = calc_nbr_lamp();
              $('#nbrlampchange').empty().text(nbr_lamp);
              var cout_investissement = nbr_lamp * cout_lamp;
              $('#couteco').empty().text(cout_investissement);
              var eco = nbr_lamp * eco_lamp;
              $('#casheco').empty().text(eco);
              var certif = nbr_lamp * certif_gain;
              $('#gain_certif').empty().text(certif);
              // calculer le nombre de lampaire et l'afficher
              // calculer les économies faites par an et l'afficher
          }

          function create_list() {
              fLen = street_array_led.length;
              text = "<div class='row'>Rues choisies en LEDS</div><div class='row'><ul>";
              for (i = 0; i < fLen; i++) {
                  text += "<li>" + "Rue de " + street_array_led[i].substring(3,street_array_led[i].length) + "</li>";
              }
              text += "</ul></div>";
              fLen = street_array_lamp.length;
              text += "<div class='row'>Rues choisies en lampadaire intelligent</div><div class='row'><ul>";
              for (i = 0; i < fLen; i++) {
                  text += "<li>" + "Rue de " + street_array_lamp[i].substring(3,street_array_lamp[i].length) + "</li>";
              }
              text += "</ul></div>";
              return text;
          }
      $("#make_economy_lamp").click(function(e) {
          var toadd = $('#make_economy_lamp').val();
          alert(toadd);
          if (street_array_lamp.includes(toadd) === false &&
              street_array_led.includes(toadd) === false) {
              street_array_lamp.push(toadd)
          }
          fill_all_eco_part()
      });

        $("#make_economy_led").click(function(){
            var toadd = $('#make_economy_led').val();
            alert(toadd);
            if (street_array_lamp.includes(toadd) === false &&
              street_array_led.includes(toadd) === false) {
              street_array_led.push(toadd)
            }
            fill_all_eco_part()
        });

      });