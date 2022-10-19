OC.L10N.register(
    "recognize",
    {
    "Recognize" : "Erkennen",
    "Smart media tagging for Nextcloud" : "Intelligente Media-Verschlagwortung für Nextcloud",
    "This app goes through your media collection and adds fitting tags, automatically categorizing your photos and music.\n\n* 📷 👪 Recognizes faces from contact photos\n* 📷 🏔 Recognizes animals, landscapes, food, vehicles, buildings and other objects\n* 📷 🗼 Recognizes landmarks and monuments\n* 👂 🎵 Recognizes music genres\n* ⚡ Tagging works via Nextcloud's Collaborative Tags, allowing access by any of your apps\n  * 👂 listen to your tagged music with the audioplayer app\n  * 📷 view your tagged photos with the photos app\n\nAfter installation, you can enable tagging in the admin settings.\n\nRequirements:\n- PHP 7.4 and above\n- App \"collaborative tags\" enabled\n- For native speed:\n  - Processor: x86 64-bit (with support for AVX instructions)\n  - System with glibc (usually the norm on Linux; Alpine linux and FreeBSD are *not* such systems)\n- For sub-native speed (using JavaScript mode)\n  - Processor: x86 64-bit, arm64, armv7l (no AVX needed)\n  - System with glibc or musl (incl. Alpine linux)\n- ~4GB of free RAM (if you're cutting it close, make sure you have some swap available)\n\nThe app does not send any sensitive data to cloud providers or similar services. All processing is done on your Nextcloud machine, using Tensorflow.js running in Node.js, which comes bundled with this app." : "Diese App durchsucht Ihre Mediensammlung und fügt passende Tags hinzu, wodurch Ihre Fotos und Musik automatisch kategorisiert werden.\n\n* 📷 👪 Erkennt Gesichter aus Kontaktfotos\n* 📷 🏔 Erkennt Tiere, Landschaften, Lebensmittel, Fahrzeuge, Gebäude und andere Objekte\n* 📷 🗼 Erkennt Sehenswürdigkeiten und Denkmäler\n* 👂 🎵 Erkennt Musikgenres\n* ⚡ Tagging funktioniert über die Collaborative Tags von Nextcloud und ermöglicht den Zugriff durch jede Ihrer Apps\n* 👂 Hören Sie Ihre markierte Musik mit der Audioplayer-App\n* 📷 Sehen Sie sich Ihre markierten Fotos mit der Foto-App an\n\nNach der Installation können Sie das Tagging in den Admin-Einstellungen aktivieren.\n\nAnforderungen:\n- PHP 7.4 und höher\n- App \"kollaborative Tags\" aktiviert\n- Für native Geschwindigkeit:\n - Prozessor: x86 64bit (mit Unterstützung für AVX-Anweisungen)\n - System mit glibc (normalerweise die Norm unter Linux; Alpine Linux und FreeBSD sind *keine* solchen Systeme)\n- Für subnative Geschwindigkeit (unter Verwendung des JavaScript-Modus)\n - Prozessor: x86 64bit, arm64, armv7l (kein AVX erforderlich)\n - System mit glibc oder musl (inkl. Alpine Linux)\n- ~4 GB freier RAM (wenn Sie ihn knapp beschneiden, stellen Sie sicher, dass Sie etwas Swap zur Verfügung haben)\n\nDie App sendet keine sensiblen Daten an Cloud-Anbieter oder ähnliche Dienste. Die gesamte Verarbeitung erfolgt auf Ihrem Nextcloud-Computer mit Tensorflow.js, das in Node.js ausgeführt wird, das mit dieser App gebündelt ist.",
    "Status" : "Status",
    "The machine learning models have been downloaded successfully." : "Die Modelle für maschinelles Lernen wurden erfolgreich heruntergeladen.",
    "The machine learning models still need to be downloaded." : "Die Modelle für maschinelles Lernen müssen noch heruntergeladen werden.",
    "The app is installed and will automatically classify files in background processes." : "Die App ist installiert und klassifiziert Dateien automatisch in Hintergrundprozessen.",
    "None of the tagging options below are currently selected. The app will currently do nothing." : "Keine der folgenden Tagging-Optionen ist derzeit ausgewählt. Die App wird derzeit nichts tun.",
    "Image tagging" : "Bild-Verschlagwortung",
    "Face recognition is working. " : "Die Gesichtserkennung funktioniert.",
    "An error occurred during face recognition, please check the Nextcloud logs." : "Bei der Gesichtserkennung ist ein Fehler aufgetreten, bitte überprüfen Sie die Nextcloud-Protokolle.",
    "Waiting for status reports on face recognition. If this message persists beyond 30 minutes, please check the Nextcloud logs." : "Warten auf Statusberichte zur Gesichtserkennung. Wenn diese Meldung länger als 30 Minuten angezeigt wird, überprüfen Sie bitte die Nextcloud-Protokolle.",
    "Face recognition:" : "Gesichtserkennung:",
    "Queued files" : "Dateien in der Warteschlange",
    "Last classification: " : "Letzte Klassifikation",
    "Object recognition is working." : "Die Objekterkennung funktioniert.",
    "An error occurred during object recognition, please check the Nextcloud logs." : "Bei der Objekterkennung ist ein Fehler aufgetreten, bitte überprüfen Sie die Nextcloud-Protokolle.",
    "Waiting for status reports on object recognition. If this message persists beyond 30 minutes, please check the Nextcloud logs." : "Warten auf Statusmeldungen zur Objekterkennung. Wenn diese Meldung länger als 30 Minuten angezeigt wird, überprüfen Sie bitte die Nextcloud-Protokolle.",
    "Object recognition:" : "Objekterkennung:",
    "Enable face recognition (groups pictures by people that appear in them in the photos app)" : "Gesichtserkennung aktivieren (gruppiert Bilder nach Personen, die in der Foto-App darin erscheinen)",
    "Enable object recognition (e.g. food, vehicles, landscapes)" : "Objekterkennung aktivieren (z. B. Lebensmittel, Fahrzeuge, Landschaften)",
    "Enable landmark recognition (e.g. Eiffel Tower, Golden Gate Bridge)" : "Wahrzeichenerkennung aktivieren (z. B. Eiffelturm, Golden Gate Bridge)",
    "Audio tagging" : "Audio-Verschlagwortung",
    "Audio recognition is working." : "Die Audioerkennung funktioniert.",
    "An error occurred during audio recognition, please check the Nextcloud logs." : "Bei der Audioerkennung ist ein Fehler aufgetreten, bitte überprüfen Sie die Nextcloud-Protokolle.",
    "Waiting for status reports on audio recognition. If this message persists beyond 30 minutes, please check the Nextcloud logs." : "Warten auf Statusberichte zur Audioerkennung. Wenn diese Meldung länger als 30 Minuten angezeigt wird, überprüfen Sie bitte die Nextcloud-Protokolle.",
    "Music genre recognition:" : "Erkennung des Musikgenres:",
    "Enable music genre recognition (e.g. pop, rock, folk, metal, new age)" : "Musikgenre-Erkennung aktivieren (z. B. Pop, Rock, Folk, Metal, New Age)",
    "Video tagging" : "Video-Verschlagwortung",
    "Video recognition is working." : "Die Videoerkennung funktioniert.",
    "An error occurred during video recognition, please check the Nextcloud logs." : "Bei der Videoerkennung ist ein Fehler aufgetreten, bitte überprüfen Sie die Nextcloud-Protokolle.",
    "Waiting for status reports on video recognition. If this message persists beyond 30 minutes, please check the Nextcloud logs." : "Warten auf Statusmeldungen zur Videoerkennung. Wenn diese Meldung länger als 30 Minuten angezeigt wird, überprüfen Sie bitte die Nextcloud-Protokolle.",
    "Video recognition:" : "Videoerkennung:",
    "Enable human action recognition (e.g. arm wrestling, dribbling basketball, hula hooping)" : "Aktivieren Sie die Erkennung menschlicher Aktionen (z. B. Armdrücken, Dribbeln beim Basketball, Hula-Hoop)",
    "Reset" : "Zurücksetzen",
    "Click the button below to remove all tags from all files that have been classified so far." : "Klicken Sie auf die Schaltfläche unten, um alle Tags von allen bisher klassifizierten Dateien zu entfernen.",
    "Reset tags for classified files" : "Tags für klassifizierte Dateien zurücksetzen",
    "Click the button below to rescan all files in this instance and add them to the classifier queues." : "Auf die Schaltfläche unten klicken, um alle Dateien in dieser Instanz erneut zu scannen und sie den Klassifizierungswarteschlangen hinzuzufügen.",
    "Rescan all files" : "Alle Dateien erneut scannen",
    "Terminal commands" : "Terminalbefehle",
    "To trigger a full classification run manually, run the following command on the server terminal." : "Um einen vollständigen Klassifizierungslauf manuell auszulösen, führen Sie den folgenden Befehl im Server-Terminal aus.",
    "To download all models preliminary to executing the classification jobs, run the following command on the server terminal." : "Um alle Modelle vor der Ausführung der Klassifizierungs-Aufgaben herunterzuladen, führen Sie den folgenden Befehl im Server-Terminal aus.",
    "You can reset the tags of all files that have been previously classified by Recognize with the following command:" : "Sie können die Tags aller Dateien, die zuvor von Recognize klassifiziert wurden, mit dem folgenden Befehl zurücksetzen:",
    "You can delete all tags that no longer have any files associated with them with the following command:" : "Mit dem folgenden Befehl können Sie alle Tags löschen, denen keine Dateien mehr zugeordnet sind:",
    "CPU cores" : "CPU-Kerne",
    "By default all available CPU cores will be used which may put your system under considerable load. To avoid this, you can limit the amount of CPU Cores used." : "Standardmäßig werden alle verfügbaren CPU-Kerne verwendet, was Ihr System erheblich belasten kann. Um dies zu vermeiden, können Sie die Anzahl der verwendeten CPU-Kerne begrenzen.",
    "Number of CPU Cores (0 for no limit)" : "Anzahl der CPU-Kerne (0 für unbegrenzt)",
    "Tensorflow plain mode" : "Tensorflow-Plain-Modus",
    "Checking CPU" : "CPU wird überprüft",
    "Your machine supports native TensorFlow operation, you do not need WASM mode." : "Ihr Computer unterstützt den nativen TensorFlow-Betrieb, Sie benötigen den WASM-Modus nicht.",
    "WASM mode was activated automatically, because your machine does not support native TensorFlow operation:" : "Der WASM-Modus wurde automatisch aktiviert, da Ihr Computer den nativen TensorFlow-Betrieb nicht unterstützt:",
    "Enable WASM mode" : "WASM-Modus aktivieren",
    "Node.js path" : "Node.js-Pfad",
    "If the shipped Node.js binary doesn't work on your system for some reason you can set the path to a custom node.js binary. Currently supported is Node v14.17 and newer v14 releases." : "Wenn die mitgelieferte Node.js-Binärdatei aus irgendeinem Grund auf Ihrem System nicht funktioniert, können Sie den Pfad zu einer benutzerdefinierte node.js-Binärdatei festlegen. Derzeit werden Node v14.17 und neuere v14-Releases unterstützt.",
    "Your server does not support AVX instructions" : "Ihr Server unterstützt keine AVX-Anweisungen",
    "Your server does not have an x86 64-bit CPU" : "Ihr Server hat keine x86 64-Bit-CPU",
    "Your server uses musl libc" : "Ihr Server verwendet musl-libc",
    "Failed to load settings" : "Einstellungen konnten nicht geladen werden",
    "Failed to save settings" : "Einstellungen konnten nicht gespeichert werden",
    "never" : "nie",
    "{time} ago" : "{time} her",
    "Cat" : "Katze",
    "Animal" : "Tier",
    "Wildlife" : "Tierwelt",
    "Nature" : "Natur",
    "Puma" : "Puma",
    "Leopard" : "Leopard",
    "Lion" : "Löwe",
    "Wild cat" : "Wildkatze",
    "Cheetah" : "Gepard",
    "Seashore" : "Küste",
    "Beach" : "Strand",
    "Water" : "Wasser",
    "Lakeside" : "Seeufer",
    "Flower" : "Blume",
    "Plant" : "Pflanze",
    "Window" : "Fenster",
    "Architecture" : "Architektur",
    "Stairs" : "Treppen",
    "Building" : "Gebäude",
    "Field" : "Feld",
    "Farm" : "Bauernhof",
    "Landscape" : "Landschaft",
    "Portrait" : "Porträt",
    "People" : "Personen",
    "Fashion" : "Mode",
    "Ship" : "Schiff",
    "Vehicle" : "Fahrzeug",
    "Grasshopper" : "Heuschrecke",
    "Insect" : "Insekt",
    "Fish" : "Fisch",
    "Shark" : "Hai",
    "Chicken" : "Huhn",
    "Bird" : "Vogel",
    "Ostrich" : "Strauß",
    "Owl" : "Eule",
    "Salamander" : "Salamander",
    "Frog" : "Frosch",
    "Turtle" : "Schildkröte",
    "Reptile" : "Reptil",
    "Lizard" : "Eidechse",
    "Chameleon" : "Chamelion",
    "Crocodile" : "Krokodil",
    "Alligator" : "Aligator",
    "Scorpion" : "Skorpion",
    "Spider" : "Spinne",
    "Duck" : "Ente",
    "Worm" : "Wurm",
    "Shell" : "Muschel",
    "Snail" : "Schlange",
    "Crab" : "Krabbe",
    "Lobster" : "Hummer",
    "Cooking" : "Kochen",
    "Penguin" : "Pinguin",
    "Whale" : "Wal",
    "Dog" : "Hund",
    "Wolf" : "Wolf",
    "Fox" : "Fuchs",
    "Bear" : "Bär",
    "Beetle" : "Käfer",
    "Butterfly" : "Schmetterling",
    "Rabbit" : "Kanninchen",
    "Hippo" : "Nilpferd",
    "Cow" : "Kuh",
    "Buffalo" : "Büffel",
    "Sheep" : "Schaaf",
    "Ape" : "Affe",
    "Monkey" : "Affe",
    "Lemur" : "Lemure",
    "Elephant" : "Elefant",
    "Panda" : "Panda",
    "Instrument" : "Instrument",
    "Music" : "Musik",
    "Aircraft" : "Flugzeug",
    "Airport" : "Flughafen",
    "Tractor" : "Traktor",
    "Weapon" : "Waffe",
    "Backpack" : "Rucksack",
    "Shop" : "Geschäft",
    "Office" : "Büro",
    "Outdoor" : "Draußen",
    "Living" : "Leben",
    "Tower" : "Turm",
    "Drinks" : "Getränke",
    "Beverage" : "Getränke",
    "Food" : "Essen",
    "Shelter" : "Obdach",
    "Furniture" : "Möbel",
    "Book" : "Buch",
    "Train" : "Zug",
    "Butcher" : "Schlachter",
    "Car" : "Auto",
    "Historic" : "Historisch",
    "Boat" : "Boot",
    "Electronics" : "Elektronik",
    "Indoor" : "Innen",
    "Church" : "Kirche",
    "Shoe" : "Schuh",
    "Candle" : "Kerze",
    "Coffee" : "Kaffee",
    "Keyboard" : "Tastatur",
    "Computer" : "Computer",
    "Helmet" : "Helm",
    "Wall" : "Mauer",
    "Clock" : "Uhr",
    "Dining" : "Speisen",
    "Kitchen" : "Küche",
    "Snow" : "Schnee",
    "Dome" : "Kuppel",
    "Screen" : "Bildschirm",
    "Flag" : "Fahne",
    "Truck" : "LKW",
    "Store" : "Geschäft",
    "Tool" : "Werkzeug",
    "Pumpkin" : "Kürbis",
    "Vegetables" : "Gemüse",
    "Photography" : "Fotografie",
    "Library" : "Bibliothek",
    "Display" : "Anzeige",
    "Bag" : "Tasche",
    "Cup" : "Tasse",
    "Rocks" : "Felsen",
    "Bus" : "Bus",
    "Bowl" : "Schüssel",
    "Monitor" : "Monitor",
    "Bike" : "Fahrrad",
    "Scooter" : "Roller",
    "Camping" : "Camping",
    "Cart" : "Wagen",
    "Piggy bank" : "Sparschwein",
    "Bottle" : "Flasche",
    "Plate" : "Teller",
    "Camera" : "Kamera",
    "Camper" : "Wohnmobil",
    "Barbecue" : "Grillen",
    "Basket" : "Korb",
    "Diving" : "Tauchen",
    "Snowmobile" : "Schneemobil",
    "Bridge" : "Brücke",
    "Couch" : "Couch",
    "Theater" : "Theater",
    "Spoon" : "Löffel",
    "Comic" : "Comic",
    "Soup" : "Suppe",
    "Dessert" : "Nachtisch",
    "Bakery" : "Bäckerei",
    "Fruit" : "Frucht",
    "Pasta" : "Pasta",
    "Meat" : "Fleisch",
    "Pizza" : "Pizza",
    "Wine" : "Wein",
    "Alpine" : "Alpin",
    "Mountains" : "Berge",
    "Sand" : "Sand",
    "Wool" : "Wolle",
    "Glass" : "Glas",
    "Moment" : "Moment",
    "Info" : "Info",
    "Document" : "Dokument",
    "Puzzle" : "Puzzle",
    "Heritage" : "Erbe",
    "Safe" : "Safe",
    "Bucket" : "Bucket",
    "Baby" : "Baby",
    "Cradle" : "Wiege",
    "Patio" : "Terrasse",
    "Mountain" : "Berg",
    "Radio telescope" : "Radioteleskop",
    "Theme park" : "Themenpark",
    "Festival" : "Festival",
    "Event" : "Ereignis",
    "Monument" : "Denkmal",
    "Balloon" : "Ballon",
    "Crib" : "Krippe",
    "Fan" : "Ventilator",
    "Gas station" : "Tankstelle",
    "Wood" : "Holz",
    "Bench" : "Bank",
    "Parking" : "Parken",
    "Traffic" : "Verkehr",
    "Public transport" : "Öffentlicher Verkehr",
    "Umbrella" : "Regenschirm",
    "Stage" : "Bühne",
    "Toy" : "Spielzeug",
    "Vase" : "Vase",
    "Mailbox" : "Briefkasten",
    "Sign" : "Zeichen",
    "Gallery" : "Galerie",
    "Park" : "Park"
},
"nplurals=2; plural=(n != 1);");
