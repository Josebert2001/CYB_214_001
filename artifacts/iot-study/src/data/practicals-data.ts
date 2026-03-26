export interface WiringStep {
  from: string;
  to: string;
  color: string;
  note?: string;
}

export interface PracticalComponent {
  name: string;
  quantity: string;
  description: string;
  imageKey?: string;
}

export interface PracticalData {
  id: string;
  title: string;
  subtitle: string;
  objective: string;
  components: PracticalComponent[];
  wiring: WiringStep[];
  code: string;
  howItWorks: string[];
  troubleshooting: { problem: string; fix: string }[];
}

export const practicalsData: PracticalData[] = [
  {
    id: 'p1',
    title: 'Practical 1',
    subtitle: 'Push Button Controls LED',
    objective:
      'Wire a push button and an LED to an Arduino Uno so that pressing the button turns the LED on and releasing it turns the LED off.',
    components: [
      {
        name: 'Arduino Uno',
        quantity: '×1',
        description: 'The main microcontroller board — reads inputs and controls outputs.',
        imageKey: 'arduino',
      },
      {
        name: 'LED',
        quantity: '×1',
        description: 'Light-emitting diode. Long leg = anode (+), short leg = cathode (−).',
        imageKey: 'led',
      },
      {
        name: 'Push Button (6×6 mm tactile)',
        quantity: '×1',
        description: 'Momentary switch — connects only while pressed. Must bridge the breadboard center gap.',
        imageKey: 'button',
      },
      {
        name: '220 Ω Resistor',
        quantity: '×1',
        description: 'Current-limiting resistor placed in series with the LED to prevent burning it out.',
      },
      {
        name: '10 kΩ Resistor',
        quantity: '×1',
        description: 'Pull-down resistor — keeps pin D7 LOW when the button is not pressed.',
      },
      {
        name: 'Breadboard',
        quantity: '×1',
        description: 'Solderless board for building the circuit. The center gap separates the two halves.',
        imageKey: 'breadboard',
      },
      {
        name: 'Jumper Wires',
        quantity: 'Several',
        description: 'Male-to-male wires for connecting Arduino pins to the breadboard.',
      },
    ],
    wiring: [
      { from: 'Arduino D13', to: '220 Ω resistor (leg A)', color: '#22c55e', note: 'Green wire' },
      { from: '220 Ω resistor (leg B)', to: 'LED long leg (anode +)', color: '#22c55e', note: 'Green wire' },
      { from: 'LED short leg (cathode −)', to: 'Arduino GND', color: '#64748b', note: 'Black wire' },
      { from: 'Arduino 5V', to: 'Push button (side A)', color: '#ef4444', note: 'Red wire' },
      { from: 'Push button (side B)', to: 'Arduino D7', color: '#f97316', note: 'Orange wire' },
      { from: 'Arduino D7 row', to: '10 kΩ resistor → GND', color: '#64748b', note: 'Pull-down to GND' },
    ],
    code: `const int buttonPin = 7;
const int ledPin = 13;

void setup() {
  pinMode(buttonPin, INPUT);
  pinMode(ledPin, OUTPUT);
}

void loop() {
  int buttonState = digitalRead(buttonPin);

  if (buttonState == HIGH) {
    digitalWrite(ledPin, HIGH);
  } else {
    digitalWrite(ledPin, LOW);
  }
}`,
    howItWorks: [
      'When the button is not pressed, the 10 kΩ pull-down resistor connects D7 to GND, so digitalRead(7) returns LOW.',
      'When you press the button, 5V flows through to D7 and digitalRead(7) returns HIGH.',
      'The loop() checks buttonState every cycle — if HIGH it writes HIGH to D13, turning on the LED.',
      'Releasing the button drops D7 back to LOW and the LED turns off.',
      'The 220 Ω resistor limits current through the LED to a safe level (about 15–20 mA at 5V).',
    ],
    troubleshooting: [
      {
        problem: 'LED does not light up at all',
        fix: 'Check that the LED long leg (anode) is on the resistor side and short leg (cathode) goes to GND. LEDs have polarity — reversing them stops current flow.',
      },
      {
        problem: 'LED stays ON even without pressing the button',
        fix: 'The 10 kΩ pull-down resistor is missing or not connected to GND. Without it, D7 floats and picks up random noise.',
      },
      {
        problem: 'Button press has no effect',
        fix: 'Make sure the button is bridging the center gap of the breadboard. If both legs are on the same connected strip, the button has no switching effect.',
      },
      {
        problem: 'LED flickers when button is held',
        fix: 'This is usually a loose wire connection. Press all jumper wires firmly into their holes. Also confirm the button sits squarely in the breadboard.',
      },
      {
        problem: 'Arduino GND not connected',
        fix: 'Both the LED cathode GND and the 10 kΩ resistor GND must connect to the same Arduino GND pin. A missing GND breaks the entire circuit.',
      },
    ],
  },
];
