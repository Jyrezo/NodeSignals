export class NodeSignalConnection {
  Callback: Function
  ShouldBeRemoved: boolean
  constructor(Callback: Function) {
    this.Callback = Callback
    this.ShouldBeRemoved = false
  }

  Disconnect() {
    this.ShouldBeRemoved = true
  }
}