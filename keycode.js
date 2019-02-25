var const_name_cpp = document.getElementById("keycode-info-cpp");
var const_name_e = document.getElementById("keycode-info-e");
document.addEventListener('keydown',function(e) {
  e.preventDefault();
  var name = "";
  if ('A'.charCodeAt() <= e.keyCode&&e.keyCode <= 'Z'.charCodeAt())
  {
    name = String.fromCharCode(e.keyCode);
  }
  else if ('0'.charCodeAt() <= e.keyCode&&e.keyCode <= '9'.charCodeAt())
  {
    name = "Digit" + String.fromCharCode(e.keyCode);
  }
  else if (0x60 <= e.keyCode&&e.keyCode <= 0x69)
  {
    name = "Numpad" + String.fromCharCode('0'.charCodeAt() + (e.keyCode - 0x60));
  }
  else
  {
    switch(e.keyCode)
    {
      case 0x08: name = "Backspace";  break;
      case 0x09: name = "Tab";        break;

      case 0x0D: name = "Enter";      break;

      case 0x10: name = "Shift";      break;
      case 0x11: name = "Ctrl";       break;
      case 0x12: name = "Alt";        break;
      case 0x13: name = "Pause";      break;
      case 0x14: name = "CapsLock";   break;

      case 0x1B: name = "Esc";        break;

      case 0X20: name = "Space";      break;
      case 0x21: name = "PageUp";     break;
      case 0x22: name = "PageDown";   break;
      case 0x23: name = "End";        break;
      case 0x24: name = "Home";       break;

      case 0x25: name = "ArrowLeft";  break;
      case 0x26: name = "ArrowUp";    break;
      case 0x27: name = "ArrowRight"; break;
      case 0x28: name = "ArrowDown";  break;

      case 0x2C: name = "PrintScreen"; break;
      case 0x2D: name = "Insert";      break;
      case 0x2E: name = "Delete";      break;

      case 0x5B: name = "LeftWin";     break;
      case 0x5C: name = "RightWin";    break;
      case 0x5D: name = "ContextMenu"; break;

      case 0x6A: name = "NumpadMultiply"; break;
      case 0x6B: name = "NumpadAdd"; break;
      case 0x6D: name = "NumpadSubtract"; break;
      case 0x6E: name = "NumpadDecimal"; break;
      case 0x6F: name = "NumpadDivide"; break;

      case 0x70: name = "F1"; break;
      case 0x71: name = "F2"; break;
      case 0x72: name = "F3"; break;
      case 0x73: name = "F4"; break;
      case 0x74: name = "F5"; break;
      case 0x75: name = "F6"; break;
      case 0x76: name = "F7"; break;
      case 0x77: name = "F8"; break;
      case 0x78: name = "F9"; break;
      case 0x79: name = "F10"; break;
      case 0x7A: name = "F11"; break;
      case 0x7B: name = "F12"; break;

      case 0x90: name = "NumLock"; break;
      case 0x91: name = "ScrollLock"; break;

      case 0x3B: name = "Semicolon"; break;
      case 0xBA: name = "Semicolon"; break;
      case 0x3D: name = "Equal"; break;
      case 0xBB: name = "Equal"; break;
      case 0xBC: name = "Comma"; break;
      case 0xAD: name = "Minus"; break;
      case 0xBD: name = "Minus"; break;
      case 0xBE: name = "Period"; break;
      case 0xBF: name = "Slash"; break;
      case 0xC0: name = "Backquote"; break;

      case 0xDB: name = "BracketLeft"; break;
      case 0xDC: name = "Backslash"; break;
      case 0xDD: name = "BracketRight"; break;
      case 0xDE: name = "Quote"; break;

      default:   name = "Invalid";   break;
    }
  }
  console.info(e.keyCode);
  switch (name)
  {
    case "Shift":
    case "Ctrl":
    case "Alt":
      const_name_cpp.textContent = "k" + name + " / kLeft" + name + " / kRight" + name;
      const_name_e.textContent = "#Vk" + name + " / #VkLeft" + name + " / #VkRight" + name;
      break;
    case "Enter":
      const_name_cpp.textContent = "k" + name + " / kNumpad" + name;
      const_name_e.textContent = "#Vk" + name + " / #VkNumpad" + name;
      break;
    default:
      const_name_cpp.textContent = "k" + name;
      const_name_e.textContent = "#Vk" + name;
  }
});