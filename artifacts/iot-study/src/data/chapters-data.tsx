import React from 'react';
import { ConceptCard, SectionHeading, List } from '@/components/ui-elements';
import { ArchitectureDiagram } from '@/components/ArchitectureDiagram';
import { Network, Cpu, Shield, Cloud, Server, Lightbulb, Smartphone, Activity, MapPin, Database, Zap, Route, Globe, Layers } from 'lucide-react';

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
        {/* ── ITU Official Definition ── */}
        <div className="bg-primary/5 border-l-4 border-primary rounded-r-2xl p-5 mb-8">
          <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Official Definition — ITU-T Y.2060 (2012)</p>
          <p className="text-foreground leading-relaxed italic">
            "The IoT can be viewed as a global infrastructure for the information society, enabling advanced services by interconnecting (physical and virtual) things based on existing and evolving interoperable information and communication technologies (ICT)."
          </p>
          <p className="text-xs text-muted-foreground mt-2">Source: Recommendation ITU-T Y.2060</p>
        </div>

        {/* ── Things ── */}
        <SectionHeading>Things</SectionHeading>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Things are objects of the physical world (physical things) or of the information world (virtual things) which are capable of being identified and integrated into communication networks. Things have associated information, which can be static and dynamic.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <ConceptCard
            title="Physical Things"
            def="Exist in the physical world and are capable of being sensed, actuated and connected. Examples: surrounding environment, industrial robots, goods and electrical equipment."
            icon={Cpu}
          />
          <ConceptCard
            title="Virtual Things"
            def="Exist in the information world and are capable of being stored, processed and accessed. Examples: multimedia content and application software."
            icon={Server}
          />
        </div>

        {/* ── Any-Time / Any-Place / Any-Thing ── */}
        <div className="bg-slate-100 dark:bg-slate-800/50 border border-border rounded-2xl p-6 mb-8">
          <h4 className="font-bold text-lg mb-3 text-foreground">Any-Time / Any-Place / Any-Thing</h4>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            The IoT vision extends connectivity beyond person-to-person and person-to-machine to include thing-to-thing communication — anything, connected to anything, at any time, from any place.
          </p>
          <div className="flex flex-wrap gap-3">
            {['Any-Time', 'Any-Place', 'Any-Thing'].map(t => (
              <span key={t} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">{t}</span>
            ))}
          </div>
        </div>

        {/* ── Device Definition ── */}
        <SectionHeading>Device (ITU-T Y.2060)</SectionHeading>
        <div className="bg-card border border-border rounded-2xl p-5 mb-8">
          <p className="text-muted-foreground leading-relaxed">
            A <strong className="text-foreground">device</strong> is a piece of equipment with the <strong className="text-foreground">mandatory capability of communication</strong> and optional capabilities of sensing, actuation, data capture, data storage and data processing. Devices collect various kinds of information and provide it to the network for further processing. Some devices also execute operations based on information received from the network.
          </p>
        </div>

        {/* ── History ── */}
        <SectionHeading>History of IoT</SectionHeading>
        <div className="space-y-3 mb-8">
          {[
            { year: '1912', event: 'First telemetry system rolled out in Chicago, using telephone lines to monitor data from power plants.' },
            { year: '1930s', event: 'Telemetry expanded to weather monitoring — the radiosonde became widely used to monitor weather from balloons.' },
            { year: '1957', event: 'Soviet Union launched Sputnik, beginning the Space Race and aerospace telemetry — the basis of global satellite communications.' },
            { year: '1980s', event: 'Broad adoption of M2M (Machine-to-Machine) began with wired SCADA connections on factory floors and in security systems.' },
            { year: '1990s', event: 'M2M began moving toward wireless. ADEMCO built a private radio network for intrusion/smoke detection as cellular was too expensive.' },
            { year: '1995', event: 'Siemens introduced the first cellular module built specifically for M2M communication.' },
          ].map(({ year, event }) => (
            <div key={year} className="flex gap-4 bg-card border border-border rounded-xl p-4">
              <div className="w-14 shrink-0 text-sm font-extrabold text-primary font-mono">{year}</div>
              <p className="text-sm text-foreground/80 leading-relaxed">{event}</p>
            </div>
          ))}
        </div>

        {/* ── Why IoT Now ── */}
        <SectionHeading>Why IoT Now?</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {[
            { title: 'Ubiquitous Connectivity', desc: 'WiFi, cellular, and LPWAN networks now blanket most of the world, giving devices always-on connections.' },
            { title: 'Widespread Adoption of IP', desc: 'IPv6 provides an almost unlimited address space, allowing every device on earth to have a unique IP address.' },
            { title: 'Computing Economics', desc: 'Hardware costs have dropped dramatically — a Raspberry Pi Zero costs only $5, making connected devices cheap to build.' },
            { title: 'Miniaturization', desc: 'Sensors and processors have shrunk to the point where they fit inside clothing, pills, and industrial machinery.' },
            { title: 'Advances in Data Analytics', desc: 'Machine learning and AI can now extract real value from the enormous streams of data that IoT devices generate.' },
            { title: 'Rise of Cloud Computing', desc: 'Scalable cloud platforms provide cheap storage and processing so even small devices can leverage powerful back-end services.' },
          ].map(({ title, desc }) => (
            <ConceptCard key={title} title={title} def={desc} />
          ))}
        </div>

        {/* ── Fundamental Characteristics ── */}
        <SectionHeading>Fundamental Characteristics (ITU-T Y.2060)</SectionHeading>
        <div className="space-y-4 mb-8">
          <ConceptCard
            title="Interconnectivity"
            def="With regard to the IoT, anything can be interconnected with the global information and communication infrastructure."
            icon={Network}
          />
          <ConceptCard
            title="Heterogeneity"
            def="Devices in the IoT are heterogeneous — based on different hardware platforms and networks. They can interact with other devices or service platforms through different networks."
            icon={Layers}
          />
          <ConceptCard
            title="Dynamic Changes"
            def="The state of devices changes dynamically, e.g., sleeping and waking up, connected and/or disconnected, as well as the context of devices including location and speed. The number of devices can also change dynamically."
            icon={Activity}
          />
          <ConceptCard
            title="Enormous Scale"
            def="The number of devices that need to be managed and that communicate with each other will be at least an order of magnitude larger than devices connected to the current Internet. Communication triggered by devices will noticeably shift away from human-triggered communication."
            icon={Globe}
          />
        </div>

        {/* ── IoT Ecosystem Pipeline ── */}
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

        {/* ── Node → Gateway → Services ── */}
        <SectionHeading>Node → Gateway → Services</SectionHeading>
        <p className="text-muted-foreground mb-4">
          The simplest and most widely taught IoT architecture breaks the system into three physical tiers.
        </p>
        <div className="space-y-4 mb-8">
          <div className="bg-card border border-border rounded-2xl p-5">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl shrink-0"><Cpu className="w-5 h-5" /></div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Node (IoT Device)</h4>
                <p className="text-sm text-muted-foreground mb-3">The edge device that interacts with the physical world.</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  {['Sensor', 'Protocol stack', 'Controller', 'Memory', 'Power Management'].map(t => (
                    <span key={t} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg font-medium">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center text-2xl text-muted-foreground">↓</div>

          <div className="bg-card border border-border rounded-2xl p-5">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-xl shrink-0"><Route className="w-5 h-5" /></div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Gateway</h4>
                <p className="text-sm text-muted-foreground mb-3">Bridges different protocols and forwards data to the internet. It translates between the node's local protocol and the internet protocol.</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                  {[
                    { from: 'WiFi', to: 'Ethernet' },
                    { from: 'Bluetooth', to: 'Ethernet' },
                    { from: 'SMS', to: 'Ethernet' },
                  ].map(({ from, to }) => (
                    <div key={from} className="flex items-center gap-1 px-2 py-1 bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 rounded-lg font-medium">
                      <span>{from}</span><span className="text-muted-foreground">→</span><span>{to}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center text-2xl text-muted-foreground">↓</div>

          <div className="bg-card border border-border rounded-2xl p-5">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-xl shrink-0"><Cloud className="w-5 h-5" /></div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Services (Cloud / Back-End)</h4>
                <p className="text-sm text-muted-foreground mb-3">Where data is stored, processed, and acted upon.</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  {['Data Graphing', 'Machine Learning', 'Alerting', 'Storage', 'APIs'].map(t => (
                    <span key={t} className="px-2 py-1 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-lg font-medium">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── 3-Layer Architecture ── */}
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
        <p className="text-muted-foreground mb-4">Adds crucial processing steps between network and application. Click each layer to explore its role.</p>
        <ArchitectureDiagram />

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
        {/* ── Network Connectivity Key Aspects ── */}
        <SectionHeading>Key Aspects of Network Connectivity</SectionHeading>
        <p className="text-muted-foreground mb-4">When selecting a connectivity technology for an IoT deployment, five factors must be evaluated:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {[
            { title: 'Range', desc: 'Are you deploying to a single office floor or an entire city? Short-range (WiFi, BLE) vs long-range (LoRa, cellular) decisions depend on this.' },
            { title: 'Data Rate', desc: 'How much bandwidth do you require? How often does your data change? Video needs high rates; temperature sensors need very little.' },
            { title: 'Power', desc: 'Is your sensor running on mains power or battery? Battery-operated devices must use low-power protocols like BLE, LoRa, or NB-IoT.' },
            { title: 'Frequency', desc: 'Have you considered channel blocking and signal interference? 2.4 GHz is crowded — consider 868 MHz (LoRa) or 900 MHz bands.' },
            { title: 'Security', desc: 'Will your sensors support mission-critical applications? Higher security requirements demand stronger encryption and authenticated protocols.' },
          ].map(({ title, desc }) => (
            <ConceptCard key={title} title={title} def={desc} />
          ))}
        </div>

        {/* ── IPv6 ── */}
        <SectionHeading>IPv6 and IoT</SectionHeading>
        <div className="bg-blue-50 dark:bg-blue-900/15 border border-blue-200 dark:border-blue-800/40 rounded-2xl p-5 mb-8">
          <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-3 flex items-center gap-2">
            <Globe className="w-5 h-5" /> Why IoT Requires IPv6
          </h4>
          <List items={[
            'Smart Objects will add tens of billions of additional devices to the internet — IPv4\'s ~4.3 billion addresses are already exhausted.',
            'IPv6 provides 340 undecillion (3.4 × 10³⁸) unique addresses — enough for every sensor on earth.',
            'Stateless Auto-configuration via Neighbor Discovery Protocol (NDP) allows each embedded node to configure its own address without a DHCP server.',
            'Every embedded node can be individually addressed and accessed directly over the internet.',
          ]} />
        </div>

        {/* ── Wireless Technologies ── */}
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
                "Examples: Raspberry Pi ($5 Zero), BeagleBone"
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
            def="A real-time virtual replica of a physical asset, process, or system. Used for simulation and testing without affecting the real object."
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
