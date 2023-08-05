import { NodeSignalConnection } from "./Connection";

export class NodeSignal {
  connections: Array<NodeSignalConnection>
  destroyed: boolean

  constructor() {
    this.connections = []
    this.destroyed = false
  }

  /**
   * Fires the args to the connected events
   * @param {any} args The args you want to fire to the connected events 
   */

  fire(...args: any) {
    let index = 1
    for (let connection of this.connections) {
      if (!connection.ShouldBeRemoved) {
        connection.Callback(...args)
      } else {
        this.connections.splice(index, 1)
      }
      index += 1
    }
  }

  /**
   * Lets you listen to a specific event
   * @param {Function} Callback The function you want you want to listen to the event with
   * @returns {NodeSignalConnection}
   */

  connect(Callback: Function): NodeSignalConnection {
    const Connection = new NodeSignalConnection(Callback)
    this.connections.push(Connection)
    return Connection
  }

  /**
   * Lets you wait until a function is called to execute
   * @returns {Promise<unknown>}
   */

  wait(): Promise<unknown> {
    return new Promise((resolve) => {
      this.connect(function () {
        resolve(undefined)
      })
    })
  }

  /**
   * Destroys the Signal
   * @returns {void}
   */

  Destroy(): void {
    this.destroyed = true
    this.connections = []
  }
}
