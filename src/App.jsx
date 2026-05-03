import { useState } from 'react'
import {
  CalendarCheck,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Flame,
  Home,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Snowflake,
  Thermometer,
  Wrench,
  X,
} from 'lucide-react'
import './App.css'

const primaryPhone = '(254) 760-1004'
const primaryTel = 'tel:2547601004'
const alternatePhone = '254-947-5263'
const alternateTel = 'tel:2549475263'
const email = 'seancroce@gmail.com'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Emergency Repair', href: '#emergency' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const trustCards = [
  { title: 'Since 1980', text: 'Serving local homeowners for decades.', icon: ShieldCheck },
  { title: 'Salado-Based', text: 'Located at 6174 Wells Lane in Salado, TX.', icon: MapPin },
  { title: 'Residential HVAC', text: 'Repairs, maintenance, and new installations.', icon: Home },
  { title: 'Emergency Repairs', text: '24/7 emergency HVAC repair service.', icon: Clock3 },
]

const services = [
  {
    title: 'AC Repair',
    text: 'Help diagnosing and repairing air conditioning issues so your home can get comfortable again.',
    icon: Snowflake,
  },
  {
    title: 'Heating Repair',
    text: 'Service for heating issues, system malfunctions, and seasonal comfort problems.',
    icon: Flame,
  },
  {
    title: 'HVAC Maintenance',
    text: 'Maintenance and repair support to help keep your HVAC system running efficiently and reliably.',
    icon: Wrench,
  },
  {
    title: 'New Unit Installation Quotes',
    text: 'Get a quote for replacing or installing a new heating and cooling system.',
    icon: Thermometer,
  },
  {
    title: 'Emergency HVAC Repair',
    text: '24/7 emergency repair service for sudden HVAC breakdowns and urgent comfort issues.',
    icon: Clock3,
  },
  {
    title: 'Service Calls',
    text: 'Book a service call for maintenance, repairs, or diagnosis at your home.',
    icon: CalendarCheck,
  },
]

const processSteps = [
  {
    title: 'Call or Book Online',
    text: 'Tell the team what heating or cooling issue you are dealing with.',
  },
  {
    title: 'Get the System Checked',
    text: 'A technician reviews the issue and explains the next step.',
  },
  {
    title: 'Get Comfort Restored',
    text: 'The repair, maintenance, or installation quote is handled as clearly and professionally as possible.',
  },
]

function Header() {
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3" onClick={closeMenu}>
          <span className="grid h-11 w-11 place-items-center rounded-md bg-[#0b2748] text-white shadow-sm">
            <Thermometer size={24} strokeWidth={2.4} />
          </span>
          <span>
            <span className="block text-lg font-black leading-tight text-[#0b2748]">
              Britt Heating & AC
            </span>
            <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Salado, TX
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-bold text-slate-700 transition hover:text-[#0b65b9]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={primaryTel}
          className="hidden items-center gap-2 rounded-md bg-[#c7352b] px-5 py-3 text-sm font-black text-white shadow-sm transition hover:bg-[#a92b23] focus:outline-none focus:ring-4 focus:ring-red-200 lg:inline-flex"
        >
          <Phone size={18} />
          Call Now
        </a>

        <button
          className="grid h-11 w-11 place-items-center rounded-md border border-slate-200 text-[#0b2748] lg:hidden"
          type="button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 pb-5 pt-2 shadow-lg lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-md px-3 py-3 text-base font-bold text-slate-800 hover:bg-slate-100"
              >
                {item.label}
              </a>
            ))}
            <a
              href={primaryTel}
              onClick={closeMenu}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-[#c7352b] px-5 py-3 font-black text-white"
            >
              <Phone size={18} />
              Call Now
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

function SectionHeading({ title, children, align = 'center' }) {
  return (
    <div className={align === 'left' ? 'max-w-3xl' : 'mx-auto max-w-3xl text-center'}>
      <h2 className="text-3xl font-black leading-tight text-[#0b2748] sm:text-4xl">
        {title}
      </h2>
      {children && <p className="mt-4 text-lg leading-8 text-slate-600">{children}</p>}
    </div>
  )
}

function ButtonLink({ href, children, variant = 'primary' }) {
  const base =
    'inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-6 py-3 text-base font-black transition focus:outline-none focus:ring-4'
  const styles =
    variant === 'secondary'
      ? 'border border-[#0b2748] bg-white text-[#0b2748] hover:bg-slate-50 focus:ring-blue-100'
      : variant === 'light'
        ? 'bg-white text-[#0b2748] hover:bg-slate-100 focus:ring-white/30'
        : 'bg-[#c7352b] text-white shadow-sm hover:bg-[#a92b23] focus:ring-red-200'

  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  )
}

