export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  explanation: string;
}

export const quizData: QuizQuestion[] = [
  {
    id: 1,
    question: "Who coined the term 'Internet of Things'?",
    options: ["Tim Berners-Lee", "Kevin Ashton", "Vint Cerf", "Mark Weiser"],
    correctAnswer: 1,
    difficulty: "Easy",
    explanation: "Kevin Ashton coined the term 'Internet of Things' in 1999 during a presentation at MIT about RFID in supply chains."
  },
  {
    id: 2,
    question: "Which layer in the IoT 3-layer architecture is responsible for data collection?",
    options: ["Network Layer", "Application Layer", "Perception Layer", "Transport Layer"],
    correctAnswer: 2,
    difficulty: "Easy",
    explanation: "The Perception Layer (also known as the Sensing Layer) is responsible for collecting physical data using sensors and RFID tags."
  },
  {
    id: 3,
    question: "Which protocol uses a publish-subscribe model and is explicitly designed for IoT?",
    options: ["HTTP", "MQTT", "CoAP", "FTP"],
    correctAnswer: 1,
    difficulty: "Medium",
    explanation: "MQTT (Message Queuing Telemetry Transport) is a lightweight publish-subscribe protocol ideal for IoT communication."
  },
  {
    id: 4,
    question: "What does LPWAN stand for?",
    options: ["Low Power Wide Area Network", "Large Packet Wireless Area Network", "Low Protocol Wide Access Network", "Local Power Wireless Area Node"],
    correctAnswer: 0,
    difficulty: "Medium",
    explanation: "LPWAN stands for Low Power Wide Area Network, designed to allow long-range communications at a low bit rate."
  },
  {
    id: 5,
    question: "Which attack took down major websites in 2016 using compromised IoT devices?",
    options: ["WannaCry", "Stuxnet", "Mirai Botnet", "HeartBleed"],
    correctAnswer: 2,
    difficulty: "Medium",
    explanation: "The Mirai botnet infected hundreds of thousands of IoT devices (like cameras and routers) to launch a massive DDoS attack in 2016."
  },
  {
    id: 6,
    question: "What is the primary advantage of edge computing in IoT?",
    options: ["Lower cost", "Reduced latency and bandwidth", "Better physical security", "Easier management"],
    correctAnswer: 1,
    difficulty: "Medium",
    explanation: "Edge computing processes data near the source, which drastically reduces the latency and the amount of bandwidth needed to send data to the cloud."
  },
  {
    id: 7,
    question: "Which communication technology has the shortest range?",
    options: ["Zigbee", "WiFi", "NFC", "Bluetooth"],
    correctAnswer: 2,
    difficulty: "Easy",
    explanation: "NFC (Near Field Communication) operates over very short distances, typically less than 10 centimeters."
  },
  {
    id: 8,
    question: "What does MQTT stand for?",
    options: ["Message Queue Telemetry Technology", "Message Queuing Telemetry Transport", "Mobile Queue Text Transfer", "Managed Queue Telemetry Tool"],
    correctAnswer: 1,
    difficulty: "Hard",
    explanation: "MQTT stands for Message Queuing Telemetry Transport, a standard messaging protocol for IoT."
  },
  {
    id: 9,
    question: "Arduino is best described as:",
    options: ["A microprocessor", "An operating system", "An open-source microcontroller platform", "A cloud service"],
    correctAnswer: 2,
    difficulty: "Easy",
    explanation: "Arduino is an open-source electronics platform based on easy-to-use hardware and software microcontrollers."
  },
  {
    id: 10,
    question: "Which database type is BEST suited for IoT time-series data?",
    options: ["MySQL", "Microsoft Access", "InfluxDB", "MongoDB"],
    correctAnswer: 2,
    difficulty: "Medium",
    explanation: "InfluxDB is a time-series database explicitly optimized to handle the high-write loads and timestamped data typical of IoT."
  },
  {
    id: 11,
    question: "In the 5-layer IoT architecture, which layer stores and analyzes data using cloud computing?",
    options: ["Perception Layer", "Transport Layer", "Processing/Middleware Layer", "Business Layer"],
    correctAnswer: 2,
    difficulty: "Medium",
    explanation: "The Processing or Middleware layer handles data storage, analytics, and processing before passing it to the application layer."
  },
  {
    id: 12,
    question: "Which of the following is a key characteristic of 5G networks beneficial for IoT?",
    options: ["Ultra-low latency (<1ms)", "Shorter range than Bluetooth", "Higher power consumption than Wi-Fi", "Inability to handle massive device density"],
    correctAnswer: 0,
    difficulty: "Easy",
    explanation: "5G networks offer ultra-low latency, high bandwidth, and can support a massive density of devices simultaneously."
  },
  {
    id: 13,
    question: "What is the typical range of a LoRaWAN network in optimal conditions?",
    options: ["10-15 meters", "100-200 meters", "1-2 kilometers", "10-15 kilometers"],
    correctAnswer: 3,
    difficulty: "Medium",
    explanation: "LoRaWAN is a long-range technology capable of reaching 10 to 15 kilometers in rural or optimal line-of-sight environments."
  },
  {
    id: 14,
    question: "What is the primary function of an actuator in an IoT system?",
    options: ["To measure physical parameters", "To convert signals into physical action", "To store data in the cloud", "To route internet traffic"],
    correctAnswer: 1,
    difficulty: "Easy",
    explanation: "Actuators receive electrical signals and convert them into physical movement or action (e.g., turning a motor, opening a valve)."
  },
  {
    id: 15,
    question: "Which sensor type is most commonly used to detect human presence or motion?",
    options: ["LDR", "Thermistor", "PIR", "Barometric pressure sensor"],
    correctAnswer: 2,
    difficulty: "Easy",
    explanation: "PIR (Passive Infrared) sensors detect infrared radiation emitted by humans and are standard for motion detection."
  },
  {
    id: 16,
    question: "Which of the following describes a key difference between Microcontrollers and Microprocessors?",
    options: ["Microprocessors are lower power", "Microcontrollers run full operating systems like Linux", "Microcontrollers have CPU, memory, and I/O integrated on a single chip", "Microprocessors are cheaper and simpler"],
    correctAnswer: 2,
    difficulty: "Medium",
    explanation: "Microcontrollers are all-in-one chips designed for specific control tasks, whereas microprocessors usually require external memory and peripherals."
  },
  {
    id: 17,
    question: "What does CoAP stand for in IoT protocols?",
    options: ["Constrained Application Protocol", "Computer Analytics Protocol", "Connected Automation Process", "Cloud Object Access Protocol"],
    correctAnswer: 0,
    difficulty: "Hard",
    explanation: "CoAP is the Constrained Application Protocol, a specialized web transfer protocol for constrained nodes and networks."
  },
  {
    id: 18,
    question: "Which data processing method is used for immediate analysis of continuous IoT data?",
    options: ["Batch processing", "Stream processing", "Archive processing", "Offline processing"],
    correctAnswer: 1,
    difficulty: "Medium",
    explanation: "Stream processing analyzes continuous streams of data in real-time or near-real-time."
  },
  {
    id: 19,
    question: "In IoT security, what does a Man-in-the-Middle (MitM) attack involve?",
    options: ["Overwhelming a server with traffic", "Guessing default passwords", "Intercepting and potentially altering communication between two devices", "Tampering with physical hardware"],
    correctAnswer: 2,
    difficulty: "Medium",
    explanation: "In a MitM attack, the attacker secretly intercepts and relays communications between two parties who believe they are communicating directly."
  },
  {
    id: 20,
    question: "Which security mechanism operates at the Communication Layer?",
    options: ["Secure Boot", "TLS/SSL Encryption", "Role-Based Access Control", "Input Validation"],
    correctAnswer: 1,
    difficulty: "Hard",
    explanation: "TLS (Transport Layer Security) encrypts data in transit, securing the Communication Layer."
  },
  {
    id: 21,
    question: "What is the main goal of 'Precision Agriculture' in IoT?",
    options: ["Replacing human farmers with robots", "Using sensors and data to optimize crop yields and resource usage", "Growing food in urban laboratories only", "Distributing crops globally"],
    correctAnswer: 1,
    difficulty: "Easy",
    explanation: "Precision agriculture uses IoT sensors (soil, weather) to make data-driven decisions that maximize yield and minimize waste."
  },
  {
    id: 22,
    question: "What does IoMT stand for?",
    options: ["Internet of Mobile Things", "Internet of Manufacturing Things", "Internet of Medical Things", "Internet of Media Things"],
    correctAnswer: 2,
    difficulty: "Easy",
    explanation: "IoMT stands for Internet of Medical Things, referring to connected medical devices and healthcare systems."
  },
  {
    id: 23,
    question: "Which of the following is NOT an application layer protocol?",
    options: ["MQTT", "CoAP", "HTTP", "Zigbee"],
    correctAnswer: 3,
    difficulty: "Medium",
    explanation: "Zigbee is a network/transport level technology (IEEE 802.15.4), whereas MQTT, CoAP, and HTTP operate at the application layer."
  },
  {
    id: 24,
    question: "A 'Digital Twin' is best described as:",
    options: ["A backup device kept in a warehouse", "A virtual software replica of a physical object or system", "Two sensors placed together for redundancy", "A duplicate database entry"],
    correctAnswer: 1,
    difficulty: "Hard",
    explanation: "A digital twin is a dynamic virtual representation of a physical object or system, updated in real-time using IoT data."
  },
  {
    id: 25,
    question: "Which component acts as a bridge between local IoT devices and the wider internet?",
    options: ["Actuator", "Cloud Server", "IoT Gateway", "Passive RFID tag"],
    correctAnswer: 2,
    difficulty: "Easy",
    explanation: "An IoT Gateway connects local sensor networks to the external internet or cloud infrastructure."
  },
  {
    id: 26,
    question: "According to the IoT World Forum, how many layers are in the IoT Reference Model?",
    options: ["3", "4", "5", "7"],
    correctAnswer: 3,
    difficulty: "Hard",
    explanation: "The IoT World Forum Reference Model defines 7 layers, from Physical Devices up to Collaboration & Processes."
  },
  {
    id: 27,
    question: "What type of signal does an LDR (Light Dependent Resistor) produce?",
    options: ["Digital (0 or 1)", "Analog (Continuous)", "I2C", "SPI"],
    correctAnswer: 1,
    difficulty: "Hard",
    explanation: "An LDR outputs a varying resistance based on light levels, which is read as an analog voltage."
  },
  {
    id: 28,
    question: "What is a primary vulnerability of many consumer IoT devices?",
    options: ["They use too much power", "They rely on wired connections", "They ship with hardcoded, default passwords", "They update too frequently"],
    correctAnswer: 2,
    difficulty: "Easy",
    explanation: "Many consumer devices ship with default, easily guessable passwords, making them prime targets for botnets."
  },
  {
    id: 29,
    question: "Which of these platforms provides a full Linux OS suitable for complex IoT processing?",
    options: ["Arduino Uno", "ESP8266", "Raspberry Pi", "PIC microcontroller"],
    correctAnswer: 2,
    difficulty: "Medium",
    explanation: "The Raspberry Pi is a Single Board Computer (SBC) that runs full operating systems like Linux."
  },
  {
    id: 30,
    question: "PKI in the context of IoT security stands for:",
    options: ["Private Key Integration", "Public Key Infrastructure", "Primary Knowledge Interface", "Protected Key Internet"],
    correctAnswer: 1,
    difficulty: "Medium",
    explanation: "PKI (Public Key Infrastructure) uses digital certificates to authenticate devices and encrypt communications."
  }
];
