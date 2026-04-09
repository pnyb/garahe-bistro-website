// src/components/Footer.jsx

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-neutral-800 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center gap-4 text-center">
        <img src="/img/logo2.png" alt="Garahe Bistro" className="h-10 w-auto opacity-90" />
        <p className="text-neutral-500 text-sm">
          © 2017–{year}{' '}
          <span className="text-gold font-semibold">Garahe Bistro</span>
          . All rights reserved.
        </p>
        <p className="text-neutral-700 text-xs">
          Esteros Bridge Rd, Cotabato City, Maguindanao del Norte, Philippines
        </p>
      </div>
    </footer>
  )
}
