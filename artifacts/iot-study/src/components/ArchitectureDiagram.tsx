import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

interface Layer {
  number: number;
  name: string;
  subtitle: string;
  description: string;
  color: string;
  bgColor: string;
  borderColor: string;
  examples: string;
}

const layers: Layer[] = [
  {
    number: 5,
    name: "Business Layer",
    subtitle: "Strategy & Models",
    description: "Manages the whole IoT system. Uses processed data to create business flowcharts, graphs, and strategic models. Makes high-level decisions based on insights from the Application Layer.",
    examples: "Business reports, KPIs, dashboards, ROI analysis",
    color: "text-purple-700 dark:text-purple-300",
    bgColor: "bg-purple-50 dark:bg-purple-950/40",
    borderColor: "border-purple-300 dark:border-purple-700",
  },
  {
    number: 4,
    name: "Application Layer",
    subtitle: "User-Facing Services",
    description: "Delivers application-specific services to end users. Defines what IoT does in each domain. Connects processed data to human-facing interfaces and controls.",
    examples: "Smart home app, health monitoring dashboard, fleet tracker",
    color: "text-blue-700 dark:text-blue-300",
    bgColor: "bg-blue-50 dark:bg-blue-950/40",
    borderColor: "border-blue-300 dark:border-blue-700",
  },
  {
    number: 3,
    name: "Processing / Middleware Layer",
    subtitle: "Data Storage & Analysis",
    description: "The intelligence center of the IoT system. Receives raw data from the Transport Layer, stores it in databases (time-series, NoSQL), analyzes it using cloud computing and ML, and forwards results upward.",
    examples: "AWS IoT Core, InfluxDB, stream processing, Digital Twins",
    color: "text-cyan-700 dark:text-cyan-300",
    bgColor: "bg-cyan-50 dark:bg-cyan-950/40",
    borderColor: "border-cyan-300 dark:border-cyan-700",
  },
  {
    number: 2,
    name: "Transport Layer",
    subtitle: "Data Routing & Transmission",
    description: "Moves data collected by the Perception Layer to the processing systems above. Uses various wireless and wired protocols depending on range, bandwidth, and power requirements.",
    examples: "WiFi, Bluetooth, Zigbee, LoRaWAN, 4G/5G, MQTT, CoAP",
    color: "text-green-700 dark:text-green-300",
    bgColor: "bg-green-50 dark:bg-green-950/40",
    borderColor: "border-green-300 dark:border-green-700",
  },
  {
    number: 1,
    name: "Perception Layer",
    subtitle: "Physical Sensing & Actuation",
    description: "The physical foundation of IoT. Sensors collect data from the physical world; actuators execute physical actions. This is where the digital and physical worlds meet.",
    examples: "PIR sensors, DHT22, RFID tags, GPS, motors, relays, Arduino, ESP32",
    color: "text-orange-700 dark:text-orange-300",
    bgColor: "bg-orange-50 dark:bg-orange-950/40",
    borderColor: "border-orange-300 dark:border-orange-700",
  },
];

export function ArchitectureDiagram() {
  const [openLayer, setOpenLayer] = useState<number | null>(null);

  const toggle = (num: number) => {
    setOpenLayer(prev => prev === num ? null : num);
  };

  return (
    <div className="my-6 space-y-2">
      <p className="text-sm text-muted-foreground mb-4 italic">Click any layer to expand its details.</p>
      {layers.map((layer) => {
        const isOpen = openLayer === layer.number;
        return (
          <div
            key={layer.number}
            className={cn(
              "rounded-xl border-2 overflow-hidden transition-all duration-300",
              layer.borderColor,
              isOpen ? layer.bgColor : "bg-card hover:bg-muted/30"
            )}
          >
            <button
              className="w-full text-left px-5 py-3.5 flex items-center gap-4"
              onClick={() => toggle(layer.number)}
              aria-expanded={isOpen}
            >
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0 border-2",
                layer.borderColor,
                isOpen ? `${layer.color} ${layer.bgColor}` : "text-muted-foreground bg-muted/50"
              )}>
                {layer.number}
              </div>
              <div className="flex-1 min-w-0">
                <div className={cn("font-bold text-base", isOpen ? layer.color : "text-foreground")}>
                  {layer.name}
                </div>
                <div className="text-xs text-muted-foreground">{layer.subtitle}</div>
              </div>
              <ChevronDown
                className={cn(
                  "w-5 h-5 shrink-0 transition-transform duration-300",
                  isOpen ? `rotate-180 ${layer.color}` : "text-muted-foreground"
                )}
              />
            </button>

            <div className={cn(
              "overflow-hidden transition-all duration-300",
              isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
            )}>
              <div className="px-5 pb-4 pt-0 space-y-2 border-t border-current/10">
                <p className="text-sm text-foreground/80 leading-relaxed">{layer.description}</p>
                <div className={cn("text-xs font-medium px-3 py-1.5 rounded-md inline-block mt-1", layer.bgColor, layer.color)}>
                  Examples: {layer.examples}
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="text-center text-xs text-muted-foreground pt-2 flex items-center justify-center gap-2">
        <span>↑ Data flows upward through layers</span>
        <span>·</span>
        <span>Commands flow downward ↓</span>
      </div>
    </div>
  );
}
