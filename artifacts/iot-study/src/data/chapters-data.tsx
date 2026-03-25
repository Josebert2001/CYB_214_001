import React from 'react';
import { ConceptCard, SectionHeading, List } from '@/components/ui-elements';
import { Network, Cpu, Shield, Cloud, Server, Lightbulb, Smartphone, Activity, MapPin, Database, Zap, Route } from 'lucide-react';

export interface Chapter {
  id: string;
  title: string;
  description: string;
  content: React.ReactNode;
}

export const chaptersData: Chapter[] = [
  {
    id: "ch1",
    title: "1. Introduction to IoT",
    description: "Definitions, characteristics, and the foundational ecosystem of the Internet of Things.",
    content: (
      <>
        <ConceptCard 
          title="What is IoT?" 
          def="IoT is a network of physical objects ('things') embedded with sensors, software, and connectivity to exchange data over the internet without requiring human-to-human or human-to-computer interaction."
          icon={Network}
        />
        
        <SectionHeading>Brief History</SectionHeading>
        <p className="text-muted-foreground leading-relaxed mb-4">
          The term "Internet of Things" was coined by Kevin Ashton in 1999 during a presentation at Procter & Gamble (MIT Auto-ID Center). It initially focused heavily on RFID technology used in supply chains before evolving into the massive web of smart devices we see today.
        </p>

        <SectionHeading>Key Characteristics</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ConceptCard title="Connectivity" def="Devices must be connected to the internet or local networks to transmit data." icon={Route} />
          <ConceptCard title="Intelligence" def="Algorithms and compute power turn raw sensor data into actionable insights." icon={Lightbulb} />
          <ConceptCard title="Sensing" def="The ability to detect physical changes in the environment (temp, motion, etc.)." icon={Activity} />
          <ConceptCard title="Energy" def="Devices often operate on batteries, making energy efficiency a critical factor." icon={Zap} />
        </div>

        <SectionHeading>The IoT Ecosystem Pipeline</SectionHeading>
        <div className="p-6 bg-slate-100 dark:bg-slate-800/50 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 font-semibold text-center border border-border">
          <div>Things/Devices</div>
          <div className="hidden md:block">→</div>
          <div>Gateways</div>
          <div className="hidden md:block">→</div>
          <div>Internet</div>
          <div className="hidden md:block">→</div>
          <div>Cloud/Servers</div>
          <div className="hidden md:block">→</div>
          <div className="text-primary">Applications</div>
        </div>

        <SectionHeading>Benefits & Challenges</SectionHeading>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-lg mb-3 text-green-600 dark:text-green-400">Benefits</h4>
            <List items={[
              "Automation and control of physical systems",
              "Efficiency and time savings",
              "Remote monitoring of assets",
              "Data-driven decision making",
              "Improved quality of life (smart homes/cities)"
            ]} />
          </div>
          <div>
            <h4 className="font-bold text-lg mb-3 text-red-600 dark:text-red-400">Challenges</h4>
            <List items={[
              "Security vulnerabilities (massive attack surface)",
              "Data privacy concerns",
              "Interoperability between different vendor ecosystems",
              "Power consumption constraints",
              "Network scalability"
            ]} />
          </div>
        </div>
      </>
    )
  },
  {
    id: "ch2",
    title: "2. Architecture & Layers",
    description: "Understanding how IoT systems are structured from physical hardware to business logic.",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed mb-6">
          IoT architecture doesn't have one single universally agreed-upon structure, but it generally follows layered models. The most fundamental is the 3-layer architecture, which expands into 5-layer or 7-layer models for enterprise applications.
        </p>

        <SectionHeading>Three-Layer Architecture</SectionHeading>
        <div className="space-y-4">
          <ConceptCard 
            title="1. Perception Layer (Sensing)" 
            def="The physical layer consisting of sensors, actuators, RFID tags, and GPS. Its sole job is to collect data from the physical environment or execute physical actions."
            icon={Cpu}
          />
          <ConceptCard 
            title="2. Network Layer (Transport)" 
            def="Responsible for connecting to other smart things, network devices, and servers. It transmits the data collected by the perception layer via WiFi, Bluetooth, Cellular, etc."
            icon={Network}
          />
          <ConceptCard 
            title="3. Application Layer" 
            def="Delivers application-specific services to the user. It defines the application in which IoT is deployed (e.g., smart home interface, health monitoring dashboard)."
            icon={Smartphone}
          />
        </div>

        <SectionHeading>The Expanded 5-Layer Model</SectionHeading>
        <p className="text-muted-foreground mb-4">Adds crucial processing steps between network and application.</p>
        <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
          <li><strong className="text-foreground">Perception Layer</strong> - Data gathering.</li>
          <li><strong className="text-foreground">Transport Layer</strong> - Data routing.</li>
          <li><strong className="text-foreground">Processing/Middleware Layer</strong> - Stores, analyzes, and processes data using databases and cloud computing.</li>
          <li><strong className="text-foreground">Application Layer</strong> - User interface and services.</li>
          <li><strong className="text-foreground">Business Layer</strong> - Manages the whole IoT system, utilizing data to create flowcharts, graphs, and business models.</li>
        </ol>

        <SectionHeading>Computing Paradigms</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ConceptCard title="Edge Computing" def="Processing data locally on the device or a nearby gateway. Reduces latency and saves bandwidth." />
          <ConceptCard title="Fog Computing" def="Processing pushed to LAN nodes. A middle ground between the edge and the distant cloud." />
          <ConceptCard title="Cloud Computing" def="Centralized, massive processing and storage in remote data centers." />
        </div>
      </>
    )
  },
  {
    id: "ch3",
    title: "3. Communication Protocols",
    description: "The languages and wireless technologies devices use to talk to each other.",
    content: (
      <>
        <SectionHeading>Wireless Technologies</SectionHeading>
        
        <h4 className="font-bold text-lg mt-6 mb-3 text-primary">Short Range</h4>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <ConceptCard title="WiFi (802.11)" def="High bandwidth, 2.4/5GHz. Range ~100m. High power consumption, bad for battery devices." />
          <ConceptCard title="Bluetooth / BLE" def="2.4GHz, range ~10m. BLE (Low Energy) is perfect for wearables and beacons." />
          <ConceptCard title="Zigbee (802.15.4)" def="Low power mesh network, ~10-100m. Highly popular in home automation (e.g., Philips Hue)." />
          <ConceptCard title="NFC" def="Near Field Communication. Very short range (<10cm). Used for contactless payments and quick pairing." />
        </div>

        <h4 className="font-bold text-lg mt-6 mb-3 text-primary">Long Range (LPWAN)</h4>
        <p className="text-muted-foreground mb-4">Low Power Wide Area Networks prioritize battery life and distance over high data bandwidth.</p>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <ConceptCard title="LoRa / LoRaWAN" def="Long range (10-15km), extremely low power. Ideal for agriculture and smart cities." />
          <ConceptCard title="NB-IoT" def="Narrowband IoT. Cellular-based, uses licensed spectrum. Excellent indoor penetration." />
        </div>

        <h4 className="font-bold text-lg mt-6 mb-3 text-primary">Cellular</h4>
        <List items={[
          "4G LTE: Widely available, high bandwidth, higher power drain.",
          "5G: Ultra-low latency (<1ms), massive device density support, network slicing."
        ]} />

        <SectionHeading>Application Layer Protocols</SectionHeading>
        <div className="space-y-4">
          <ConceptCard 
            title="MQTT (Message Queuing Telemetry Transport)" 
            def="The most popular IoT protocol. It uses a lightweight Publish-Subscribe model orchestrated by a 'Broker'. Perfect for constrained devices and unreliable networks."
          />
          <ConceptCard 
            title="CoAP (Constrained Application Protocol)" 
            def="A RESTful protocol like HTTP but designed for constrained devices. Uses UDP instead of TCP to reduce overhead."
          />
        </div>
      </>
    )
  },
  {
    id: "ch4",
    title: "4. Devices, Sensors & Actuators",
    description: "The physical hardware that bridges the digital and physical worlds.",
    content: (
      <>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-blue-50 dark:bg-blue-950/30 rounded-2xl border border-blue-100 dark:border-blue-900">
            <Activity className="w-8 h-8 text-blue-600 mb-3" />
            <h4 className="font-bold text-xl mb-2">Sensors</h4>
            <p className="text-muted-foreground">Measure physical parameters and convert them into electrical signals (input).</p>
          </div>
          <div className="p-6 bg-orange-50 dark:bg-orange-950/30 rounded-2xl border border-orange-100 dark:border-orange-900">
            <Zap className="w-8 h-8 text-orange-600 mb-3" />
            <h4 className="font-bold text-xl mb-2">Actuators</h4>
            <p className="text-muted-foreground">Receive electrical signals and convert them into physical action (output, e.g., motors, valves).</p>
          </div>
        </div>

        <SectionHeading>Common Sensor Types</SectionHeading>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ConceptCard title="Temperature" def="Thermistors, DHT11/22, DS18B20" />
          <ConceptCard title="Motion" def="PIR (Passive Infrared), Ultrasonic" />
          <ConceptCard title="Light" def="LDR (Light Dependent Resistor)" />
          <ConceptCard title="Gas" def="MQ Series (detects CO, smoke, LPG)" />
          <ConceptCard title="Position" def="GPS modules, Accelerometers (MEMS)" />
          <ConceptCard title="Pressure" def="Barometric (BMP180/280)" />
        </div>

        <SectionHeading>Microcontrollers vs. Microprocessors</SectionHeading>
        <div className="bg-card border border-border rounded-xl overflow-hidden mt-6">
          <div className="grid grid-cols-2 bg-muted/50 p-4 font-bold border-b border-border">
            <div>Microcontrollers (MCU)</div>
            <div>Microprocessors (MPU / SBC)</div>
          </div>
          <div className="grid grid-cols-2 p-4 gap-4 text-sm text-muted-foreground">
            <div>
              <List items={[
                "CPU, memory, and I/O integrated on a single chip",
                "Runs simple loops/RTOS, no full OS",
                "Extremely low power",
                "Examples: Arduino, ESP32, STM32"
              ]} />
            </div>
            <div>
              <List items={[
                "Requires external memory and storage",
                "Runs full operating systems (Linux)",
                "Higher processing power, higher energy drain",
                "Examples: Raspberry Pi, BeagleBone"
              ]} />
            </div>
          </div>
        </div>

        <SectionHeading>Data Types</SectionHeading>
        <p className="text-muted-foreground mb-4">
          Sensors output data as either <strong>Analog</strong> (continuous voltage variations, e.g., an LDR) or <strong>Digital</strong> (discrete 0s and 1s). Microcontrollers use ADCs (Analog-to-Digital Converters) to read analog signals.
        </p>
      </>
    )
  },
  {
    id: "ch5",
    title: "5. Cloud, Data & Analytics",
    description: "Where IoT data is stored, processed, and turned into value.",
    content: (
      <>
        <SectionHeading>Cloud Computing in IoT</SectionHeading>
        <p className="text-muted-foreground mb-4">
          Cloud platforms provide scalable storage, processing power, and machine learning capabilities that small IoT devices lack. Major providers include AWS IoT Core, Microsoft Azure IoT Hub, and Google Cloud IoT.
        </p>

        <SectionHeading>The 5 V's of IoT Data</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          <ConceptCard title="Volume" def="Massive amounts of data generated continuously." />
          <ConceptCard title="Velocity" def="Data streams in at real-time or near-real-time speeds." />
          <ConceptCard title="Variety" def="Data comes in many formats (structured databases, unstructured video/images)." />
          <ConceptCard title="Veracity" def="The accuracy and reliability of the sensor data." />
          <ConceptCard title="Value" def="The ultimate goal: extracting actionable business insights." />
        </div>

        <SectionHeading>Databases for IoT</SectionHeading>
        <p className="text-muted-foreground mb-4">Because IoT data is generated constantly over time, traditional SQL databases are often too slow or rigid.</p>
        <List items={[
          <span key="1"><strong>Time-Series Databases (TSDB):</strong> Optimized for timestamped data. E.g., InfluxDB, TimescaleDB.</span>,
          <span key="2"><strong>NoSQL Databases:</strong> Flexible schemas and high write-throughput. E.g., MongoDB, Cassandra.</span>,
          <span key="3"><strong>Traditional SQL:</strong> Used for structured metadata (user profiles, device registries).</span>
        ]} />

        <SectionHeading>Analytics & AI</SectionHeading>
        <div className="space-y-4">
          <ConceptCard 
            title="Predictive Maintenance" 
            def="Using ML models on vibration and temperature data to predict when a machine will fail before it actually breaks down."
            icon={Cpu}
          />
          <ConceptCard 
            title="Digital Twins" 
            def="A real-time virtual replica of a physical physical asset, process, or system. Used for simulation and testing without affecting the real object."
            icon={Server}
          />
        </div>
      </>
    )
  },
  {
    id: "ch6",
    title: "6. IoT Security",
    description: "Protecting devices, networks, and data from malicious actors.",
    content: (
      <>
        <div className="bg-destructive/10 border border-destructive/20 rounded-2xl p-6 mb-8 text-destructive">
          <h4 className="font-bold text-xl mb-2 flex items-center gap-2">
            <Shield className="w-6 h-6" /> Why is IoT Security Critical?
          </h4>
          <p className="text-sm">Billions of connected devices create a massive attack surface. Many edge devices have limited compute power, making standard encryption difficult. Physical access to remote sensors is often easy for attackers.</p>
        </div>

        <SectionHeading>Common Threats</SectionHeading>
        <div className="grid md:grid-cols-2 gap-4">
          <ConceptCard title="Botnets (e.g., Mirai)" def="Attackers infect thousands of devices to create a robot network used for massive DDoS attacks." />
          <ConceptCard title="Man-in-the-Middle (MitM)" def="Intercepting unencrypted communication between a device and the cloud." />
          <ConceptCard title="Physical Tampering" def="Extracting firmware or cryptographic keys by physically opening the device." />
          <ConceptCard title="Default Credentials" def="Exploiting factory-set passwords (admin/admin) that users never change." />
        </div>

        <SectionHeading>Security Layers & Mechanisms</SectionHeading>
        <List items={[
          <span key="1"><strong>Device Security:</strong> Secure boot (ensuring only signed firmware runs), Hardware Security Modules (HSM).</span>,
          <span key="2"><strong>Communication Security:</strong> TLS/SSL encryption for data in transit, VPNs.</span>,
          <span key="3"><strong>Authentication & Authorization:</strong> PKI (Public Key Infrastructure) certificates to verify device identity, Role-Based Access Control (RBAC).</span>,
          <span key="4"><strong>Cloud Security:</strong> Encrypting data at rest (AES-256).</span>
        ]} />

        <SectionHeading>Best Practices</SectionHeading>
        <div className="bg-card border border-border rounded-xl p-5">
          <List items={[
            "Change default passwords immediately upon deployment.",
            "Implement secure, Over-The-Air (OTA) firmware update mechanisms.",
            "Network Segmentation: Place IoT devices on a separate VLAN from critical enterprise networks.",
            "Implement 'Security by Design' from the hardware level up."
          ]} />
        </div>
      </>
    )
  },
  {
    id: "ch7",
    title: "7. IoT Applications",
    description: "Real-world implementations transforming industries.",
    content: (
      <>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          IoT is not a single industry; it's a technological paradigm that enhances almost every sector by providing real-time visibility and control.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <ConceptCard 
            title="Smart Home" 
            def="Automating daily life. Examples: Smart lighting (Philips Hue), climate control (Nest Thermostat), voice assistants (Alexa), and smart locks."
            icon={Lightbulb}
          />
          
          <ConceptCard 
            title="Smart City" 
            def="Improving urban efficiency. Examples: Adaptive traffic lights, smart waste management (bins that signal when full), air quality monitoring, and smart grid energy distribution."
            icon={MapPin}
          />

          <ConceptCard 
            title="Healthcare (IoMT)" 
            def="Internet of Medical Things. Examples: Wearable heart monitors, remote patient monitoring, smart pill dispensers, and hospital asset tracking."
            icon={Activity}
          />

          <ConceptCard 
            title="Precision Agriculture" 
            def="Maximizing yield. Examples: Soil moisture sensors triggering automated irrigation, drone crop monitoring, and livestock GPS tracking."
            icon={Cloud}
          />

          <ConceptCard 
            title="Industrial IoT (IIoT) & Industry 4.0" 
            def="Factory automation. Examples: Predictive maintenance on manufacturing lines, digital twins of factory floors, supply chain asset tracking."
            icon={Database}
          />

          <ConceptCard 
            title="Transportation" 
            def="Connected mobility. Examples: V2X (Vehicle-to-Everything) communication, fleet management, autonomous vehicles, smart highways."
            icon={Route}
          />
        </div>
      </>
    )
  }
];
