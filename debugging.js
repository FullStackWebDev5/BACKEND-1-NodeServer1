/*
  # Debugging: Process of finding bugs in your application
  # Debugger: Tool that helps run through your code to find errors

  # Debugging Node.js using VS Code Editor:
    - 'Run and Debug' Option
      - First time: Click on 'Create a launch.json file' -> Select Node.js
        - This will create .vscode folder and a launch.json file in it
      - Second time and onwards: Click on 'Play' icon (Launch Program)

    - Breakpoint: 
      - Can be added to check the state of the variables/etc at that given point
      - Click on the left of the line number to add a breakpoint (red dot)

    - Watch:
      - Tracking the state of the variables

    - VSCode Debugger Options
      - Continue: Continues and stops at the next breakpoint
      - Step over: Next expression/line
      - Step into: Step into a function call
      - Step out: Step outside a function
      - Restart: Restart the debugger
      - Stop: Stop the debugger
*/

console.log('START')

function sum(num1, num2) {
  console.log('Inside sum function')
  return num1 + num2
}

const a = 20, b = 25
const result = sum(a, b)
console.log(result)

console.log('END')