import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'

function App(): React.JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12">
          <img alt="logo" className="w-32 h-32 mx-auto mb-4 animate-bounce" src={electronLogo} />
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Electron + React + TypeScript
          </h1>
          <p className="text-gray-400">Build powerful desktop applications</p>
        </header>

        {/* Main Content */}
        <main className="space-y-8">
          {/* Features Section */}
          <section className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700/70 transition-colors">
                <h3 className="text-xl font-medium mb-2 text-blue-400">React</h3>
                <p className="text-gray-300">Modern UI development with React</p>
              </div>
              <div className="p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700/70 transition-colors">
                <h3 className="text-xl font-medium mb-2 text-blue-400">TypeScript</h3>
                <p className="text-gray-300">Type-safe development experience</p>
              </div>
            </div>
          </section>

          {/* Actions Section */}
          <section className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={ipcHandle}
                className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
              >
                Send IPC Message
              </button>
              <a
                href="https://electron-vite.org/"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg transition-colors inline-block"
              >
                View Documentation
              </a>
            </div>
          </section>

          {/* Developer Tools Tip */}
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
            <p className="text-yellow-400">
              💡 Press <code className="bg-yellow-500/20 px-2 py-1 rounded">F12</code> to open DevTools
            </p>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-400">
          <Versions />
          <p className="mt-4">Powered by electron-vite</p>
        </footer>
      </div>
    </div>
  )
}

export default App
