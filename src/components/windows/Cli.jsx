import React from 'react'
import MacWindow from './MacWindow'
import * as ReactConsoleEmulator from 'react-console-emulator'
import './cli.scss'

const Terminal = ReactConsoleEmulator.default?.default || ReactConsoleEmulator.default

const Cli = () => {
  return (
    <MacWindow>
        <div className="cli-window">
            <Terminal
            commands = {{}}
            welcomeMessage = {'Welcome to React Terminal'}
            promptLabel = {'bikashbashyal:~$'}

            />
        </div>
    </MacWindow>
  )
}

export default Cli