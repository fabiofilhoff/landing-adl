'use client'

import { ArrowRight, CheckCircle2, Sparkles, TrendingUp, Users, Zap } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image with transparency - Desktop */}
        <div className="absolute inset-0 z-0 hidden md:block">
          <img
            src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/e39bf982-0756-49b3-a11d-ff1c6764ed5c.png"
            alt="Background"
            className="w-full h-full object-cover object-[center_20%] opacity-30"
          />
        </div>
        
        {/* Background Image with transparency - Mobile */}
        <div className="absolute inset-0 z-0 block md:hidden">
          <img
            src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/66129add-2d01-4ab1-81ea-c9cd8ac05987.png"
            alt="Background Mobile"
            className="w-full h-full object-cover object-[center_20%] opacity-40"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-transparent to-transparent" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse delay-700" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-32 sm:pt-40 sm:pb-40 z-10">
          <div className="text-center space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 bg-clip-text text-transparent">
                REPRESENTANTE ADL
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl font-semibold text-white max-w-3xl mx-auto text-justify px-4">
              Ganhe R$ 1.000 por cada carro que você indicar e o ADL fechar negócio
            </p>
            
            <div className="space-y-4 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              <p>Sem vender nada. Sem negociar com cliente. Sem risco.</p>
              <p className="text-orange-400 font-semibold">Você só indica o carro. O ADL faz o resto.</p>
            </div>
            
            <div className="pt-8">
              {/* Futuristic Button with Angular Design */}
              <button className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-orange-500 via-red-500 to-red-600 text-base sm:text-lg font-bold uppercase tracking-widest overflow-hidden transition-all duration-300 hover:scale-105 clip-path-hexagon border-2 border-orange-400/50 hover:border-orange-400 shadow-[0_0_30px_rgba(249,115,22,0.6),inset_0_0_20px_rgba(249,115,22,0.2)] hover:shadow-[0_0_50px_rgba(249,115,22,1),0_0_80px_rgba(239,68,68,0.6),inset_0_0_30px_rgba(249,115,22,0.4)]">
                {/* Corner accents */}
                <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-orange-400" />
                <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-orange-400" />
                <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-orange-400" />
                <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-orange-400" />
                
                {/* Animated scan lines */}
                <span className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(255,255,255,0.03)_50%)] bg-[length:100%_4px] animate-scan" />
                
                {/* Glowing edges */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-400 to-transparent animate-shimmer-horizontal" />
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent animate-shimmer-horizontal-reverse" />
                </span>
                
                {/* Text content */}
                <span className="relative z-10 flex items-center gap-3">
                  <span className="drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]">QUERO SER REPRESENTANTE ADL</span>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
                </span>
                
                {/* Shine effect on hover */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                
                {/* Pulsing glow background */}
                <span className="absolute inset-0 bg-gradient-to-r from-orange-600/20 via-red-600/20 to-orange-600/20 animate-pulse-slow" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section className="py-20 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
                🚗 Como funciona o trabalho de Representante ADL?
              </span>
            </h2>
            <p className="text-xl text-gray-300">Simples e direto. Se você sabe tirar uma foto de um carro e enviar no WhatsApp, você já pode começar.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Você encontra um carro à venda",
                items: ["carro de amigo", "carro anunciado no OLX / Facebook", "carro parado na rua", "carro da sua cidade", "carro de conhecidos"]
              },
              {
                step: "2",
                title: "Você envia os dados para o ADL",
                items: ["fotos", "preço", "localização", "contato do dono (se tiver)"]
              },
              {
                step: "3",
                title: "O ADL avalia, negocia e faz o fechamento",
                items: ["❌ negociar preço", "❌ viajar", "❌ atender cliente", "❌ entender de leilão"]
              },
              {
                step: "4",
                title: "Negócio fechado = R$ 1.000 no seu bolso",
                items: ["💰 100% garantido", "💰 Sem limite mensal", "💰 Indicou 5 = R$ 5.000", "💰 Pode chegar a 30 mil/mês"]
              }
            ].map((item, idx) => (
              <div key={idx} className="group relative">
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 via-red-600 to-orange-500 opacity-50 blur-sm group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Card content */}
                <div className="relative bg-gradient-to-br from-gray-900 to-black border border-orange-500/30 rounded-2xl p-6 h-full backdrop-blur-sm hover:border-orange-500/60 transition-all duration-300">
                  <div className="text-6xl font-bold bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.items.map((point, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            {/* Futuristic Button - Second Instance */}
            <button className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-orange-500 via-red-500 to-red-600 text-base sm:text-lg font-bold uppercase tracking-widest overflow-hidden transition-all duration-300 hover:scale-105 clip-path-hexagon border-2 border-orange-400/50 hover:border-orange-400 shadow-[0_0_30px_rgba(249,115,22,0.6),inset_0_0_20px_rgba(249,115,22,0.2)] hover:shadow-[0_0_50px_rgba(249,115,22,1),0_0_80px_rgba(239,68,68,0.6),inset_0_0_30px_rgba(249,115,22,0.4)]">
              {/* Corner accents */}
              <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-orange-400" />
              <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-orange-400" />
              <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-orange-400" />
              <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-orange-400" />
              
              {/* Animated scan lines */}
              <span className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(255,255,255,0.03)_50%)] bg-[length:100%_4px] animate-scan" />
              
              {/* Glowing edges */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-400 to-transparent animate-shimmer-horizontal" />
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent animate-shimmer-horizontal-reverse" />
              </span>
              
              {/* Text content */}
              <span className="relative z-10 flex items-center gap-3">
                <span className="drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]">QUERO ME INSCREVER AGORA</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
              </span>
              
              {/* Shine effect on hover */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
              
              {/* Pulsing glow background */}
              <span className="absolute inset-0 bg-gradient-to-r from-orange-600/20 via-red-600/20 to-orange-600/20 animate-pulse-slow" />
            </button>
          </div>
        </div>
      </section>

      {/* Por que ser Representante */}
      <section className="py-20 sm:py-32 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
              🎯 Por que ser Representante ADL?
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Zap, text: "Não precisa investir nada" },
              { icon: Users, text: "Faça no seu tempo, no seu celular" },
              { icon: TrendingUp, text: "Ganho por performance: quanto mais capta, mais ganha" },
              { icon: CheckCircle2, text: "Sem metas absurdas" },
              { icon: Sparkles, text: "Suporte e orientação do ADL" },
              { icon: CheckCircle2, text: "Acesso a treinamentos para encontrar oportunidades rápido" }
            ].map((item, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/50 via-red-600/50 to-orange-500/50 opacity-0 blur-xl group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-gradient-to-br from-gray-900 to-black border border-orange-500/30 rounded-2xl p-6 backdrop-blur-sm hover:border-orange-500/60 transition-all duration-300">
                  <item.icon className="w-12 h-12 text-orange-400 mb-4" />
                  <p className="text-lg text-gray-200">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O que você vai aprender */}
      <section className="py-20 sm:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
              📲 O que você vai aprender no treinamento do Representante?
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: "01", text: "Como identificar carros que o ADL realmente compra" },
              { num: "02", text: "Como analisar preço para indicar oportunidades certas" },
              { num: "03", text: "Como abordar o vendedor de forma simples (modelos prontos)" },
              { num: "04", text: "Como fotografar e capturar informações essenciais" },
              { num: "05", text: 'O método do "Carro Certo" para aumentar suas chances de ganhar comissão' },
              { num: "06", text: "Como enviar tudo corretamente para acelerar a aprovação" }
            ].map((item, idx) => (
              <div key={idx} className="group relative">
                {/* Animated glowing border */}
                <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-orange-500 via-red-600 to-orange-500 bg-[length:200%_100%] animate-[shimmer_3s_linear_infinite]" />
                
                {/* Card background */}
                <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl p-6 h-full overflow-hidden">
                  {/* Glow effect on hover */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Number with gradient */}
                  <div className="relative text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.num}
                  </div>
                  
                  {/* Text content */}
                  <p className="relative text-gray-200 text-base leading-relaxed">{item.text}</p>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              É literalmente o caminho mais fácil de ganhar dinheiro com o mercado automotivo hoje — sem precisar comprar, vender ou arriscar nada.
            </p>
          </div>
        </div>
      </section>

      {/* Quanto posso ganhar */}
      <section className="py-20 sm:py-32 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
              🧾 Quanto posso ganhar?
            </span>
          </h2>

          <p className="text-xl text-gray-300 text-center mb-12">Aqui vão cenários reais:</p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Representante iniciante", cars: "3 carros aprovados no mês", value: "R$ 3.000", popular: false },
              { title: "Representante consistente", cars: "10 carros aprovados", value: "R$ 10.000", popular: true },
              { title: "Representante dedicado", cars: "20 carros aprovados", value: "R$ 20.000", popular: false }
            ].map((plan, idx) => (
              <div key={idx} className="relative group">
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3.5 py-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full text-xs font-bold shadow-xl shadow-green-500/60 animate-pulse">
                    MAIS POPULAR
                  </div>
                )}
                
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/50 via-red-600/50 to-orange-500/50 opacity-0 blur-xl group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className={`relative bg-gradient-to-br from-gray-900 to-black border rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 ${
                  plan.popular ? 'border-orange-500 scale-105' : 'border-orange-500/30 hover:border-orange-500/60'
                }`}>
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-orange-400">{plan.title}</h3>
                    <p className="text-gray-300">{plan.cars}</p>
                    <div className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent py-4">
                      {plan.value}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 space-y-4">
            <p className="text-2xl font-bold text-orange-400">Não tem teto.</p>
            <p className="text-xl text-gray-300">Depende só da sua ambição.</p>
          </div>

          <div className="text-center mt-12">
            {/* Futuristic Button - Third Instance */}
            <button className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-orange-500 via-red-500 to-red-600 text-base sm:text-lg font-bold uppercase tracking-widest overflow-hidden transition-all duration-300 hover:scale-105 clip-path-hexagon border-2 border-orange-400/50 hover:border-orange-400 shadow-[0_0_30px_rgba(249,115,22,0.6),inset_0_0_20px_rgba(249,115,22,0.2)] hover:shadow-[0_0_50px_rgba(249,115,22,1),0_0_80px_rgba(239,68,68,0.6),inset_0_0_30px_rgba(249,115,22,0.4)]">
              {/* Corner accents */}
              <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-orange-400" />
              <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-orange-400" />
              <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-orange-400" />
              <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-orange-400" />
              
              {/* Animated scan lines */}
              <span className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(255,255,255,0.03)_50%)] bg-[length:100%_4px] animate-scan" />
              
              {/* Glowing edges */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-400 to-transparent animate-shimmer-horizontal" />
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent animate-shimmer-horizontal-reverse" />
              </span>
              
              {/* Text content */}
              <span className="relative z-10 flex items-center gap-3">
                <span className="drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]">QUERO SER REPRESENTANTE ADL</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
              </span>
              
              {/* Shine effect on hover */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
              
              {/* Pulsing glow background */}
              <span className="absolute inset-0 bg-gradient-to-r from-orange-600/20 via-red-600/20 to-orange-600/20 animate-pulse-slow" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
              ❓ Perguntas Frequentes
            </span>
          </h2>

          <div className="space-y-6">
            {[
              { q: "Preciso investir alguma coisa?", a: "Não. Ser Representante ADL é 100% gratuito." },
              { q: "Preciso entender de carros?", a: "Não. Você só capta. O ADL faz todo o restante." },
              { q: "Quando recebo meu dinheiro?", a: "Assim que o ADL fechar o negócio com o dono do carro – sempre dentro do mês." },
              { q: "Posso trabalhar de qualquer lugar?", a: "Sim. Basta ter um celular." },
              { q: "Qual idade mínima?", a: "18 anos." }
            ].map((faq, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/50 via-red-600/50 to-orange-500/50 opacity-0 blur-xl group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-gradient-to-br from-gray-900 to-black border border-orange-500/30 rounded-2xl p-6 backdrop-blur-sm hover:border-orange-500/60 transition-all duration-300">
                  <h3 className="text-xl font-bold text-orange-400 mb-3">{faq.q}</h3>
                  <p className="text-gray-300">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-transparent to-transparent" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
              🔥 Última chamada
            </span>
          </h2>

          <p className="text-2xl text-gray-300">Você pode continuar sem oportunidades…</p>
          <p className="text-2xl font-bold text-white">Ou pode começar hoje a ganhar R$ 1.000 por cada carro indicado que o ADL fechar.</p>
          <p className="text-xl text-orange-400">👉 Oportunidade real, simples e validada.</p>

          <div className="pt-8">
            {/* Futuristic Button - Final Instance */}
            <button className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-orange-500 via-red-500 to-red-600 text-base sm:text-lg font-bold uppercase tracking-widest overflow-hidden transition-all duration-300 hover:scale-105 clip-path-hexagon border-2 border-orange-400/50 hover:border-orange-400 shadow-[0_0_30px_rgba(249,115,22,0.6),inset_0_0_20px_rgba(249,115,22,0.2)] hover:shadow-[0_0_50px_rgba(249,115,22,1),0_0_80px_rgba(239,68,68,0.6),inset_0_0_30px_rgba(249,115,22,0.4)]">
              {/* Corner accents */}
              <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-orange-400" />
              <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-orange-400" />
              <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-orange-400" />
              <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-orange-400" />
              
              {/* Animated scan lines */}
              <span className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(255,255,255,0.03)_50%)] bg-[length:100%_4px] animate-scan" />
              
              {/* Glowing edges */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-400 to-transparent animate-shimmer-horizontal" />
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent animate-shimmer-horizontal-reverse" />
              </span>
              
              {/* Text content */}
              <span className="relative z-10 flex items-center gap-3">
                <span className="drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]">QUERO SER REPRESENTANTE ADL</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
              </span>
              
              {/* Shine effect on hover */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
              
              {/* Pulsing glow background */}
              <span className="absolute inset-0 bg-gradient-to-r from-orange-600/20 via-red-600/20 to-orange-600/20 animate-pulse-slow" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-orange-500/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>© 2024 ADL - Todos os direitos reservados</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        
        @keyframes scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(100%); }
        }
        
        @keyframes shimmer-horizontal {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        
        @keyframes shimmer-horizontal-reverse {
          0% { transform: translateX(200%); }
          100% { transform: translateX(-100%); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        
        .animate-scan {
          animation: scan 3s linear infinite;
        }
        
        .animate-shimmer-horizontal {
          animation: shimmer-horizontal 2s linear infinite;
        }
        
        .animate-shimmer-horizontal-reverse {
          animation: shimmer-horizontal-reverse 2s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .clip-path-hexagon {
          clip-path: polygon(
            0 8px,
            8px 0,
            calc(100% - 8px) 0,
            100% 8px,
            100% calc(100% - 8px),
            calc(100% - 8px) 100%,
            8px 100%,
            0 calc(100% - 8px)
          );
        }
      `}</style>
    </div>
  )
}
