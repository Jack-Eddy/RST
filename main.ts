// variables
const servoNumber1 = robotbit.Servos.S1

// setup
radio.setGroup(69)
basic.clearScreen()
basic.showIcon(IconNames.Happy)

while (true) {
  if (radio.onReceivedNumber(function (receivedNumber: number) {
      robotbit.Servo(servoNumber1, 180)
      basic.showString('FIRE!')
      robotbit.Servo(servoNumber1, 0)
      basic.showString('PRIMING...')
  }))
      basic.clearScreen()
      basic.showIcon(IconNames.Happy)
}
