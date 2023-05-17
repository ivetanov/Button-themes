import { useState } from "react"
import zelenePozadi from "./images/bg-green.png"
import zlatePozadi from "./images/bg-gold.png"
import sedePozadi from "./images/bg-grey.png"
import oranzovePozadi from "./images/bg-orange.png"
import bilePozadi from "./images/bg-white.png"

const App = () => {

  const cestaKZelenemu = "url('"+zelenePozadi+"')"
  const cestaKZlatemu = "url('"+zlatePozadi+"')"
  const cestaKSedemu = "url('"+sedePozadi+"')"
  const cestaKOranzovemu = "url('"+oranzovePozadi+"')"
  const cestaKBilemu = "url('"+bilePozadi+"')"
  
  const [colorTheme, setColorTheme] = useState("")
  const [bg, setBg] = useState("")
  const [heading, setHeading] = useState("")
  const [webkit, setWebkit] = useState("")

  const handleClick = (e) => {
    if(e.target.name === "green"){
      setBg(cestaKZelenemu)
      setColorTheme("#8caa8e")
      setHeading("")
      setWebkit("")

    }else if(e.target.name === "gold"){
      setBg(cestaKZlatemu)
      setColorTheme("#d4a530")
      setHeading("")
      setWebkit("")

    }else if(e.target.name === "grey"){
      setBg(cestaKSedemu)
      setColorTheme("#a09f9c")
      setHeading("")
      setWebkit("")

    }else if(e.target.name === "white"){
      setBg(cestaKBilemu)
      setColorTheme("#f3f1ef")
      setHeading("0.5px 0.5px 3px black")
      setWebkit("unset")
    }else if(e.target.name === "orange"){
      setBg(cestaKOranzovemu)
      setColorTheme("#f99a07")
      setHeading("")
      setWebkit("")
    }
  }

  return (
    <div style = {{backgroundImage: bg }}id="app">
      <nav>
        <button name= "green" style= {{color: colorTheme, WebkitTextStroke: webkit, textShadow: heading}} onClick={handleClick}>green</button>
        <button name= "gold" style= {{color: colorTheme, WebkitTextStroke: webkit, textShadow: heading}} onClick={handleClick}>gold</button>
        <button name= "grey" style= {{color: colorTheme, WebkitTextStroke: webkit, textShadow: heading}} onClick={handleClick}>grey</button>
        <button name= "white" style= {{color: colorTheme, WebkitTextStroke: webkit, textShadow: heading}} onClick={handleClick}>white</button>
        <button name= "orange" style= {{color: colorTheme, WebkitTextStroke: webkit, textShadow: heading}} onClick={handleClick}>orange</button>
      </nav>
      <section>
        <h4 style= {{color: colorTheme, textShadow: heading }}>try to click any button</h4>
        <p>Cookie lemon drops tiramisu pastry I love danish. Sesame snaps cheesecake gingerbread sesame snaps caramels halvah pastry. Carrot cake macaroon pie lollipop lollipop sesame snaps. Chocolate donut gummi bears lemon drops candy halvah biscuit caramels. Candy canes gingerbread biscuit I love toffee. Wafer dragée fruitcake sugar plum dessert tiramisu. Pastry jelly beans I love chupa chups topping I love cake tootsie roll oat cake.</p>
        <p>Croissant muffin I love donut muffin liquorice. Chupa chups icing sweet roll I love lollipop pie I love. Croissant topping marzipan powder tiramisu croissant I love shortbread. I love candy tootsie roll biscuit lemon drops caramels apple pie apple pie brownie. I love bonbon I love bear claw topping chupa chups I love I love. Fruitcake pie donut I love donut candy canes jelly-o cupcake. I love powder jelly-o wafer dragée powder shortbread pudding. Candy canes I love cotton candy liquorice bear claw. Marshmallow pie halvah marzipan apple pie candy canes pudding apple pie. Ice cream pudding I love I love gummies pudding I love sesame snaps.</p> 
        <p>Topping jujubes lemon drops caramels lemon drops sweet gummi bears I love sweet. Toffee lollipop wafer ice cream cake icing lollipop. Tootsie roll donut marzipan I love cake cotton candy pudding cake. Bonbon chocolate bar croissant gummi bears candy canes cotton candy I love candy canes I love. Wafer lemon drops biscuit cotton candy soufflé soufflé. Muffin wafer bear claw donut chocolate donut danish candy canes. Marzipan macaroon jujubes cookie pie gingerbread I love sweet roll lemon drops. </p> 
        <p>Chocolate bar chocolate bar cheesecake I love I love cupcake. Toffee sweet I love pie fruitcake carrot cake. Icing sesame snaps shortbread halvah I love cake marshmallow. Fruitcake toffee toffee dragée cheesecake jelly caramels biscuit. Marshmallow pastry caramels chocolate bar biscuit shortbread I love bonbon chocolate cake. I love I love tiramisu apple pie cookie I love brownie I love I love.</p> 
        <p>I love oat cake bonbon brownie cheesecake tiramisu bear claw. Topping wafer sugar plum I love I love candy halvah I love I love. Dragée I love halvah chocolate cake sweet roll liquorice. Jujubes ice cream gummies jujubes topping. Powder marzipan macaroon sweet roll croissant candy canes pie croissant danish. Marzipan oat cake gummies pie jujubes sugar plum soufflé oat cake. Lemon drops candy canes chupa chups topping cheesecake I love dragée tart I love. Croissant tootsie roll chocolate toffee chocolate bar soufflé. Sugar plum powder danish jelly beans I love cake I love cookie. Muffin topping jelly-o jelly jelly beans I love pie. </p>
      </section>
    </div>
  )
}

export default App