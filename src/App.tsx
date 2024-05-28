import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Link } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
     <Router>
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/MiHistoria">Mi Historia</Link></li>
          <li><Link to="/MiPasion">Mi Pasión</Link></li>
        </ul>
      </nav>
    </Router>
      <header className="bg-gradient-to-r from-blue-600 to-blue-500 p-6">
        <h1 className="text-4xl font-bold tracking-wide">Mi Portafolio</h1>
      </header>
      
      <main className="p-8">
        <section className="mb-12">
          <div className="relative">
          <img src="src/assets/fondo.jpg" alt="Mauricio Barragán" className="w-full h-96 object-cover rounded-lg shadow-lg" style={{objectPosition: 'top'}} />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <h2 className="text-4xl font-semibold mb-2">Sobre Mí</h2>
              <p className="text-xl text-blue-200">Profesor de inglés | Magíster en didáctica | Estudiante de ingeniería de software</p>
            </div>
          </div>
          <p className="mt-8 text-gray-300 text-lg">Soy un profesor de inglés con una maestría en enseñanza de inglés para el aprendizaje autodirigido. Actualmente, también estoy estudiando para ser ingeniero de software, con un enfoque en React.js, Express.js y Angular.js.</p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Carrera</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <img className="h-48 w-full object-cover rounded-lg mb-4" src="src/assets/fotomauro2.jpg" alt="Profesor de inglés" />
              <h3 className="text-xl font-semibold mb-2">Profesor de inglés</h3>
              <p className="text-gray-400">He estado enseñando inglés durante varios años, ayudando a estudiantes de todas las edades a mejorar sus habilidades lingüísticas.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <img className="h-48 w-full object-cover rounded-lg mb-4" src="src/assets/didactica.png" alt="Magíster en didáctica" />
              <h3 className="text-xl font-semibold mb-2">Magíster en didáctica</h3>
              <p className="text-gray-400">Mi maestría me ha proporcionado una comprensión profunda de las mejores prácticas de enseñanza y aprendizaje.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <img className="h-48 w-full object-cover rounded-lg mb-4" src="src/assets/microfono.jpg" alt="Cantante" />
              <h3 className="text-xl font-semibold mb-2">Cantante</h3>
              <p className="text-gray-400">En mi tiempo libre, disfruto cantando y he tenido la oportunidad de actuar en varios eventos locales.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Habilidades</h2>
          <div className="flex flex-wrap gap-4">
            <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full">Enseñanza de inglés</span>
            <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full">Diseño de currículo</span>
            <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full">Desarrollo de software</span>
            <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full">React.js</span>
            <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full">Express.js</span>
            <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full">Angular.js</span>
            <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full">Canto</span>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6">Contacto</h2>
          <form className="bg-gray-800 p-8 rounded-lg max-w-xl mx-auto shadow-lg">
            <div className="mb-6">
              <label className="block text-gray-400 mb-2" htmlFor="name">Nombre</label>
              <input className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" type="text" id="name" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-400 mb-2" htmlFor="email">Email</label>
              <input className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" type="email" id="email" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-400 mb-2" htmlFor="message">Mensaje</label>
              <textarea className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" id="message" rows="4"></textarea>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" type="submit">Enviar</button>
          </form>
        </section>

      </main>
      
      <footer className="bg-gray-900 p-6 text-center">
        <p className="text-gray-400">&copy; 2024 Mauricio Barragán</p>
      </footer>
    </div>
  );
}

export default App;
