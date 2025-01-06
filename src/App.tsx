import { motion } from "framer-motion";

function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const stagger = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.4, staggerChildren: 0.2 },
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero/About Me */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-section-lg">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.span
              className="block text-primary-100 text-xl mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Jordan Auto Consultoria
            </motion.span>

            <motion.h1
              className="text-heading-1 font-bold mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Especialista em Gestão de Oficinas Automotivas
            </motion.h1>

            <motion.p
              className="text-heading-3 mb-12 text-primary-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transformando sua oficina em uma máquina de sucesso.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
              variants={stagger}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <motion.div
                variants={stagger}
                className="bg-primary-400/10 p-6 rounded-lg backdrop-blur-sm"
              >
                <h3 className="text-heading-3 font-bold">+5 Anos</h3>
                <p>De graduação e experiência no setor automotivo</p>
              </motion.div>
              <motion.div
                variants={stagger}
                className="bg-primary-400/10 p-6 rounded-lg backdrop-blur-sm"
              >
                <h3 className="text-heading-3 font-bold">+30</h3>
                <p>Certificados e especializações na área</p>
              </motion.div>
              <motion.div
                variants={stagger}
                className="bg-primary-400/10 p-6 rounded-lg backdrop-blur-sm"
              >
                <h3 className="text-heading-3 font-bold">+30M</h3>
                <p>Em resultados para oficinas parceiras</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-section bg-white">
        <div className="container">
          <motion.h2
            className="text-heading-2 font-bold text-center mb-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            Quer abrir sua oficina e alcançar o sucesso?
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <motion.div
              variants={stagger}
              whileHover={{ y: -10 }}
              className="bg-secondary-50 p-6 rounded-card shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-heading-3 font-bold mb-4 text-primary-600">
                E-book
              </h3>
              <p className="text-body-lg mb-6">
                Aprenda os fundamentos essenciais para gerir uma oficina de
                sucesso
              </p>
              <button className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors">
                Quero o E-book
              </button>
            </motion.div>
            <motion.div
              variants={stagger}
              whileHover={{ y: -10 }}
              className="bg-secondary-50 p-6 rounded-card shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-heading-3 font-bold mb-4 text-primary-600">
                Curso Online
              </h3>
              <p className="text-body-lg mb-6">
                Treinamento completo com todas as estratégias práticas
              </p>
              <button className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors">
                Quero o Curso
              </button>
            </motion.div>
            <motion.div
              variants={stagger}
              whileHover={{ y: -10 }}
              className="bg-secondary-50 p-6 rounded-card shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-heading-3 font-bold mb-4 text-primary-600">
                Combo Completo
              </h3>
              <p className="text-body-lg mb-6">
                E-book + Curso com condições especiais
              </p>
              <button className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors">
                Quero o Combo
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mentoring Section */}
      <section className="py-section bg-secondary-50">
        <div className="container text-center">
          <motion.div
            variants={scaleIn}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <h2 className="text-heading-2 font-bold mb-8">
              Mentoria Personalizada
            </h2>
            <p className="text-body-lg mb-8">
              Quer acelerar seus resultados com um acompanhamento exclusivo? Na
              mentoria, trabalharemos juntos para implementar estratégias
              comprovadas e adaptadas à realidade do seu negócio. Transforme sua
              oficina com quem já ajudou dezenas de empresários a alcançarem o
              sucesso.
            </p>
            <motion.button
              className="bg-primary-600 text-white py-4 px-8 rounded-lg text-body-lg hover:bg-primary-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Quero fazer parte da Mentoria
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-section bg-white">
        <div className="container">
          <motion.div
            className="max-w-7xl mx-auto"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <h2 className="text-heading-2 font-bold text-center mb-12">
              Sobre o seu professor
            </h2>

            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-16">
              <motion.div
                className="w-full md:w-2/5 relative"
                variants={scaleIn}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary-500/10 to-transparent rounded-3xl -z-10" />
                <img
                  src="/jordan-pic.png"
                  alt="Foto profissional em traje social"
                  className="w-full h-full object-contain md:scale-110 md:-translate-y-6"
                />
              </motion.div>

              <div className="w-full md:w-3/5">
                <motion.h4
                  className="text-heading-4 font-bold mb-6 text-primary-800"
                  variants={fadeInUp}
                >
                  O que você vai aprender comigo:
                </motion.h4>
                <motion.div
                  className="bg-secondary-50 p-6 rounded-card shadow-lg"
                  variants={stagger}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                >
                  <ul className="space-y-4">
                    <motion.li variants={stagger} className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>A escolher
                      o melhor local para sua oficina
                    </motion.li>
                    <motion.li variants={stagger} className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      Como abrir seu CNPJ
                    </motion.li>
                    <motion.li variants={stagger} className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      Investimento inicial e dicas financeiras
                    </motion.li>
                    <motion.li variants={stagger} className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      Como captar clientes e estratégias de vendas
                    </motion.li>
                    <motion.li variants={stagger} className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      Gestão completa da oficina e processos
                    </motion.li>
                    <motion.li variants={stagger} className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      Contratação e gestão de equipe
                    </motion.li>
                    <motion.li variants={stagger} className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      Gestão de compras e fornecedores
                    </motion.li>
                    <motion.li variants={stagger} className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      Controle de estoque eficiente
                    </motion.li>
                    <motion.li variants={stagger} className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      Precificação estratégica de mão de obra e peças
                    </motion.li>
                    <motion.li variants={stagger} className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      Reinvestimento e pro-labore
                    </motion.li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-section bg-secondary-900 text-white">
        <div className="container text-center">
          <motion.h2
            className="text-heading-2 font-bold mb-8"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            Me acompanhe nas redes sociais
          </motion.h2>
          <motion.div
            className="flex justify-center space-x-8"
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="https://instagram.com/seu-perfil"
              className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-primary-500 to-primary-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="https://youtube.com/seu-canal"
              className="flex items-center justify-center w-14 h-14 rounded-full bg-error"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="https://linkedin.com/in/seu-perfil"
              className="flex items-center justify-center w-14 h-14 rounded-full bg-primary-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="https://wa.me/seu-numero"
              className="flex items-center justify-center w-14 h-14 rounded-full bg-success"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default App;
