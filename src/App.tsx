import { motion } from "framer-motion";
import { fadeInUp, stagger, scaleIn } from "./utils/animations";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { Button } from "./components/Button";

function App() {
  const learningPoints = [
    "Como abrir seu CNPJ",
    "Investimento inicial e dicas financeiras",
    "Como captar clientes e estratégias de vendas",
    "Gestão completa da oficina e processos",
    "Contratação e gestão de equipe",
    "Gestão de compras e fornecedores",
    "Controle de estoque eficiente",
    "Precificação estratégica de mão de obra e peças",
    "Reinvestimento e pro-labore",
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero/About Me */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-section-lg relative overflow-hidden">
        {/* Mobile Image */}
        <div className="absolute inset-0 md:hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-600/90 to-primary-800/90 z-10" />
          <img
            src="/jordan-pic.png"
            alt="Background"
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="container relative z-20">
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-7xl mx-auto">
            {/* Desktop Image */}
            <motion.div
              className="hidden md:block w-full md:w-2/5"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img
                src="/provisoring-low-quality.png"
                alt="Jordan"
                className="w-full h-auto max-w-md mx-auto"
              />
            </motion.div>
            <div className="w-full md:w-3/5">
              <motion.span
                className="block text-primary-100 text-xl md:text-3xl mb-4"
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
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
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
        </div>
      </section>

      {/* Results Section */}
      <section className="py-section bg-white">
        <div className="container">
          <motion.div
            className="max-w-4xl mx-auto"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-heading-2 font-bold text-center mb-4 text-primary-800"
              variants={fadeInUp}
            >
              O que você vai aprender comigo
            </motion.h2>
            <motion.p
              className="text-lg text-center mb-12 text-gray-600"
              variants={fadeInUp}
            >
              Conheça o passo a passo completo para abrir e gerir sua oficina
              com sucesso
            </motion.p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={stagger}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {learningPoints.map((point, index) => (
                <motion.div
                  key={index}
                  variants={stagger}
                  className="bg-secondary-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                      ✓
                    </span>
                    <p className="text-gray-700 text-lg">{point}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-section bg-secondary-50">
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
              className="bg-secondary-50 p-6 rounded-card shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-between"
            >
              <div className="">
                <h3 className="text-heading-3 font-bold mb-4 text-primary-600">
                  E-book
                </h3>
                <p className="text-body-lg mb-6">
                  Todo o conhecimento aplicado em um guia prático, onde você
                  poderá acessar a qualquer momento e lugar.
                </p>
              </div>
              <Button
                variant="primary"
                fullWidth
                onClick={() =>
                  window.open("https://seu-link-do-ebook.com", "_blank")
                }
              >
                Quero o E-book
              </Button>
            </motion.div>
            <motion.div
              variants={stagger}
              whileHover={{ y: -10 }}
              className="bg-secondary-50 p-6 rounded-card shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-between"
            >
              <div className="">
                <h3 className="text-heading-3 font-bold mb-4 text-primary-600">
                  Curso Online
                </h3>
                <p className="text-body-lg mb-6">
                  Aqui você encontrará tudo que é necessário para a abertura da
                  sua oficina, e para transformá-lo em uma máquina de sucesso,
                  com exemplos práticos e aplicáveis.
                </p>
              </div>
              <Button
                variant="primary"
                fullWidth
                onClick={() =>
                  window.open("https://seu-link-do-curso.com", "_blank")
                }
              >
                Quero o Curso
              </Button>
            </motion.div>
            <motion.div
              variants={stagger}
              whileHover={{ y: -10 }}
              className="bg-secondary-50 p-6 rounded-card shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-between"
            >
              <div className="">
                <h3 className="text-heading-3 font-bold mb-4 text-primary-600">
                  Combo Completo
                </h3>
                <p className="text-body-lg mb-6">
                  Um combo com uma condição especial, onde você terá acesso ao
                  e-book + curso, com acesso vitalício, e um canal de
                  comunicação comigo, de forma exclusiva.
                </p>
              </div>
              <Button
                variant="primary"
                fullWidth
                onClick={() =>
                  window.open("https://seu-link-do-combo.com", "_blank")
                }
              >
                Quero o Combo
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mentoring Section */}
      <section className="py-section bg-white">
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
              Acesso particular comigo, onde conversamos sobre a sua realidade,
              onde vamos aplicar o conhecimento, em prática para o seu negócio,
              com acompanhamento exclusivo, por whatsapp a qualquer momento.
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={() =>
                window.open("https://wa.me/5553999472393", "_blank")
              }
            >
              Quero fazer parte da Mentoria
            </Button>
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
          </motion.div>
        </div>
      </section>
      <FloatingWhatsApp
        phoneNumber="5399471393"
        accountName="Consultoria Jordan"
        allowEsc
        allowClickAway
        notification
        notificationSound
        avatar="jordan-profile.png"
        chatMessage="Olá, nos diga o que você precisa! Ficaremos felizes em te ajudar!"
        statusMessage="Normalmente responde em minutos"
        placeholder="Digite uma mensagem"
      />
    </main>
  );
}

export default App;
