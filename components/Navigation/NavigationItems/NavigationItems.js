import Link from 'next/link'

function NavigationItems(props) {
  const renderItem = (link, tag) => {
    return (
      <li key={tag}>
        <Link href={link}>
          <a onClick={() => props.closed()}>{tag}</a>
        </Link>
      </li>
    )
  }

  return (
    <ul>
      {renderItem('/', 'Home')}
      {renderItem('/', 'About')}
      {renderItem('/', 'Projects')}
      {renderItem('/', 'Resume')}
      {renderItem('/', 'Contacts')}
    </ul>
  )
}

export default NavigationItems
