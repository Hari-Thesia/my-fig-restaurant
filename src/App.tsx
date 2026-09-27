import { useState } from 'react'
import entryImage from './imports/entry.png'
import interiorOne from './imports/int1.png'
import interiorTwo from './imports/int2.png'
import logo from './imports/logo.png'
import exteriorImage from './imports/main.png'

const NAV_LINKS = ['Menu', 'Story', 'Reservations', 'Visit']

const FEATURED_DISHES = [
  {
    name: 'Blue Pea Rice Sushi',
    category: 'Pan-Asian',
    desc: 'Indigo & Ruby—an expressive, colourful take on contemporary sushi.',
  },
  {
    name: 'Truffle Wild Mushroom Risotto',
    category: 'Global',
    desc: 'Earthy wild mushrooms and truffle folded through a comforting risotto.',
  },
  {
    name: 'Paneer Ghee Roast',
    category: 'Indian fusion',
    desc: 'A bold, aromatic regional classic reimagined in the Cuore kitchen.',
  },
  {
    name: 'Ghewar Cheesecake',
    category: 'Dessert',
    desc: 'Traditional textures meet the quiet richness of a modern cheesecake.',
  },
]

const IMAGES = {
  hero: interiorTwo,
  story: interiorOne,
  entry: entryImage,
  exterior: exteriorImage,
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '7:00 PM',
    guests: '2',
    notes: '',
  })

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#ead9b7] text-[#241712]">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-[#55251d]/15 bg-[#ead9b7]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 md:px-10">
          <a href="#" aria-label="Cuore by Masala Diaries home" className="block h-12 w-12 overflow-hidden rounded-full">
            <img src={logo} alt="" className="h-full w-full object-cover" />
          </a>

          <div className="hidden items-center gap-9 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#4d3329] transition-colors hover:text-[#a23e2c]"
              >
                {link}
              </a>
            ))}
            <a href="#reservations" className="button button-dark">
              Book a table
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span className="h-px w-6 bg-[#6f241c]" />
            <span className="h-px w-6 bg-[#6f241c]" />
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-[#55251d]/15 bg-[#ead9b7] px-5 py-5 md:hidden">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block border-b border-[#55251d]/10 py-4 text-xs uppercase tracking-[0.2em]"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </nav>

      <section className="relative min-h-screen pt-20">
        <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-[1440px] lg:grid-cols-[0.88fr_1.12fr]">
          <div className="relative z-10 flex flex-col justify-center px-6 py-20 md:px-10 lg:py-16">
            <p className="section-label mb-7">By Masala Diaries · Rajkot</p>
            <h1 className="font-display max-w-[690px] text-[clamp(4.4rem,8.4vw,9rem)] leading-[0.72] tracking-[-0.075em] text-[#6f241c]">
              Food from
              <span className="block pl-[0.48em] italic text-[#a23e2c]">the heart.</span>
            </h1>
            <p className="mt-10 max-w-md text-base leading-7 text-[#5f4438] md:ml-24">
              A strictly vegetarian global dining experience, set within Rajkot’s dramatic African boho-inspired
              interiors.
            </p>
            <div className="mt-9 flex flex-wrap gap-3 md:ml-24">
              <a href="#menu" className="button button-rust">
                Explore the menu
              </a>
              <a href="#reservations" className="button button-outline">
                Reserve
              </a>
            </div>
          </div>

          <div className="relative min-h-[58vh] overflow-hidden rounded-tl-[9rem] lg:min-h-0 lg:rounded-tl-[18rem]">
            <img
              src={IMAGES.hero}
              alt="Warmly lit restaurant dining room"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#32150f]/55 via-transparent to-[#32150f]/10" />
            <div className="absolute bottom-7 left-7 rounded-full border border-[#f1dfbd]/55 bg-[#3c1b15]/55 px-5 py-3 text-[10px] uppercase tracking-[0.22em] text-[#f4e4c7] backdrop-blur-md">
              African boho · Live music · Rajkot
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute -bottom-12 left-[43%] hidden h-28 w-28 rounded-full border border-[#7a2d21]/30 lg:block" />
      </section>

      <section className="border-y border-[#f3ddbd]/15 bg-[#6f241c] text-[#f4e5c9]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 divide-x divide-[#f3ddbd]/15 md:grid-cols-4">
          {[
            ['01', '100% vegetarian'],
            ['02', 'Global fusion'],
            ['03', 'Reservations only'],
            ['04', 'Open every day'],
          ].map(([number, label]) => (
            <div key={number} className="flex items-center gap-4 px-6 py-7 md:px-9">
              <span className="font-display text-3xl italic text-[#d89164]">{number}</span>
              <span className="text-[10px] uppercase tracking-[0.18em]">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="menu" className="relative px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-14 grid items-end gap-8 md:grid-cols-2">
            <div>
              <p className="section-label mb-5">A taste of Cuore</p>
              <h2 className="font-display text-6xl leading-[0.9] tracking-[-0.055em] text-[#6f241c] md:text-8xl">
                A few
                <br />
                <span className="italic text-[#a23e2c]">favourites.</span>
              </h2>
            </div>
            <p className="max-w-md text-[15px] leading-7 text-[#664b3f] md:justify-self-end">
              Global fusion, regional Indian flavours and experimental plates come together in a strictly
              vegetarian kitchen.
            </p>
          </div>

          <div className="overflow-hidden rounded-t-[5rem] bg-[#2c1814] px-5 pb-8 pt-14 text-[#f5e6c9] md:rounded-t-[10rem] md:px-12 md:pb-12 md:pt-20">
            <div className="mb-10 flex flex-col gap-3 border-b border-[#f4e5c9]/15 pb-8 text-center md:mb-12">
              <p className="font-display text-3xl italic text-[#d89164]">From our kitchen</p>
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#a9917e]">
                Vegetarian · experimental · served with heart
              </p>
            </div>

            <div className="grid border-t border-l border-[#f4e5c9]/15 md:grid-cols-2">
              {FEATURED_DISHES.map((item, index) => (
                <article
                  key={item.name}
                  className="group border-r border-b border-[#f4e5c9]/15 p-7 transition-colors hover:bg-[#3b1e18] md:p-10"
                >
                  <div className="mb-12 flex items-center gap-4">
                    <span className="font-display text-xl italic text-[#d89164]">0{index + 1}</span>
                    <span className="h-px flex-1 bg-[#f4e5c9]/15" />
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#a9917e]">{item.category}</span>
                  </div>
                  <h3 className="font-display text-3xl leading-tight md:text-4xl">{item.name}</h3>
                  <p className="mt-4 max-w-md text-sm leading-6 text-[#bca590]">{item.desc}</p>
                </article>
              ))}
            </div>
            <div className="mt-9 flex flex-col items-center gap-5 text-center">
              <p className="max-w-xl text-xs leading-5 text-[#92796a]">
                Also discover dim sums, Burmese Khow Suey, Awadhi Kathal Biryani and our signature gelatos.
              </p>
              <a
                href="https://drive.google.com/file/u/2/d/12RDm1yXoSuwT2SC4AuZv5DloucsoXlq8/view"
                target="_blank"
                rel="noreferrer"
                className="button border-[#f4e5c9]/25 text-[#f5e6c9] hover:border-[#d89164]"
              >
                View the full menu
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="bg-[#b95c3b] px-6 py-24 text-[#2b1712] md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1280px] items-center gap-16 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative mx-auto w-full max-w-[650px] pb-12 pr-10 md:pb-20 md:pr-20">
            <div className="aspect-[4/5] overflow-hidden rounded-t-[10rem]">
              <img src={IMAGES.story} alt="Cuore's African boho-inspired dining room" className="h-full w-full object-cover" />
            </div>
            <div className="absolute bottom-0 right-0 aspect-square w-2/5 overflow-hidden rounded-full border-8 border-[#b95c3b]">
              <img src={IMAGES.entry} alt="The illuminated Cuore entrance sign" className="h-full w-full object-cover" />
            </div>
          </div>

          <div>
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.24em]">Our story</p>
            <h2 className="font-display text-6xl leading-[0.88] tracking-[-0.055em] md:text-8xl">
              A new chapter,
              <span className="block italic text-[#f1d6ad]">from the heart.</span>
            </h2>
            <div className="mt-10 max-w-xl space-y-6 text-base leading-7 text-[#3d2119]">
              <p>
                Cuore—Italian for “heart”—is a strictly vegetarian expression from Masala Diaries, bringing global
                fusion and experimental cooking to Rajkot.
              </p>
              <p>
                Sculpted ochre arches, patterned lanterns and African boho details create a cozy yet dramatic room,
                with live music adding to select evenings.
              </p>
            </div>
            <a href="#reservations" className="mt-10 inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em]">
              Join us in Rajkot <span className="text-lg">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="grid min-h-[70vh] lg:grid-cols-2">
        <div className="relative min-h-[50vh] overflow-hidden">
          <img src={IMAGES.exterior} alt="The sculptural exterior of Cuore in Rajkot" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[#32150f]/15" />
        </div>
        <div className="flex items-center bg-[#381c17] px-7 py-20 text-[#f2dfbd] md:px-16">
          <blockquote className="max-w-xl">
            <span className="font-display text-7xl leading-none text-[#b95c3b]">“</span>
            <p className="font-display text-4xl leading-[1.15] tracking-[-0.03em] md:text-6xl">
              A dramatic dining room, experimental vegetarian food, and evenings made to linger.
            </p>
            <footer className="mt-8 text-[10px] uppercase tracking-[0.22em] text-[#bfa58d]">
              The Cuore experience
            </footer>
          </blockquote>
        </div>
      </section>

      <section id="reservations" className="bg-[#efe0c3] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1280px] gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="section-label mb-5">Reservations</p>
            <h2 className="font-display text-6xl leading-[0.9] tracking-[-0.055em] text-[#6f241c] md:text-8xl">
              Save your
              <span className="block italic text-[#a23e2c]">favourite table.</span>
            </h2>
            <p className="mt-8 max-w-sm text-sm leading-6 text-[#664b3f]">
              We welcome guests by reservation only. Call or message us on WhatsApp and our team will help you plan
              your table.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:+919099031031" className="button button-outline">
                Call to book
              </a>
              <a
                href="https://wa.me/919099031031?text=Hello%20Cuore%2C%20I%27d%20like%20to%20reserve%20a%20table."
                target="_blank"
                rel="noreferrer"
                className="button button-rust"
              >
                Book on WhatsApp
              </a>
            </div>
            <p className="mt-5 text-xs uppercase tracking-[0.14em] text-[#8d3528]">+91 90990 31031</p>
          </div>

          <div className="border border-[#6f241c]/25 bg-[#ead9b7] p-6 md:p-10">
            {submitted ? (
              <div className="flex min-h-96 flex-col items-center justify-center text-center">
                <p className="section-label mb-6">Request received</p>
                <h3 className="font-display text-5xl italic text-[#6f241c]">See you at the table.</h3>
                <p className="mt-5 max-w-sm text-sm leading-6 text-[#664b3f]">
                  Thank you, {formData.name}. The Cuore team will contact you to confirm your reservation.
                </p>
                <button type="button" className="button button-outline mt-8" onClick={() => setSubmitted(false)}>
                  Make another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
                <label className="field-label">
                  Name
                  <input
                    required
                    className="field"
                    value={formData.name}
                    onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                    placeholder="Your name"
                  />
                </label>
                <label className="field-label">
                  Phone
                  <input
                    required
                    type="tel"
                    className="field"
                    value={formData.phone}
                    onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
                    placeholder="+91"
                  />
                </label>
                <label className="field-label">
                  Date
                  <input
                    required
                    type="date"
                    className="field"
                    value={formData.date}
                    onChange={(event) => setFormData({ ...formData, date: event.target.value })}
                  />
                </label>
                <label className="field-label">
                  Time
                  <select
                    className="field"
                    value={formData.time}
                    onChange={(event) => setFormData({ ...formData, time: event.target.value })}
                  >
                    {['12:30 PM', '1:30 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM'].map((time) => (
                      <option key={time}>{time}</option>
                    ))}
                  </select>
                </label>
                <label className="field-label">
                  Guests
                  <select
                    className="field"
                    value={formData.guests}
                    onChange={(event) => setFormData({ ...formData, guests: event.target.value })}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
                      <option key={number} value={number}>
                        {number} {number === 1 ? 'guest' : 'guests'}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="field-label">
                  Occasion
                  <input
                    className="field"
                    value={formData.notes}
                    onChange={(event) => setFormData({ ...formData, notes: event.target.value })}
                    placeholder="Birthday, dinner, date night..."
                  />
                </label>
                <button type="submit" className="button button-rust mt-2 md:col-span-2">
                  Request a reservation
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section id="visit" className="bg-[#6f241c] px-6 py-20 text-[#f2dfbd] md:px-10">
        <div className="mx-auto grid max-w-[1280px] gap-12 md:grid-cols-2 lg:grid-cols-[0.85fr_1.35fr_0.8fr_0.9fr]">
          <div>
            <img src={logo} alt="Cuore" className="h-28 w-28 rounded-full object-cover" />
            <p className="mt-3 text-[10px] uppercase tracking-[0.23em] text-[#d6a27b]">By Masala Diaries</p>
          </div>
          <div>
            <p className="footer-label">Find us</p>
            <p className="text-sm leading-6 text-[#dec7ad]">
              New 150, Hanuman Road, FT Ring Road,
              <br />
              Near Coconut County Party Lawns,
              <br />
              Rajkot, Gujarat 360004
            </p>
            <a
              className="mt-4 inline-block text-xs uppercase tracking-[0.16em] underline underline-offset-4"
              href="https://www.google.com/maps/search/?api=1&query=Cuore+by+Masala+Diaries+New+150+Hanuman+Road+FT+Ring+Road+Rajkot+Gujarat+360004"
              target="_blank"
              rel="noreferrer"
            >
              Open in Maps
            </a>
          </div>
          <div>
            <p className="footer-label">Reservations</p>
            <p className="text-sm leading-6 text-[#dec7ad]">
              Reservations only
              <br />
              Calls & WhatsApp
            </p>
            <a
              className="mt-4 inline-block text-xs uppercase tracking-[0.16em] underline underline-offset-4"
              href="tel:+919099031031"
            >
              +91 90990 31031
            </a>
          </div>
          <div>
            <p className="footer-label">Opening hours</p>
            <p className="text-sm leading-6 text-[#dec7ad]">
              Monday–Sunday
              <br />
              11:00 AM – 11:00 PM
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#f2dfbd]/15 bg-[#6f241c] px-6 py-6 text-[#d8bca0] md:px-10">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-3 text-[10px] uppercase tracking-[0.16em] md:flex-row md:items-center md:justify-between">
          <p>© 2026 Cuore by Masala Diaries</p>
          <p>From the heart, in Rajkot</p>
        </div>
      </footer>
    </main>
  )
}
