# Mascot Behavioral Design - Mr. Dongo Dongo

## Contextual Awareness System (Talking Tom-Inspired)

### Animation States & Triggers

| State | Trigger | Animation Description | Duration |
|-------|---------|----------------------|----------|
| **Idle** | No user interaction (5+ sec) | Random cycle: yawning, itching, looking around, playing with toy | Loop |
| **Listening** | Voice input detected / User typing | Eyes follow cursor, hands on ears (voice) or mimicking typing | While active |
| **Thinking** | AI processing query | Scratching head, thought bubble with question marks | 1-3 sec |
| **Speaking** | AI response being delivered | Mouth sync with audio, hand gestures, nodding | Response length |
| **Welcoming** | App launch | Waving, excited bounce, looking at user curiously | 3-5 sec |
| **Confused** | Unrecognized query / Error | Head tilt, raised eyebrow, concerned expression | 2-3 sec |
| **Encouraging** | Correct answer / Success | Smiling, thumbs up, celebratory dance | 2-4 sec |
| **Interrupted** | User speaks during AI response | Pause current animation, attentive listening pose | Immediate |

---

## Micro-Interaction Examples

### 1. App Launch Sequence

```
┌─────────────────────────────────────────┐
│                                         │
│          [Mr. Dongo Dongo]              │
│               🎭                        │
│           (Waving animation)            │
│                                         │
│   ╭───────────────────────────────╮     │
│   │ "Hello! I'm Mr. Dongo Dongo! │     │
│   │  Ready to learn together?"   │     │
│   ╰───────────────────────────────╯     │
│                                         │
└─────────────────────────────────────────┘
        ↓ (after 3 seconds)
┌─────────────────────────────────────────┐
│                                         │
│          [Mr. Dongo Dongo]              │
│               😊                        │
│          (Idle breathing)               │
│                                         │
│   ╭───────────────────────────────╮     │
│   │ "Ask me anything about your  │     │
│   │  studies!"                   │     │
│   ╰───────────────────────────────╯     │
│                                         │
└─────────────────────────────────────────┘
```

### 2. Voice Input Active

```
┌─────────────────────────────────────────┐
│                                         │
│          [Mr. Dongo Dongo]              │
│               🎤                        │
│         (Hands cupped to ears)          │
│           (Mouth slightly open)         │
│                                         │
│   ╭───────────────────────────────╮     │
│   │  [Sound wave visualization]   │     │
│   │  "I'm listening..."           │     │
│   ╰───────────────────────────────╯     │
│                                         │
└─────────────────────────────────────────┘
```

### 3. Processing Complex Query

```
┌─────────────────────────────────────────┐
│                                         │
│          [Mr. Dongo Dongo]              │
│               🤔                        │
│        (Scratching head, blinking)      │
│                                         │
│         ╭─────────────╮                 │
│         │    ???      │  ← Thought      │
│         ╰─────────────╯     bubble      │
│                                         │
│   ╭───────────────────────────────╮     │
│   │  "Hmm, let me think about     │     │
│   │   that for a moment..."       │     │
│   ╰───────────────────────────────╯     │
│                                         │
└─────────────────────────────────────────┘
```

### 4. Error/Confusion State

```
┌─────────────────────────────────────────┐
│                                         │
│          [Mr. Dongo Dongo]              │
│               😕                        │
│        (Head tilted, one eyebrow up)    │
│                                         │
│   ╭───────────────────────────────╮     │
│   │  "I'm not sure I understood.  │     │
│   │   Could you try asking in a   │     │
│   │   different way? Or type it!" │     │
│   ╰───────────────────────────────╯     │
│                                         │
└─────────────────────────────────────────┘
```

---

## Technical Implementation

### Sprite Animation System

```
Animation Pipeline:
┌─────────────┐    ┌──────────────┐    ┌─────────────┐
│  Authoring  │ →  │  Export as   │ →  │  WinUI 3    │
│  (3ds Max/  │    │  SVG Sprites │    │  Visual     │
│   Blender)  │    │  (JSON map)  │    │  Layer      │
└─────────────┘    └──────────────┘    └─────────────┘
```

**Frame Rates:**
- Idle animations: 24 fps (looping)
- Reactive animations: 30-60 fps (smooth transitions)
- Lip sync: 60 fps (precise mouth movements)

**File Format:**
- SVG sprites with JSON animation map
- GPU-accelerated rendering via WinUI 3
- Lightweight: < 500KB total asset package

### State Machine Logic

```csharp
public enum MascotState
{
    Idle,
    Listening,
    Thinking,
    Speaking,
    Welcoming,
    Confused,
    Encouraging,
    Interrupted
}

public class MascotController
{
    private MascotState _currentState;
    private DispatcherTimer _idleTimer;
    
    // Triggered by user activity detection
    public void OnUserInputDetected(InputType type)
    {
        ResetIdleTimer();
        
        switch(type)
        {
            case InputType.Voice:
                TransitionTo(MascotState.Listening);
                break;
            case InputType.Text:
                TransitionTo(MascotState.Thinking);
                break;
        }
    }
    
    // Triggered after 5 seconds of no activity
    public void OnIdleTimeout()
    {
        TransitionTo(MascotState.Idle);
        StartRandomIdleCycle();
    }
    
    // Allows interruption during speaking
    public void OnInterruption()
    {
        TransitionTo(MascotState.Interrupted);
        // Graceful pause of current animation
    }
}
```

### Accessibility Features

- **Screen Reader Integration:** Narrator describes mascot state
  - Example: "Mr. Dongo Dongo is smiling and nodding"
  - XAML AutomationProperties for each state
  
- **Reduced Motion Option:** Toggle to minimize animations
  - Static mascot with表情 changes only
  - Respects Windows accessibility settings
  
- **High Contrast Mode:** Mascot outline adapts to theme
  - Maintains visibility in all 4 Windows HC themes
  - (Aquatic, Desert, Dusk, Night Sky)

---

## Personalization Feature

Students can rename the mascot from default "Mr. Dongo Dongo":

```
Settings Panel:
┌─────────────────────────────────────┐
│  Mascot Name:                       │
│  ┌─────────────────────────────┐   │
│  │ [Mr. Dongo Dongo________]   │   │
│  └─────────────────────────────┘   │
│                                     │
│  [Save Changes]  [Cancel]           │
└─────────────────────────────────────┘
```

**Behavioral Adaptation:**
- Mascot addresses student by chosen name
- Example: "Great question, [Student's Name]!"
- Stored locally using `ApplicationData` class
