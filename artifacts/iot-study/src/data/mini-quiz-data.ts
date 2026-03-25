export interface MiniQuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface ChapterMiniQuiz {
  chapterId: string;
  questions: MiniQuizQuestion[];
}

export const miniQuizData: ChapterMiniQuiz[] = [
  {
    chapterId: "ch1",
    questions: [
      {
        id: "ch1-1",
        question: "Who coined the term 'Internet of Things'?",
        options: ["Tim Berners-Lee", "Vint Cerf", "Kevin Ashton", "Mark Weiser"],
        correctAnswer: 2,
        explanation: "Kevin Ashton coined the term in 1999 at MIT's Auto-ID Center in the context of RFID technology."
      },
      {
        id: "ch1-2",
        question: "Which of these is part of the IoT ecosystem pipeline?",
        options: ["Things → Gateways → Internet → Cloud → Applications", "Sensors → Actuators → WiFi → Database", "Devices → Processors → Display → Output", "Cloud → Internet → Gateways → Things"],
        correctAnswer: 0,
        explanation: "The IoT pipeline flows from Things/Devices through Gateways, over the Internet, to Cloud/Servers, and finally to Applications."
      },
      {
        id: "ch1-3",
        question: "Which is a key CHALLENGE of IoT (not a benefit)?",
        options: ["Remote monitoring", "Automation of physical systems", "Interoperability between vendor ecosystems", "Data-driven decision making"],
        correctAnswer: 2,
        explanation: "Interoperability — making devices from different vendors work together — is one of the major ongoing challenges in IoT."
      },
      {
        id: "ch1-4",
        question: "What does IoT connectivity enable devices to do?",
        options: ["Process data faster", "Transmit data without human interaction", "Store more data locally", "Reduce power consumption"],
        correctAnswer: 1,
        explanation: "IoT connectivity allows devices to exchange data over networks without requiring human-to-human or human-to-computer interaction."
      }
    ]
  },
  {
    chapterId: "ch2",
    questions: [
      {
        id: "ch2-1",
        question: "Which layer is responsible for collecting physical data (sensing)?",
        options: ["Application Layer", "Network Layer", "Business Layer", "Perception Layer"],
        correctAnswer: 3,
        explanation: "The Perception Layer (Sensing Layer) uses sensors, RFID, and GPS to collect physical data from the environment."
      },
      {
        id: "ch2-2",
        question: "How many layers does the 5-layer IoT model have? Name the middle one.",
        options: ["3 layers; Network Layer", "5 layers; Processing/Middleware Layer", "7 layers; Connectivity Layer", "4 layers; Transport Layer"],
        correctAnswer: 1,
        explanation: "The 5-layer model adds Transport, Processing/Middleware, and Business layers. The Processing/Middleware layer is in the middle, handling data storage and cloud processing."
      },
      {
        id: "ch2-3",
        question: "Edge computing is best described as:",
        options: ["Sending all data to the cloud for processing", "Processing data at the far edge of the internet backbone", "Processing data locally on or near the device", "A type of database for IoT"],
        correctAnswer: 2,
        explanation: "Edge computing processes data locally on the IoT device or a nearby gateway, reducing latency and bandwidth usage."
      },
      {
        id: "ch2-4",
        question: "What distinguishes Fog Computing from Edge Computing?",
        options: ["Fog uses the cloud; Edge uses local devices", "Fog pushes processing to LAN nodes; Edge processes on the device itself", "They are identical concepts", "Fog is slower than Edge"],
        correctAnswer: 1,
        explanation: "Edge computing processes on the device itself. Fog computing pushes processing to intermediate LAN nodes, acting as a middle ground between edge and cloud."
      },
      {
        id: "ch2-5",
        question: "How many layers are in the IoT World Forum Reference Model?",
        options: ["3", "5", "6", "7"],
        correctAnswer: 3,
        explanation: "The IoT World Forum Reference Model has 7 layers, extending from Physical Devices up to Collaboration & Processes."
      }
    ]
  },
  {
    chapterId: "ch3",
    questions: [
      {
        id: "ch3-1",
        question: "MQTT uses which messaging pattern?",
        options: ["Request-Response", "Publish-Subscribe", "Peer-to-Peer", "Client-Server polling"],
        correctAnswer: 1,
        explanation: "MQTT uses a Publish-Subscribe model coordinated by a central Broker, allowing devices to communicate without knowing each other's addresses."
      },
      {
        id: "ch3-2",
        question: "Which technology has the LONGEST communication range?",
        options: ["Bluetooth BLE", "NFC", "Zigbee", "LoRaWAN"],
        correctAnswer: 3,
        explanation: "LoRaWAN can reach 10-15 km in optimal conditions, making it far longer range than BLE (~10m), NFC (<10cm), or Zigbee (~100m)."
      },
      {
        id: "ch3-3",
        question: "CoAP differs from HTTP in that it uses:",
        options: ["TCP for reliability", "UDP to reduce overhead", "TLS by default", "A binary encoding of HTML"],
        correctAnswer: 1,
        explanation: "CoAP uses UDP instead of TCP to minimize overhead, making it suitable for constrained IoT devices with limited resources."
      },
      {
        id: "ch3-4",
        question: "Zigbee is primarily used for:",
        options: ["Long-range agricultural monitoring", "Home automation with mesh networking", "Cellular IoT in urban areas", "Satellite communication"],
        correctAnswer: 1,
        explanation: "Zigbee forms a low-power mesh network in the 10-100m range, making it very popular for home automation (e.g., Philips Hue, smart thermostats)."
      }
    ]
  },
  {
    chapterId: "ch4",
    questions: [
      {
        id: "ch4-1",
        question: "What is the difference between a sensor and an actuator?",
        options: ["Sensors output action; actuators measure input", "Sensors measure physical input; actuators produce physical output/action", "They are the same thing", "Sensors are digital; actuators are analog"],
        correctAnswer: 1,
        explanation: "Sensors are input devices that measure physical parameters. Actuators are output devices that convert electrical signals into physical actions."
      },
      {
        id: "ch4-2",
        question: "Which sensor detects human body heat/motion?",
        options: ["DHT22", "LDR", "PIR", "Barometric (BMP280)"],
        correctAnswer: 2,
        explanation: "A PIR (Passive Infrared) sensor detects infrared radiation emitted by warm bodies, making it standard for motion detection."
      },
      {
        id: "ch4-3",
        question: "A microcontroller differs from a microprocessor in that it:",
        options: ["Requires external memory and peripherals", "Runs a full OS like Linux", "Has CPU, memory, and I/O all on a single chip", "Is always more powerful"],
        correctAnswer: 2,
        explanation: "Microcontrollers integrate CPU, RAM, ROM, and I/O on one chip. Microprocessors (used in Raspberry Pi) need external memory and peripherals."
      },
      {
        id: "ch4-4",
        question: "An ADC is needed because:",
        options: ["Sensors always output digital signals", "Microcontrollers cannot process any signals", "Most sensors produce analog signals that must be converted to digital", "WiFi requires analog data"],
        correctAnswer: 2,
        explanation: "Many sensors (LDR, thermistor) produce continuous analog voltage. An ADC (Analog-to-Digital Converter) converts this to digital values the microcontroller can process."
      }
    ]
  },
  {
    chapterId: "ch5",
    questions: [
      {
        id: "ch5-1",
        question: "Which database type is BEST suited for continuous IoT sensor data?",
        options: ["Relational SQL (MySQL)", "Time-Series Database (InfluxDB)", "Graph Database (Neo4j)", "Key-Value Store (Redis)"],
        correctAnswer: 1,
        explanation: "Time-Series Databases like InfluxDB are optimized for timestamped data with high write rates — exactly what IoT sensors produce continuously."
      },
      {
        id: "ch5-2",
        question: "What is a Digital Twin?",
        options: ["A backup physical device stored in a warehouse", "A copy of a database in two locations", "A real-time virtual replica of a physical asset updated by IoT data", "Two identical sensors for redundancy"],
        correctAnswer: 2,
        explanation: "A Digital Twin is a dynamic virtual model of a physical asset, kept up-to-date by live IoT sensor data. Used for simulation and predictive analysis."
      },
      {
        id: "ch5-3",
        question: "Which 'V' of IoT data refers to the trustworthiness of sensor readings?",
        options: ["Volume", "Velocity", "Variety", "Veracity"],
        correctAnswer: 3,
        explanation: "Veracity refers to the accuracy and reliability of data. Faulty sensors can produce incorrect readings that lead to wrong decisions."
      },
      {
        id: "ch5-4",
        question: "Stream processing is used in IoT to:",
        options: ["Store data for later analysis", "Analyze continuous data in real-time as it arrives", "Compress data before cloud upload", "Encrypt data in transit"],
        correctAnswer: 1,
        explanation: "Stream processing analyzes data continuously as it is generated, enabling real-time dashboards, alerts, and automated responses."
      }
    ]
  },
  {
    chapterId: "ch6",
    questions: [
      {
        id: "ch6-1",
        question: "What was notable about the 2016 Mirai Botnet attack?",
        options: ["It targeted only government computers", "It used infected IoT devices to launch a massive DDoS attack", "It stole credit card data from retailers", "It encrypted hospital files for ransom"],
        correctAnswer: 1,
        explanation: "Mirai infected hundreds of thousands of IoT devices (cameras, routers) and used them as a botnet to launch one of the largest DDoS attacks in history."
      },
      {
        id: "ch6-2",
        question: "What does TLS protect in an IoT system?",
        options: ["Data stored on cloud servers", "Data in transit between devices and the cloud", "Device firmware from modification", "Physical access to devices"],
        correctAnswer: 1,
        explanation: "TLS (Transport Layer Security) encrypts data in transit, protecting it from Man-in-the-Middle interception."
      },
      {
        id: "ch6-3",
        question: "Secure Boot ensures that:",
        options: ["Devices update firmware automatically", "Only digitally signed firmware can run on the device", "Data is encrypted at rest", "Devices connect to the cloud securely"],
        correctAnswer: 1,
        explanation: "Secure Boot verifies the digital signature of firmware at startup, preventing attackers from loading malicious software."
      },
      {
        id: "ch6-4",
        question: "Which best practice prevents the 'Default Credentials' vulnerability?",
        options: ["Use TLS encryption", "Enable network segmentation", "Change default passwords immediately upon deployment", "Install a Hardware Security Module"],
        correctAnswer: 2,
        explanation: "Many IoT devices ship with default passwords like 'admin/admin'. Changing these immediately upon deployment prevents easy unauthorized access."
      },
      {
        id: "ch6-5",
        question: "Network segmentation in IoT means:",
        options: ["Splitting data into packets for transmission", "Placing IoT devices on a separate VLAN from critical systems", "Using multiple ISPs for redundancy", "Dividing the IoT application into microservices"],
        correctAnswer: 1,
        explanation: "Placing IoT devices on a separate VLAN or network segment limits damage if a device is compromised, preventing lateral movement to critical systems."
      }
    ]
  },
  {
    chapterId: "ch7",
    questions: [
      {
        id: "ch7-1",
        question: "IoMT stands for:",
        options: ["Internet of Manufacturing Things", "Internet of Mobile Things", "Internet of Medical Things", "Internet of Machine Tools"],
        correctAnswer: 2,
        explanation: "IoMT is the Internet of Medical Things, covering wearable monitors, remote patient monitoring, and connected hospital equipment."
      },
      {
        id: "ch7-2",
        question: "In IIoT, 'predictive maintenance' means:",
        options: ["Replacing all machines on a fixed schedule", "Using sensor data and AI to predict equipment failure before it happens", "Manually inspecting machines weekly", "Keeping spare parts in the warehouse"],
        correctAnswer: 1,
        explanation: "Predictive maintenance uses ML models trained on vibration, temperature, and usage patterns to predict failures, avoiding costly unplanned downtime."
      },
      {
        id: "ch7-3",
        question: "V2X communication in IoT transportation refers to:",
        options: ["Video streaming from vehicles", "Vehicles communicating with other vehicles, infrastructure, and pedestrians", "GPS vehicle tracking", "Remote vehicle diagnostics"],
        correctAnswer: 1,
        explanation: "V2X (Vehicle-to-Everything) enables vehicles to share data with other vehicles (V2V), road infrastructure (V2I), and pedestrians (V2P) for collision avoidance."
      },
      {
        id: "ch7-4",
        question: "A smart waste management system would use IoT to:",
        options: ["Automate bill payments for waste collection", "Monitor bin fill levels and optimize collection routes", "Replace all human waste workers", "Track recycling habits of individual citizens"],
        correctAnswer: 1,
        explanation: "Smart waste bins use fill-level sensors to signal when they need collection, allowing collection routes to be optimized and reducing unnecessary trips."
      }
    ]
  }
];
