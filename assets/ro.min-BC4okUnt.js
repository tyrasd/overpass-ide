const e={presets:{categories:{"category-barrier":{name:"Bariere"},"category-building":{name:"Clădiri"},"category-landuse":{name:"Utilizări de Teren"},"category-playground":{name:"Echipament de loc de joacă"},"category-restriction":{name:"Restricții"},"category-route":{name:"Rute"}},fields:{access:{label:"Acces Permis",options:{customers:{description:"Restricționat clienților la destinație",title:"Clienți"},designated:{description:"Acces permis după semne și legi locale specifice.",title:"Desemnat"},destination:{description:"Acces permis doar pentru a ajunge la o destinație.",title:"Destinație"},dismount:{title:"Descăleca"},no:{description:"Nu este permis accesul publicului general.",title:"Interzis"},permissive:{description:"Acces permis până când proprietarul revocă permisiunea. ",title:"Permisiv"},permit:{description:"Acces permis doar cu un permis valid sau licență.",title:"Permis"},private:{title:"Privat"},unknown:{description:"Condițiile de acces sunt necunoscute sau neclare.",title:"Necunoscut"},yes:{title:"Permis"}},placeholder:"Nespecificat",types:{access:"Tot",bicycle:"Biciclete",foot:"Pe Jos",horse:"Cai",motor_vehicle:"Vehicule cu Motor"}},access_aisle:{label:"Tip"},access_simple:{label:"Acces Permis",options:{customers:"Doar clienți",no:"Niciunul",permissive:"Permisiv",permit:"Doar cu permis"}},address:{label:"Adresă",placeholders:{block_number:"Număr Bloc","block_number!jp":"Nr. Bloc",city:"Oraș","city!vn":"Oraș/Sat",conscriptionnumber:"123",country:"Țară",county:"Județ","county!jp":"District",district:"District",floor:"Etaj",hamlet:"Hamlet",housename:"Nume de Casă",housenumber:"123",neighbourhood:"Cartier",place:"Loc",postcode:"Cod poștal",province:"Provincie","province!jp":"Prefectură",quarter:"Cartier",state:"Stat",street:"Stradă",subdistrict:"Subdistrict",suburb:"Suburbie"}},admin_level:{label:"Nivel Administrativ"},aerialway:{label:"Tip"},"aerialway/access":{label:"Acces",options:{both:"Amândouă",entry:"IIntrare",exit:"Ieșire"}},"aerialway/capacity":{label:"Capacitate (pe oră)",placeholder:"500, 2500, 5000..."},"aerialway/duration":{label:"Durată (minute)",placeholder:"1, 2, 3..."},"aerialway/heating":{label:"Încălzit"},"aerialway/occupancy":{label:"Ocupare",placeholder:"2, 4, 8..."},"aerialway/summer/access":{label:"Acces (vara)",options:{both:"Amândouă",entry:"Intrare",exit:"Ieșire"}},aeroway:{label:"Tip"},amenity:{label:"Tip"},animal_boarding:{label:"Pentru Animale"},animal_breeding:{label:"Pentru Animale"},animal_shelter:{label:"Pentru Animale"},"area/highway":{label:"Tip"},artist:{label:"Artist"},artwork_type:{label:"Tip"},atm:{label:"ATM"},barrier:{label:"Tip"},"bath/open_air":{label:"Aer Liber"},"bath/type":{label:"Specialitate"},bench:{label:"Bancă"},bicycle_parking:{label:"Tip"},bin:{label:"Gunoi"},blood_components:{label:"Componente de Sânge",options:{plasma:"plasmă",platelets:"trombocite",stemcells:"probe de celule stem",whole:"întregul sânge"}},board_type:{label:"Tip"},boules:{label:"Tip"},boundary:{label:"Tip"},brand:{label:"Brand"},building:{label:"Clădire"},building_area:{label:"Clădire"},bunker_type:{label:"Tip"},"camera/direction":{label:"Direcție (Grade în Sens de Ceasornic)",placeholder:"45, 90, 180, 270"},"camera/type":{label:"Tip Cameră",options:{dome:"Dom",fixed:"Fixat",panning:"Mișcător"}},capacity:{label:"Capacitate",placeholder:"50, 100, 200..."},castle_type:{label:"Tip"},clothes:{label:"Haine"},club:{label:"Tip"},collection_times:{label:"Ore de colectare"},communication_multi:{label:"Tipuri de Comunicație"},construction:{label:"Tip"},"contact/webcam":{label:"URL de Webcam",placeholder:"http://example.com/"},content:{label:"Conținut"},country:{label:"Țară"},covered:{label:"Acoperit"},craft:{label:"Tip"},crossing:{label:"Tip"},cuisine:{label:"Bucătării"},currency_multi:{label:"Tipuri de Valută"},cycle_network:{label:"Rețea"},cycleway:{label:"Drumuri de Biciclete",options:{lane:{title:"Drum de Biciclete Standard"},none:{description:"Fără Drum de Biciclete",title:"Niciun"}},placeholder:"niciun",types:{"cycleway:left":"Partea stângă","cycleway:right":"Partea dreaptă"}},date:{label:"Dată"},delivery:{label:"Livrare"},denomination:{label:"Denominare"},denotation:{label:"Denotație"},description:{label:"Descripție"},direction_clock:{options:{anticlockwise:"Sens antiorar",clockwise:"Sens orar"}},direction_vertex:{options:{forward:"Înainte"}},display:{label:"Afișare"},dock:{label:"Tip"},duration:{label:"Durată"},electrified:{options:{no:"Nu",yes:"Da (nespecificat)"}},email:{label:"Email",placeholder:"example@example.com"},embankment:{label:"Tip",placeholder:"Implicit"},emergency:{label:"Urgență"},entrance:{label:"Tip"},except:{label:"Excepții"},fax:{label:"Fax",placeholder:"+31 42 123 4567"},fee:{label:"Taxă"},fence_type:{label:"Tip"},"fire_hydrant/type":{options:{wall:"Zid"}},fixme:{label:"Repară-mă"},ford:{label:"Tip",placeholder:"Implicit"},fuel:{label:"Benzină"},fuel_multi:{label:"Tipuri de Benzină"},gender:{label:"Sex",options:{female:"Feminin",male:"Masculin",unisex:"Unisex"},placeholder:"Necunoscut"},"generator/method":{label:"Metodă"},"generator/output/electricity":{placeholder:"50 MW, 100 MW, 200 MW..."},"generator/source":{label:"Sursă"},"generator/type":{label:"Tip"},government:{label:"Tip"},handicap:{label:"Handicap",placeholder:"1-18"},healthcare:{label:"Tip"},height:{label:"Înălțime (Metri)"},highway:{label:"Tip"},historic:{label:"Tip"},"historic/civilization":{label:"Civilizații Istorice"},hoops:{placeholder:"1, 2, 4..."},horse_dressage:{options:{equestrian:"Da",undefined:"Nu"}},incline:{label:"Înclinare"},incline_steps:{label:"Înclinare",options:{down:"Jos",up:"Sus"}},indoor:{label:"Înăuntru"},information:{label:"Tip"},inscription:{label:"Inscripție"},internet_access:{label:"Conexiune Internet",options:{no:"Nu",terminal:"Terminal",wired:"Conectat",wlan:"Wifi",yes:"Da"}},kerb:{label:"Curbură"},lamp_type:{label:"Tip"},landuse:{label:"Tip"},lanes:{label:"Benzi",placeholder:"1, 2, 3..."},layer:{label:"Strat"},leaf_cycle:{options:{mixed:"Mixat"}},leaf_type:{options:{mixed:"Mixat"}},leisure:{label:"Tip"},length:{label:"Lungime (Metri)"},level:{label:"Nivel"},location:{label:"Locație"},man_made:{label:"Tip"},manhole:{label:"Tip"},map_size:{label:"Acoperire"},map_type:{label:"Tip"},maxheight:{label:"Înălțime Maximă"},maxspeed:{label:"Limită de viteză",placeholder:"40, 50, 60..."},maxweight:{label:"Greutate Maximă"},"mtb/scale":{placeholder:"0, 1, 2, 3..."},"mtb/scale/uphill":{placeholder:"0, 1, 2, 3..."},name:{label:"Nume",placeholder:"Nume Comun (Dacă Există)"},natural:{label:"Natural"},network:{label:"Rețea"},network_bicycle:{options:{icn:"Internațional",lcn:"Local",ncn:"Național",rcn:"Regional"}},network_foot:{options:{iwn:"Internațional",lwn:"Local",nwn:"Național",rwn:"Regional"}},network_horse:{options:{ihn:"Internațional",lhn:"Local",nhn:"Național",rhn:"Regional"}},network_road:{label:"Rețea"},note:{label:"Notă"},office:{label:"Tip"},oneway:{label:"Sens unic",options:{no:"Nu",undefined:"Presupus a fi Nu",yes:"Da"}},oneway_yes:{label:"O singură direcție",options:{no:"Nu",undefined:"Presupus a fi Da",yes:"Da"}},opening_hours:{label:"Ore"},operator:{label:"Operator"},par:{placeholder:"3, 4, 5..."},parking:{label:"Tip",options:{surface:"Suprafaţă"}},phone:{label:"Telefon",placeholder:"+31 42 123 4567"},"piste/difficulty":{label:"Dificultate"},"piste/grooming":{options:{classic:"Clasic",skating:"Skating"}},"piste/type":{label:"Tip",options:{hike:"Drumeție",nordic:"Nordic",playground:"Loc de Joacă",sled:"Sanie",sleigh:"Sanie"}},place:{label:"Tip"},"plant/output/electricity":{placeholder:"500 MW, 1000 MW, 2000 MW..."},population:{label:"Populație"},power:{label:"Tip"},product:{label:"Produse"},railway:{label:"Tip"},ref_aeroway_gate:{label:"Număr de Poartă"},ref_golf_hole:{placeholder:"1-18"},ref_highway_junction:{label:"Număr de Juncție"},ref_platform:{label:"Număr de Platformă"},ref_road_number:{label:"Număr de Stradă"},ref_route:{label:"Număr de Rută"},ref_stop_position:{label:"Număr de Stop"},relation:{label:"Tip"},religion:{label:"Religie"},restriction:{label:"Tip"},restrictions:{label:"Restricții de Întoarcere"},rooms:{label:"Camere"},route:{label:"Tip"},route_master:{label:"Tip"},sac_scale:{label:"Dificultate de Drumeție"},seasonal:{label:"Sezonal"},second_hand:{label:"Vinde Utilizate",options:{no:"Nu",only:"Doar",yes:"Da"},placeholder:"Da, Nu, Doar"},service:{label:"Tip"},"service/vehicle":{label:"Servicii"},service_rail:{label:"Tip de Serviciu"},shelter:{label:"Adăpost"},shelter_type:{label:"Tip"},shop:{label:"Tip"},site:{label:"Tip"},smoking:{label:"Fumători"},social_facility:{label:"Tip"},source:{label:"Surse"},sport:{label:"Sporturi"},sport_ice:{label:"Sporturi"},sport_racing_motor:{label:"Sporturi"},sport_racing_nonmotor:{label:"Sporturi"},stars:{label:"Stele"},start_date:{label:"Dată Început"},step_count:{label:"Număr de Trepte"},stop:{options:{minor:"Stradă Minoră"}},structure:{label:"Structură",options:{bridge:"Pod",tunnel:"Tunel"},placeholder:"Necunoscut"},studio:{label:"Tip"},substation:{label:"Tip"},supervised:{label:"Supravegheat"},support:{label:"Suport"},surface:{label:"Suprafață"},"surveillance/type":{options:{camera:"Cameră",guard:"Paznic"}},takeaway:{options:{no:"Nu",yes:"Da"}},"toilets/disposal":{options:{chemical:"Chemical"}},tomb:{label:"Tip"},tourism:{label:"Tip"},"tower/construction":{label:"Construcție"},"tower/type":{label:"Tip"},traffic_calming:{label:"Tip"},traffic_signals:{label:"Tip"},trail_visibility:{placeholder:"Excelent, Bun, Prost..."},trees:{label:"Copaci"},visibility:{label:"Vizibilitate"},voltage:{label:"Voltaj"},"voltage/primary":{label:"Voltaj primar"},"voltage/secondary":{label:"Voltaj secundar"},"voltage/tertiary":{label:"Voltaj terțiar"},wall:{label:"Tip"},water:{label:"Tip"},waterway:{label:"Tip"},website:{label:"Website"},wetland:{label:"Tip"},width:{label:"Grosime (Metri)"},wikipedia:{label:"Wikipedia"},windings:{placeholder:"1, 2, 3..."}},presets:{address:{name:"Adresă"},"advertising/billboard":{name:"Billboard"},"aerialway/mixed_lift":{name:"Lift Mixat"},"aeroway/aerodrome":{name:"Aeroport"},"aeroway/helipad":{name:"Heliport"},"amenity/arts_centre":{name:"Centru de Artă"},"amenity/atm":{name:"Bancomat"},"amenity/bank":{name:"Banca"},"amenity/bar":{name:"Bar"},"amenity/bench":{name:"Bancă"},"amenity/bicycle_parking":{name:"Parcare biciclete"},"amenity/bicycle_rental":{name:"Închiriere biciclete"},"amenity/boat_rental":{name:"Închiriere Barcă"},"amenity/bureau_de_change":{name:"Schimbare Valută"},"amenity/cafe":{name:"Cafenea"},"amenity/car_rental":{name:"Închiriere Mașini"},"amenity/car_wash":{name:"Spălătorie Auto"},"amenity/casino":{name:"Cazino"},"amenity/charging_station":{name:"Benzinărie"},"amenity/childcare":{name:"Grădiniță"},"amenity/cinema":{name:"Cinema"},"amenity/clinic":{name:"Clinică"},"amenity/clock":{name:"Ceas"},"amenity/community_centre":{name:"Centru Comunitar"},"amenity/compressed_air":{name:"Aer Comprimat"},"amenity/courthouse":{name:"Tribunal"},"amenity/crematorium":{name:"Crematoriu"},"amenity/dentist":{name:"Dentist"},"amenity/doctors":{name:"Doctor"},"amenity/drinking_water":{name:"Apă de Băut"},"amenity/driving_school":{name:"Școală de Șoferi"},"amenity/embassy":{name:"Ambasadă"},"amenity/fast_food":{name:"Fast Food"},"amenity/fire_station":{name:"Pompieri"},"amenity/fountain":{name:"Fântână"},"amenity/fuel":{name:"Benzinărie"},"amenity/grave_yard":{name:"Cimitir"},"amenity/hospital":{name:"Spital"},"amenity/hunting_stand":{name:"Stand de Vânătoare"},"amenity/ice_cream":{name:"Magazin de Înghețată"},"amenity/internet_cafe":{name:"Internet Cafe"},"amenity/library":{name:"Librărie"},"amenity/marketplace":{name:"Piață"},"amenity/motorcycle_parking":{name:"Parcare de Motociclete"},"amenity/nightclub":{name:"Club de Noapte"},"amenity/parking":{name:"Parcare"},"amenity/parking_space":{name:"Loc de Parcare"},"amenity/pharmacy":{name:"Farmacie"},"amenity/place_of_worship":{name:"Loc de Rugăciune"},"amenity/place_of_worship/buddhist":{name:"Templu Budist"},"amenity/place_of_worship/christian":{name:"Biserică Creștină"},"amenity/place_of_worship/hindu":{name:"Templu Hinduist"},"amenity/place_of_worship/jewish":{name:"Sinagogă Evreiască"},"amenity/place_of_worship/muslim":{name:"Moschee Musulmană"},"amenity/place_of_worship/shinto":{name:"Altar Shinto"},"amenity/place_of_worship/sikh":{name:"Templu Sikh"},"amenity/place_of_worship/taoist":{name:"Templu Taoist"},"amenity/planetarium":{name:"Planetariu"},"amenity/police":{name:"Poliție"},"amenity/post_office":{name:"Oficiul Poștal"},"amenity/prison":{name:"Închisoare"},"amenity/pub":{name:"Pub"},"amenity/public_bath":{name:"Baie Publică"},"amenity/recycling_centre":{name:"Centru de Reciclare"},"amenity/restaurant":{name:"Restaurant"},"amenity/school":{name:"Școală"},"amenity/social_facility":{name:"Facilitate Socială"},"amenity/studio":{name:"Studio"},"amenity/taxi":{name:"Stand de Taxi"},"amenity/telephone":{name:"Telefon"},"amenity/theatre":{name:"Teatru"},"amenity/townhall":{name:"Primărie"},"amenity/university":{name:"Universitate"},"amenity/veterinary":{name:"Medic Veterinar"},"amenity/waste_disposal":{name:"Container de Gunoi"},area:{name:"Suprafață"},barrier:{name:"Barieră"},"barrier/block":{name:"Blocaj"},"barrier/city_wall":{name:"Zid de Oraș"},"barrier/entrance":{name:"Intrare"},"barrier/fence":{name:"Gard"},"barrier/gate":{name:"Poartă"},"barrier/wall":{name:"Zid"},"boundary/administrative":{name:"Graniță Administrativă"},building:{name:"Clădire"},"building/apartments":{name:"Bloc de apartamente"},"building/barn":{name:"Grajd"},"building/bunker":{name:"Bunker"},"building/cabin":{name:"Cabină"},"building/cathedral":{name:"Catedrală"},"building/chapel":{name:"Capelă"},"building/church":{name:"Biserică"},"building/college":{name:"Colegiu"},"building/commercial":{name:"Clădire Comercială"},"building/construction":{name:"Clădire în Construcție"},"building/detached":{name:"Casă Detașată"},"building/dormitory":{name:"Dormitoriu"},"building/entrance":{name:"Intrare/Ieșire"},"building/garage":{name:"Garaj"},"building/garages":{name:"Garaje"},"building/greenhouse":{name:"Seră"},"building/hospital":{name:"Spital"},"building/hotel":{name:"Hotel"},"building/house":{name:"Casă"},"building/hut":{name:"Colibă"},"building/industrial":{name:"Clădire Industrială"},"building/public":{name:"Clădire Publică"},"building/residential":{name:"Clădire Rezidențială"},"building/retail":{name:"Clădire de Retail"},"building/roof":{name:"Acoperiș"},"building/school":{name:"Școală"},"building/semidetached_house":{name:"Casă Semi-detașată"},"building/static_caravan":{name:"Casă Mobilă Statică"},"building/terrace":{name:"Case în Rând"},"building/university":{name:"Universitate"},"building/warehouse":{name:"Depozit"},club:{name:"Club"},"craft/brewery":{name:"Berărie"},"craft/electrician":{name:"Electrician"},"craft/gardener":{name:"Grădinar"},"craft/insulator":{name:"Insulator"},"craft/painter":{name:"Pictor"},"craft/photographer":{name:"Fotograf"},"craft/photographic_laboratory":{name:"Laborator de Fotografie"},"craft/saddler":{name:"Șelar"},"craft/shoemaker":{name:"Cizmar"},"craft/window_construction":{name:"Geamgiu"},"craft/winery":{name:"Vinărie"},embankment:{name:"Chei"},"emergency/ambulance_station":{name:"Stație de Ambulanță"},"emergency/defibrillator":{name:"Defibrilator"},entrance:{name:"Intrare / Ieșire"},ford:{name:"Vad"},"golf/fairway":{name:"Drum Maritim"},"golf/tee":{name:"Casa de Ceai"},"healthcare/blood_donation":{name:"Centru de Donație de Sânge"},"highway/corridor":{name:"Coridor Interior"},"highway/cycleway":{name:"Pistă biciclete"},"highway/elevator":{name:"Lift"},"highway/footway":{name:"Potecă"},"highway/motorway":{name:"Autostradă"},"highway/motorway_junction":{name:"Juncție de Autostradă / Ieșire"},"highway/motorway_link":{name:"Intrare în Autostradă"},"highway/path":{name:"Potecă"},"highway/primary":{name:"Drum principal"},"highway/primary_link":{name:"Intrare în Drum Principal"},"highway/residential":{name:"Drum rezidențial"},"highway/road":{name:"Stradă Necunoscută"},"highway/secondary":{name:"Drum secundar"},"highway/secondary_link":{name:"Intrare în Stradă Secundară"},"highway/service":{name:"Stradă de Serviciu"},"highway/service/alley":{name:"Alee"},"highway/service/emergency_access":{name:"Acces de Urgențe"},"highway/service/parking_aisle":{name:"Drum de Parcare"},"highway/services":{name:"Zonă de Serviciu"},"highway/steps":{name:"Scări"},"highway/stop":{name:"Semn de Oprire"},"highway/street_lamp":{name:"Lampă Stradală"},"highway/tertiary":{name:"Stradă Terțiară"},"highway/tertiary_link":{name:"Intrare în Stradă Terțiară"},"highway/traffic_mirror":{name:"Oglindă de Trafic"},"highway/traffic_signals":{name:"Semnale de Trafic"},"highway/trunk":{name:"Drum Expres"},"highway/trunk_link":{name:"Intrare în Drum Expres"},"highway/turning_circle":{name:"Cerc de Cotitură"},"highway/unclassified":{name:"Stradă Minoră/Neclasificată"},historic:{name:"Sit Istoric"},"historic/archaeological_site":{name:"Sit Arheologic"},"historic/boundary_stone":{name:"Piatră de Graniță"},"historic/castle":{name:"Castel"},"historic/memorial":{name:"Memorial"},"historic/monument":{name:"Monument"},"historic/ruins":{name:"Ruine"},"historic/tomb":{name:"Mormânt"},junction:{name:"Juncție"},"landuse/aquaculture":{name:"Acvacultură"},"landuse/basin":{name:"Bazin"},"landuse/cemetery":{name:"Cimitir"},"landuse/churchyard":{name:"Curte de Biserică"},"landuse/commercial":{name:"Zonă Comercială"},"landuse/farm":{name:"Teren Agricol"},"landuse/farmland":{name:"Teren Agricol"},"landuse/farmyard":{name:"Curte Agricolă"},"landuse/grass":{name:"Iarbă"},"landuse/harbour":{name:"Port"},"landuse/industrial":{name:"Zonă Industrială"},"landuse/meadow":{name:"Pajiște"},"landuse/military":{name:"Zonă Militară"},"landuse/military/airfield":{name:"Aeroport Militar"},"landuse/military/barracks":{name:"Baraci"},"landuse/military/danger_area":{name:"Zonă de Pericol"},"landuse/military/range":{name:"Gamă Militară"},"landuse/residential":{name:"Zonă Rezidențială"},"landuse/retail":{name:"Zonă de Retail"},"landuse/vineyard":{name:"Curte de Vin"},"leisure/bowling_alley":{name:"Alee de Bowling"},"leisure/common":{name:"Comun"},"leisure/dance":{name:"Sală de Dans"},"leisure/dog_park":{name:"Parc de Câini"},"leisure/fitness_centre":{name:"Centru Fitness"},"leisure/fitness_centre/yoga":{name:"Studio Yoga"},"leisure/fitness_station":{name:"Stație de Fitness în Aer Liber"},"leisure/garden":{name:"Grădină"},"leisure/golf_course":{name:"Curs de Golf"},"leisure/miniature_golf":{name:"Minigolf"},"leisure/nature_reserve":{name:"Rezervat Natural"},"leisure/park":{name:"Parc"},"leisure/picnic_table":{name:"Masă de Picnic"},"leisure/pitch":{name:"Teren de Sport"},"leisure/pitch/american_football":{name:"Teren de Fotbal American"},"leisure/pitch/basketball":{name:"Teren de Basket"},"leisure/pitch/beachvolleyball":{name:"Teren de Volley de Plajă"},"leisure/pitch/cricket":{name:"Teren de Cricket"},"leisure/pitch/rugby_league":{name:"Teren de Rugby"},"leisure/pitch/skateboard":{name:"Park de Skate"},"leisure/pitch/soccer":{name:"Teren de Fotbal"},"leisure/pitch/table_tennis":{name:"Masă de Ping Pong"},"leisure/pitch/tennis":{name:"Teren de Tenis"},"leisure/pitch/volleyball":{name:"Teren de Voley"},"leisure/playground":{name:"Loc de Joacă"},"leisure/resort":{name:"Resort"},"leisure/sports_centre":{name:"Centru / Complex de Sport"},"leisure/sports_centre/swimming":{name:"Facilitate de Înnot"},"leisure/stadium":{name:"Stadion"},"leisure/swimming_pool":{name:"Piscină"},"leisure/water_park":{name:"Parc Acvatic"},line:{name:"Linie"},"man_made/chimney":{name:"Șemineu"},"man_made/embankment":{name:"Îmbarcare"},"man_made/lighthouse":{name:"Far"},"man_made/pier":{name:"Chei"},"man_made/pipeline":{name:"Condunctă"},"man_made/pumping_station":{name:"Stație de Pompare"},"man_made/silo":{name:"Siloz"},"man_made/storage_tank":{name:"Rezervor de Stocare"},"man_made/surveillance":{name:"Supraveghere"},"man_made/tower":{name:"Turn"},"man_made/wastewater_plant":{name:"Sta'ie de Epurare"},"man_made/water_tower":{name:"Turn de Apă"},"man_made/water_well":{name:"Fântână"},"man_made/watermill":{name:"Moară de Apă"},"man_made/windmill":{name:"Moară de Vânt"},"man_made/works":{name:"Fabrică"},"natural/bare_rock":{name:"Stâncă"},"natural/bay":{name:"Golf"},"natural/beach":{name:"Plajă"},"natural/cave_entrance":{name:"Intrare de Peșteră"},"natural/cliff":{name:"Faleză"},"natural/coastline":{name:"Linie de Coastă"},"natural/glacier":{name:"Ghețar"},"natural/grassland":{name:"Iarbă"},"natural/heath":{name:"Landă"},"natural/peak":{name:"Vârf"},"natural/ridge":{name:"Creastă"},"natural/sand":{name:"Nisip"},"natural/scree":{name:"Pietriș"},"natural/tree":{name:"Copac"},"natural/volcano":{name:"Vulcan"},"natural/water":{name:"Apă"},"natural/water/lake":{name:"Lac"},"natural/water/pond":{name:"Iaz"},"natural/water/reservoir":{name:"Rezervor"},"natural/wetland":{name:"Zonă Umedă"},"noexit/yes":{name:"Fără Ieșire"},office:{name:"Oficiu"},"office/administrative":{name:"Oficiu Administrativ"},"office/educational_institution":{name:"Instituție Educațională"},"office/employment_agency":{name:"Agenție de Muncă"},"office/estate_agent":{name:"Agenție Imobiliară"},"office/financial":{name:"Oficiu Financiar"},"office/government":{name:"Oficiu de Guvern"},"office/government/register_office":{name:"Oficiu de Registru"},"office/insurance":{name:"Oficiu de Asigurare"},"office/lawyer":{name:"Cabinet de Avocatură"},"office/lawyer/notary":{name:"Notar"},"office/ngo":{name:"Oficiu NGO"},"office/physician":{name:"Fizician"},"office/research":{name:"Birou de Cercetare"},"office/telecommunication":{name:"Oficiu Telecom"},"office/travel_agent":{name:"Agenție de Călătorii"},place:{name:"Loc"},"place/city":{name:"Oraș"},"place/farm":{name:"Fermă"},"place/hamlet":{name:"Cătun"},"place/island":{name:"Insulă"},"place/locality":{name:"Localitate"},"place/neighbourhood":{name:"Cartier"},"place/quarter":{name:"Cartier"},"place/square":{name:"Piață"},"place/suburb":{name:"Suburbie"},"place/town":{name:"Oraș"},"place/village":{name:"Sat"},point:{name:"Punct"},"power/generator":{name:"Generator de Energie"},"power/line":{name:"Linie de Alimentare"},"power/minor_line":{name:"Linie de Alimentare Minoră"},"power/pole":{name:"Stâlp de Energie"},"power/substation":{name:"Substație"},"power/tower":{name:"Turn de Înaltă Tensiune"},"power/transformer":{name:"Transformator"},"railway/abandoned":{name:"Cale Ferată Abandonată"},"railway/disused":{name:"Cale Ferată Învechită"},"railway/subway_entrance":{name:"Intrare Metrou"},relation:{name:"Relație"},"route/ferry":{name:"Rută de Bac"},shop:{name:"Magazin"},"shop/alcohol":{name:"Magazin de Băuturi Alcoolice",terms:"g"},"shop/appliance":{name:"Magazin de Electrocasnice"},"shop/art":{name:"Magazin de Artă"},"shop/baby_goods":{name:"Magazin de Produse pentru Bebeluși"},"shop/bag":{name:"Magazin de Bagaje"},"shop/bakery":{name:"Brutărie"},"shop/bathroom_furnishing":{name:"Magazin de Mobilier pentru Băi"},"shop/beauty":{name:"Magazin Beauty"},"shop/beauty/nails":{name:"Salon de Unghii"},"shop/beauty/tanning":{name:"Salon de Bronzat"},"shop/bed":{name:"Magazin de Saltele"},"shop/beverages":{name:"Magazin de Băuturi"},"shop/bicycle":{name:"Magazin de Biciclete"},"shop/bookmaker":{name:"Atelier de Cărți"},"shop/boutique":{name:"Boutique"},"shop/butcher":{name:"Măcelărie"},"shop/candles":{name:"Magazin de Lumânări"},"shop/car":{name:"Magazin de Mașini"},"shop/car_repair":{name:"Vulcanizare"},"shop/carpet":{name:"Magazin de Covoare"},"shop/charity":{name:"Magazin de Caritate"},"shop/cheese":{name:"Magazin de Brânzeturi"},"shop/chemist":{name:"Drogărie"},"shop/chocolate":{name:"Magazin de Ciocolată"},"shop/clothes":{name:"Magazin de Haine"},"shop/coffee":{name:"Magazin de Cafea"},"shop/computer":{name:"Magazin de Calculatoare"},"shop/confectionery":{name:"Magazin de Dulciuri"},"shop/convenience":{name:"Magazin Universal"},"shop/copyshop":{name:"Atelier de Copiere"},"shop/cosmetics":{name:"osmetic"},"shop/curtain":{name:"Magazin de Perdele"},"shop/dairy":{name:"Magazin de Lactate"},"shop/department_store":{name:"Magazin Universal"},"shop/doityourself":{name:"Magazin DIY"},"shop/dry_cleaning":{name:"Uscător"},"shop/e-cigarette":{name:"Magazin de Țigarete Electrice"},"shop/electronics":{name:"Magazin de Electronice"},"shop/erotic":{name:"Magazin Erotic"},"shop/fabric":{name:"Magazin de Materiale"},"shop/fashion":{name:"Magazin de Modă"},"shop/florist":{name:"Florărie"},"shop/funeral_directors":{name:"Casă Funerală"},"shop/furniture":{name:"Magazin de Mobilă"},"shop/garden_centre":{name:"Magazin de Grădinărit"},"shop/gift":{name:"Magazin de Cadouri"},"shop/hairdresser":{name:"Frizer"},"shop/interior_decoration":{name:"Magazin de Decorații Interioare"},"shop/kitchen":{name:"Magazin de Bucătărie"},"shop/laundry":{name:"Spălătorie"},"shop/lottery":{name:"Loterie"},"shop/mall":{name:"Mall"},"shop/massage":{name:"Masaj"},"shop/medical_supply":{name:"Magazin Alimentar Medical"},"shop/mobile_phone":{name:"Magazin de Telefoane Mobile"},"shop/money_lender":{name:"Creditor de Bani"},"shop/motorcycle":{name:"Magazin de Motociclete"},"shop/music":{name:"Magazin de Muzică"},"shop/musical_instrument":{name:"Magazin de Instrumente Muzicale"},"shop/nutrition_supplements":{name:"Magazin de Suplimente Nutritive"},"shop/optician":{name:"Optician"},"shop/outdoor":{name:"Magazin în Aer Liber"},"shop/paint":{name:"Magazin de Pictură"},"shop/perfumery":{name:"Magazin de Parfum"},"shop/pet":{name:"Magazin de Animale"},"shop/photo":{name:"Magazin de Fotografie"},"shop/pyrotechnics":{name:"Magazin de Artificii"},"shop/religion":{name:"Magazin Religios"},"shop/scuba_diving":{name:"Magazin de Scufundări"},"shop/seafood":{name:"Magazin de Fructe de Mare"},"shop/shoes":{name:"Magazin de Ghete"},"shop/sports":{name:"Magazin de Haine de Sport"},"shop/supermarket":{name:"Supermarket"},"shop/tattoo":{name:"Artist de Tatuaje"},"shop/tea":{name:"Magazin de Ceaiuri"},"shop/ticket":{name:"Vânzător de Bilete"},"shop/tobacco":{name:"Tăbăcărie"},"shop/toys":{name:"Magazin de Jucării"},"shop/travel_agency":{name:"Agenție de Călătorii"},"shop/tyres":{name:"Magazin de Roți"},"shop/vacant":{name:"Magazin Vacant"},"shop/vacuum_cleaner":{name:"Magazin de Aspiratoare"},"shop/video":{name:"Magazin Video"},"shop/video_games":{name:"Magazin de Jocuri de Calculator"},"shop/watches":{name:"Magazin de Ceasuri"},"shop/weapons":{name:"Magazin de Arme"},"shop/wine":{name:"Magazin de Vinuri"},"tourism/apartment":{name:"Apartament de Închiriat"},"tourism/aquarium":{name:"Acvariu"},"tourism/attraction":{name:"Atracție Turistică"},"tourism/camp_site":{name:"Teren de Camping"},"tourism/gallery":{name:"Galerie de Artă"},"tourism/guest_house":{name:"Pensiune"},"tourism/hostel":{name:"Hostel"},"tourism/hotel":{name:"Hotel"},"tourism/information":{name:"Informații"},"tourism/information/board":{name:"Panou de Informații"},"tourism/information/map":{name:"Hartă"},"tourism/motel":{name:"Motel"},"tourism/museum":{name:"Muzeu"},"tourism/picnic_site":{name:"Picnic"},"tourism/theme_park":{name:"Parc de Distracții"},"tourism/viewpoint":{name:"Punct de Vedere"},"tourism/zoo":{name:"Grădină Zoologică"},"traffic_calming/bump":{name:"Cucui de Viteză"},"traffic_calming/cushion":{terms:"g"},"traffic_calming/hump":{name:"Cucui de Viteză"},"traffic_calming/island":{name:"Insulă de Trafic"},"type/boundary":{name:"Graniță"},"type/boundary/administrative":{name:"Graniță Administrativă"},"type/multipolygon":{name:"Multipoligon"},"type/restriction":{name:"Restricție"},"type/restriction/no_left_turn":{name:"Fără Întoarcere la Stânga"},"type/restriction/no_right_turn":{name:"Fără Întoarcere la Dreapta"},"type/route":{name:"Rută"},"type/route/bus":{name:"Traseu Autobuz"},"type/route/detour":{name:"Rută Detur"},"type/route/ferry":{name:"Rută de Bac"},"type/route/hiking":{name:"Rută de Drumeție"},"type/route/pipeline":{name:"Rută de Conducte"},"type/route/power":{name:"Rută de Energie"},"type/route/road":{name:"Rută de Stadă"},"type/route/train":{name:"Rută de Tren"},"type/route/tram":{name:"Rută de Tranvai"},"type/site":{name:"Sit"},"waterway/boatyard":{name:"Curte de Bărci"},"waterway/canal":{name:"Canal"},"waterway/dam":{name:"Baraj"},"waterway/drain":{name:"Pârâu"},"waterway/river":{name:"Râu"},"waterway/stream":{name:"Fluviu",terms:"q"},"waterway/waterfall":{name:"Cascadă"}}}},a={ro:e};export{a as default,e as ro};
//# sourceMappingURL=ro.min-BC4okUnt.js.map