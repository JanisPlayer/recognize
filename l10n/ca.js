OC.L10N.register(
    "recognize",
    {
    "Recognize" : "Reconeix",
    "Smart media tagging for Nextcloud" : "Etiquetatge intel·ligent de mitjans per a Nextcloud",
    "This app goes through your media collection and adds fitting tags, automatically categorizing your photos and music.\n\n* 📷 👪 Recognizes faces from contact photos\n* 📷 🏔 Recognizes animals, landscapes, food, vehicles, buildings and other objects\n* 📷 🗼 Recognizes landmarks and monuments\n* 👂 🎵 Recognizes music genres\n* ⚡ Tagging works via Nextcloud's Collaborative Tags, allowing access by any of your apps\n  * 👂 listen to your tagged music with the audioplayer app\n  * 📷 view your tagged photos with the photos app\n\nAfter installation, you can enable tagging in the admin settings.\n\nRequirements:\n- PHP 7.4 and above\n- App \"collaborative tags\" enabled\n- For native speed:\n  - Processor: x86 64-bit (with support for AVX instructions)\n  - System with glibc (usually the norm on Linux; Alpine linux and FreeBSD are *not* such systems)\n- For sub-native speed (using JavaScript mode)\n  - Processor: x86 64-bit, arm64, armv7l (no AVX needed)\n  - System with glibc or musl (incl. Alpine linux)\n- ~4GB of free RAM (if you're cutting it close, make sure you have some swap available)\n\nThe app does not send any sensitive data to cloud providers or similar services. All processing is done on your Nextcloud machine, using Tensorflow.js running in Node.js." : "Aquesta aplicació passa per la vostra col·lecció de mitjans i afegeix etiquetes adequades, categoritzant automàticament les vostres fotos i música.\n\n* 📷 👪 Reconeix cares de les fotos de contacte\n* 📷 🏔 Reconeix animals, paisatges, aliments, vehicles, edificis i altres objectes\n* 📷 🗼 Reconeix fites i monuments\n* 👂 🎵 Reconeix els gèneres musicals\n* ⚡ L'etiquetatge funciona mitjançant les etiquetes col·laboratives de Nextcloud, que permeten l'accés a qualsevol de les vostres aplicacions\n  * 👂 escolta la teva música etiquetada amb l'aplicació reproductor d'àudio\n  * 📷 visualitza les teves fotos etiquetades amb l'aplicació de fotos\n\nDesprés de la instal·lació, podeu habilitar l'etiquetatge a la paràmetres de l'administració.\n\nRequisits:\n- PHP 7.4 i superior\n- Aplicació \"etiquetes col·laboratives\" habilitada\n- Per a la velocitat nativa:\n  - Processador: x86 de 64 bits (amb suport per a instruccions AVX)\n  - Sistema amb glibc (normalment la norma a Linux; Alpine Linux i FreeBSD *no* són aquests sistemes)\n- Per a velocitat subnativa (utilitzant el mode JavaScript)\n  - Processador: x86 de 64 bits, arm64, armv7l (no cal AVX)\n  - Sistema amb glibc o musl (incl. Alpine Linux)\n- ~ 4 GB de RAM lliure (si l'estàs tancant, assegureu-vos que teniu algun intercanvi disponible)\n\nL'aplicació no envia cap dada sensible a proveïdors de núvol o serveis similars. Tot el processament es fa a la vostra màquina Nextcloud, utilitzant Tensorflow.js que s'executa a Node.js.",
    "Status" : "Estat",
    "The machine learning models have been downloaded successfully." : "Els models d'aprenentatge automàtic s'han descarregat correctament.",
    "The machine learning models still need to be downloaded." : "Els models d'aprenentatge automàtic encara s'han de descarregar.",
    "Could not execute the Node.js binary. You may need to set the path to a working binary manually." : "No s'ha pogut executar el binari Node.js. És possible que hàgiu d'establir el camí a un binari de treball manualment.",
    "Background Jobs are not executed via cron. Recognize requires background jobs to be executed via cron." : "Les feines de fons no s'executen mitjançant cron. Recognize requereix que les tasques de fons s'executin mitjançant cron.",
    "The app is installed and will automatically classify files in background processes." : "L'aplicació està instal·lada i classificarà automàticament els fitxers en processos en segon pla.",
    "None of the tagging options below are currently selected. The app will currently do nothing." : "Cap de les opcions d'etiquetatge següents no està seleccionada actualment. Actualment l'aplicació no farà res.",
    "Image tagging" : "Etiquetatge d'imatges",
    "Face recognition is working. " : "El reconeixement facial funciona. ",
    "An error occurred during face recognition, please check the Nextcloud logs." : "S'ha produït un error durant el reconeixement facial; comproveu els registres de Nextcloud.",
    "Waiting for status reports on face recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "Esperant els informes d'estat del reconeixement facial. Si aquest missatge persisteix més enllà de 15 minuts, consulteu els registres de Nextcloud.",
    "Face recognition:" : "Reconeixement facial:",
    "Queued files" : "Fitxers a la cua",
    "Last classification: " : "Última classificació: ",
    "Object recognition is working." : "El reconeixement d'objectes funciona.",
    "An error occurred during object recognition, please check the Nextcloud logs." : "S'ha produït un error durant el reconeixement d'objectes, comproveu els registres de Nextcloud.",
    "Waiting for status reports on object recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "S'està esperant els informes d'estat del reconeixement d'objectes. Si aquest missatge persisteix més enllà de 15 minuts, consulteu els registres de Nextcloud.",
    "Object recognition:" : "Reconeixement d'objectes:",
    "Enable face recognition (groups pictures by people that appear in them in the photos app)" : "Habilita el reconeixement facial (agrupa les imatges de persones que hi apareixen a l'aplicació de fotografies)",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~500 or more, in WASM mode ~50 is recommended)" : "El nombre de fitxers a processar per execució de treballs (es programarà una tasca cada 5 minuts; per al funcionament normal ~500 o més, en mode WASM es recomana ~50)",
    "Enable object recognition (e.g. food, vehicles, landscapes)" : "Habilita el reconeixement d'objectes (p. ex., menjar, vehicles, paisatges)",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~100 or more, in WASM mode ~20 is recommended)" : "El nombre de fitxers a processar per execució de treballs (es programarà una tasca cada 5 minuts; per al funcionament normal ~100 o més, en mode WASM es recomana ~20)",
    "Enable landmark recognition (e.g. Eiffel Tower, Golden Gate Bridge)" : "Habilita el reconeixement de punts de referència (p. ex., Torre Eiffel, pont Golden Gate)",
    "Audio tagging" : "Etiquetatge d'àudio",
    "Audio recognition is working." : "El reconeixement d'àudio funciona.",
    "An error occurred during audio recognition, please check the Nextcloud logs." : "S'ha produït un error durant el reconeixement d'àudio, comproveu els registres de Nextcloud.",
    "Waiting for status reports on audio recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "S'està esperant els informes d'estat del reconeixement d'àudio. Si aquest missatge persisteix més enllà de 15 minuts, consulteu els registres de Nextcloud.",
    "Music genre recognition:" : "Reconeixement del gènere musical:",
    "Enable music genre recognition (e.g. pop, rock, folk, metal, new age)" : "Habilita el reconeixement del gènere musical (p. ex., pop, rock, folk, metall, new age)",
    "Video tagging" : "Etiquetatge de vídeo",
    "Video recognition is working." : "El reconeixement de vídeo funciona.",
    "An error occurred during video recognition, please check the Nextcloud logs." : "S'ha produït un error durant el reconeixement de vídeo, comproveu els registres de Nextcloud.",
    "Waiting for status reports on video recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "S'està esperant els informes d'estat del reconeixement de vídeo. Si aquest missatge persisteix més enllà de 15 minuts, consulteu els registres de Nextcloud.",
    "Video recognition:" : "Reconeixement de vídeo:",
    "Enable human action recognition (e.g. arm wrestling, dribbling basketball, hula hooping)" : "Habilita el reconeixement de l'acció humana (p. ex., lluita de braços, regatejant de bàsquet, hula hooping)",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~20 or more, in WASM mode ~5 is recommended)" : "El nombre de fitxers a processar per execució de treballs (es programarà una tasca cada 5 minuts; per al funcionament normal ~20 o més, en mode WASM es recomana ~5)",
    "Reset" : "Restableix",
    "Click the button below to remove all tags from all files that have been classified so far." : "Feu clic al botó següent per suprimir totes les etiquetes de tots els fitxers que s'han classificat fins ara.",
    "Reset tags for classified files" : "Restableix les etiquetes dels fitxers classificats",
    "Click the button below to remove all face detections from all files that have been classified so far." : "Feu clic al botó següent per suprimir totes les deteccions de cares de tots els fitxers que s'han classificat fins ara.",
    "Reset faces for classified files" : "Restableix les cares dels fitxers classificats",
    "Click the button below to rescan all files in this instance and add them to the classifier queues." : "Feu clic al botó següent per tornar a analitzar tots els fitxers en aquesta instància i afegir-los a les cues de classificadors.",
    "Rescan all files" : "Torna a escanejar tots els fitxers",
    "Terminal commands" : "Mostra les ordres del terminal",
    "To trigger a full classification run manually, run the following command on the server terminal." : "Per activar una classificació completa manualment, executeu l'ordre següent al terminal del servidor.",
    "To download all models preliminary to executing the classification jobs, run the following command on the server terminal." : "Per baixar tots els models previs a l'execució dels treballs de classificació, executeu l'ordre següent al terminal del servidor.",
    "You can reset the tags of all files that have been previously classified by Recognize with the following command:" : "Podeu restablir les etiquetes de tots els fitxers que s'han classificat prèviament per Recognize amb l'ordre següent:",
    "You can delete all tags that no longer have any files associated with them with the following command:" : "Podeu suprimir totes les etiquetes que ja no tenen fitxers associats amb l'ordre següent:",
    "CPU cores" : "Nuclis de CPU",
    "By default all available CPU cores will be used which may put your system under considerable load. To avoid this, you can limit the amount of CPU Cores used." : "De manera predeterminada, s'utilitzaran tots els nuclis de CPU disponibles que poden posar el vostre sistema sota una càrrega considerable. Per evitar-ho, podeu limitar la quantitat de nuclis de CPU utilitzats.",
    "Number of CPU Cores (0 for no limit)" : "Nombre de nuclis de CPU (0 sense límit)",
    "Tensorflow WASM mode" : "Mode WASM Tensorflow",
    "Checking CPU" : "Comprovació de la CPU",
    "Could not check whether your machine supports native TensorFlow operation." : "No s'ha pogut comprovar si la vostra màquina admet el funcionament natiu de TensorFlow.",
    "Your machine supports native TensorFlow operation, you do not need WASM mode." : "La vostra màquina admet el funcionament natiu de TensorFlow, no necessiteu el mode WASM.",
    "WASM mode was activated automatically, because your machine does not support native TensorFlow operation:" : "El mode WASM s'ha activat automàticament perquè la vostra màquina no admet el funcionament natiu de TensorFlow:",
    "Enable WASM mode" : "Habilita el mode WASM",
    "Node.js" : "Node.js",
    "Checking Node.js" : "Comprovant Node.js",
    "Node.js {version} binary was installed successfully." : "El binari Node.js {version} s'ha instal·lat correctament.",
    "Checking libtensorflow" : "Comprovant libtensorflow",
    "Could not load libtensorflow in Node.js. You can try to manually install libtensorflow or run in WASM mode." : "No s'ha pogut carregar libtensorflow a Node.js. Podeu provar d'instal·lar manualment libtensorflow o executar-lo en mode WASM.",
    "Libtensorflow was loaded successfully into Node.js." : "Libtensorflow s'ha carregat correctament a Node.js.",
    "Could not load Tensorflow WASM in Node.js. Something is wrong with your setup." : "No s'ha pogut carregar Tensorflow WASM a Node.js. Alguna cosa no funciona amb la vostra configuració.",
    "Tensorflow WASM was loaded successfully into Node.js." : "Tensorflow WASM s'ha carregat correctament a Node.js.",
    "If the shipped Node.js binary doesn't work on your system for some reason you can set the path to a custom node.js binary. Currently supported is Node v14.17 and newer v14 releases." : "Si el binari Node.js enviat no funciona al vostre sistema per algun motiu, podeu establir el camí a un binari node.js personalitzat. Actualment s'admet Node v14.17 i versions més recents v14.",
    "Your server does not support AVX instructions" : "El vostre servidor no admet instruccions AVX",
    "Your server does not have an x86 64-bit CPU" : "El vostre servidor no té una CPU x86 de 64 bits",
    "Your server uses musl libc" : "El vostre servidor utilitza musl libc",
    "Failed to load settings" : "Ha fallat carregar els paràmetres",
    "Failed to save settings" : "Ha fallat desar els paràmetres",
    "never" : "mai",
    "{time} ago" : "fa {time}",
    "Cat" : "Gat",
    "Animal" : "Animal",
    "Wildlife" : "Fauna salvatge",
    "Nature" : "Natura",
    "Puma" : "Puma",
    "Leopard" : "Lleopard",
    "Lion" : "Lleó",
    "Wild cat" : "Gat salvatge",
    "Cheetah" : "Guepard",
    "Seashore" : "Costa del mar",
    "Beach" : "Platja",
    "Water" : "Aigua",
    "Lakeside" : "Riba del llac",
    "Flower" : "Flor",
    "Plant" : "Planta",
    "Window" : "Finestra",
    "Architecture" : "Arquitectura",
    "Stairs" : "Escales",
    "Building" : "Edifici",
    "Field" : "Camp",
    "Farm" : "Granja",
    "Landscape" : "Apaïsat",
    "Portrait" : "Vertical",
    "People" : "Gent",
    "Fashion" : "Moda",
    "Ship" : "Vaixell",
    "Vehicle" : "Vehicle",
    "Grasshopper" : "Llagosta",
    "Insect" : "Insecte",
    "Fish" : "Peix",
    "Shark" : "Tauró",
    "Chicken" : "Pollastre",
    "Bird" : "Ocell",
    "Ostrich" : "Estruç",
    "Owl" : "Mussol",
    "Salamander" : "Salamandra",
    "Frog" : "Granota",
    "Turtle" : "Tortuga",
    "Reptile" : "Rèptil",
    "Lizard" : "Llangardaix",
    "Chameleon" : "Camaleó",
    "Crocodile" : "Cocodril",
    "Alligator" : "Caiman",
    "Scorpion" : "Escorpió",
    "Spider" : "Aranya",
    "Duck" : "Ànec",
    "Worm" : "Cuc",
    "Shell" : "Closca",
    "Snail" : "Cargol",
    "Crab" : "Cranc",
    "Lobster" : "Llagosta",
    "Cooking" : "Cuina",
    "Penguin" : "Pingüí",
    "Whale" : "Balena",
    "Dog" : "Gos",
    "Wolf" : "Llop",
    "Fox" : "Guineu",
    "Bear" : "Ós",
    "Beetle" : "Escarabat",
    "Butterfly" : "Papallona",
    "Rabbit" : "Conill",
    "Hippo" : "Hipopòtam",
    "Cow" : "Vaca",
    "Buffalo" : "Búfal",
    "Sheep" : "Ovella",
    "Ape" : "Simi",
    "Monkey" : "Mico",
    "Lemur" : "Lèmur",
    "Elephant" : "Elefant",
    "Panda" : "Panda",
    "Instrument" : "Instrument",
    "Music" : "Música",
    "Aircraft" : "Aeronau",
    "Airport" : "Aeroport",
    "Tractor" : "Tractor",
    "Weapon" : "Arma",
    "Backpack" : "Motxilla",
    "Shop" : "Botiga",
    "Office" : "Oficina",
    "Outdoor" : "A l'aire lliure",
    "Living" : "Vivent",
    "Tower" : "Torre",
    "Drinks" : "Begudes",
    "Beverage" : "Beguda",
    "Food" : "Menjar",
    "Shelter" : "Refugi",
    "Furniture" : "Mobles",
    "Book" : "Llibre",
    "Train" : "Tren",
    "Butcher" : "Carnisser",
    "Car" : "Cotxe",
    "Historic" : "Històric",
    "Boat" : "Vaixell",
    "Electronics" : "Electrònica",
    "Indoor" : "Interior",
    "Church" : "Església",
    "Shoe" : "Sabata",
    "Candle" : "Espelma",
    "Coffee" : "Cafè",
    "Keyboard" : "Teclat",
    "Computer" : "Ordinador",
    "Helmet" : "Casc",
    "Wall" : "Paret",
    "Clock" : "Rellotge",
    "Dining" : "Menjador",
    "Kitchen" : "Cuina",
    "Snow" : "Neu",
    "Dome" : "Cúpula",
    "Screen" : "Pantalla",
    "Flag" : "Bandera",
    "Truck" : "Camió",
    "Store" : "Botiga",
    "Tool" : "Eina",
    "Pumpkin" : "Carabassa",
    "Vegetables" : "Verdures",
    "Photography" : "Fotografia",
    "Library" : "Biblioteca",
    "Display" : "Pantalla",
    "Bag" : "Sac",
    "Cup" : "Tassa",
    "Rocks" : "Roques",
    "Bus" : "Bus",
    "Bowl" : "Bol",
    "Monitor" : "Monitor",
    "Bike" : "Bicicleta",
    "Scooter" : "Scooter",
    "Camping" : "Acampada",
    "Cart" : "Cistella",
    "Piggy bank" : "Guardiola",
    "Bottle" : "Ampolla",
    "Plate" : "Plat",
    "Camera" : "Càmera",
    "Camper" : "Camper",
    "Barbecue" : "Barbacoa",
    "Basket" : "Cistell",
    "Diving" : "Busseig",
    "Snowmobile" : "Moto de neu",
    "Bridge" : "Pont",
    "Couch" : "Sofà",
    "Theater" : "Teatre",
    "Spoon" : "Cullera",
    "Comic" : "Còmic",
    "Soup" : "Sopa",
    "Dessert" : "Postres",
    "Bakery" : "Fleca",
    "Fruit" : "Fruita",
    "Pasta" : "Pasta",
    "Meat" : "Carn",
    "Pizza" : "Pizza",
    "Wine" : "Vi",
    "Alpine" : "Alpí",
    "Mountains" : "Muntanyes",
    "Sand" : "Sorra",
    "Wool" : "Llana",
    "Glass" : "Vidre",
    "Moment" : "Moment",
    "Info" : "Informació",
    "Document" : "Document",
    "Puzzle" : "Puzle",
    "Heritage" : "Patrimoni",
    "Safe" : "Caixa forta",
    "Bucket" : "Galleda",
    "Baby" : "Bebè",
    "Cradle" : "Bressol",
    "Patio" : "Pati",
    "Mountain" : "Muntanya",
    "Radio telescope" : "Radiotelescopi",
    "Theme park" : "Parc d'atraccions",
    "Festival" : "Festival",
    "Event" : "Esdeveniment",
    "Monument" : "Monument",
    "Balloon" : "Globus",
    "Crib" : "Bressol",
    "Fan" : "Ventall",
    "Gas station" : "Benzinera",
    "Wood" : "Fusta",
    "Bench" : "Banqueta",
    "Parking" : "Estacionament",
    "Traffic" : "Tràfic",
    "Public transport" : "Transport públic",
    "Umbrella" : "Paraigües",
    "Stage" : "Escenari",
    "Toy" : "Joguina",
    "Vase" : "Gerro",
    "Mailbox" : "Bústia",
    "Sign" : "Signar",
    "Gallery" : "Galeria",
    "Park" : "Parc"
},
"nplurals=2; plural=(n != 1);");
