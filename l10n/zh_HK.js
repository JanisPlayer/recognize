OC.L10N.register(
    "recognize",
    {
    "Recognize" : "識別",
    "Smart media tagging for Nextcloud" : "Nextcloud 的智能媒體標記",
    "This app goes through your media collection and adds fitting tags, automatically categorizing your photos and music.\n\n* 📷 👪 Recognizes faces from contact photos\n* 📷 🏔 Recognizes animals, landscapes, food, vehicles, buildings and other objects\n* 📷 🗼 Recognizes landmarks and monuments\n* 👂 🎵 Recognizes music genres\n* ⚡ Tagging works via Nextcloud's Collaborative Tags, allowing access by any of your apps\n  * 👂 listen to your tagged music with the audioplayer app\n  * 📷 view your tagged photos with the photos app\n\n## Ethical AI Rating\n### Rating for Photo object detection: 🟢\n\nPositive:\n* the software for training and inference of this model is open source\n* the trained model is freely available, and thus can be run on-premises\n* the training data is freely available, making it possible to check or correct for bias or optimise the performance and CO2 usage.\n\n### Rating for Photo face recognition: 🟢\n\nPositive:\n* the software for training and inference of this model is open source\n* the trained model is freely available, and thus can be run on-premises\n* the training data is freely available, making it possible to check or correct for bias or optimise the performance and CO2 usage.\n\n### Rating for Video action recognition: 🟢\n\nPositive:\n* the software for training and inferencing of this model is open source\n* the trained model is freely available, and thus can be ran on-premises\n* the training data is freely available, making it possible to check or correct for bias or optimise the performance and CO2 usage.\n\n## Ethical AI Rating\n### Rating Music genre recognition: 🟡\n\nPositive:\n* the software for training and inference of this model is open source\n* the trained model is freely available, and thus can be run on-premises\n\nNegative:\n* the training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\nLearn more about the Nextcloud Ethical AI Rating [in our blog](https://nextcloud.com/blog/nextcloud-ethical-ai-rating/).\n\nAfter installation, you can enable tagging in the admin settings.\n\nRequirements:\n- php 7.4 and above\n- App \"collaborative tags\" enabled\n- For native speed:\n  - Processor: x86 64-bit (with support for AVX instructions)\n  - System with glibc (usually the norm on Linux; FreeBSD, Alpine linux and thus also the official Nextcloud Docker container and Nextcloud AIO are *not* such systems)\n- For sub-native speed (using WASM mode)\n  - Processor: x86 64-bit, arm64, armv7l (no AVX needed)\n  - System with glibc or musl (incl. Alpine linux and thus also the official Nextcloud Docker container and also Nextcloud AIO)\n- ~4GB of free RAM (if you're cutting it close, make sure you have some swap available)\n- This app is currently incompatible with the *Suspicious Login* app due to a dependency conflict (ie. you can only have one of the two installed)\n\nThe app does not send any sensitive data to cloud providers or similar services. All processing is done on your Nextcloud machine, using Tensorflow.js running in Node.js." : "此應用程式會遍歷您的媒體收藏並添加合適的標籤，自動對您的照片和音樂進行分類。\n\n* 📷 👪 從聯絡人照片中識別面孔\n* 📷 🏔 識別動物、風景、食物、車輛、建築物和其他物體\n* 📷 🗼 識別地標和紀念碑\n* 👂 🎵 識別音樂流派\n* ⚡ 通過 Nextcloud 的協作標籤進行標記，允許您的任何應用程序進行訪問\n* 👂 使用音頻播放器應用程序聆聽您標記的音樂\n* 📷 使用照片應用程式查看您標記的照片\n\n## 道德人工智能評級\n### 照片對象檢測評級：🟢\n\n積極的：\n* 該模型的訓練和推理軟件是開源的\n* 經過訓練的模型是免費提供的，因此可以在本地運行\n* 訓練數據是免費提供的，可以檢查或糾正偏差或優化性能和二氧化碳的使用。\n\n### 照片人臉識別評分：🟢\n\n積極的：\n* 該模型的訓練和推理軟件是開源的\n* 經過訓練的模型是免費提供的，因此可以在本地運行\n* 訓練數據是免費提供的，可以檢查或糾正偏差或優化性能和二氧化碳的使用。\n\n### 視頻動作識別評級：🟢\n\n積極的：\n* 該模型的訓練和推理軟件是開源的\n* 經過訓練的模型是免費提供的，因此可以在本地運行\n* 訓練數據是免費提供的，可以檢查或糾正偏差或優化性能和二氧化碳的使用。\n\n## 道德人工智能評級\n### 評級音樂流派識別：🟡\n\n積極的：\n* 該模型的訓練和推理軟件是開源的\n* 經過訓練的模型是免費提供的，因此可以在本地運行\n\n消極的：\n* 訓練數據不是免費提供的，這限制了外部各方檢查和糾正偏差或優化模型性能和二氧化碳使用的能力。\n\n了解有關 Nextcloud 道德 AI 評級的更多信息 [在我們的博客中](https://nextcloud.com/blog/nextcloud-ethical-ai- rating/)。\n\n安裝後，您可以在管理設置中啟用標記。\n\n要求：\n- PHP 7.4 及以上版本\n- 啟用應用程序“協作標籤”\n- 對於本機速度：\n- 處理器：x86 64 位（支持 AVX 指令）\n- 具有 glibc 的系統（通常是 Linux 上的標準；FreeBSD、Alpine linux 以及官方 Nextcloud Docker 容器和 Nextcloud AIO *不是*此類系統）\n- 低於本機速度（使用 WASM 模式）\n- 處理器：x86 64 位、arm64、armv7l（無需 AVX）\n- 具有 glibc 或 musl 的系統（包括 Alpine linux，因此也是官方 Nextcloud Docker 容器和 Nextcloud AIO）\n- ~4GB 可用 RAM（如果您要削減它，請確保有一些可用的交換空間）\n- 由於依賴性衝突，此應用程序當前與*可疑登錄*應用程序不兼容（即您只能安裝兩者之一）\n\n該應用程式不會向雲提供商或類似服務發送任何敏感數據。 所有處理都是在您的 Nextcloud 計算機上使用在 Node.js 中運行的 Tensorflow.js 完成的。",
    "Status" : "狀態",
    "The machine learning models have been downloaded successfully." : "機器學習模型已成功下載。",
    "The machine learning models still need to be downloaded." : "機器學習模型仍然需要下載。",
    "Could not execute the Node.js binary. You may need to set the path to a working binary manually." : "Could not execute the Node.js binary. You may need to set the path to a working binary manually.",
    "Background Jobs are not executed via cron. Recognize requires background jobs to be executed via cron." : "後台作業不通過 cron 執行。Recognize 需要通過 cron 執行後台作業。",
    "The app is installed and will automatically classify files in background processes." : "該應用程式已安裝，並將自動對後台進程中的檔案進行分類。",
    "None of the tagging options below are currently selected. The app will currently do nothing." : "當前未選擇以下任何標記選項。該應用程式目前不會執行任何操作。",
    "Face recognition" : "人臉識別",
    "Face recognition is working. " : "人臉識別中。",
    "An error occurred during face recognition, please check the Nextcloud logs." : "人臉識別出錯，請查看 Nextcloud 記錄。",
    "Waiting for status reports on face recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "Waiting for status reports on face recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs.",
    "Face recognition:" : "人臉識別：",
    "Queued files" : "在排隊的檔案",
    "Last classification: " : "最後分類：",
    "Scheduled background jobs: " : "預先安排好的背景作業：",
    "Last background job execution: " : "最近一次執行的後台作業：%s",
    "There are queued files in the face recognition queue but no background job is scheduled to process them." : "人臉識別隊列中有排隊文件，但沒有安排後台作業來處理它們。",
    "Face clustering:" : "人臉分類：",
    "faces left to cluster" : "剩餘要進行人臉分類的臉部",
    "Last clustering run: " : "上次分類運行時間：",
    "A minimum of 120 faces per user is necessary for clustering to kick in" : "每個使用者至少需要 120 張臉部照片才能進行人臉分類",
    "Enable face recognition (groups photos by faces that appear in them; UI is in the photos app)" : "啟用人臉識別（按出現在照片中的人臉對照片進行分組；該功能的 UI 在照片應用程式中）",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~500 or more, in WASM mode ~50 is recommended)" : "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~500 or more, in WASM mode ~50 is recommended)",
    "Object detection & landmark recognition" : "物體檢測和地標識別",
    "Object recognition is working." : "物體識別中。",
    "An error occurred during object recognition, please check the Nextcloud logs." : "物體識別出錯，請查看 Nextcloud 記錄。",
    "Waiting for status reports on object recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "Waiting for status reports on object recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs.",
    "Object recognition:" : "物體識別：",
    "There are queued files in the object detection queue but no background job is scheduled to process them." : "物體檢測隊列中有排隊檔案，但沒有安排後台作業來處理它們。",
    "Landmark recognition is working." : "地標識別中。",
    "An error occurred during landmark recognition, please check the Nextcloud logs." : "地標，請查看 Nextcloud 記錄。",
    "Waiting for status reports on landmark recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "正在等待地標識別的狀態報告。如果此訊息持續超過 15 分鐘，請檢查 Nextcloud 記錄。",
    "Landmark recognition:" : "地標識別：",
    "There are queued files in the landmarks queue but no background job is scheduled to process them." : "地標識別隊列中有排隊檔案，但沒有安排後台作業來處理它們。",
    "Enable object recognition (e.g. food, vehicles, landscapes)" : "啟用物體識別（例如食物、車輛、風景）",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~100 or more, in WASM mode ~20 is recommended)" : "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~100 or more, in WASM mode ~20 is recommended)",
    "Enable landmark recognition (e.g. Eiffel Tower, Golden Gate Bridge)" : "啟用地標識別（例如巴黎鐵塔、金門大橋）",
    "Audio tagging" : "語音標籤",
    "Audio recognition is working." : "語音識別中。",
    "An error occurred during audio recognition, please check the Nextcloud logs." : "語音識別出錯，請查看 Nextcloud 記錄。",
    "Waiting for status reports on audio recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "Waiting for status reports on audio recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs.",
    "Music genre recognition:" : "音樂類型識別：",
    "There are queued files but no background job is scheduled to process them." : "有排隊檔案，但沒有安排後台作業來處理它們。",
    "Enable music genre recognition (e.g. pop, rock, folk, metal, new age)" : "啟用音樂類型識別（例如流行、搖滾、民謠、金屬、新時代）",
    "Video tagging" : "視像標籤",
    "Video recognition is working." : "視像識別中。",
    "An error occurred during video recognition, please check the Nextcloud logs." : "視像識別出錯，請查看 Nextcloud 記錄。",
    "Waiting for status reports on video recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "Waiting for status reports on video recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs.",
    "Video recognition:" : "視像識別：",
    "Enable human action recognition (e.g. arm wrestling, dribbling basketball, hula hooping)" : "啟用人類動作識別（例如拗手瓜、運球籃球、呼啦圈）",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~20 or more, in WASM mode ~5 is recommended)" : "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~20 or more, in WASM mode ~5 is recommended)",
    "Reset" : "重設",
    "Click the button below to remove all tags from all files that have been classified so far." : "單擊下面的按鈕可從迄今為止已分類的所有檔案中刪除所有標籤。",
    "Reset tags for classified files" : "重置分類檔案的標籤",
    "Click the button below to remove all face detections from all files that have been classified so far." : "單擊下面的按鈕可從迄今為止已分類的所有檔案中刪除所有人臉識別數據。",
    "Reset faces for classified files" : "重置分類檔案的人臉識別數據",
    "Click the button below to rescan all files in this instance and add them to the classifier queues." : "單擊下面的按鈕重新掃描此實例中的所有檔案並將它們添加到分類器隊列中。",
    "Rescan all files" : "重新掃描所有檔案",
    "Click the button below to clear the classifier queues and clear all background jobs. This is useful when you want to do the initial classification using the terminal command." : "單擊下面的按鈕可清除分類器隊列並清除所有後台作業。當您想使用終端命令進行初始分類時，這很有用。",
    "Clear queues and background jobs" : "清除隊列和後台作業",
    "CPU cores" : "CPU核心",
    "By default all available CPU cores will be used which may put your system under considerable load. To avoid this, you can limit the amount of CPU Cores used. (Note: In WASM mode, currently only 1 core can be used at all times.)" : "默認情況下，將使用所有可用的 CPU 內核，這可能會使您的系統承受相當大的負載。 為避免這種情況，您可以限制使用的 CPU 內核數量。（注意：在 WASM 模式下，目前只能一直使用 1 個核心。）",
    "Number of CPU Cores (0 for no limit)" : "CPU 核心數（0 表示無限制）",
    "Tensorflow WASM mode" : "Tensorflow WASM mode",
    "Checking CPU" : "檢查 CPU 中",
    "Could not check whether your machine supports native TensorFlow operation. Make sure your OS has GNU lib C, your CPU supports AVX instructions and you are running on x86. If one of these things is not the case, you will need to run in WASM mode." : "無法檢查您的電腦是否支持本機 TensorFlow 操作。請確保您的操作系統具有 GNU lib C，您的 CPU 支持 AVX 指令並且您正在 x86 上運行。如果不滿足這些條件之一，您將需要在 WASM 模式下運行 .",
    "Your machine supports native TensorFlow operation, you do not need WASM mode." : "您的電腦支持原生 TensorFlow 操作，您不需要 WASM 模式。",
    "WASM mode was activated automatically, because your machine does not support native TensorFlow operation:" : "WASM 模式已自動激活，因為您的電腦不支持原生 TensorFlow 操作：",
    "Enable WASM mode" : "啟用 WASM 模式",
    "Tensorflow GPU mode" : "Tensorflow GPU 模式",
    "Enable GPU mode" : "啟用 GPU 模式",
    "Like most machine learning models, recognize will run even faster when using a GPU. Setting this up is non-trivial but works well when everything is setup correctly." : "與大多數機器學習模型一樣，Recognize 在使用 GPU 時運行速度更快。進行此項設置並非易事，但當一切設置正確時效果很好。",
    "Learn how to setup GPU mode with recognize" : "了解如何在 Recognize 中設置 GPU 模式",
    "Node.js" : "Node.js",
    "Checking Node.js" : "Checking Node.js",
    "Node.js {version} binary was installed successfully." : "Node.js {version} binary was installed successfully.",
    "Checking libtensorflow" : "Checking libtensorflow",
    "Could not load libtensorflow in Node.js. You can try to manually install libtensorflow or run in WASM mode." : "Could not load libtensorflow in Node.js. You can try to manually install libtensorflow or run in WASM mode.",
    "Successfully loaded libtensorflow in Node.js, but couldn't load GPU. Make sure CUDA Toolkit and cuDNN are installed and accessible, or turn off GPU mode." : "在 Node.js 中成功加載 libtensorflow，但無法加載 GPU。確保 CUDA 工具包和 cuDNN 已安裝且可訪問，或者關閉 GPU 模式。",
    "Libtensorflow was loaded successfully into Node.js." : "Libtensorflow WASM 已成功加載到 Node.js 中。",
    "Could not load Tensorflow WASM in Node.js. Something is wrong with your setup." : "無法在 Node.js 中加載 TensorFlow WASM。您的設置有問題。",
    "Tensorflow WASM was loaded successfully into Node.js." : "TensorFlow WASM 已成功加載到 Node.js 中。",
    "If the shipped Node.js binary doesn't work on your system for some reason you can set the path to a custom node.js binary. Currently supported is Node v14.17 and newer v14 releases." : "如果隨附的 Node.js 二進製文件由於某種原因無法在您的系統上運行，您可以將路徑設置為自定義 node.js 二進製文件。當前支持的是 Node v14.17 和更新的 v14 版本。",
    "Terminal commands" : "終端命令",
    "To download all models preliminary to executing the classification jobs, run the following command on the server terminal." : "要下載執行分類作業之前的所有模型，請在伺服器終端上運行以下命令。",
    "To trigger a full classification run, run the following command on the server terminal. (The classification will run in multiple background jobs which can run in parallel.)" : "要觸發完整的分類運行，請在伺服器端執行以下命令。（分類將在多個後台作業中運行，這些作業可以並行運行。）",
    "To run a full classification run on the terminal, run the following. (The classification will run in sequence inside your terminal.)" : "要在終端上運行完整分類，請執行以下操作。（分類將在您的終端內按順序運行。）",
    "Before running a full initial classification run on the terminal, you should stop all background processing that recognize scheduled upon installation to avoid interference." : "在終端上運行完整的初始分類運行之前，您應該停止所有識別安裝時安排的後台處理以避免干擾。",
    "To run a face clustering run on for each user in the terminal, run the following. (The clustering will run in sequence inside your terminal.)" : "要在終端中為每個用戶運行面部聚類，請執行以下操作。（聚類將在您的終端內按順序運行。）",
    "To remove all face clusters but keep the raw detected faces run the following on the terminal:" : "要刪除所有面部聚類但保留檢測到的原始面部，請在終端上運行以下命令：",
    "To remove all detected faces and face clusters run the following on the terminal:" : "要刪除所有檢測到的人臉和人臉簇，請在終端上運行以下命令：",
    "You can reset the tags of all files that have been previously classified by Recognize with the following command:" : "您可以使用以下命令重置之前已通過識別分類的所有文件的標籤：",
    "You can delete all tags that no longer have any files associated with them with the following command:" : "您可以使用以下命令刪除不再與任何檔案關聯的所有標籤：",
    "To remove tags that were created by recognize version 2 from all files run the following on the terminal:" : "要從所有檔案中刪除通過 Recognize version 2 創建的標籤，請在終端上運行以下命令：",
    "Your server does not support AVX instructions" : "您的伺服器不支援 AVX 指示",
    "Your server does not have an x86 64-bit CPU" : "您的伺服器沒有 x86 64 位 CPU",
    "Your server uses musl libc" : "您的伺服器使用 musl libc",
    "Failed to load settings" : "載入設定失敗",
    "Failed to save settings" : "設定儲存失敗",
    "never" : "從未",
    "{time} ago" : "{time} 前",
    "Cat" : "貓",
    "Animal" : "動物",
    "Wildlife" : "野生動物",
    "Nature" : "大自然",
    "Puma" : "美洲獅",
    "Leopard" : "豹",
    "Lion" : "獅子",
    "Wild cat" : "山貓",
    "Cheetah" : "獵豹",
    "Seashore" : "海濱",
    "Beach" : "海灘",
    "Water" : "水",
    "Lakeside" : "湖邊",
    "Flower" : "花",
    "Plant" : "植物",
    "Window" : "窗",
    "Architecture" : "建築學",
    "Stairs" : "樓梯",
    "Building" : "建築物",
    "Field" : "田",
    "Farm" : "農務 ",
    "Landscape" : "風景模式",
    "Portrait" : "縱向模式",
    "People" : "人物",
    "Fashion" : "時裝",
    "Ship" : "船",
    "Vehicle" : "車輛",
    "Grasshopper" : "蚱蜢",
    "Insect" : "昆蟲",
    "Fish" : "魚",
    "Shark" : "鯊魚",
    "Chicken" : "雞",
    "Bird" : "雀鳥",
    "Ostrich" : "鴕鳥",
    "Owl" : "貓頭鷹",
    "Salamander" : "蠑螈",
    "Frog" : "青蛙",
    "Turtle" : "龜",
    "Reptile" : "爬虫類",
    "Lizard" : "蜥蜴",
    "Chameleon" : "變色龍",
    "Crocodile" : "鱷魚",
    "Alligator" : "短吻鱷",
    "Scorpion" : "蠍",
    "Spider" : "蜘蛛",
    "Duck" : "鴨子",
    "Worm" : "蠕蟲",
    "Shell" : "殼",
    "Snail" : "蝸牛",
    "Crab" : "蟹",
    "Lobster" : "龍蝦",
    "Cooking" : "烹飪",
    "Penguin" : "企鵝",
    "Whale" : "鯨魚",
    "Dog" : "狗",
    "Wolf" : "狼",
    "Fox" : "狐狸",
    "Bear" : "熊",
    "Beetle" : "甲蟲",
    "Butterfly" : "蝴蝶",
    "Rabbit" : "兔子",
    "Hippo" : "河馬",
    "Cow" : "母牛",
    "Buffalo" : "水牛",
    "Sheep" : "羊",
    "Ape" : "猿",
    "Monkey" : "猴子",
    "Lemur" : "狐猴",
    "Elephant" : "大象",
    "Panda" : "熊貓",
    "Instrument" : "器械",
    "Music" : "音樂",
    "Aircraft" : "飛機",
    "Airport" : "飛機場",
    "Tractor" : "拖拉機",
    "Weapon" : "武器",
    "Backpack" : "背包",
    "Shop" : "商店",
    "Office" : "Nextcloud Office",
    "Outdoor" : "戶外",
    "Living" : "生活",
    "Tower" : "塔",
    "Drinks" : "酒精飲料",
    "Beverage" : "飲料",
    "Food" : "食物",
    "Shelter" : "收容所",
    "Furniture" : "傢俱",
    "Book" : "書",
    "Train" : "火車",
    "Butcher" : "肉販",
    "Car" : "車子",
    "Historic" : "有歷史意義的",
    "Boat" : "艇",
    "Electronics" : "電子",
    "Indoor" : "室內的",
    "Church" : "教堂",
    "Shoe" : "鞋",
    "Candle" : "蠟燭",
    "Coffee" : "咖啡",
    "Keyboard" : "鍵盤",
    "Computer" : "桌上電腦",
    "Helmet" : "頭盔",
    "Wall" : "牆壁",
    "Clock" : "時鐘",
    "Dining" : "用飯",
    "Kitchen" : "廚房",
    "Snow" : "雪",
    "Dome" : "穹頂",
    "Screen" : "螢幕顯示",
    "Flag" : "旗",
    "Truck" : "貨車",
    "Store" : "百貨商店",
    "Tool" : "工具",
    "Pumpkin" : "南瓜",
    "Vegetables" : "蔬菜",
    "Photography" : "攝影",
    "Library" : "圖書館",
    "Display" : "顯示",
    "Bag" : "袋子",
    "Cup" : "杯子",
    "Rocks" : "石塊",
    "Bus" : "巴士",
    "Bowl" : "碗",
    "Monitor" : "螢幕",
    "Bike" : "單車",
    "Scooter" : "小型摩托車",
    "Camping" : "露營",
    "Cart" : "手推車",
    "Piggy bank" : "撲滿",
    "Bottle" : "瓶子",
    "Plate" : "碟",
    "Camera" : "相機",
    "Camper" : "宿營拖車",
    "Barbecue" : "BBQ",
    "Basket" : "籃子",
    "Diving" : "潛水",
    "Snowmobile" : "摩托雪橇",
    "Bridge" : "橋",
    "Couch" : "梳化",
    "Theater" : "戲劇",
    "Spoon" : "匙羹",
    "Comic" : "漫畫",
    "Soup" : "湯",
    "Dessert" : "甜品",
    "Bakery" : "麵包店",
    "Fruit" : "生果",
    "Pasta" : "義大利粉",
    "Meat" : "肉",
    "Pizza" : "披薩",
    "Wine" : "葡萄酒",
    "Alpine" : "高山",
    "Mountains" : "山",
    "Sand" : "沙",
    "Wool" : "羊毛",
    "Glass" : "玻璃",
    "Moment" : "時刻",
    "Info" : "資訊",
    "Document" : "文件",
    "Puzzle" : "智力遊戲",
    "Heritage" : "遺產",
    "Safe" : "保險箱",
    "Bucket" : "水桶",
    "Baby" : "BB",
    "Cradle" : "搖籃",
    "Patio" : "平臺",
    "Mountain" : "山",
    "Radio telescope" : "無線電望遠鏡",
    "Theme park" : "主題公園",
    "Festival" : "節日",
    "Event" : "活動",
    "Monument" : "紀念碑",
    "Balloon" : "氣球",
    "Crib" : "嬰兒床",
    "Fan" : "扇子",
    "Gas station" : "油站",
    "Wood" : "木頭",
    "Bench" : "長凳",
    "Parking" : "停車場",
    "Traffic" : "交通",
    "Public transport" : "公共交通",
    "Umbrella" : "雨傘",
    "Stage" : "舞台",
    "Toy" : "玩具",
    "Vase" : "花瓶",
    "Mailbox" : "郵箱",
    "Sign" : "簽署",
    "Gallery" : "相簿",
    "Park" : "公園"
},
"nplurals=1; plural=0;");
