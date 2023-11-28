import logo from '../assets/logo.png'



function Header() {
  return (
    <div className="bg-green-700 h-10">

      <img
        src={logo}
        height={135}
        width={430}
        className="rounded-full md:ml-20"/>
      {"    "}
    </div>
  )
}

export default Header;
    