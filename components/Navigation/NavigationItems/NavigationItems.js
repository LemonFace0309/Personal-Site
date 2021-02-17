import Link from 'next/link'

function NavigationItems() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/">About</Link>
      </li>
      <li>
        <Link href="/">Projects</Link>
      </li>
      <li>
        <Link href="/">Resume</Link>
      </li>
      <li>
        <Link href="/">Contact</Link>
      </li>
    </ul>
  )
}

export default NavigationItems
