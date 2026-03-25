export interface Flashcard {
  id: number;
  term: string;
  definition: string;
  chapterId: string;
}

export const flashcardData: Flashcard[] = [
  // Chapter 1 – Introduction to IoT
  { id: 1, term: "Internet of Things (IoT)", definition: "A network of physical objects ('things') embedded with sensors, software, and connectivity to exchange data over the internet without requiring human-to-human or human-to-computer interaction.", chapterId: "ch1" },
  { id: 2, term: "Kevin Ashton", definition: "The person who coined the term 'Internet of Things' in 1999 during a presentation at MIT's Auto-ID Center, initially in the context of RFID supply chains.", chapterId: "ch1" },
  { id: 3, term: "IoT Connectivity", definition: "The requirement that IoT devices must be connected to the internet or local networks to transmit data. Without connectivity, devices cannot participate in the IoT ecosystem.", chapterId: "ch1" },
  { id: 4, term: "IoT Intelligence", definition: "The ability of algorithms and compute power to turn raw sensor data into actionable insights, enabling automated decisions without human intervention.", chapterId: "ch1" },
  { id: 5, term: "IoT Gateway", definition: "A device that bridges local IoT sensor networks (like Zigbee or Bluetooth) to the broader internet or cloud. It aggregates data from multiple sensors and translates protocols.", chapterId: "ch1" },
  { id: 6, term: "IoT Ecosystem Pipeline", definition: "The data flow path in IoT: Things/Devices → Gateways → Internet → Cloud/Servers → Applications.", chapterId: "ch1" },
  { id: 7, term: "RFID", definition: "Radio Frequency Identification – a technology used to automatically identify and track tags attached to objects. One of the original enabling technologies of IoT.", chapterId: "ch1" },

  // Chapter 2 – Architecture & Layers
  { id: 8, term: "3-Layer IoT Architecture", definition: "The fundamental IoT model with three layers: Perception (sensing), Network (transport), and Application (user services).", chapterId: "ch2" },
  { id: 9, term: "Perception Layer", definition: "The physical sensing layer of IoT architecture. Consists of sensors, actuators, RFID tags, and GPS modules. Responsible for collecting data from the physical environment.", chapterId: "ch2" },
  { id: 10, term: "Network Layer", definition: "The middle layer in the 3-layer IoT model. Responsible for transmitting data collected by the perception layer via WiFi, Bluetooth, Cellular, and other protocols.", chapterId: "ch2" },
  { id: 11, term: "Application Layer", definition: "The top layer in the IoT architecture. Delivers application-specific services to users (e.g., smart home app, health monitoring dashboard).", chapterId: "ch2" },
  { id: 12, term: "5-Layer IoT Model", definition: "An expanded IoT architecture: Perception → Transport → Processing/Middleware → Application → Business Layer. Adds data processing and business management layers.", chapterId: "ch2" },
  { id: 13, term: "Business Layer", definition: "The top layer in the 5-layer IoT model. Manages the whole IoT system, creates business models and flowcharts from processed data, and makes strategic decisions.", chapterId: "ch2" },
  { id: 14, term: "Edge Computing", definition: "Processing IoT data locally on the device or a nearby gateway rather than in the cloud. Reduces latency, saves bandwidth, and improves privacy.", chapterId: "ch2" },
  { id: 15, term: "Fog Computing", definition: "Processing pushed to LAN nodes (fog nodes) close to the devices. A middle ground between edge (device-level) and cloud (centralized) computing.", chapterId: "ch2" },
  { id: 16, term: "Processing/Middleware Layer", definition: "In the 5-layer IoT model, this layer stores, analyzes, and processes data using databases and cloud computing before passing results to the application layer.", chapterId: "ch2" },

  // Chapter 3 – Communication Protocols
  { id: 17, term: "MQTT", definition: "Message Queuing Telemetry Transport. The most popular IoT protocol. Uses a lightweight Publish-Subscribe model with a central Broker. Ideal for constrained devices and unreliable networks.", chapterId: "ch3" },
  { id: 18, term: "CoAP", definition: "Constrained Application Protocol. A RESTful protocol like HTTP but designed for resource-constrained devices. Uses UDP instead of TCP to reduce overhead.", chapterId: "ch3" },
  { id: 19, term: "LPWAN", definition: "Low Power Wide Area Network. A class of wireless technologies (LoRa, NB-IoT) that prioritize long range and battery life over high data rates.", chapterId: "ch3" },
  { id: 20, term: "LoRa / LoRaWAN", definition: "A long-range (10-15 km) LPWAN wireless protocol with extremely low power consumption. Ideal for agriculture sensors, smart city infrastructure, and asset tracking.", chapterId: "ch3" },
  { id: 21, term: "NB-IoT", definition: "Narrowband IoT. A cellular-based LPWAN technology that uses licensed spectrum and has excellent indoor penetration. Deployed by mobile operators.", chapterId: "ch3" },
  { id: 22, term: "Zigbee (802.15.4)", definition: "A low-power mesh networking protocol with a range of 10-100 meters. Widely used in home automation (e.g., Philips Hue lighting).", chapterId: "ch3" },
  { id: 23, term: "BLE (Bluetooth Low Energy)", definition: "A version of Bluetooth optimized for very low power consumption. Ideal for wearables, fitness trackers, and beacon-based location systems.", chapterId: "ch3" },
  { id: 24, term: "NFC", definition: "Near Field Communication. Very short-range (<10 cm) wireless communication. Used for contactless payments, access cards, and quick device pairing.", chapterId: "ch3" },
  { id: 25, term: "Publish-Subscribe Model", definition: "A messaging pattern where publishers send messages to a broker (e.g., MQTT broker) and subscribers receive messages on topics they've registered interest in. Devices are decoupled from each other.", chapterId: "ch3" },
  { id: 26, term: "5G for IoT", definition: "Fifth-generation cellular. Offers ultra-low latency (<1ms), massive device density (up to 1 million devices/km²), and network slicing for dedicated IoT bandwidth.", chapterId: "ch3" },

  // Chapter 4 – Devices, Sensors & Actuators
  { id: 27, term: "Sensor", definition: "A device that measures physical parameters (temperature, motion, light, etc.) and converts them into electrical signals (input device in IoT).", chapterId: "ch4" },
  { id: 28, term: "Actuator", definition: "A device that receives electrical signals and converts them into physical action (output device in IoT). Examples: motors, solenoid valves, relays.", chapterId: "ch4" },
  { id: 29, term: "PIR Sensor", definition: "Passive Infrared sensor. Detects infrared radiation emitted by warm bodies (humans/animals). Standard for motion detection in security systems and automatic lights.", chapterId: "ch4" },
  { id: 30, term: "DHT11/DHT22", definition: "Digital temperature and humidity sensors widely used in IoT projects. DHT22 offers higher precision and range than DHT11.", chapterId: "ch4" },
  { id: 31, term: "Arduino", definition: "An open-source microcontroller platform with CPU, memory, and I/O on a single chip. Runs simple control loops. Low cost and low power. Popular for prototyping IoT projects.", chapterId: "ch4" },
  { id: 32, term: "ESP32", definition: "A low-cost, low-power microcontroller with built-in WiFi and Bluetooth. Very popular for IoT because it integrates wireless communication directly on the chip.", chapterId: "ch4" },
  { id: 33, term: "Raspberry Pi", definition: "A single-board computer (SBC) that runs a full Linux operating system. Higher processing power than microcontrollers — used for complex IoT tasks like image processing and AI at the edge.", chapterId: "ch4" },
  { id: 34, term: "ADC (Analog-to-Digital Converter)", definition: "A circuit that converts continuous analog voltage signals (from sensors like LDRs and thermistors) into discrete digital values that microcontrollers can process.", chapterId: "ch4" },
  { id: 35, term: "LDR (Light Dependent Resistor)", definition: "A photoresistor that changes resistance based on light intensity. Produces an analog output signal. Used in light-sensing IoT applications.", chapterId: "ch4" },

  // Chapter 5 – Cloud, Data & Analytics
  { id: 36, term: "Time-Series Database (TSDB)", definition: "A database optimized for storing and querying timestamped data. Essential for IoT where data is generated continuously over time. Examples: InfluxDB, TimescaleDB.", chapterId: "ch5" },
  { id: 37, term: "Digital Twin", definition: "A real-time virtual replica of a physical asset, process, or system. Updated continuously with IoT sensor data. Used for simulation, testing, and predictive analysis.", chapterId: "ch5" },
  { id: 38, term: "5 V's of IoT Data", definition: "Volume (massive scale), Velocity (real-time speed), Variety (many formats), Veracity (accuracy/reliability), Value (actionable business insights).", chapterId: "ch5" },
  { id: 39, term: "Predictive Maintenance", definition: "Using machine learning models trained on vibration, temperature, and usage data to predict equipment failure before it occurs, avoiding costly downtime.", chapterId: "ch5" },
  { id: 40, term: "AWS IoT Core", definition: "Amazon Web Services' managed IoT platform. Provides device registry, message brokering (MQTT), rules engine, and integration with AWS cloud services.", chapterId: "ch5" },
  { id: 41, term: "Stream Processing", definition: "Processing data continuously in real-time as it is generated by sensors. Contrast with batch processing which waits and processes data in chunks.", chapterId: "ch5" },
  { id: 42, term: "NoSQL Database", definition: "A non-relational database with flexible schemas and high write-throughput. Examples: MongoDB, Cassandra. Good for IoT's varied, high-volume data.", chapterId: "ch5" },

  // Chapter 6 – IoT Security
  { id: 43, term: "Mirai Botnet", definition: "A famous 2016 cyberattack where hundreds of thousands of IoT devices (cameras, routers) were infected to form a botnet that launched massive DDoS attacks, taking down major websites.", chapterId: "ch6" },
  { id: 44, term: "Man-in-the-Middle (MitM)", definition: "An attack where the attacker secretly intercepts and relays communication between two devices that believe they are talking directly to each other.", chapterId: "ch6" },
  { id: 45, term: "TLS/SSL", definition: "Transport Layer Security / Secure Sockets Layer. Cryptographic protocols that encrypt data in transit, securing the communication layer of IoT systems.", chapterId: "ch6" },
  { id: 46, term: "PKI (Public Key Infrastructure)", definition: "A system of digital certificates and certificate authorities used to authenticate IoT device identities and establish encrypted communications.", chapterId: "ch6" },
  { id: 47, term: "Secure Boot", definition: "A security mechanism that verifies only digitally signed firmware can run on a device, preventing attackers from loading malicious software at startup.", chapterId: "ch6" },
  { id: 48, term: "OTA Update", definition: "Over-The-Air update. A method to deliver firmware and software updates to IoT devices wirelessly, without physical access. Critical for patching security vulnerabilities.", chapterId: "ch6" },
  { id: 49, term: "Network Segmentation", definition: "Placing IoT devices on a separate VLAN or network from critical enterprise systems, limiting the blast radius if a device is compromised.", chapterId: "ch6" },

  // Chapter 7 – IoT Applications
  { id: 50, term: "IoMT (Internet of Medical Things)", definition: "The application of IoT in healthcare. Includes wearable heart monitors, remote patient monitoring, smart pill dispensers, and hospital asset tracking.", chapterId: "ch7" },
  { id: 51, term: "IIoT (Industrial Internet of Things)", definition: "IoT applied to manufacturing and industry. Part of Industry 4.0. Includes predictive maintenance, digital factory twins, and supply chain asset tracking.", chapterId: "ch7" },
  { id: 52, term: "Smart City", definition: "Using IoT to improve urban efficiency. Examples: adaptive traffic lights, smart waste bins that signal when full, air quality monitoring, and smart grid energy distribution.", chapterId: "ch7" },
  { id: 53, term: "V2X Communication", definition: "Vehicle-to-Everything communication. IoT technology enabling vehicles to communicate with other vehicles (V2V), infrastructure (V2I), and pedestrians (V2P) for safer transportation.", chapterId: "ch7" },
  { id: 54, term: "Precision Agriculture", definition: "Using soil moisture sensors, weather stations, drones, and GPS to make data-driven farming decisions that maximize yield and minimize water and fertilizer waste.", chapterId: "ch7" },
  { id: 55, term: "Smart Grid", definition: "An electricity network that uses IoT sensors and two-way communication to detect and react to local changes in usage, improving efficiency and integrating renewable energy.", chapterId: "ch7" },
];
