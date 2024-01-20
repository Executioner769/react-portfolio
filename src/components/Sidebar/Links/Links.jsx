
export default function Links() {

  const linksList = [
    "HomePage",
    "Services",
    "Portfolio",
    "Contact",
    "About"
  ];

  return (
    <div className='links'>
      {linksList.map((link,index) => {
        return <a href={`#${link}`} key={index}>
          {link}
        </a>
      })}
    </div>
  )
}
