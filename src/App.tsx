import { useState } from 'react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('General');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openFormModal = (paket: string) => {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', 'InitiateCheckout');
    }
    setSelectedPackage(paket);
    setIsModalOpen(true);
    // slight delay for animation
    setTimeout(() => setIsModalVisible(true), 10);
    document.body.style.overflow = 'hidden';
  };

  const closeFormModal = () => {
    setIsModalVisible(false);
    setTimeout(() => {
      setIsModalOpen(false);
      document.body.style.overflow = 'auto';
    }, 300);
  };

  return (
    <div className="bg-brandLight text-brandDark antialiased min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex-shrink-0 flex items-center gap-2">
              <i className="fa-solid fa-chart-line text-shopee text-xl md:text-2xl"></i>
              <span className="font-bold text-xl md:text-2xl tracking-tight text-brandDark">
                GrowtHive<span className="text-shopee">.</span>
              </span>
            </div>

            <div className="hidden lg:flex space-x-8 items-center">
              <a href="#problem" className="text-gray-600 hover:text-shopee font-medium transition-colors">Masalah Toko</a>
              <a href="#solution" className="text-gray-600 hover:text-shopee font-medium transition-colors">Strategi Kami</a>
              <a href="#results" className="text-gray-600 hover:text-shopee font-medium transition-colors">Kisah Sukses</a>
              <a href="#pricing" className="text-gray-600 hover:text-shopee font-medium transition-colors">Paket Program</a>
            </div>

            <div className="flex items-center">
              <button
                onClick={() => openFormModal('General')}
                className="bg-shopee text-white px-4 py-2 md:px-6 md:py-2.5 rounded-full text-sm md:text-base font-semibold hover:bg-shopeeDark transition-all transform hover:scale-105 shadow-lg shadow-shopee/30 cursor-pointer"
              >
                Audit Toko <span className="hidden sm:inline">Saya</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 lg:pt-48 lg:pb-32 overflow-hidden hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-orange-100 text-shopee font-semibold text-xs md:text-sm mb-4 md:mb-6 border border-orange-200">
              <span className="relative flex h-2 w-2 md:h-3 md:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-shopee opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 md:h-3 md:w-3 bg-shopee"></span>
              </span>
              Program Kemitraan Eksklusif Mar 2026
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 md:mb-6 leading-tight">
              Produk Bagus, Ads Jalan, Tapi Omzet <span className="gradient-text">Stuck di Rp50-200 Juta?</span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed">
              Growth penjualan Anda stagnan bukan hanya karena produk, tapi karena{' '}
              <strong className="text-brandDark">struktur growth marketplace yang belum optimal</strong>.
              Berhenti membuang budget, mari bangun strategi yang terukur bersama GrowtHive.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => openFormModal('General')}
                className="bg-shopee text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-shopeeDark transition-all transform hover:-translate-y-1 shadow-xl shadow-shopee/30 flex items-center justify-center gap-2 cursor-pointer"
              >
                Dapatkan Diagnosa Toko Gratis <i className="fa-solid fa-arrow-right"></i>
              </button>

              <a
                href="#results"
                className="bg-white text-brandDark border border-gray-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                Lihat Bukti Pertumbuhan <i className="fa-solid fa-chart-pie"></i>
              </a>
            </div>

            <p className="mt-6 text-sm text-gray-500 font-medium">Dipercaya oleh puluhan brand</p>
          </div>
        </div>

        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-shopee/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </section>

      {/* Problem */}
      <section id="problem" className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Sudah Habis-habisan di Ads, Tapi Bingung <span className="text-shopee">Mau Diapain Lagi?</span>
              </h2>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Banyak toko Shopee sudah menjalankan ads dan produknya memiliki demand. Namun, mereka terjebak pada angka
                yang sama setiap bulannya. Jika Anda mengalami ini, penyebab utamanya biasanya adalah:
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-4 p-4 rounded-xl bg-red-50 border border-red-100 hover:shadow-md transition-shadow">
                  <div className="bg-red-100 p-2 rounded-full text-red-500 mt-1">
                    <i className="fa-solid fa-box-open"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-brandDark">Terlalu banyak SKU, tanpa Hero Product</h4>
                    <p className="text-gray-600 text-sm mt-1">Fokus terpecah, traffic tidak terkonsentrasi pada produk pemenang.</p>
                  </div>
                </li>

                <li className="flex items-start gap-4 p-4 rounded-xl bg-orange-50 border border-orange-100 hover:shadow-md transition-shadow">
                  <div className="bg-orange-100 p-2 rounded-full text-orange-500 mt-1">
                    <i className="fa-solid fa-bullseye"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-brandDark">Struktur &amp; Strategi Ads Tidak Jelas</h4>
                    <p className="text-gray-600 text-sm mt-1">Hanya “bakar uang” tanpa melihat data conversion rate yang jelas.</p>
                  </div>
                </li>

                <li className="flex items-start gap-4 p-4 rounded-xl bg-yellow-50 border border-yellow-100 hover:shadow-md transition-shadow">
                  <div className="bg-yellow-100 p-2 rounded-full text-yellow-600 mt-1">
                    <i className="fa-solid fa-image"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-brandDark">Visual Produk &amp; Listing Kurang Menonjol</h4>
                    <p className="text-gray-600 text-sm mt-1">Kalah saing saat pembeli melakukan pencarian organik.</p>
                  </div>
                </li>

                <li className="flex items-start gap-4 p-4 rounded-xl bg-blue-50 border border-blue-100 hover:shadow-md transition-shadow">
                  <div className="bg-blue-100 p-2 rounded-full text-blue-500 mt-1">
                    <i className="fa-solid fa-tags"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-brandDark">Promo &amp; Campaign Marketplace Tidak Dimaksimalkan</h4>
                    <p className="text-gray-600 text-sm mt-1">Melewatkan momentum besar yang disediakan oleh platform Shopee.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative mt-10 lg:mt-0">
              <div className="bg-shopee rounded-3xl p-6 md:p-8 text-white shadow-2xl relative z-10 transform lg:rotate-2">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">The GrowtHive Belief</h3>
                <p className="text-base md:text-lg leading-relaxed mb-6 font-medium text-white/90">
                  “Pertumbuhan marketplace tidak hanya soal menjalankan iklan. Growth yang berkelanjutan membutuhkan
                  <strong className="text-white"> strategi yang jelas, struktur toko yang sehat, optimasi conversion, dan scaling traffic yang terukur.</strong>”
                </p>

                <div className="border-t border-white/20 pt-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-handshake text-shopee text-xl"></i>
                  </div>
                  <div>
                    <p className="font-bold text-white">Growth Partner</p>
                    <p className="text-sm text-white/80">Bukan Sekadar Vendor Agency</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-full h-full border-2 border-orange-300 rounded-3xl z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section id="solution" className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">GH Shopee Growth Framework</h2>
            <p className="text-lg text-gray-600">
              Pendekatan 3 langkah kami yang terbukti sistematis untuk membantu toko Anda keluar dari zona stagnan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-2xl md:text-3xl font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                1
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">Diagnose</h3>
              <p className="text-gray-600 leading-relaxed">
                Kami tidak asal jalan. Kami mulai dengan memahami kondisi toko secara objektif dan menemukan titik hambatan
                utama dari growth Anda.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group relative mt-4 md:mt-0">
              <div className="absolute -top-4 right-6 md:right-8 bg-shopee text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                Fondasi Kuat
              </div>
              <div className="w-14 h-14 md:w-16 md:h-16 bg-orange-50 text-shopee rounded-2xl flex items-center justify-center text-2xl md:text-3xl font-bold mb-6 group-hover:bg-shopee group-hover:text-white transition-colors">
                2
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">Optimize</h3>
              <p className="text-gray-600 leading-relaxed">
                Mengoptimalkan fondasi toko. Mulai dari penulisan listing (SEO Shopee), perbaikan visual produk, hingga
                restrukturisasi hierarki ads yang jelas.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group mt-4 md:mt-0">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center text-2xl md:text-3xl font-bold mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                3
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">Scale</h3>
              <p className="text-gray-600 leading-relaxed">
                Setelah fondasi dan konversi stabil, saatnya injak gas. Kami mendorong pertumbuhan melalui scaling traffic
                agresif, campaign marketplace, dan promo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="py-16 lg:py-24 bg-white text-brandDark overflow-hidden border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <span className="text-shopee font-bold uppercase tracking-wider text-sm mb-2 block">Real Growth Results</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Kami Berbicara Melalui Angka</h2>
            <p className="text-gray-600 text-base md:text-lg">
              Bukan sekadar janji manis. Ini adalah hasil nyata dari brand-brand yang mengimplementasikan framework kami.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Case 1 */}
            <div className="bg-gray-50 p-5 md:p-8 rounded-3xl border border-gray-200 shadow-sm relative pt-12 md:pt-14">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white font-bold px-6 py-1.5 rounded-full text-xs md:text-sm shadow-md whitespace-nowrap">
                Hampir 2x Lipat (YoY)
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-6 text-center text-brandDark">Optimasi Listing &amp; Hero Ads</h3>

              <div className="flex flex-col gap-3 md:gap-4 mb-6">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                  <div className="flex items-center gap-2 mb-3 border-b border-gray-100 pb-2">
                    <i className="fa-solid fa-calendar-days text-gray-400"></i>
                    <span className="text-sm font-bold text-gray-500">Maret 2025 | Sebelum</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-left">
                    <div className="border-t-2 border-blue-500 pt-2">
                      <p className="text-[10px] md:text-xs text-gray-500 mb-0.5">Penjualan</p>
                      <p className="text-sm md:text-base font-bold text-gray-800">Rp 366.897K</p>
                      <p className="text-[10px] md:text-xs text-green-500 mt-0.5 font-semibold">
                        <i className="fa-solid fa-caret-up"></i> 36,73%
                      </p>
                    </div>

                    <div className="border-t-2 border-orange-500 pt-2">
                      <p className="text-[10px] md:text-xs text-gray-500 mb-0.5">Pesanan</p>
                      <p className="text-sm md:text-base font-bold text-gray-800">1.504</p>
                      <p className="text-[10px] md:text-xs text-green-500 mt-0.5 font-semibold">
                        <i className="fa-solid fa-caret-up"></i> 29,10%
                      </p>
                    </div>

                    <div className="border-t-2 border-teal-500 pt-2">
                      <p className="text-[10px] md:text-xs text-gray-500 mb-0.5">Konversi</p>
                      <p className="text-sm md:text-base font-bold text-gray-800">1,50%</p>
                      <p className="text-[10px] md:text-xs text-green-500 mt-0.5 font-semibold">
                        <i className="fa-solid fa-caret-up"></i> 0,16%
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center -my-5 md:-my-6 relative z-10">
                  <div className="bg-shopee text-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shadow-lg border-4 border-gray-50">
                    <i className="fa-solid fa-arrow-down text-sm md:text-base"></i>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-md border border-shopee/30 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-shopee/5 rounded-bl-full -z-0"></div>

                  <div className="flex items-center gap-2 mb-3 border-b border-gray-100 pb-2 relative z-10">
                    <i className="fa-solid fa-chart-line text-shopee"></i>
                    <span className="text-sm font-bold text-shopee">Feb 2026 | Sesudah</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-left relative z-10">
                    <div className="border-t-2 border-blue-500 pt-2">
                      <p className="text-[10px] md:text-xs text-gray-500 mb-0.5">Penjualan</p>
                      <p className="text-sm md:text-base font-bold text-gray-800">Rp 725.338K</p>
                      <p className="text-[10px] md:text-xs text-green-500 mt-0.5 font-semibold">
                        <i className="fa-solid fa-caret-up"></i> 282,28%
                      </p>
                    </div>

                    <div className="border-t-2 border-orange-500 pt-2">
                      <p className="text-[10px] md:text-xs text-gray-500 mb-0.5">Pesanan</p>
                      <p className="text-sm md:text-base font-bold text-gray-800">2.388</p>
                      <p className="text-[10px] md:text-xs text-green-500 mt-0.5 font-semibold">
                        <i className="fa-solid fa-caret-up"></i> 163,00%
                      </p>
                    </div>

                    <div className="border-t-2 border-teal-500 pt-2">
                      <p className="text-[10px] md:text-xs text-gray-500 mb-0.5">Konversi</p>
                      <p className="text-sm md:text-base font-bold text-gray-800">1,21%</p>
                      <p className="text-[10px] md:text-xs text-green-500 mt-0.5 font-semibold">
                        <i className="fa-solid fa-caret-up"></i> 0,02%
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="text-sm md:text-base text-gray-600 space-y-3 bg-white p-4 md:p-5 rounded-2xl border border-gray-100 shadow-sm">
                <li className="flex items-start gap-3"><i className="fa-solid fa-circle-check text-green-500 mt-1"></i><span>Listing optimization</span></li>
                <li className="flex items-start gap-3"><i className="fa-solid fa-circle-check text-green-500 mt-1"></i><span>Hero product ads strategy</span></li>
                <li className="flex items-start gap-3"><i className="fa-solid fa-circle-check text-green-500 mt-1"></i><span>Visual improvement</span></li>
              </ul>
            </div>

            {/* Case 2 */}
            <div className="bg-gray-50 p-5 md:p-8 rounded-3xl border border-gray-200 shadow-sm relative pt-12 md:pt-14">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white font-bold px-6 py-1.5 rounded-full text-xs md:text-sm shadow-md whitespace-nowrap">
                +137% Growth (6 Bulan)
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-6 text-center text-brandDark">Restrukturisasi Fokus Ads</h3>

              <div className="flex flex-col gap-3 md:gap-4 mb-6">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                  <div className="flex items-center gap-2 mb-3 border-b border-gray-100 pb-2">
                    <i className="fa-solid fa-calendar-days text-gray-400"></i>
                    <span className="text-sm font-bold text-gray-500">Agustus 2025 | Sebelum</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-left">
                    <div className="border-t-2 border-blue-500 pt-2">
                      <p className="text-[10px] md:text-xs text-gray-500 mb-0.5">Penjualan</p>
                      <p className="text-sm md:text-base font-bold text-gray-800">Rp 59.077K</p>
                      <p className="text-[10px] md:text-xs text-green-500 mt-0.5 font-semibold">
                        <i className="fa-solid fa-caret-up"></i> 120,00%
                      </p>
                    </div>

                    <div className="border-t-2 border-orange-500 pt-2">
                      <p className="text-[10px] md:text-xs text-gray-500 mb-0.5">Pesanan</p>
                      <p className="text-sm md:text-base font-bold text-gray-800">359</p>
                      <p className="text-[10px] md:text-xs text-green-500 mt-0.5 font-semibold">
                        <i className="fa-solid fa-caret-up"></i> 95,11%
                      </p>
                    </div>

                    <div className="border-t-2 border-teal-500 pt-2">
                      <p className="text-[10px] md:text-xs text-gray-500 mb-0.5">Konversi</p>
                      <p className="text-sm md:text-base font-bold text-gray-800">4,68%</p>
                      <p className="text-[10px] md:text-xs text-green-500 mt-0.5 font-semibold">
                        <i className="fa-solid fa-caret-up"></i> 1,63%
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center -my-5 md:-my-6 relative z-10">
                  <div className="bg-shopee text-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shadow-lg border-4 border-gray-50">
                    <i className="fa-solid fa-arrow-down text-sm md:text-base"></i>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-md border border-shopee/30 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-shopee/5 rounded-bl-full -z-0"></div>

                  <div className="flex items-center gap-2 mb-3 border-b border-gray-100 pb-2 relative z-10">
                    <i className="fa-solid fa-chart-line text-shopee"></i>
                    <span className="text-sm font-bold text-shopee">Jan 2026 | Sesudah</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-left relative z-10">
                    <div className="border-t-2 border-blue-500 pt-2">
                      <p className="text-[10px] md:text-xs text-gray-500 mb-0.5">Penjualan</p>
                      <p className="text-sm md:text-base font-bold text-gray-800">Rp 140.144K</p>
                      <p className="text-[10px] md:text-xs text-green-500 mt-0.5 font-semibold">
                        <i className="fa-solid fa-caret-up"></i> 13,80%
                      </p>
                    </div>

                    <div className="border-t-2 border-orange-500 pt-2">
                      <p className="text-[10px] md:text-xs text-gray-500 mb-0.5">Pesanan</p>
                      <p className="text-sm md:text-base font-bold text-gray-800">962</p>
                      <p className="text-[10px] md:text-xs text-green-500 mt-0.5 font-semibold">
                        <i className="fa-solid fa-caret-up"></i> 16,61%
                      </p>
                    </div>

                    <div className="border-t-2 border-teal-500 pt-2">
                      <p className="text-[10px] md:text-xs text-gray-500 mb-0.5">Konversi</p>
                      <p className="text-sm md:text-base font-bold text-gray-800">6,28%</p>
                      <p className="text-[10px] md:text-xs text-green-500 mt-0.5 font-semibold">
                        <i className="fa-solid fa-caret-up"></i> 0,49%
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="text-sm md:text-base text-gray-600 space-y-3 bg-white p-4 md:p-5 rounded-2xl border border-gray-100 shadow-sm">
                <li className="flex items-start gap-3"><i className="fa-solid fa-circle-check text-green-500 mt-1"></i><span>Fokus Hero Product</span></li>
                <li className="flex items-start gap-3"><i className="fa-solid fa-circle-check text-green-500 mt-1"></i><span>Scaling Ads pada produk CR tinggi</span></li>
                <li className="flex items-start gap-3"><i className="fa-solid fa-circle-check text-green-500 mt-1"></i><span>Pemanfaatan promo marketplace</span></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-orange-50 p-6 md:p-8 rounded-3xl border border-orange-100 text-center max-w-4xl mx-auto shadow-sm flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0 text-shopee text-2xl shadow-sm">
              <i className="fa-solid fa-rocket"></i>
            </div>

            <div className="text-center md:text-left">
              <h4 className="font-bold text-brandDark text-lg mb-1">Zero to Hero (Dalam 6 Bulan)</h4>
              <p className="text-sm md:text-base text-gray-700">
                Kami juga membantu brand baru tanpa traksi awal (Rp 0) mencapai omzet{' '}
                <strong className="text-shopee">Rp 100 Juta per bulan</strong>{' '}
                melalui penentuan hero product dan optimasi conversion rate bertahap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Dashboard Analytics"
                className="rounded-3xl shadow-2xl border border-gray-100"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Apa Yang Anda Dapatkan?</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Program ini dirancang sangat terstruktur. Kami memantau data Anda secara berkala, bukan “set and forget”.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 text-shopee flex-shrink-0 flex items-center justify-center text-xl">
                    <i className="fa-solid fa-stethoscope"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Shopee Store Diagnostic</h4>
                    <p className="text-gray-600 mt-1">Identifikasi komprehensif bottleneck utama toko Shopee Anda saat ini.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 text-shopee flex-shrink-0 flex items-center justify-center text-xl">
                    <i className="fa-solid fa-map-location-dot"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">90-Day Growth Roadmap</h4>
                    <p className="text-gray-600 mt-1">Strategi dan peta jalan eksekusi yang jelas selama 3 bulan ke depan.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 text-shopee flex-shrink-0 flex items-center justify-center text-xl">
                    <i className="fa-solid fa-chart-line"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Weekly Optimization &amp; Monitoring</h4>
                    <p className="text-gray-600 mt-1">Optimasi listing, ads, visual, dan campaign berkelanjutan berdasarkan data mingguan.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 text-shopee flex-shrink-0 flex items-center justify-center text-xl">
                    <i className="fa-solid fa-magnifying-glass-chart"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Quarterly Strategy Review</h4>
                    <p className="text-gray-600 mt-1">Evaluasi strategi mendalam dan penentuan <em>growth direction</em> untuk kuartal berikutnya.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualification */}
      <section className="py-16 bg-orange-50 border-y border-orange-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Apakah Program Ini Cocok Untuk Brand Anda?</h2>

          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm inline-block text-left border border-orange-200 w-full md:w-auto">
            <p className="font-semibold text-brandDark mb-4 text-lg">Program Partnership ini paling tepat untuk Brand yang:</p>

            <ul className="space-y-3">
              <li className="flex items-start md:items-center gap-3">
                <i className="fa-solid fa-circle-check text-green-500 text-xl mt-0.5 md:mt-0"></i>
                <span>Sudah memiliki produk dengan <b>demand yang jelas</b> di pasar.</span>
              </li>

              <li className="flex items-start md:items-center gap-3">
                <i className="fa-solid fa-circle-check text-green-500 text-xl mt-0.5 md:mt-0"></i>
                <span>Ingin menjadikan Shopee sebagai <b>channel revenue utama</b>.</span>
              </li>

              <li className="flex items-start md:items-center gap-3">
                <i className="fa-solid fa-circle-check text-green-500 text-xl mt-0.5 md:mt-0"></i>
                <span>Ingin scale up dengan <b>strategi growth yang terstruktur</b>.</span>
              </li>

              <li className="flex items-start md:items-center gap-3 bg-orange-100 p-3 rounded-xl mt-4 text-shopee font-bold border border-orange-200">
                <i className="fa-solid fa-chart-pie text-xl mt-0.5 md:mt-0"></i>
                <span>Idealnya: Memiliki omzet marketplace Rp 50 Juta - Rp 300 Juta / bulan.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 lg:py-20 bg-brandLight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Level Partnership Program</h2>
            <p className="text-lg text-gray-600">
              Sistem berbasis komisi (Revenue Share). Kami hanya berkembang jika bisnis Anda berkembang. Sesuaikan dengan
              skala bisnis Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center max-w-6xl mx-auto">
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-200 shadow-sm text-center">
              <h3 className="text-xl font-bold mb-2">Growth Starter</h3>
              <p className="text-gray-500 text-sm mb-6 h-10">For brands starting to scale on Shopee</p>
              <div className="text-4xl font-extrabold text-brandDark mb-2">3%</div>
              <p className="text-gray-500 text-sm mb-6">of Revenue</p>
              <div className="bg-gray-50 p-3 rounded-xl text-sm font-semibold text-gray-700 mb-8 border border-gray-100">
                Minimal Fee: Rp 2.000.000
              </div>
              <button
                onClick={() => openFormModal('Starter')}
                className="w-full block py-3 px-4 border border-shopee text-shopee font-bold rounded-full hover:bg-shopee hover:text-white transition-colors cursor-pointer"
              >
                Pilih Starter
              </button>
            </div>

            <div className="bg-brandDark p-6 md:p-8 rounded-3xl shadow-2xl text-center transform md:-translate-y-4 relative border border-gray-700 mt-4 md:mt-0">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-shopee text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
                Paling Ideal
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Growth Partner</h3>
              <p className="text-gray-400 text-sm mb-6 h-10">For brands with stable traction ready to grow</p>
              <div className="text-5xl font-extrabold text-shopee mb-2">2.5%</div>
              <p className="text-gray-400 text-sm mb-6">of Revenue</p>
              <div className="bg-gray-800 p-3 rounded-xl text-sm font-semibold text-gray-300 mb-8 border border-gray-700">
                Minimal Fee: Rp 4.000.000
              </div>
              <button
                onClick={() => openFormModal('Partner')}
                className="w-full block py-4 px-4 bg-shopee text-white font-bold rounded-full hover:bg-shopeeDark transition-transform transform hover:scale-105 shadow-lg shadow-shopee/40 cursor-pointer"
              >
                Pilih Partner (Rekomendasi)
              </button>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-200 shadow-sm text-center mt-4 md:mt-0">
              <h3 className="text-xl font-bold mb-2">Scale Partnership</h3>
              <p className="text-gray-500 text-sm mb-6 h-10">For brands ready for aggressive scaling</p>
              <div className="text-4xl font-extrabold text-brandDark mb-2">2%</div>
              <p className="text-gray-500 text-sm mb-6">of Revenue</p>
              <div className="bg-gray-50 p-3 rounded-xl text-sm font-semibold text-gray-700 mb-8 border border-gray-100">
                Minimal Fee: Rp 7.000.000
              </div>
              <button
                onClick={() => openFormModal('Scale')}
                className="w-full block py-3 px-4 border border-shopee text-shopee font-bold rounded-full hover:bg-shopee hover:text-white transition-colors cursor-pointer"
              >
                Pilih Scale
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-20 lg:py-24 bg-shopee relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-black opacity-10 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
            Berhenti Menebak-nebak Strategi. Let's Grow Together!
          </h2>

          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Biar GrowtHive yang menganalisa data, memperbaiki listing, menjalankan ads, dan merancang campaign Anda. Anda
            fokus urus operasional produk.
          </p>

          <button
            onClick={() => openFormModal('General')}
            className="bg-white text-shopee px-8 py-4 md:px-10 md:py-5 rounded-full font-extrabold text-lg md:text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3 mx-auto w-full sm:w-auto cursor-pointer"
          >
            Isi Form Diagnosa Gratis Sekarang <i className="fa-solid fa-rocket"></i>
          </button>

          <p className="mt-6 text-sm text-white/80">
            <i className="fa-solid fa-lock mr-1"></i> Data toko Anda 100% aman dan rahasia bersama kami.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brandDark text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <i className="fa-solid fa-chart-line text-shopee text-2xl"></i>
                <span className="font-bold text-2xl tracking-tight text-white">
                  GrowtHive<span className="text-shopee">.</span>
                </span>
              </div>

              <p className="mb-4 max-w-sm text-sm leading-relaxed">
                Helping Brands Grow Their Shopee Revenue Through Strategy, Optimization &amp; Scalable Marketing.
              </p>

              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-xl"><i className="fa-brands fa-instagram"></i></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-xl"><i className="fa-brands fa-tiktok"></i></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-xl"><i className="fa-brands fa-whatsapp"></i></a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">PT. Growth Hive Indonesia</h4>
              <p className="text-sm leading-relaxed">
                APL Tower Central Park Lt. 26 T3,<br />
                Jl. Letjen S. Parman No.Kav. 28,<br />
                Tj. Duren Sel., Kec. Grogol Petamburan,<br />
                Jakarta Barat, DKI Jakarta 11470
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Contact Us</h4>
              <p className="text-sm flex items-center gap-2 mb-2">
                <i className="fa-brands fa-whatsapp text-green-500"></i> +62 881-0824-8748
              </p>
              <p className="text-sm flex items-center gap-2">
                <i className="fa-brands fa-instagram text-pink-500"></i> @growthive.id
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            <p>&copy; 2026 PT. Growth Hive Indonesia. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div
          className={`fixed inset-0 bg-black/60 z-[100] flex items-center justify-center backdrop-blur-sm transition-opacity duration-300 p-4 ${isModalVisible ? 'opacity-100' : 'opacity-0'}`}
          onClick={closeFormModal}
        >
          <div 
            className={`bg-white rounded-3xl p-6 md:p-8 max-w-md w-full mx-auto transform transition-transform duration-300 relative shadow-2xl ${isModalVisible ? 'scale-100' : 'scale-95'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeFormModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            <div className="text-center mb-6 mt-2">
              <div className="w-16 h-16 bg-orange-100 text-shopee rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                <i className="fa-solid fa-clipboard-list"></i>
              </div>

              <h3 className="text-2xl font-bold text-brandDark mb-2">Langkah Terakhir!</h3>
              <p className="text-gray-600 text-sm">
                Untuk menjadwalkan konsultasi dan diagnosa, silakan isi form kualifikasi singkat kami di Google Form.
              </p>

              {selectedPackage !== 'General' && (
                <p className="text-sm font-bold text-shopee mt-3 bg-orange-50 inline-block px-4 py-1.5 rounded-full">
                  Paket Diminati: {selectedPackage}
                </p>
              )}
            </div>

            <a
              href="https://forms.gle/G7qQGZyPmLPGjBgB8"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
                  window.fbq('track', 'Lead');
                }
                closeFormModal();
              }}
              className="w-full bg-shopee text-white font-bold py-4 rounded-xl flex justify-center items-center gap-2 hover:bg-shopeeDark transition-colors shadow-lg shadow-shopee/30"
            >
              Lanjut ke Google Form <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>

            <button
              onClick={closeFormModal}
              className="w-full mt-3 text-gray-500 hover:text-gray-700 text-sm font-medium py-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
            >
              Batal
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