function InfoCard({ title, text, icon: Icon }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 grid h-11 w-11 place-items-center rounded-md bg-blue-50 text-[#0b65b9]">
        <Icon size={23} strokeWidth={2.25} />
      </div>
      <h3 className="text-lg font-black text-[#0b2748]">{title}</h3>
      <p className="mt-2 leading-7 text-slate-600">{text}</p>
    </article>
  )
}

function Hero() {
  return (
    <section id="home" className="overflow-hidden bg-white pt-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:px-8 lg:py-20">
        <div>
          <h1 className="max-w-4xl text-4xl font-black leading-[1.04] text-[#0b2748] sm:text-5xl lg:text-6xl">
            Heating & AC Service in Salado, TX Since 1980
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            Local HVAC repairs, maintenance, emergency service, and new unit
            installation quotes for homeowners in Salado and the Bell County area.
          </p>
          <div className="mt-7 grid gap-3 text-sm font-bold text-slate-700 sm:grid-cols-2">
            {[
              'Established in 1980',
              'Serving Salado & Bell County',
              'HVAC repairs, maintenance & new installs',
              '24/7 emergency HVAC repair',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="shrink-0 text-[#0b65b9]" size={19} />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={primaryTel}>
              <Phone size={19} />
              Call {primaryPhone}
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              Book Service
              <ChevronRight size={19} />
            </ButtonLink>
          </div>
          <p className="mt-6 text-sm font-semibold text-slate-500">
            Also available at{' '}
            <a href={alternateTel} className="text-[#0b65b9] hover:underline">
              {alternatePhone}
            </a>
          </p>
        </div>

        <div className="relative">
          <div className="absolute -left-4 top-10 hidden h-36 w-36 rounded-lg bg-[#0b65b9] lg:block" />
          <div className="bg-hero-photo relative min-h-[360px] overflow-hidden rounded-lg bg-cover bg-center shadow-2xl ring-1 ring-slate-200 sm:min-h-[470px]">
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#08172b] to-transparent p-5 pt-24 text-white">
              <div className="max-w-sm rounded-md bg-white/95 p-4 text-[#0b2748] shadow-lg backdrop-blur">
                <p className="text-sm font-black uppercase tracking-[0.12em] text-[#c7352b]">
                  Local service calls
                </p>
                <p className="mt-1 text-lg font-black">
                  Repairs, maintenance, and install quotes for Bell County homes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustBar() {
  return (
    <section className="border-y border-slate-200 bg-[#f4f7fb] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {trustCards.map((card) => (
          <InfoCard key={card.title} {...card} />
        ))}
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Residential HVAC Services">
          Britt Heating & AC provides residential HVAC repairs, maintenance,
          emergency repair service, and new unit installation quotes for customers in
          Salado and the Bell County area.
        </SectionHeading>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <InfoCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

function EmergencySection() {
  return (
    <section id="emergency" className="bg-[#08172b] px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="rounded-lg border border-white/15 bg-white/10 p-6">
          <div className="grid h-14 w-14 place-items-center rounded-md bg-[#c7352b]">
            <Clock3 size={28} />
          </div>
          <h2 className="mt-6 text-3xl font-black leading-tight sm:text-4xl">
            24/7 Emergency HVAC Repair
          </h2>
        </div>
        <div>
          <p className="text-lg leading-8 text-blue-50">
            HVAC problems do not always happen during business hours. Britt Heating
            & AC offers 24/7 emergency HVAC repair service to help address sudden
            breakdowns, malfunctions, and urgent heating or cooling problems.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={primaryTel}>
              <Phone size={19} />
              Call for Emergency Service
            </ButtonLink>
            <ButtonLink href="#contact" variant="light">
              Book a Service Call
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}

function InstallQuote() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="bg-install-photo mx-auto max-w-7xl overflow-hidden rounded-lg bg-cover bg-center shadow-xl">
        <div className="px-5 py-14 text-white sm:px-8 lg:px-12 lg:py-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-black leading-tight sm:text-4xl">
              Need a New HVAC Unit? Request an Install Quote
            </h2>
            <p className="mt-5 text-lg leading-8 text-blue-50">
              If your current system is aging, unreliable, or no longer keeping your
              home comfortable, Britt Heating & AC can provide a new unit
              installation quote and help you understand your options.
            </p>
            <div className="mt-8">
              <ButtonLink href="#contact">
                Request New Unit Quote
                <ChevronRight size={19} />
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="bg-[#f4f7fb] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <p className="text-5xl font-black text-[#0b2748]">1980</p>
            <p className="mt-2 font-bold text-slate-600">Established by Randy Britt</p>
          </div>
          <div className="rounded-lg bg-[#0b2748] p-6 text-white shadow-sm">
            <p className="text-2xl font-black">Randy and Sean</p>
            <p className="mt-2 leading-7 text-blue-50">
              Local team support for residential HVAC service.
            </p>
          </div>
        </div>
        <div>
          <SectionHeading title="A Trusted HVAC Contractor in Salado Since 1980" align="left">
            Britt Heating & AC was established in 1980 by Randy Britt and is a
            trusted HVAC contractor located in Salado, Texas. The company specializes
            in HVAC repairs and new unit installations, with a focus on customer
            comfort, quality service, and friendly local support.
          </SectionHeading>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            The team, including Randy and Sean, serves the community of Salado and
            the Bell County area with residential HVAC repairs, maintenance,
            emergency repair service, and new installation support.
          </p>
        </div>
      </div>
    </section>
  )
}

function ServiceArea() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <div>
          <SectionHeading title="Serving Salado and the Bell County Area" align="left">
            Based in Salado, Texas, Britt Heating & AC serves homeowners in Salado
            and the surrounding Bell County area with heating, air conditioning,
            maintenance, emergency repair, and installation quote services.
          </SectionHeading>
          <div className="mt-7 grid gap-3 text-base font-bold text-slate-700">
            {['Salado, TX', 'Bell County area', '6174 Wells Lane, Salado, TX 76571'].map(
              (item) => (
                <div key={item} className="flex items-center gap-3">
                  <MapPin className="shrink-0 text-[#0b65b9]" size={20} />
                  <span>{item}</span>
                </div>
              ),
            )}
          </div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-[#f4f7fb] p-5 shadow-sm">
          <div className="relative min-h-[330px] overflow-hidden rounded-md bg-white">
            <div className="absolute inset-0 opacity-90">
              <div className="absolute left-[12%] top-[18%] h-28 w-48 rotate-[-8deg] rounded-full border-2 border-dashed border-[#0b65b9]/35" />
              <div className="absolute right-[9%] top-[12%] h-40 w-44 rounded-full border-2 border-dashed border-[#c7352b]/35" />
              <div className="absolute bottom-[14%] left-[20%] h-36 w-64 rotate-6 rounded-full border-2 border-dashed border-[#0b2748]/25" />
              <div className="absolute left-0 right-0 top-1/2 h-[2px] -rotate-12 bg-slate-200" />
              <div className="absolute bottom-1/3 left-0 right-0 h-[2px] rotate-6 bg-slate-200" />
              <div className="absolute bottom-0 left-1/3 top-0 w-[2px] rotate-12 bg-slate-200" />
            </div>
            <div className="absolute left-1/2 top-1/2 w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-[#0b2748] p-6 text-center text-white shadow-xl">
              <MapPin className="mx-auto text-[#63b3ed]" size={38} />
              <p className="mt-3 text-2xl font-black">Salado-Based HVAC Service</p>
              <p className="mt-2 leading-7 text-blue-50">6174 Wells Lane, Salado, TX 76571</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="bg-[#f4f7fb] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Simple HVAC Service Process" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <article key={step.title} className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div className="grid h-11 w-11 place-items-center rounded-md bg-[#0b2748] text-lg font-black text-white">
                {index + 1}
              </div>
              <h3 className="mt-5 text-xl font-black text-[#0b2748]">{step.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="bg-white px-4 py-16 pb-28 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <SectionHeading title="Contact Britt Heating & AC" align="left" />
          <div className="mt-8 grid gap-4">
            <ContactLine icon={Phone} label="Primary Phone" href={primaryTel} value={primaryPhone} />
            <ContactLine icon={Phone} label="Alternate Phone" href={alternateTel} value={alternatePhone} />
            <ContactLine icon={Mail} label="Email" href={`mailto:${email}`} value={email} />
            <ContactLine icon={MapPin} label="Address" value="6174 Wells Lane, Salado, TX 76571" />
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <ButtonLink href={primaryTel}>
              <Phone size={19} />
              Call {primaryPhone}
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              Book Service Call
            </ButtonLink>
          </div>
        </div>
        <form className="rounded-lg border border-slate-200 bg-[#f4f7fb] p-5 shadow-sm sm:p-7">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" name="name" autoComplete="name" />
            <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
            <Field label="Email" name="email" type="email" autoComplete="email" />
            <label className="grid gap-2 text-sm font-black text-[#0b2748]">
              Service Needed
              <select
                name="serviceNeeded"
                className="min-h-12 rounded-md border border-slate-300 bg-white px-3 text-base font-semibold text-slate-700 outline-none transition focus:border-[#0b65b9] focus:ring-4 focus:ring-blue-100"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option>AC Repair</option>
                <option>Heating Repair</option>
                <option>HVAC Maintenance</option>
                <option>Emergency HVAC Repair</option>
                <option>New Unit Installation Quote</option>
                <option>Service Call</option>
              </select>
            </label>
            <fieldset className="grid gap-2 text-sm font-black text-[#0b2748]">
              <legend>Emergency Repair?</legend>
              <div className="grid grid-cols-2 gap-3">
                {['Yes', 'No'].map((option) => (
                  <label
                    key={option}
                    className="flex min-h-12 items-center gap-2 rounded-md border border-slate-300 bg-white px-3 text-base font-bold text-slate-700"
                  >
                    <input type="radio" name="emergency" value={option.toLowerCase()} />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>
            <label className="grid gap-2 text-sm font-black text-[#0b2748]">
              Preferred Contact Method
              <select
                name="contactMethod"
                className="min-h-12 rounded-md border border-slate-300 bg-white px-3 text-base font-semibold text-slate-700 outline-none transition focus:border-[#0b65b9] focus:ring-4 focus:ring-blue-100"
                defaultValue="phone"
              >
                <option value="phone">Phone</option>
                <option value="email">Email</option>
                <option value="text">Text</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-black text-[#0b2748] sm:col-span-2">
              Brief Description of Problem
              <textarea
                name="description"
                rows="5"
                className="rounded-md border border-slate-300 bg-white px-3 py-3 text-base font-semibold text-slate-700 outline-none transition focus:border-[#0b65b9] focus:ring-4 focus:ring-blue-100"
                placeholder="Tell us what is happening with your heating or cooling system."
              />
            </label>
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#c7352b] px-6 py-3 text-base font-black text-white shadow-sm transition hover:bg-[#a92b23] focus:outline-none focus:ring-4 focus:ring-red-200 sm:w-auto"
          >
            Request Service
            <ChevronRight size={19} />
          </button>
        </form>
      </div>
    </section>
  )
}

function ContactLine({ icon: Icon, label, value, href }) {
  const content = (
    <>
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-blue-50 text-[#0b65b9]">
        <Icon size={20} />
      </div>
      <span>
        <span className="block text-sm font-black uppercase tracking-[0.12em] text-slate-500">
          {label}
        </span>
        <span className="mt-1 block text-lg font-black text-[#0b2748]">{value}</span>
      </span>
    </>
  )

  if (href) {
    return (
      <a href={href} className="flex items-center gap-3 rounded-lg bg-[#f4f7fb] p-4 hover:bg-blue-50">
        {content}
      </a>
    )
  }

  return <div className="flex items-center gap-3 rounded-lg bg-[#f4f7fb] p-4">{content}</div>
}

function Field({ label, name, type = 'text', autoComplete }) {
  return (
    <label className="grid gap-2 text-sm font-black text-[#0b2748]">
      {label}
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        className="min-h-12 rounded-md border border-slate-300 bg-white px-3 text-base font-semibold text-slate-700 outline-none transition focus:border-[#0b65b9] focus:ring-4 focus:ring-blue-100"
      />
    </label>
  )
}

function Footer() {
  return (
    <footer className="bg-[#08172b] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr_1fr]">
        <div>
          <p className="text-2xl font-black">Britt Heating & AC</p>
          <p className="mt-3 max-w-sm leading-7 text-blue-50">
            Heating & AC service in Salado, TX. Established in 1980 and serving
            Salado and the Bell County area.
          </p>
        </div>
        <nav className="grid gap-2 text-blue-50">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="font-bold hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="grid gap-2 text-blue-50">
          <a href={primaryTel} className="font-bold hover:text-white">
            Primary: {primaryPhone}
          </a>
          <a href={alternateTel} className="font-bold hover:text-white">
            Alternate: {alternatePhone}
          </a>
          <a href={`mailto:${email}`} className="font-bold hover:text-white">
            {email}
          </a>
          <p>6174 Wells Lane, Salado, TX 76571</p>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl border-t border-white/15 pt-6 text-sm text-blue-100">
        Copyright {new Date().getFullYear()} Britt Heating & AC. All rights reserved.
      </div>
    </footer>
  )
}

function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/20 bg-[#0b2748] p-3 shadow-2xl lg:hidden">
      <a
        href={primaryTel}
        className="mx-auto flex min-h-12 max-w-lg items-center justify-center gap-2 rounded-md bg-[#c7352b] px-5 py-3 text-base font-black text-white"
      >
        <Phone size={19} />
        Call Britt Heating & AC
      </a>
    </div>
  )
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <EmergencySection />
        <InstallQuote />
        <About />
        <ServiceArea />
        <Process />
        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  )
}

export default App
