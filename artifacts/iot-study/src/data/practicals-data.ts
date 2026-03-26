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
  wiringNote?: string;
  code: string;
  howItWorks: string[];
  troubleshooting: { problem: string; fix: string }[];
  importantNote?: string;
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
    wiringNote: 'Always connect GND first so there is a common reference for all components.',
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

  {
    id: 'p2',
    title: 'Practical 2',
    subtitle: 'RGB LED Color Control',
    objective:
      'Interface an RGB LED with an Arduino Uno and use PWM signals to mix red, green, and blue brightness levels, producing multiple colors from a single component.',
    components: [
      {
        name: 'Arduino Uno',
        quantity: '×1',
        description: 'The main microcontroller board. PWM pins (~) are used to control brightness.',
        imageKey: 'arduino',
      },
      {
        name: 'RGB LED (common cathode)',
        quantity: '×1',
        description: 'Has 4 legs: Red, Green, Blue, and Common. The common leg is the longest. Flat side of the base marks the cathode side.',
        imageKey: 'rgbled',
      },
      {
        name: '220 Ω Resistors',
        quantity: '×3',
        description: 'One resistor per color leg (R, G, B) to limit current. All three are the same value.',
        imageKey: 'resistors',
      },
      {
        name: 'Breadboard',
        quantity: '×1',
        description: 'Solderless board. Place the RGB LED so all 4 legs are in separate rows.',
        imageKey: 'breadboard',
      },
      {
        name: 'Jumper Wires',
        quantity: 'Several',
        description: 'Use colored wires (red, green, blue, black) to match the connections and avoid mistakes.',
        imageKey: 'jumpers',
      },
    ],
    wiring: [
      { from: 'RGB LED Common leg (longest)', to: 'Arduino GND', color: '#64748b', note: 'Black wire' },
      { from: 'RGB LED Red leg', to: '220 Ω resistor → Arduino D11 (~)', color: '#ef4444', note: 'Red wire — PWM pin' },
      { from: 'RGB LED Green leg', to: '220 Ω resistor → Arduino D10 (~)', color: '#22c55e', note: 'Green wire — PWM pin' },
      { from: 'RGB LED Blue leg', to: '220 Ω resistor → Arduino D9 (~)', color: '#3b82f6', note: 'Blue wire — PWM pin' },
    ],
    wiringNote: 'Pins D9, D10, D11 all have the ~ symbol on the Arduino board — these are the PWM-capable pins required for analogWrite().',
    importantNote: 'If your RGB LED is common anode (common leg goes to 5V instead of GND), uncomment the #define COMMON_ANODE line in the code so color values are correctly inverted (255 − value).',
    code: `int redPin = 11;
int greenPin = 10;
int bluePin = 9;

// Uncomment if your RGB LED is common anode
// #define COMMON_ANODE

void setup() {
  pinMode(redPin, OUTPUT);
  pinMode(greenPin, OUTPUT);
  pinMode(bluePin, OUTPUT);
}

void loop() {
  setColor(255, 0, 0);   // Red
  delay(1000);
  setColor(0, 255, 0);   // Green
  delay(1000);
  setColor(0, 0, 255);   // Blue
  delay(1000);
  setColor(255, 255, 0); // Yellow
  delay(1000);
  setColor(80, 0, 80);   // Purple
  delay(1000);
  setColor(0, 255, 255); // Aqua
  delay(1000);
}

void setColor(int red, int green, int blue) {
#ifdef COMMON_ANODE
  red = 255 - red;
  green = 255 - green;
  blue = 255 - blue;
#endif
  analogWrite(redPin, red);
  analogWrite(greenPin, green);
  analogWrite(bluePin, blue);
}`,
    howItWorks: [
      'analogWrite() sends a PWM (Pulse Width Modulation) signal to each color pin. Values range from 0 (off) to 255 (full brightness).',
      'Each color has its own 220 Ω resistor in series to limit current and protect the LED legs.',
      'By mixing different brightness levels for R, G, and B, the LED produces combined colors — for example (255, 255, 0) gives yellow.',
      'The setColor() helper function makes it easy to set all three channels at once with a single call.',
      'Common cathode: the common leg connects to GND and values work normally. Common anode: common leg connects to 5V and all values must be inverted with 255 − value.',
    ],
    troubleshooting: [
      {
        problem: 'One color is missing or always off',
        fix: 'Each color leg needs its own 220 Ω resistor. Check that the resistor for that leg is connected correctly between the LED leg and the Arduino PWM pin.',
      },
      {
        problem: 'Colors are wrong — red looks blue, blue looks red, etc.',
        fix: 'The R, G, B legs are wired to the wrong pins. Check that Red goes to D11, Green to D10, and Blue to D9. Use the flat side of the LED base to identify which leg is which.',
      },
      {
        problem: 'LED is very dim or not responding to analogWrite()',
        fix: 'Make sure you are using PWM-capable pins — D9, D10, D11 (they have the ~ symbol on the board). Standard digital pins like D8 or D12 cannot do analogWrite().',
      },
      {
        problem: 'Nothing lights up at all',
        fix: 'Find the common leg (the longest one) and confirm it connects to GND for common cathode. If it is common anode, it must connect to 5V instead. A wrong common connection prevents all colors from working.',
      },
    ],
  },
];
